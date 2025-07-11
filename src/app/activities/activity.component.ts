import {
  Component,
  computed,
  model,
  OnInit,
  signal,
  ViewEncapsulation,
} from "@angular/core";
import { Title } from "@angular/platform-browser";

import { Activity } from "../../crosscommon/entities/Activity";
import { ActivityService } from "./activity.service";
import { KeyvalService } from "./keyval.service";
import { NgForm } from "@angular/forms";
import { CommonComponent } from "../common/common.component";
import { DateUtils } from "../../crosscommon/DateUtility";
import { TimelineService } from "../common/TimelineService";
import { Timeline } from "../../crosscommon/entities/Timeline";
import { Keyval } from "../../crosscommon/entities/Keyval";
import { TasksCore } from "../task/tasks.core";
import { Task } from "../../crosscommon/entities/Task";
import { NotificationService } from "../common/notification.service";
import { TaskCore } from "../task/task.core";
import { SyncAPI } from "../common/sync.api";
import { getTextForLang } from "./activity.lang";

import { AuthenticationService } from "../common/authentication.service";
import {
  tagTasks,
  ALL_STATUS_CODES,
  calculateActivityGroups,
  generateHealthGroupData,
  calculateProjectList,
  LAYOUT_LIST,
  calculateTimelineGroup,
  obtainLastFolioByProject,
  aggregateActivityList,
  calculateLastTimeline,
} from "./activity.logic";

const TEXT: any = getTextForLang("es"); // TODO: Add lang config toggle
const ALL_STATUS_TEXT = [
  TEXT.STATUS_CAPTURED,
  TEXT.STATUS_BACKLOG,
  TEXT.STATUS_OPEN,
  TEXT.STATUS_IN_PROGRESS,
  TEXT.STATUS_VERIFICATION,
  TEXT.STATUS_CLOSED,
];

@Component({
  selector: "activity",
  templateUrl: "./activity.template.html",
  styleUrls: ["./activity.css"],
  encapsulation: ViewEncapsulation.None, // This helped consuming CSS from another components by importing in CSS files
  providers: [ActivityService, TimelineService, KeyvalService, TaskCore],
  standalone: false,
})
export class ActivityComponent implements OnInit {
  public REPORT_DATE = DateUtils.dateOnly();
  public LAYOUT_LIST = LAYOUT_LIST;
  public TIMELINE_KEY = "activity|";

  // UI state
  public activityList = signal<Activity[]>([]);
  public showItemForm = signal(false);
  public timelineList = signal<Timeline[]>([]);
  public selectedProject = model<string>("ALL");
  public selectedLayout = model<string>("all");

  // Computed UI state
  public showTimeline = computed(() =>
    ["all", "timeline-only"].includes(this.selectedLayout())
  );
  public showActivities = computed(() =>
    ["all", "activities-only"].includes(this.selectedLayout())
  );
  public activityGroups = computed<
    Array<{
      act_ctg_status: number;
      act_txt_status: string;
      items: Activity[];
    }>
  >(() =>
    calculateActivityGroups(
      this.activityList(),
      this.selectedProject(),
      this.viewData.sortGroupsDescending,
      ALL_STATUS_TEXT
    )
  );
  public projectList = computed<
    Array<{
      id: string;
      name: string;
      count: number;
    }>
  >(() => calculateProjectList(this.activityList()));
  public timelineGroup = computed<{
    days: Array<{
      date: Date;
      dayName: string;
      activityList: Activity[];
    }>;
  }>(() => calculateTimelineGroup(this.timelineList(), this.activityList()));

  public viewData: {
    TEXT: any;
    nextFolioList: Array<string>;
    healthGroup: Array<any>;
    sortGroupsDescending: boolean;
  } = {
    TEXT: {},
    nextFolioList: [],
    healthGroup: [],
    sortGroupsDescending: true,
  };

  public model: {
    id: string | null | undefined;
    activity: Activity | null;
  } = {
    id: null,
    activity: null,
  };
  public common: CommonComponent<Activity> | null = null;
  public tasks: Task[] = [];

  // handlers for TaskComponent
  public handlers = {
    getUser: () => this.authenticationService.currentUserValue.username,
    nextOrder: () =>
      this.tasks
        .map((t) => t.tsk_order)
        .reduce((prev, current) => (prev < current ? current : prev), 0) + 1,
  };
  private taskService: TaskCore | null = null;

  setTitle() {
    this.titleService.setTitle(
      `${DateUtils.dateToStringDate(this.REPORT_DATE)} ${
        TEXT.ACTIVITIES_PAGE_TITLE
      }`
    );
  }

  setSelectedProject() {
    const searchParams = new URLSearchParams(window.location.search);
    const selectedProject = searchParams.get("selectedProject");
    if (selectedProject) {
      this.selectedProject.set(selectedProject);
    }
    if (searchParams.get("sortDescending") === "false") {
      this.viewData.sortGroupsDescending = false;
    }
  }

  constructor(
    private activityService: ActivityService,
    private timelineService: TimelineService,
    private keyvalService: KeyvalService,
    private tasksService: TasksCore,
    private notificationService: NotificationService,
    private titleService: Title,
    private syncService: SyncAPI,
    private authenticationService: AuthenticationService
  ) {
    this.common = new CommonComponent<Activity>();
    this.setTitle();
    this.setSelectedProject();
  }

  async render(fetchFromRemote: boolean = false) {
    if (fetchFromRemote) {
      await this.activityService
        .getAll2()
        .then((data: { activity: Activity[]; timeline: Timeline[] }) => {
          const { activity: activityList, timeline: timelineList } = data;

          // schema from server is: { additional: { keyvalItems, tasks, timeline } }
          // need to add/calculate: { additional: { uniqueTasks, timelineOnly, notes, notesHidden, lastTimeline, health } }
          this.activityList.set(aggregateActivityList(activityList));
          this.timelineList.set(timelineList);
        });
    }

    this.activityList().forEach((a) => {
      tagTasks(this.tasks, a.act_tasks_tag);
    });

    this.viewData.healthGroup = generateHealthGroupData(
      this.activityList(),
      this.selectedProject()
    );

    if (this.model.id) {
      this.viewData.nextFolioList = [];
    } else {
      this.viewData.nextFolioList = Object.entries(
        obtainLastFolioByProject(
          this.activityList(),
          this.projectList(),
          this.selectedProject()
        )
      ).map(([k, v]) => v);
    }
  }

  ngOnInit() {
    this.viewData.TEXT = getTextForLang("es");
    this.taskService = new TaskCore(this.syncService, this.handlers);
    this.render(true);
  }

  toggleShowItemForm() {
    if (this.showItemForm()) {
      this.model.id = null;
    }
    this.showItemForm.set(!this.showItemForm());
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common?.updateItem({
        form,
        model: this.model,
        listing: this.activityList(),
        onFindExpression: (item) =>
          this.findById(item, "act_id", this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Activity(item);

          newItem.act_name = formValues.fName;
          newItem.act_tags = formValues.fTags;
          newItem.act_tasks_tag = formValues.fTasksTag;

          return newItem;
        },
        onUpdateItemService: (item) => this.activityService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        },
      });
    } else {
      // new item
      this.common?.newItem({
        form,
        listing: this.activityList(),
        onFindExpression: (item, newItem) =>
          this.findById(item, "act_id", newItem.act_id),
        onAssignForCreate: (formValues) => {
          const newItem = new Activity({
            act_id_project: formValues.fProjectId || "0",
            act_name: formValues.fName,
            act_description: formValues.fDescription || null,
            act_tags: formValues.fTags || null,
            act_tasks_tag: formValues.fTasksTag || null,
            act_close_comment: formValues.fCloseComment || null,
            act_ctg_status: formValues.fCtgStatus || "1",
          });
          return newItem;
        },
        onNewItemService: async (item) => {
          item["keyvalItems"] = {
            ACT_DATE_REQUESTED: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            ),
          };

          const newItem = await this.activityService.newItem(item);
          newItem.act_txt_status = ALL_STATUS_TEXT[newItem.act_ctg_status - 1];
          return newItem;
        },
        onFinalExecution: () => {
          this.showItemForm.set(false);
          this.model.id = null;
          this.render(false);
        },
      });
    }

    this.common?.resetForm(form, () => {
      this.model.id = null;
    });
    this.showItemForm.set(false);
  }

  resetForm(form: NgForm) {
    this.model.id = null;
    form.reset();
  }

  setModelDetails(id: string, form?: NgForm) {
    // Ensure model.activity is assigned a valid value or null
    this.model.activity =
      this.activityList().find((item) => this.findById(item, "act_id", id)) ||
      null;

    if (this.model.activity?.act_tasks_tag) {
      this.tasksService.getTasks().then((tasks: Task[]) => {
        this.model.id = this.model.activity?.act_id;
        if (!this.showItemForm()) {
          this.showItemForm.set(!this.showItemForm());
        }

        setTimeout(() => {
          if (form) {
            form.controls["fName"].setValue(this.model.activity?.["act_name"]);
            form.controls["fTags"].setValue(this.model.activity?.["act_tags"]);
            form.controls["fTasksTag"].setValue(
              this.model.activity?.["act_tasks_tag"]
            );
          }
        }, 100);
      });
    }
  }

  // Ensure findById handles null or undefined
  findById(item: any, key: string, value: string | null | undefined): boolean {
    return item[key] === value;
  }

  changeStatus(id: string, status: string): void {
    if (!id) {
      throw new Error("id should not be empty");
    }

    const idx = this.activityList().findIndex(({ act_id }) => act_id === id);
    if (idx === -1) {
      throw new Error("Activity not found");
    }

    // Clone activity to avoid direct mutations
    const item = new Activity(this.activityList()[idx]);

    if (ALL_STATUS_CODES.includes(status)) {
      item.act_ctg_status = ALL_STATUS_CODES.indexOf(status) + 1;
      item.act_date_mod = DateUtils.newDateUpToSeconds();

      // augment with Keyval info
      const changes = [
        () => {},
        () => {
          item["keyvalItems"] = {
            ACT_DATE_TO_BACKLOG: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            ),
          };
        },
        () => {
          item["keyvalItems"] = {
            ACT_DATE_TO_OPEN: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            ),
          };
        },
        () => {
          item["keyvalItems"] = {
            ACT_DATE_TO_IN_PROGRESS: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            ),
          };
        },
        () => {
          item["keyvalItems"] = {
            ACT_DATE_TO_VERIFICATION: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            ),
          };
        },
        () => {
          item["keyvalItems"] = {
            ACT_DATE_TO_CLOSED: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            ),
          };
        },
      ];

      changes[item.act_ctg_status - 1]();

      const removeUnusedPayload = (item: Activity): Activity => {
        const copy = new Activity(item, { includeAdditional: false });
        copy["keyvalItems"] = item["keyvalItems"];
        return copy;
      };

      this.activityService
        .updateItem(removeUnusedPayload(item))
        .then(async (response) => {
          Object.entries(item["keyvalItems"]).forEach(([key, value]) => {
            const k = new Keyval();

            k.key_id = item.act_id;
            k.key_name = key;
            k.key_value = String(value);
            k.key_date_add = DateUtils.newDateUpToSeconds();
            k.key_date_mod = DateUtils.newDateUpToSeconds();
            k.key_ctg_status = 1;

            item.additional.keyvalItems?.push(k);
          });

          await this.tasksService.getTasks().then((tasks: Task[]) => {
            const tagTasks = tasks.filter(
              (t) => t.tsk_tags && t.tsk_tags.includes(item.act_tasks_tag)
            );
            item.additional.tasks = tagTasks;
          });

          // Actualizar la signal activityList con la actividad modificada
          this.activityList.update((list) => {
            const newList = [...list];
            newList[idx] = item;
            return newList;
          });

          this.render(false);

          this.notificationService.notifyWithOptions(
            "Activity was updated successfuly",
            {
              title: "Activities",
              native: false,
            }
          );
        });
    }
  }

  addNewTask(item: Activity) {
    const TAG_TO_RECORD_MAP = {
      FFJ: "CV",
      UNI: "Unificación",
      FAM: "MajorPerspective",
      ING: "Business",
      PRO: "Business",
      INV: "Business",
      GAM: "Business",
      VEN: "Business",
    };
    const t = this.taskService?.createTask(
      {
        tsk_name: `[${
          TAG_TO_RECORD_MAP[item.act_tasks_tag.split("-")[0].toUpperCase()]
        }] Pendiente $[directions] %30`,
        tsk_tags: item.act_tasks_tag,
        tsk_ctg_status: 1,
      },
      {}
    );

    if (item.additional.tasks) {
      item.additional.tasks.push(t);
    } else {
      item.additional = {
        tasks: [t],
      };
    }
  }

  /**
   * Receives new Timeline and appends them to current Activity and to existing Activities
   * @param $event timeline emmited by the Timeline component
   */
  handleNewTimeline($event: { timeline: Timeline }) {
    // $event => { timeline: Timeline }
    if (this.model.activity) {
      this.model.activity.additional.timeline.push($event.timeline);
      this.model.activity.additional.lastTimeline = calculateLastTimeline(
        this.model.activity?.additional.timeline
      );
    }
    this.timelineList.update((list) => [...list, $event.timeline]);
    this.render(false);
  }

  onChangeProject(selectedProject: string) {
    this.render(false);
  }

  onChangeLayout(selectedLayout: string) {
    this.render(false);
  }

  setFolioFromSuggestion(folio: string, form: NgForm) {
    form.controls["fTasksTag"].setValue(folio);
    return false;
  }
}
