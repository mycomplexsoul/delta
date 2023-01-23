import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { Activity } from "../../crosscommon/entities/Activity";
import { ActivityService } from "./activity.service";
import { KeyvalService } from "./keyval.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";
import { DateUtils } from "src/crosscommon/DateUtility";
import { TimelineService } from "../common/TimelineService";
import { Timeline } from "src/crosscommon/entities/Timeline";
import { Keyval } from "src/crosscommon/entities/Keyval";
import { TasksCore } from "../task/tasks.core";
import { Task } from "src/crosscommon/entities/Task";
import { NotificationService } from "../common/notification.service";
import { TaskCore } from "../task/task.core";
import { SyncAPI } from "../common/sync.api";
import { getTextForLang } from "./activity.lang";

import { AuthenticationService } from "../common/authentication.service";

const ALL_STATUS_CODES = [
  "CAPTURED",
  "BACKLOG",
  "OPEN",
  "IN PROGRESS",
  "VERIFICATION",
  "CLOSED",
];

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
})
export class ActivityComponent implements OnInit {
  public viewData: {
    TEXT: any;
    activityList: Activity[];
    showItemForm: boolean;
    timelineList: Timeline[];
    timelineKey: string;
    keyvalList: Keyval[];
    activityGroups: Array<{
      act_ctg_status: number;
      act_txt_status: string;
      items: Activity[];
    }>;
    projectList: Array<{
      id: string;
      name: string;
      count: number;
    }>;
    selectedProject: string;
    reportDate: Date;
  } = {
    TEXT: {},
    activityList: [],
    showItemForm: false,
    timelineList: [],
    timelineKey: "activity|",
    keyvalList: [],
    activityGroups: [],
    projectList: [
      {
        id: "ALL",
        name: "ALL",
        count: 0,
      },
    ],
    selectedProject: "ALL",
    reportDate: DateUtils.dateOnly(),
  };

  public model: {
    id: string;
    keyval: Keyval[];
    tasks: Task[];
    additional: any;
  } = {
    id: null,
    keyval: [],
    tasks: [],
    additional: {},
  };
  public common: CommonComponent<Activity> = null;
  public tasks: Task[] = [];

  // handlers for TaskComponent
  public handlers = {
    getUser: () => this.authenticationService.currentUserValue.username,
    nextOrder: () =>
      this.tasks
        .map((t) => t.tsk_order)
        .reduce((prev, current) => (prev < current ? current : prev), 0) + 1,
  };
  private taskService: TaskCore = null;

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
    this.titleService.setTitle(
      `${DateUtils.dateToStringDate(DateUtils.dateOnly())} ${
        TEXT.ACTIVITIES_PAGE_TITLE
      }`
    );
  }

  render(fetchFromRemote: boolean = false) {
    const pipeline = [];

    if (fetchFromRemote) {
      pipeline.push(
        // Get Timeline
        this.timelineService
          .getTimelineForRecord(this.viewData.timelineKey)
          .then(({ timeline }) => {
            this.viewData.timelineList = timeline;
          })
      );

      pipeline.push(
        this.activityService.getAll().then((list) => {
          this.viewData.activityList = list;

          // get project id's
          this.viewData.projectList = this.viewData.activityList.reduce(
            (prev, current) => {
              const projectId = current.act_tasks_tag.split("-")[0];
              const found = prev.find((p) => p.id === projectId);

              if (!found && projectId) {
                prev.push({
                  id: projectId,
                  name: projectId,
                  count: this.viewData.activityList.filter(
                    (a) =>
                      a.act_tasks_tag.startsWith(projectId) &&
                      a.act_ctg_status < 6
                  ).length,
                });
              }
              return prev;
            },
            [
              {
                id: "ALL",
                name: "ALL",
                count: this.viewData.activityList.filter(
                  (a) => a.act_ctg_status < 6
                ).length,
              },
            ]
          );
        })
      );

      pipeline.push(
        // TODO: Get only keyval for open activities
        this.keyvalService.getAll().then((list) => {
          this.viewData.keyvalList = list;
        })
      );

      pipeline.push(
        // TODO: Get all tasks
        this.tasksService.getTasks().then((tasks: Task[]) => {
          this.tasks = tasks;
        })
      );
    }

    Promise.all(pipeline).then(() => {
      this.viewData.activityList.forEach((a) => {
        const tagTasks = this.tasks.filter(
          (t) => t.tsk_tags && t.tsk_tags.includes(a.act_tasks_tag)
        );

        a["additional"] = {
          tasks: tagTasks.sort(this.sortTasks),
          timeline: this.viewData.timelineList
            .filter(
              (t) =>
                t.tim_id_record === this.viewData.timelineKey + a.act_id &&
                !t.tim_tags.includes("note")
            )
            .map((t) => {
              t.tim_description = t.tim_description.replace(/\n/g, "<br/>");
              return t;
            }),
          notes: this.viewData.timelineList.filter(
            (t) =>
              t.tim_id_record === this.viewData.timelineKey + a.act_id &&
              t.tim_tags.includes("note") &&
              !t.tim_tags.includes("note-hidden")
          ),
          notesHidden: this.viewData.timelineList.filter(
            (t) =>
              t.tim_id_record === this.viewData.timelineKey + a.act_id &&
              t.tim_tags.includes("note-hidden")
          ),
          keyvalItems: this.viewData.keyvalList.filter((item) =>
            this.findById(item, "key_id", a.act_id)
          ),
          health: "activity-health-undetermined",
          lastTimeline: null,
        };

        if (a.additional.timeline?.length > 0) {
          const sorted = a.additional.timeline.filter(
            (t: Timeline) => !t.tim_tags.includes("note")
          );

          sorted.sort((a: Timeline, b: Timeline) => {
            if (
              new Date(a.tim_date).getTime() > new Date(b.tim_date).getTime()
            ) {
              return 1;
            }
            return -1;
          });
          a.additional.lastTimeline = sorted.at(-1);
          a.additional.health = this.determineHealth(a.additional.lastTimeline);
        }
      });

      this.generateViewData();
    });
  }

  determineHealth(timeline: Timeline): string {
    if (!timeline) {
      return "activity-health-undetermined";
    }
    if (
      new Date(timeline.tim_date).getTime() >=
      DateUtils.addDays(DateUtils.dateOnly(), -7).getTime()
    ) {
      return "activity-health-green";
    }
    if (
      new Date(timeline.tim_date).getTime() >=
      DateUtils.addDays(DateUtils.dateOnly(), -15).getTime()
    ) {
      return "activity-health-yellow";
    }
    if (
      new Date(timeline.tim_date).getTime() >=
      DateUtils.addDays(DateUtils.dateOnly(), -30).getTime()
    ) {
      return "activity-health-orange";
    }
    return "activity-health-red";
  }

  ngOnInit() {
    this.viewData.TEXT = getTextForLang("es");
    this.taskService = new TaskCore(this.syncService, this.handlers);
    this.render(true);
  }

  groupByProperty(
    list: Activity[],
    key: string,
    properties?: (e: Activity) => any
  ): Array<any> {
    return list.reduce((response, item) => {
      const group = response.find((g) => g.key === item[key]);

      if (item[key] === 6) {
        // keep only activities that were closed within current month
        const currentMonthDate: Date = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        );
        const closedDate: Date = item.additional?.keyvalItems?.find(
          (k) => k.key_name === "ACT_DATE_TO_CLOSED"
        )
          ? DateUtils.stringDateToDate(
              item.additional?.keyvalItems?.find(
                (k) => k.key_name === "ACT_DATE_TO_CLOSED"
              ).key_value
            )
          : null;
        if (!closedDate || closedDate.getTime() < currentMonthDate.getTime()) {
          // skip this one, is an old activity
          return response;
        }
      }

      if (group) {
        group.items.push(item);
      } else {
        response.push({
          key: item[key],
          ...properties(item),
          items: [item],
        });
      }
      return response;
    }, []);
  }

  generateViewData() {
    this.viewData.activityGroups = this.groupByProperty(
      this.viewData.selectedProject !== "ALL"
        ? this.viewData.activityList.filter((a) =>
            a.act_tasks_tag.startsWith(this.viewData.selectedProject)
          )
        : this.viewData.activityList,
      "act_ctg_status",
      (e) => ({ act_txt_status: ALL_STATUS_TEXT[e.act_ctg_status - 1] })
    ).sort((a, b) => (a.key > b.key ? 1 : -1));
  }

  toggleShowItemForm() {
    if (this.viewData.showItemForm) {
      this.model.id = null;
    }
    this.viewData.showItemForm = !this.viewData.showItemForm;
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.activityList,
        onFindExpression: (item) =>
          this.findById(item, "act_id", this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Activity(item);

          // newItem.act_id_project = formValues.fProjectId;
          newItem.act_name = formValues.fName;
          // newItem.act_description = formValues.fDescription;
          newItem.act_tags = formValues.fTags;
          newItem.act_tasks_tag = formValues.fTasksTag;
          // newItem.act_close_comment = formValues.fCloseComment;
          // newItem.act_ctg_status = formValues.fCtgStatus;

          return newItem;
        },
        onUpdateItemService: (item) => this.activityService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        },
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.activityList,
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
          // augment with Keyval info
          item["keyvalItems"] = {
            ACT_DATE_REQUESTED: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            ),
          };

          const newItem = await this.activityService.newItem(item);
          newItem.act_txt_status = ALL_STATUS_TEXT[newItem.act_ctg_status - 1];
          this.render(false);
          return newItem;
        },
        onFinalExecution: () => {
          this.viewData.showItemForm = false;
          this.model.id = null;
        },
      });
    }

    this.common.resetForm(form, () => {
      this.model.id = null;
    });
    this.viewData.showItemForm = false;
  }

  resetForm(form: NgForm) {
    this.model.id = null;
    form.reset();
  }

  sortTasks(a: Task, b: Task) {
    if (a.tsk_date_done) {
      if (b.tsk_date_done) {
        if (a.tsk_date_done.getTime() > b.tsk_date_done.getTime()) {
          return 1;
        }
        if (a.tsk_date_done.getTime() < b.tsk_date_done.getTime()) {
          return -1;
        }
        if (a.tsk_date_done.getTime() === b.tsk_date_done.getTime()) {
          return 0;
        }
      } else {
        // a is finished => goes first, b is open => goes last
        return -1;
      }
    } else {
      if (b.tsk_date_done) {
        // a is open => goes last, b is finished => goes first
        return 1;
      } else {
        // a and b are open, order by task order
        if (a.tsk_order > b.tsk_order) {
          return 1;
        }
        if (a.tsk_order < b.tsk_order) {
          return -1;
        }
        if (a.tsk_order === b.tsk_order) {
          return 0;
        }
      }
    }
  }

  setModelDetails(id: string, form?: NgForm) {
    let model: Activity;

    // Set activity
    model = this.viewData.activityList.find((item) =>
      this.findById(item, "act_id", id)
    );

    // Get Keyval
    this.model.keyval = this.viewData.keyvalList.filter((item) =>
      this.findById(item, "key_id", id)
    );

    // get tasks
    if (model.act_tasks_tag) {
      this.tasksService.getTasks().then((tasks: Task[]) => {
        const tagTasks = tasks.filter(
          (t) => t.tsk_tags && t.tsk_tags.includes(model.act_tasks_tag)
        );

        this.model.tasks = tagTasks.sort(this.sortTasks);

        this.model.additional = {
          tasks: this.model.tasks,
          timeline: this.viewData.timelineList
            .filter(
              (t) =>
                t.tim_id_record ===
                  this.viewData.timelineKey + model["act_id"] &&
                !t.tim_tags.includes("note")
            )
            .map((t) => {
              t.tim_description = t.tim_description.replace(/\n/g, "<br/>");
              return t;
            }),
          notes: this.viewData.timelineList.filter(
            (t) =>
              t.tim_id_record === this.viewData.timelineKey + model.act_id &&
              t.tim_tags.includes("note") &&
              !t.tim_tags.includes("note-hidden")
          ),
          notesHidden: this.viewData.timelineList.filter(
            (t) =>
              t.tim_id_record === this.viewData.timelineKey + model.act_id &&
              t.tim_tags.includes("note-hidden")
          ),
          lastTimeline: null,
        };

        this.model.id = model["act_id"]; // to tell the form that this is an edition
        if (!this.viewData.showItemForm) {
          this.viewData.showItemForm = !this.viewData.showItemForm;
        }

        // Fill form
        setTimeout(() => {
          if (form) {
            // form.controls["fProjectId"].setValue(model["act_id_project"]);
            form.controls["fName"].setValue(model["act_name"]);
            // form.controls["fDescription"].setValue(model["act_description"]);
            form.controls["fTags"].setValue(model["act_tags"]);
            form.controls["fTasksTag"].setValue(model["act_tasks_tag"]);
            // form.controls["fCloseComment"].setValue(model["act_close_comment"]);
            // form.controls["fCtgStatus"].setValue(model["act_ctg_status"]);
          }
        }, 0);
      });
    }
  }

  findById(item: iEntity, field: string, id: string) {
    return item[field] === id;
  }

  changeStatus(id: string, status: string): void {
    if (!id) {
      throw new Error("id should not be empty");
    }

    const item: Activity = this.viewData.activityList.find(
      ({ act_id }) => act_id === id
    );

    if (!item) {
      throw new Error("Activity not found");
    }

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
        const copy = new Activity(item);
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

            this.viewData.keyvalList.push(k);
          });

          await this.tasksService.getTasks().then((tasks: Task[]) => {
            const tagTasks = tasks.filter(
              (t) => t.tsk_tags && t.tsk_tags.includes(item.act_tasks_tag)
            );
            item.additional.tasks = tagTasks;
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
    const t = this.taskService.createTask(
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
    this.viewData.timelineList.push($event.timeline);
    this.model.additional.timeline.push($event.timeline);
  }

  onChangeProject(selectedProject: string) {
    this.render(false);
  }
}
