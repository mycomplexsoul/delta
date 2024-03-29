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
import {
  calculateHealth,
  calculateNotes,
  calculateNotesHidden,
  calculateTimelineOnly,
  calculateUniqueTasks,
  sortTasks,
  tagTasks,
} from "./activity.logic";

type activityAdditionalSchema = {
  // raw data
  keyvalItems: Keyval[];
  tasks: Task[];
  timeline: Timeline[];
  // calculated from raw data
  uniqueTasks: Task[];
  timelineOnly: Timeline[];
  notes: Timeline[];
  notesHidden: Timeline[];
  lastTimeline: Timeline;
  health: string;
};

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
    selectedLayout: string;
    layoutList: Array<{
      id: string;
      name: string;
    }>;
    showTimeline: boolean;
    showActivities: boolean;
    nextFolioList: Array<string>;
    healthGroup: Array<any>;
    sortGroupsDescending: boolean;
    timelineGroup: {
      days: Array<{
        date: Date;
        dayName: string;
        activityList: Array<Activity>;
      }>;
    };
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
    selectedLayout: "all",
    layoutList: [
      {
        id: "all",
        name: "All details",
      },
      {
        id: "timeline-only",
        name: "Timeline only",
      },
      {
        id: "activities-only",
        name: "Activities only",
      },
      {
        id: "title-only",
        name: "Titles only",
      },
    ],
    showTimeline: true,
    showActivities: true,
    nextFolioList: [],
    healthGroup: [],
    sortGroupsDescending: true,
    timelineGroup: {
      days: [],
    },
  };

  public model: {
    id: string;
    activity: Activity;
  } = {
    id: null,
    activity: null,
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
    const searchParams = new URLSearchParams(window.location.search);
    const selectedProject = searchParams.get("selectedProject");
    if (selectedProject) {
      this.viewData.selectedProject = selectedProject;
    }
    if (searchParams.get("sortDescending") === "false") {
      this.viewData.sortGroupsDescending = false;
    }
  }

  async render(fetchFromRemote: boolean = false) {
    // const pipeline = [];

    if (fetchFromRemote) {
      /* pipeline.push(
        // Get Timeline
        this.timelineService
          .getTimelineForRecord(this.viewData.timelineKey)
          .then(({ timeline }) => {
            this.viewData.timelineList = timeline;
          })
      ); */

      await this.activityService
        .getAll2()
        .then((data: { activity: Activity[]; timeline: Timeline[] }) => {
          const { activity: activityList, timeline: timelineList } = data;

          // schema from server is: { additional: { keyvalItems, tasks, timeline } }
          // need to add/calculate: { additional: { uniqueTasks, timelineOnly, notes, notesHidden, lastTimeline, health } }
          this.viewData.activityList = activityList.map((e: Activity) => ({
            ...e,
            additional: {
              ...e.additional,
              uniqueTasks: calculateUniqueTasks(e.additional.tasks),
              timelineOnly: calculateTimelineOnly(
                e.additional.timeline,
                this.viewData.timelineKey,
                e.act_id
              ),
              notes: calculateNotes(
                e.additional.timeline,
                this.viewData.timelineKey,
                e.act_id
              ),
              notesHidden: calculateNotesHidden(
                e.additional.timeline,
                this.viewData.timelineKey,
                e.act_id
              ),
              lastTimeline: e.additional.timeline?.at(-1),
              health: calculateHealth(e.additional.timeline?.at(-1)),
            },
          }));

          const dayList = DateUtils.daysForLocale("es");

          this.viewData.timelineGroup = timelineList.reduce((result, t) => {
            const date = DateUtils.dateOnly(t.tim_date);
            const day = result.days.find(
              (d) => d.date.getTime() === date.getTime()
            );
            const relatedActivity = this.viewData.activityList.find(
              ({ act_id }) => act_id === t.tim_id_record.split("|")[1]
            );

            t.tim_description = t.tim_description.replace(/\n/g, "<br/>");

            if (!day) {
              result.days.push({
                date,
                dayName: dayList[date.getDay()],
                activityList: [
                  {
                    ...relatedActivity,
                    additional: {
                      timeline: [t],
                    },
                  },
                ],
              });
            } else {
              const foundActivity = day.activityList.find(
                ({ act_id }) => act_id === relatedActivity.act_id
              );
              if (foundActivity) {
                foundActivity.additional.timeline.push(t);
              }
              if (!foundActivity) {
                const copy = { ...relatedActivity };
                copy.additional = {
                  timeline: [t],
                };
                day.activityList.push(copy);
              }
            }

            result.days = result.days.sort((a, b) =>
              a.date.getTime() > b.date.getTime() ? -1 : 1
            );

            return result;
          }, this.viewData.timelineGroup);

          console.log("--timelineGroup", this.viewData.timelineGroup);
        });

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
                  a.act_tasks_tag.startsWith(projectId) && a.act_ctg_status < 6
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
    }

    this.viewData.activityList.forEach((a) => {
      // @migrated
      const tagTaskList = tagTasks(this.tasks, a.act_tasks_tag);

      /* a["additional"] = {
        tasks: tagTaskList.sort(sortTasks),
        keyvalItems: this.viewData.keyvalList.filter((item) =>
          this.findById(item, "key_id", a.act_id)
        ),
        timeline: calculateTimelineOnly(
          this.viewData.timelineList,
          this.viewData.timelineKey,
          a.act_id
        ),
        uniqueTasks: calculateUniqueTasks(tagTaskList),
        notes: calculateNotes(
          this.viewData.timelineList,
          this.viewData.timelineKey,
          a.act_id
        ),
        notesHidden: calculateNotesHidden(
          this.viewData.timelineList,
          this.viewData.timelineKey,
          a.act_id
        ),
        health: "activity-health-undetermined",
        lastTimeline: null,
      }; */

      /* if (a.additional.timeline?.length > 0) {
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
        a.additional.health = calculateHealth(a.additional.lastTimeline);
      } */
    });

    this.viewData.healthGroup = this.generateHealthGroupData(
      this.viewData.activityList,
      this.viewData.selectedProject
    );

    this.generateViewData();
    if (this.model.id) {
      this.viewData.nextFolioList = [];
    } else {
      this.viewData.nextFolioList = Object.entries(
        this.obtainLastFolioByProject()
      ).map(([k, v]) => v);
    }
  }

  generateHealthGroupData(activityList: Activity[], selectedProject: string) {
    const data = [
      {
        label: "Actualizado hace menos de 7 días",
        className: "activity-health-green",
        count: 0,
      },
      {
        label: "Actualizado hace menos de 15 días",
        className: "activity-health-yellow",
        count: 0,
      },
      {
        label: "Actualizado hace menos de 30 días",
        className: "activity-health-orange",
        count: 0,
      },
      {
        label: "Actualizado hace 30 días o más",
        className: "activity-health-red",
        count: 0,
      },
      {
        label: "Sin estatus registrado",
        className: "activity-health-undetermined",
        count: 0,
      },
    ];

    data.forEach((d) => {
      d["items"] = activityList.filter(
        (a) =>
          (selectedProject !== "ALL"
            ? a.act_tasks_tag.startsWith(selectedProject)
            : true) &&
          a.additional.health === d.className &&
          a.act_ctg_status !== 6
      );
      d.count = activityList.filter(
        (a) =>
          (selectedProject !== "ALL"
            ? a.act_tasks_tag.startsWith(selectedProject)
            : true) &&
          a.additional.health === d.className &&
          a.act_ctg_status !== 6
      ).length;
    });

    return data;
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
    ).toSorted(
      (a, b) =>
        (Number(a.key) > Number(b.key) ? 1 : -1) *
        (this.viewData.sortGroupsDescending ? -1 : 1)
    );
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
          // this.viewData.activityList.push(newItem);
          return newItem;
        },
        onFinalExecution: () => {
          this.viewData.showItemForm = false;
          this.model.id = null;
          this.render(false);
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

  setModelDetails(id: string, form?: NgForm) {
    // let act: Activity;

    // Set activity
    this.model.activity = this.viewData.activityList.find((item) =>
      this.findById(item, "act_id", id)
    );

    // Get Keyval
    /* this.model.keyval = this.viewData.keyvalList.filter((item) =>
      this.findById(item, "key_id", id)
    ); */

    // get tasks
    if (this.model.activity.act_tasks_tag) {
      this.tasksService.getTasks().then((tasks: Task[]) => {
        /* const tagTasks = tasks.filter(
          (t) => t.tsk_tags && t.tsk_tags.includes(model.act_tasks_tag)
        ); */

        /* this.model.tasks = tagTasks.sort(sortTasks); */

        /* this.model.additional = {
          ...this.model.additional,
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
        }; */

        this.model.id = this.model.activity.act_id; // to tell the form that this is an edition
        if (!this.viewData.showItemForm) {
          this.viewData.showItemForm = !this.viewData.showItemForm;
        }

        // Fill form
        setTimeout(() => {
          if (form) {
            // form.controls["fProjectId"].setValue(this.model.activity["act_id_project"]);
            form.controls["fName"].setValue(this.model.activity["act_name"]);
            // form.controls["fDescription"].setValue(this.model.activity["act_description"]);
            form.controls["fTags"].setValue(this.model.activity["act_tags"]);
            form.controls["fTasksTag"].setValue(
              this.model.activity["act_tasks_tag"]
            );
            // form.controls["fCloseComment"].setValue(this.model.activity["act_close_comment"]);
            // form.controls["fCtgStatus"].setValue(this.model.activity["act_ctg_status"]);
          }
          console.log("--activity found to show details", this.model);
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
    this.model.activity.additional.timeline.push($event.timeline);
    this.render(false);
  }

  onChangeProject(selectedProject: string) {
    this.render(false);
  }

  onChangeLayout(selectedLayout: string) {
    this.viewData.showTimeline = ["all", "timeline-only"].includes(
      selectedLayout
    );
    this.viewData.showActivities = ["all", "activities-only"].includes(
      selectedLayout
    );

    this.render(false);
  }

  obtainLastFolioByProject(): Array<any> {
    const { activityList, projectList, selectedProject } = this.viewData;
    const folioList: any = activityList.reduce(
      (folios, act) => {
        const [proj, folio] = act.act_tasks_tag.split("-");
        const maxFolio = parseInt(folios[proj].split("-")[1]);

        if (maxFolio <= parseInt(folio)) {
          // instead of using this folio we generate the next one
          if (proj === "UIP") {
            // UIP uses numeric folio
            folios[proj] = `${proj}-${parseInt(folio) + 1}`;
          } else {
            // all other projects use year-based folio
            folios[proj] = `${proj}-${DateUtils.fillString(
              parseInt(folio) + 1,
              5 - folio.length,
              -1,
              "0"
            )}`;
          }
        }

        return folios;
      },
      projectList
        .filter(({ id }) => id !== "ALL")
        .map(({ id }) => id)
        .reduce((projects, id) => {
          projects[id] = `${id}-${DateUtils.fillString(1, 5, -1, "0")}`;

          return projects;
        }, {})
    );

    if (selectedProject !== "ALL") {
      return [folioList[selectedProject]];
    }
    return folioList;
  }

  setFolioFromSuggestion(folio: string, form: NgForm) {
    form.controls["fTasksTag"].setValue(folio);
    return false;
  }
}
