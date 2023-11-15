import { Component, OnInit, EventEmitter } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { TasksCore } from "./tasks.core";
import { SyncAPI } from "../common/sync.api";
import { Task } from "../../crosscommon/entities/Task";
import { TaskStatus } from "./task.type";
import { TaskIndicator } from "./task.indicator.service";
import { DateCommon } from "../common/date.common";
import { TaskTimeTracking } from "../../crosscommon/entities/TaskTimeTracking";
import { DateUtils } from "src/crosscommon/DateUtility";
import { NotificationService } from "../common/notification.service";
import { TextToSpeech } from "../common/speechRecognition";
import { autogrowSetup } from "../common/autogrow";
// format dates used in charts
import "chartjs-adapter-date-fns";

@Component({
  selector: "tasks",
  templateUrl: "./tasks.template.html",
  styleUrls: ["./tasks.css"],
  providers: [TasksCore, TaskIndicator],
})
export class TasksComponent implements OnInit {
  public item: any;
  public tasks: any[];
  public services: {
    tasksCore: TasksCore;
    sync: SyncAPI;
    taskIndicator: TaskIndicator;
    dateUtils: DateCommon;
  } = {
    tasksCore: null,
    sync: null,
    taskIndicator: null,
    dateUtils: null,
  };
  public state: any = {};
  public format: string = "yyyy-MM-dd HH:mm:ss";
  public delayOnUpdateState: number = 100;
  public groupHeader: string;
  public timers: any = {};

  public viewPostponed: boolean = false;
  public viewReportsWeek: boolean = false;
  public viewReportsDayDistribution: boolean = false;
  public viewOptions: boolean = false;
  public viewQualifierTotals: boolean = false;
  public viewETABeforeAdd: boolean = false;
  public viewAllFinishedToday: boolean = false;
  public taskStatus = {
    BACKLOG: 1,
    OPEN: 2,
    CLOSED: 3,
    CANCELLED: 4,
  };
  public showBatchAdd: boolean = false;
  public load: boolean = true;
  public reports: any = {};
  public tagInfo: any = {};
  public options: any;
  public defaultOptions: any = {
    optViewElapsedDays: false,
    optShowFinishedToday: false,
    optShowCollapseRecords: false,
    optShowFilter: false,
    optShowSyncButton: false,
    optUsePresentationMode: false,
    optNewTaskStatusIsBacklog: false,
    optShowIndicatorsTable: false,
    optAllowToEditETA: false,
    optCollapseOpenTasks: false,
    optCollapseIndicators: false,
    optCollapseNextTasks: false,
    optCollapseFinishedToday: false,
    optCollapseBacklog: false,
    optCollapseClosedTasks: false,
    optCollapseReportsWeekDistribution: false,
    optCollapseReportsDayDistribution: false,
    optCollapseQualifiersTotals: false,
    optShowBacklog: false,
    optShowClosedTasks: false,
    optShowReportsWeekDistribution: false,
    optShowReportsDayDistribution: false,
    optShowQualifiersTotals: false,
    optAddNewTasksToNextTasks: false,
    optRecordWidth: 450,
    optRecordHeight: 390,
    optMoveTimetrackingToAvailableSlotWhenDone: false,
    optHideScrollbarsInRecord: false,
    optShowTaskToolbar: false,
    optUseColumnsForRecords: false,
  };
  public timerModeRemaining: boolean = false;
  public comparisonData: any;
  public nextTasks: any[];
  public pinnedTasks: any[];
  public focusedTask: {
    task: Task;
    element: HTMLElement;
  } = {
    task: null,
    element: null,
  };
  public events: any[] = [];
  public layout: string = "float"; // possible values: grid, float
  public selectedTask: Task = null;
  public selectedRecord: Task[] = [];
  public differenceLastClosedToRealTime: number = 0;
  speech = new TextToSpeech();

  public viewData: {
    selectedFilter: string;
    pinnedRecords: Array<string>;
    dayDistributionChart: {
      chartData: any[];
      chartLabels: string[];
      chartOptions: any;
      chartLegend: boolean;
      chartType: string;
    };
    nextToDoCutlineForAddedTasks: number;
  } = {
    selectedFilter: "all",
    pinnedRecords: [],
    dayDistributionChart: {
      chartData: [{ data: [] }],
      chartLabels: [],
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            type: "time",
            time: {
              unit: "minute",
              displayFormats: {
                minute: "HH:mm",
              },
            },
            adapters: {
              date: "date-fns",
            },
          },
        },
      },
      chartLegend: true,
      chartType: "bar",
    },
    nextToDoCutlineForAddedTasks: 0,
  };

  public CONSTANTS = {
    filters: [
      { id: "all", name: "All" },
      { id: "today-and-urgent", name: "Today and Urgent/Critical" },
      { id: "pinned", name: "Pinned Records and Tasks" },
      { id: "pinned-and-urgent", name: "Pinned and Urgent/Critical" },
      { id: "next", name: "Next To Do Today" },
      { id: "due-today", name: "Due Today" },
      { id: "today", name: "Added Today" },
      { id: "yesterday", name: "Added Yesterday" },
      { id: "old-30", name: "Older than 30 days" },
      { id: "with-schedule", name: "With Schedule" },
      { id: "in-progress", name: "In Progress" },
      { id: "qualifiers", name: "Have Qualifiers" },
      { id: "not-today", name: "Not Added Today" },
      { id: "q-critical", name: "Critical (c)" },
      { id: "q-star", name: "Star (2)" },
      { id: "q-highlight", name: "Highlight (3)" },
      { id: "q-priority", name: "Priority (4)" },
      { id: "q-important", name: "Important (5)" },
      { id: "q-urgent", name: "Urgent (6)" },
      { id: "q-unexpected", name: "Unexpected (7)" },
      { id: "q-progressed", name: "Progressed (8)" },
      { id: "q-people", name: "People (9)" },
      { id: "q-flag", name: "Flag (/)" },
      { id: "q-blocked", name: "Blocked (-)" },
      { id: "q-directions", name: "Directions (?)" },
      { id: "q-mobile", name: "Mobile (.)" },
    ],
  };

  // handlers for Backlog
  public handlersForBacklog = {
    onViewTaskDetails: (task: Task, event: Event, groupTasks: Task[]) => {
      this.setSelected(task);
    },
    onTaskFocus: (task: Task, event: Event, groupTasks: Task[]) => {
      this.selectedTask = task;
      this.selectedRecord = groupTasks;
    },
    onEvent: ({
      type,
      task,
      changes,
    }: {
      type: string;
      task: Task;
      changes: any;
    }) => {
      console.log("received an update", { type, task, changes });
      if (changes.tsk_ctg_status === 3) {
        this.updateState();
      }
    },
  };
  // handlers for Closed Yesterday
  public handlersForClosedYesterday = {
    onViewTaskDetails: (task: Task) => this.setSelected(task),
    onTaskMarkAsDone: (task: Task, event: any) =>
      this.markTaskAsDone(task, event),
    onEvent: (event: { changes: any }) => {
      console.log("received an update", event);
      if (event.changes.tsk_ctg_status === 3) {
        this.updateState();
      }
    },
  };
  // handlers for TaskToolbar
  public handlersForTaskToolbar = {};

  // chart open tasks count EOD
  public configChartOpenCountEOD = {
    type: "line",
    data: [],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Open Count EOD",
        },
      },
    },
  };

  constructor(
    tasksCore: TasksCore,
    private sync: SyncAPI,
    private taskIndicator: TaskIndicator,
    private dateUtils: DateCommon,
    private notificationService: NotificationService,
    private titleService: Title
  ) {
    titleService.setTitle("Tasks");

    this.services.tasksCore = tasksCore;
    this.services.sync = sync;
    this.services.taskIndicator = taskIndicator;
    this.services.dateUtils = dateUtils;
    if (typeof window.localStorage !== "undefined") {
      this.options = {
        ...this.defaultOptions,
        ...JSON.parse(localStorage.getItem("Options")),
      };
    }
    this.nextTasks = [];
    this.pinnedTasks = [];
    this.updateState();
    this.fetchTasks();
    // this.services.tasksCore.computeComparisonData().then((data: any) => this.comparisonData = data);

    // events
    this.subscribe("updateTimeTracking", (timeTrackingItem: any) => {
      let foundItem: Task = null;
      // Looks into open tasks
      foundItem = this.state.openTasks.find(
        (item: Task) => item.tsk_id === timeTrackingItem.tsh_id
      );
      if (foundItem) {
        const historyIndex = foundItem["tsk_time_history"].findIndex(
          (item: any) =>
            item.tsh_id === timeTrackingItem.tsh_id &&
            item.tsh_num_secuential === timeTrackingItem.tsh_num_secuential
        );
        foundItem["tsk_time_history"][historyIndex] = timeTrackingItem;
      }
      // Looks into closed tasks
    });
  }

  ngOnInit() {
    // this.registerServiceWorker(); // enable to register ServiceWorker
  }

  fetchTasks() {
    return this.services.tasksCore.getAll().then((taskList) => {
      this.tasks = taskList;
      this.load = true;
      this.updateState();
      return taskList;
    });
  }

  addTask(form: any) {
    if (!this.showBatchAdd) {
      if (form.value.tsk_name) {
        this.services.tasksCore.addTask(
          {
            tsk_date_add: this.services.dateUtils.newDateUpToSeconds(),
            tsk_date_due: this.services.dateUtils.dateOnly(),
            tsk_name: form.value.tsk_name,
          },
          this.options
        );
        this.tasks = this.services.tasksCore.tasks();
        this.updateState();
        form.controls.tsk_name.reset();
      }
    } else {
      // Batch add
      let t: any;
      if (form.value.tsk_multiple_name) {
        const added = this.services.tasksCore.batchAddTasks(
          form.value.tsk_multiple_name.split("\n"),
          this.options
        );
        this.tasks = this.services.tasksCore.tasks();
        form.controls.tsk_multiple_name.reset();
        this.showBatchAdd = false;
        setTimeout(() => this.updateState(), 100);
        if (this.options.optAddNewTasksToNextTasks && added.length) {
          [...added].reverse().forEach((a) => {
            this.asNextToDo(a, true, true);
          });
        }
      }
    }
    this.viewETABeforeAdd = false;
    this.scheduleNotificationsForStartingTasks();
  }

  updateState() {
    let today = this.services.dateUtils.newDateUpToSeconds();
    let today0 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let yesterday0 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
    );
    let tomorrow0 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    let sortByClosedDate = (a: any, b: any) => {
      let res = new Date(a.tsk_date_done) > new Date(b.tsk_date_done);
      return res ? -1 : 1;
    };
    let sortByDateUntilView = (a: any, b: any) => {
      let res =
        new Date(a.tsk_date_view_until) > new Date(b.tsk_date_view_until);
      return res ? 1 : -1;
    };
    this.tasks = this.services.tasksCore.tasks();
    this.state.backlogTasks = this.createGroupedTasks(
      this.tasks
        .filter((t) => t.tsk_ctg_status == this.taskStatus.BACKLOG)
        .sort(this.sortByGroup)
    );
    this.state.openTasks = this.createGroupedTasks(
      this.tasks
        .filter(
          (t) =>
            t.tsk_ctg_status == this.taskStatus.OPEN &&
            (t.tsk_date_view_until
              ? new Date(t.tsk_date_view_until) < today
              : true) &&
            ((this.options.optShowQualifiedTasksOnly
              ? t.tsk_qualifiers !== ""
              : true) ||
              t.tsk_ctg_in_process == 2)
        )
        .filter((t) =>
          this.viewData.selectedFilter === "next" ? t["inNextToDo"] : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "today-and-urgent"
            ? today0.getTime() === new Date(t.tsk_date_due).getTime() ||
              (t.tsk_qualifiers && t.tsk_qualifiers.includes("urgent")) ||
              (t.tsk_qualifiers && t.tsk_qualifiers.includes("critical")) ||
              t.tsk_ctg_in_process === 2
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "pinned"
            ? this.isRecordPinned(t.tsk_id_record) || t.inPinnedToDo
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "pinned-and-urgent"
            ? this.isRecordPinned(t.tsk_id_record) ||
              t.inPinnedToDo ||
              (t.tsk_qualifiers && t.tsk_qualifiers.includes("urgent")) ||
              (t.tsk_qualifiers && t.tsk_qualifiers.includes("critical")) ||
              t.tsk_ctg_in_process === 2
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "due-today"
            ? today0.getTime() === new Date(t.tsk_date_due).getTime()
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "today"
            ? today0.getTime() < new Date(t.tsk_date_add).getTime() &&
              new Date(t.tsk_date_add).getTime() < tomorrow0.getTime()
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "yesterday"
            ? yesterday0.getTime() < new Date(t.tsk_date_add).getTime() &&
              new Date(t.tsk_date_add).getTime() < today0.getTime()
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "old-30"
            ? new Date(t.tsk_date_add).getTime() <
              DateUtils.addDays(today0, -30).getTime()
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "with-schedule"
            ? !!t.tsk_schedule_date_start
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "in-progress"
            ? t.tsk_ctg_in_process === 2
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "not-today"
            ? today0.getTime() > new Date(t.tsk_date_add).getTime()
            : true
        )
        .filter((t) =>
          this.viewData.selectedFilter === "qualifiers"
            ? !!t.tsk_qualifiers
            : true
        )
        .filter((t) => {
          const qFilters = this.CONSTANTS.filters.filter((f) =>
            f.id.startsWith("q-")
          );

          // only apply filter if selected
          if (
            qFilters.some(
              (filter) => this.viewData.selectedFilter === filter.id
            )
          ) {
            return (
              t.tsk_qualifiers &&
              t.tsk_qualifiers.includes(
                this.viewData.selectedFilter.substring(2)
              )
            );
          }
          // otherwise no filter is applied
          return true;
        })
        .sort(this.sortByGroup)
    );
    this.state.closedTasks = this.createGroupedClosedTasks(
      this.tasks
        .filter((t) => t.tsk_ctg_status == this.taskStatus.CLOSED)
        .sort(sortByClosedDate)
    );
    this.state.closedTodayTasks = this.tasks
      .filter(
        (t) =>
          t.tsk_ctg_status == this.taskStatus.CLOSED &&
          new Date(t.tsk_date_done) >= today0
      )
      .sort(sortByClosedDate);
    this.state.closedYesterdayTasks = this.tasks
      .filter(
        (t) =>
          t.tsk_ctg_status == this.taskStatus.CLOSED &&
          new Date(t.tsk_date_done) >= yesterday0 &&
          new Date(t.tsk_date_done) <= today0
      )
      .sort(sortByClosedDate);
    this.state.postponedTasks = this.tasks
      .filter(
        (t) =>
          t.tsk_ctg_status == this.taskStatus.OPEN &&
          (t.tsk_date_view_until
            ? new Date(t.tsk_date_view_until) > today
            : false)
      )
      .sort(sortByDateUntilView);

    // Info
    // Total time spent today
    // this.calculateTotalTimeSpentToday();
    //this.state.openTasksCount = this.tasks.filter(
    //  (t) => t.tsk_ctg_status == this.taskStatus.OPEN
    //).length;
    this.state.openTasksCount = this.state.openTasks.reduce(
      (total, group) => total + group.tasks.length,
      0
    );

    this.state.backlogTasksCount = this.tasks.filter(
      (t) => t.tsk_ctg_status == this.taskStatus.BACKLOG
    ).length;

    // Postponed tasks count
    this.state.postponedTasksCount = this.tasks.filter(
      (t) =>
        t.tsk_ctg_status == this.taskStatus.OPEN &&
        (t.tsk_date_view_until
          ? new Date(t.tsk_date_view_until) > today
          : false)
    ).length;

    // Indicators
    this.state.karmaCount = 0;
    this.state.karmaScore = 0;
    this.state.closedTodayTasks.forEach((t: any) => {
      let onTime = t.tsk_total_time_spent < t.tsk_estimated_duration * 60;
      this.state.karmaCount += onTime ? 1 : 0;
    });
    if (this.state.closedTodayTasks.length) {
      this.state.karmaScore =
        Math.round(
          (this.state.karmaCount * 100) / this.state.closedTodayTasks.length
        ) / 100;
    }

    // indicators array
    this.calculateIndicators();

    this.configChartOpenCountEOD.data =
      this.state.indicators.find((i) => i.name === "All Open Count")?.values ||
      [];

    // use added count for today to add a line in next to do section
    const addedToday = this.state.indicators.find(
      (i) => i.name === "Added Count"
    )?.values;
    const closedToday = this.state.indicators.find(
      (i) => i.name === "Closed Count"
    )?.values;
    if (addedToday?.length && closedToday?.length) {
      this.viewData.nextToDoCutlineForAddedTasks =
        addedToday[addedToday.length - 1] - closedToday[closedToday.length - 1];
    }

    // identify not synced tasks
    this.tasksNotInSync();

    // reporting
    this.weekStats();
    this.dayDistribution();
    this.qualifierTotals();

    if (this.load) {
      this.load = false;
      setTimeout(() => this.showTimersOnLoad(), 100);
      this.scheduleNotificationsForStartingTasks();
    }

    // next tasks to do today
    if (this.nextTasks.length === 0) {
      this.nextTasks.push({
        estimatedDuration: 0,
        tasks: [],
      });
    } else {
      this.nextTasks[0].tasks = [];
    }
    if (this.tasks.length && typeof window.localStorage !== "undefined") {
      let nextTasksIds = JSON.parse(localStorage.getItem("NextTasks"));
      if (nextTasksIds) {
        nextTasksIds.forEach((id: string) => {
          let nt = this.tasks.find(
            (e: any) =>
              e.tsk_id === id && e.tsk_ctg_status === this.taskStatus.OPEN
          );
          if (nt) {
            this.nextTasks[0].tasks.push(nt);
            // add a badge
            nt["inNextToDo"] = true;
          }
        });
        // We set them again to filter out done tasks
        localStorage.setItem(
          "NextTasks",
          JSON.stringify(this.nextTasks[0].tasks.map((e: any) => e.tsk_id))
        );
      }
    }

    this.nextTasks[0].estimatedDuration = 0;
    this.nextTasks[0].tasks.forEach((t: any) => {
      if (t.tsk_ctg_status === this.taskStatus.OPEN) {
        this.nextTasks[0].estimatedDuration += t.tsk_estimated_duration * 60;
      } else {
        let index = this.nextTasks[0].tasks.findIndex(
          (e: any) => e.tsk_id === t.tsk_id
        );
        this.nextTasks[0].tasks.splice(index, 1);
      }
    });
    this.projectNextTasksDates();

    // Pinned tasks
    if (this.pinnedTasks.length === 0) {
      this.pinnedTasks.push({
        estimatedDuration: 0,
        tasks: [],
      });
    } else {
      this.pinnedTasks[0].tasks = [];
    }
    if (this.tasks.length && typeof window.localStorage !== "undefined") {
      let pinnedTasksIds = JSON.parse(localStorage.getItem("PinnedTasks"));
      if (pinnedTasksIds) {
        pinnedTasksIds.forEach((id: string) => {
          let nt = this.tasks.find(
            (e: any) =>
              e.tsk_id === id && e.tsk_ctg_status === this.taskStatus.OPEN
          );
          if (nt) {
            this.pinnedTasks[0].tasks.push(nt);
            // add a badge
            nt["inPinnedToDo"] = true;
          }
        });
        // We set them again to filter out done tasks
        localStorage.setItem(
          "PinnedTasks",
          JSON.stringify(this.pinnedTasks[0].tasks.map((e: any) => e.tsk_id))
        );
      }
    }

    this.pinnedTasks[0].estimatedDuration = 0;
    this.pinnedTasks[0].tasks.forEach((t: any) => {
      if (t.tsk_ctg_status === this.taskStatus.OPEN) {
        this.pinnedTasks[0].estimatedDuration += t.tsk_estimated_duration * 60;
      } else {
        let index = this.pinnedTasks[0].tasks.findIndex(
          (e: any) => e.tsk_id === t.tsk_id
        );
        this.pinnedTasks[0].tasks.splice(index, 1);
      }
    });

    // Calculate difference between last task closed and current time
    const lastTTEntryFromDay = this.lastTTEntryFromDay(today);
    this.differenceLastClosedToRealTime = DateUtils.elapsedTime(
      new Date(),
      lastTTEntryFromDay
    );

    if (this.focusedTask.task) {
      if (this.focusedTask.task.tsk_ctg_status === this.taskStatus.OPEN) {
        // console.log('trying to set focus for task',this.focusedTask);
        //let f: HTMLElement = document.getElementById(this.focusedTask.tsk_id).querySelector('span.task-text[contenteditable=true]');
        //f['tabIndex'] = -1;
        setTimeout(() => {
          // this.focusedTask.element.focus();
          document
            .querySelector(
              `#${this.focusedTask.task.tsk_id} span.editable.task-text`
            )
            ["focus"]();
          // console.log('focus should be set now');
          //     f.focus();
        }, 600);
      } else {
      }
    }

    // Update comparison results
    /*setTimeout(() => {
            this.services.tasksCore.computeComparisonData().then((data: any) => this.comparisonData = data);
        }, 6000);*/
  }

  showTimersOnLoad() {
    this.tasks
      .filter((t) => {
        return (
          t.tsk_ctg_status == this.taskStatus.OPEN &&
          t.tsk_ctg_in_process === 2 &&
          (t.tsk_date_view_until
            ? new Date(t.tsk_date_view_until) < new Date()
            : true)
        );
      })
      .forEach((t) => {
        if (!this.timers[t.tsk_id]) {
          this.showTimer(t, this.getTaskDOMElement(t.tsk_id));
        }
      });
  }

  setSelected(item: any) {
    this.state.selected = item;
    setTimeout(() => {
      autogrowSetup({ componentWillBeVisible: true });
      document.querySelector(".tasks-details textarea").parentNode[
        "dataset"
      ].replicatedValue = item.tsk_notes;
    }, 100);
  }

  sortByGroup(a: any, b: any) {
    if (a.tsk_id_record !== b.tsk_id_record) {
      return a.tsk_id_record > b.tsk_id_record ? 1 : -1;
    } else {
      return a.tsk_order > b.tsk_order ? 1 : -1;
    }
  }

  createGroupedTasks(tasks: Array<any>) {
    let res: Array<any> = [];
    let lastHeader: string;
    // read collapsed tasks
    const collapsed =
      localStorage &&
      JSON.parse(localStorage.getItem("TasksCollapsed") || "[]");

    tasks.forEach((t) => {
      if (t.tsk_id_record !== lastHeader) {
        lastHeader = t.tsk_id_record;
        res.push({
          header: lastHeader,
          estimatedDuration: 0,
          tasks: [],
          collapsed: collapsed.includes(t.tsk_id_record),
        });
      }
      res[res.length - 1].tasks.push(t);
      res[res.length - 1].estimatedDuration += t.tsk_estimated_duration;
    });

    // order groups by total ETA
    res = res.sort((a: any, b: any): number => {
      return a.estimatedDuration > b.estimatedDuration ? -1 : 1;
    });

    return res;
  }

  toggleTimeTracking(t: any, event: KeyboardEvent) {
    let parent = event.target["parentNode"];
    this.taskToggleTimeTracking(t, parent);
  }

  taskEdit(t: Task, event: KeyboardEvent) {
    let parent = event.target["parentNode"];

    const optIncludesKey = (key: string, options: string | string[]) => {
      if (Array.isArray(options)) {
        return options.includes(key);
      }
      return options === key;
    };

    if (!event.shiftKey && event.keyCode == 113) {
      // detect "F2" = start/stop time tracking
      this.taskToggleTimeTracking(t, parent);
    }
    if (event.altKey && event.keyCode == 83) {
      // detect 's'
      this.setSelected(t);
    }
    if (event.altKey && event.keyCode == 46) {
      // detect supr (delete)
      this.taskCancel(t);
    }
    if (event.altKey && event.keyCode == 66) {
      // detect 'b'
      this.taskToBacklog(t);
    }
    if (event.altKey && (event.keyCode == 106 || event.keyCode == 49)) {
      // detect '*' || '1'
      this.markTaskAsDone(t, {
        target: { checked: true },
        shiftKey: event.shiftKey,
      });
    }
    if (event.altKey && optIncludesKey(event.key, "2")) {
      // detect '2'
      this.markTaskAs(t, "star");
    }
    if (event.altKey && optIncludesKey(event.key, "3")) {
      // detect '3'
      this.markTaskAs(t, "highlighted");
    }
    if (event.altKey && optIncludesKey(event.key, "4")) {
      // detect '4'
      this.markTaskAs(t, "priority");
    }
    if (event.altKey && optIncludesKey(event.key, "5")) {
      // detect '5'
      this.markTaskAs(t, "important");
    }
    if (event.altKey && optIncludesKey(event.key, "6")) {
      // detect '6'
      this.markTaskAs(t, "urgent");
    }
    if (event.altKey && optIncludesKey(event.key, "7")) {
      // detect '7'
      this.markTaskAs(t, "unexpected");
    }
    if (event.altKey && optIncludesKey(event.key, "8")) {
      // detect '8'
      this.markTaskAs(t, "progressed");
    }
    if (event.altKey && optIncludesKey(event.key, "9")) {
      // detect '9'
      this.markTaskAs(t, "people");
    }
    if (event.altKey && optIncludesKey(event.key, "0")) {
      // detect '0'
      this.clearQualifiers(t);
    }
    if (event.altKey && optIncludesKey(event.key, "/")) {
      // detect '/'
      this.markTaskAs(t, "flag");
    }
    if (event.altKey && optIncludesKey(event.key, "-")) {
      // detect '-'
      this.markTaskAs(t, "blocked");
    }
    if (event.altKey && optIncludesKey(event.key, "?") && event.shiftKey) {
      // detect 'Shift + ?'
      this.markTaskAs(t, "directions");
    }
    if (event.altKey && optIncludesKey(event.key, ".")) {
      // detect '.'
      this.markTaskAs(t, "mobile");
    }
    if (event.altKey && optIncludesKey(event.key, "c")) {
      // detect 'c'
      this.markTaskAs(t, "critical");
    }
    if (event.altKey && event.keyCode == 107) {
      // detect '+'
      this.focusElement("input[name=tsk_name]");
    }
    if (event.altKey && event.keyCode == 78) {
      // detect 'n'
      this.asNextToDo(t, true);
    }
    if (event.altKey && event.keyCode == 82) {
      // detect 'r'
      this.asNextToDo(t, false);
    }
    if (event.altKey && event.key === "p") {
      // detect 'p'
      this.togglePinnedToDo(t);
    }
    if (event.altKey && event.keyCode == 84) {
      // detect 't'
      this.adjustTimeTracking(t, true);
    }
    if (event.shiftKey && event.keyCode == 113) {
      // detect "Shift + F2" = find time tracking task, stop it, close the task and start the focused one
      // find tasks in progress
      let inprogress: Array<Task> = this.tasks.filter(
        (task: Task) => task.tsk_ctg_in_process === 2
      );
      console.log("inprogress now", inprogress);
      // stop them
      inprogress.forEach((task: Task) => {
        // let parent: HTMLElement = document.getElementById(task.tsk_id);
        // this.taskToggleTimeTracking(task, parent);
        document
          .querySelector(`#${task.tsk_id} input[type=checkbox]`)
          ["click"]();
      });
      // start current task time tracking
      this.taskToggleTimeTracking(t, parent);
    }
    // event.preventDefault();
    // event.returnValue = false;
    // return false;
  }

  /**
   * Jumps cursor up and below the current task.
   * Also jumps from record listing to the previous/next one.
   * @param event keyboard event to handle
   */
  taskKeyDown(event: KeyboardEvent) {
    const parent = event.target["parentNode"];

    if (event.altKey && event.keyCode == 38) {
      // detect move up
      this.taskMoveUp(parent, this.interchangeTaskOrder.bind(this));
    }
    if (event.altKey && event.keyCode == 40) {
      // detect move down
      this.taskMoveDown(parent, this.interchangeTaskOrder.bind(this));
    }
    if (!event.altKey && event.keyCode == 38) {
      // detect jump up
      this.taskJumpUp(parent, "span.task-text[contenteditable=true]");
    }
    if (!event.altKey && event.keyCode == 40) {
      // detect jump down
      this.taskJumpDown(parent, "span.task-text[contenteditable=true]");
    }
    if (event.ctrlKey && event.keyCode == 38) {
      // detect jump up
      this.taskRecordJumpUp(parent, "span.task-text[contenteditable=true]");
    }
    if (event.ctrlKey && event.keyCode == 40) {
      // detect jump down
      this.taskRecordJumpDown(parent, "span.task-text[contenteditable=true]");
    }
  }

  /**
   * Jumps cursor up and below the current task in the next task listing
   * modifying order based in localStorage saved next tasks.
   * @param event keyboard event to handle
   */
  nextTaskKeyDown(event: KeyboardEvent) {
    const parent = event.target["parentNode"];

    if (event.altKey && event.keyCode == 38) {
      // detect move up
      this.taskMoveUp(parent, (t1, t2) =>
        this.interchangeNextTaskOrder(t1, t2)
      );
      setTimeout(() => {
        this.focusElement(
          `#nextToDoTodayList #${parent.id} span.task-text[contenteditable=true]`
        );
      }, 100);
    }
    if (event.altKey && event.keyCode == 40) {
      // detect move down
      this.taskMoveDown(parent, (t1, t2) =>
        this.interchangeNextTaskOrder(t1, t2)
      );
      if (parent.nextElementSibling && parent.nextElementSibling.id) {
        this.focusElement(
          `#nextToDoTodayList #${parent.id} span.task-text[contenteditable=true]`
        );
      }
    }
    if (!event.altKey && event.keyCode == 38) {
      // detect jump up
      this.taskJumpUp(parent, "span.task-text[contenteditable=true]");
    }
    if (!event.altKey && event.keyCode == 40) {
      // detect jump down
      this.taskJumpDown(parent, "span.task-text[contenteditable=true]");
    }
  }

  /**
   * Jumps cursor up and below the current task in the pinned task listing
   * modifying order based in localStorage saved pinned tasks.
   * @param event keyboard event to handle
   */
  pinnedTaskKeyDown(event: KeyboardEvent) {
    const parent = event.target["parentNode"];

    if (event.altKey && event.keyCode == 38) {
      // detect move up
      this.taskMoveUp(parent, (t1, t2) =>
        this.interchangePinnedTaskOrder(t1, t2)
      );
      setTimeout(() => {
        this.focusElement(
          `#pinnedToDoTodayList #${parent.id} span.task-text[contenteditable=true]`
        );
      }, 100);
    }
    if (event.altKey && event.keyCode == 40) {
      // detect move down
      this.taskMoveDown(parent, (t1, t2) =>
        this.interchangePinnedTaskOrder(t1, t2)
      );
      if (parent.nextElementSibling && parent.nextElementSibling.id) {
        this.focusElement(
          `#pinnedToDoTodayList #${parent.id} span.task-text[contenteditable=true]`
        );
      }
    }
    if (!event.altKey && event.keyCode == 38) {
      // detect jump up
      this.taskJumpUp(parent, "span.task-text[contenteditable=true]");
    }
    if (!event.altKey && event.keyCode == 40) {
      // detect jump down
      this.taskJumpDown(parent, "span.task-text[contenteditable=true]");
    }
  }

  etaKeyDown(event: KeyboardEvent) {
    const parent = event.target["parentNode"];

    if (!event.altKey && event.keyCode == 38) {
      // detect jump up
      this.taskJumpUp(parent, "span.task-text[contenteditable=true]");
    }
    if (!event.altKey && event.keyCode == 40) {
      // detect jump down
      this.taskJumpDown(parent, "span.task-text[contenteditable=true]");
    }
  }

  markTaskAsDone(
    t: any,
    event: { target: { checked: boolean }; shiftKey: boolean }
  ) {
    if (this.timers[t.tsk_id]) {
      // task is in running state
      // stop time tracking
      this.taskToggleTimeTracking(t, this.getTaskDOMElement(t.tsk_id));
    }
    // if option is enabled: move task time tracking to available slot
    if (this.options.optMoveTimetrackingToAvailableSlotWhenDone) {
      this.adjustTimeTracking(t, false);
    }
    const {
      target: { checked: isChecked },
      shiftKey,
    } = event;
    const useTimeTrackingDate = this.shouldUseTimeTrackingEndDate(t, shiftKey);

    let dateDone: Date = this.services.dateUtils.newDateUpToSeconds();
    if (useTimeTrackingDate && t.tsk_time_history.length) {
      // modifier, use the last time tracking end date record
      dateDone = new Date(
        t.tsk_time_history[t.tsk_time_history.length - 1].tsh_date_end
      );
      // if dateDone is happening before last time tracking date, use last time tracking date instead
      const lastDateDoneEntryFromDay =
        this.lastDateDoneEntryFromDay(DateUtils.addDays(new Date(), 1)) ||
        this.lastDateDoneEntryFromDay(new Date()) ||
        this.lastDateDoneEntryFromDay(DateUtils.addDays(new Date(), -1)) ||
        this.lastDateDoneEntryFromDay(DateUtils.addDays(new Date(), -2)) ||
        this.lastDateDoneEntryFromDay(DateUtils.addDays(new Date(), -3));
      if (dateDone.getTime() < lastDateDoneEntryFromDay.getTime()) {
        dateDone = DateUtils.addSeconds(lastDateDoneEntryFromDay, 1);
      }
    }
    this.updateTask(t.tsk_id, {
      tsk_ctg_status: isChecked ? this.taskStatus.CLOSED : this.taskStatus.OPEN,
      tsk_date_done: dateDone,
    });
    setTimeout(() => {
      this.updateState();
      // remove notification if any
      this.removeScheduledNotification(t);
    }, this.delayOnUpdateState);
  }

  shouldUseTimeTrackingEndDate(t: Task, shiftKeyWasUsed: boolean): boolean {
    const useTimeTrackingDate: boolean =
      shiftKeyWasUsed ||
      (!!this.options.optUseEndTTDateAsDoneDate &&
        t["tsk_time_history"]?.[t["tsk_time_history"].length - 1]
          ?.tsh_date_end &&
        (new Date(
          t["tsk_time_history"]?.[
            t["tsk_time_history"].length - 1
          ]?.tsh_date_end
        ).getTime() > new Date().getTime() ||
          new Date(
            t["tsk_time_history"]?.[
              t["tsk_time_history"].length - 1
            ]?.tsh_date_end
          ).getTime() < DateUtils.dateOnly().getTime()));
    return useTimeTrackingDate;
  }

  taskCheckboxHandler(t: Task, event: Event) {
    this.markTaskAsDone(t, {
      target: { checked: event["target"]["checked"] },
      shiftKey: event["shiftKey"],
    });
  }

  updateTask(tsk_id: string, newData: any) {
    let model = this.tasks.find((e) => e.tsk_id === tsk_id);
    this.services.tasksCore.updateTask(model, newData);
  }

  taskMoveUp(
    current: HTMLElement,
    orderHandler: (tsk_id1: string, tsk_id2: string) => void
  ) {
    // previous <- current | next
    // current | previous | next
    if (current.previousElementSibling && current.previousElementSibling.id) {
      orderHandler(current.id, current.previousElementSibling.id);
      current.parentNode.insertBefore(
        current.previousSibling,
        current.nextSibling
      );
    }
  }

  taskMoveDown(
    current: HTMLElement,
    orderHandler: (tsk_id1: string, tsk_id2: string) => void
  ) {
    // previous | current -> next
    // previous | next | current
    if (current.nextElementSibling && current.nextElementSibling.id) {
      orderHandler(current.id, current.nextElementSibling.id);
      current.parentNode.insertBefore(current.nextSibling, current);
    }
  }

  interchangeTaskOrder(tsk_id1: string, tsk_id2: string) {
    let t1 = this.tasks.find((e) => e.tsk_id === tsk_id1).tsk_order;
    let t2 = this.tasks.find((e) => e.tsk_id === tsk_id2).tsk_order;
    this.updateTask(tsk_id1, { tsk_order: t2 });
    this.updateTask(tsk_id2, { tsk_order: t1 });
  }

  /**
   * Interchanges tasks order and updates it in the next tasks listing.
   * @param tsk_id1 task id to be interchanged
   * @param tsk_id2 task id to be interchanged
   */
  interchangeNextTaskOrder(tsk_id1: string, tsk_id2: string) {
    let currentNextTasks =
      localStorage && JSON.parse(localStorage.getItem("NextTasks"));

    let index1 = currentNextTasks.findIndex((e) => e === tsk_id1);
    let index2 = currentNextTasks.findIndex((e) => e === tsk_id2);
    // swap localStorage array
    [currentNextTasks[index1], currentNextTasks[index2]] = [
      currentNextTasks[index2],
      currentNextTasks[index1],
    ];
    // swap memory array
    [this.nextTasks[0].tasks[index1], this.nextTasks[0].tasks[index2]] = [
      this.nextTasks[0].tasks[index2],
      this.nextTasks[0].tasks[index1],
    ];

    // update localStorage
    localStorage.setItem("NextTasks", JSON.stringify(currentNextTasks));
    this.projectNextTasksDates();
  }

  /**
   * Interchanges tasks order and updates it in the pinned tasks listing.
   * @param tsk_id1 task id to be interchanged
   * @param tsk_id2 task id to be interchanged
   */
  interchangePinnedTaskOrder(tsk_id1: string, tsk_id2: string) {
    let currentPinnedTasks =
      localStorage && JSON.parse(localStorage.getItem("PinnedTasks"));

    let index1 = currentPinnedTasks.findIndex((e) => e === tsk_id1);
    let index2 = currentPinnedTasks.findIndex((e) => e === tsk_id2);
    // swap localStorage array
    [currentPinnedTasks[index1], currentPinnedTasks[index2]] = [
      currentPinnedTasks[index2],
      currentPinnedTasks[index1],
    ];
    // swap memory array
    [this.pinnedTasks[0].tasks[index1], this.pinnedTasks[0].tasks[index2]] = [
      this.pinnedTasks[0].tasks[index2],
      this.pinnedTasks[0].tasks[index1],
    ];

    // update localStorage
    localStorage.setItem("PinnedTasks", JSON.stringify(currentPinnedTasks));
  }

  taskJumpUp(current: any, selector: string) {
    const previous = current.previousElementSibling;
    if (previous && previous.querySelector(selector)) {
      previous.querySelector(selector).focus();
    } else {
      // pivot if there's hidden elements until there's not a hidden element
      let recordPivot = current.parentNode.parentNode.previousElementSibling;
      while (
        recordPivot &&
        recordPivot.classList.contains("hidden") &&
        recordPivot.previousElementSibling
      ) {
        recordPivot = recordPivot.previousElementSibling;
      }

      let pivot = recordPivot && recordPivot.lastElementChild.lastElementChild;
      while (pivot && pivot.classList.contains("hidden")) {
        pivot = pivot.previousElementSibling;
      }
      if (pivot && pivot.querySelector(selector)) {
        pivot.querySelector(selector).focus();
      } else {
        if (this.showBatchAdd) {
          this.focusElement("textarea[name=tsk_multiple_name]");
        } else {
          this.focusElement("input[name=tsk_name]");
        }
      }
    }
  }

  taskRecordJumpUp(current: any, selector: string) {
    let previous = current.parentNode.parentNode.previousElementSibling;

    while (
      previous &&
      previous.classList.contains("hidden") &&
      previous.previousElementSibling
    ) {
      previous = previous.previousElementSibling;
    }

    if (
      previous &&
      previous.firstElementChild.nextElementSibling.querySelector(selector)
    ) {
      previous.firstElementChild.nextElementSibling
        .querySelector(selector)
        .focus();
    } else {
      if (this.showBatchAdd) {
        this.focusElement("textarea[name=tsk_multiple_name]");
      } else {
        this.focusElement("input[name=tsk_name]");
      }
    }
  }

  focusElement(selector: string, delay: number = 0) {
    const focus = () => document.querySelector(selector)["focus"]();
    if (delay > 0) {
      setTimeout(focus, delay);
    }
    focus();
  }

  taskJumpDown(current: any, selector: string) {
    const next = current.nextElementSibling;
    if (
      next &&
      !next.classList.contains("hidden") && // skips hidden ones
      next.querySelector(selector)
    ) {
      next.querySelector(selector).focus();
    } else {
      let nextRecord = current.parentNode.parentNode.nextElementSibling;

      while (
        nextRecord &&
        nextRecord.classList.contains("hidden") &&
        nextRecord.nextElementSibling
      ) {
        nextRecord = nextRecord.nextElementSibling;
      }

      if (nextRecord && nextRecord.querySelector(selector)) {
        nextRecord.querySelector(selector).focus();
      }
    }
  }

  taskRecordJumpDown(current: any, selector: string) {
    let nextRecord = current.parentNode.parentNode.nextElementSibling;

    while (
      nextRecord &&
      nextRecord.classList.contains("hidden") &&
      nextRecord.nextElementSibling
    ) {
      nextRecord = nextRecord.nextElementSibling;
    }

    if (
      nextRecord &&
      nextRecord.firstElementChild.nextElementSibling.querySelector(selector)
    ) {
      nextRecord.firstElementChild.nextElementSibling
        .querySelector(selector)
        .focus();
    }
  }

  taskToggleTimeTracking(task: any, dom: HTMLElement) {
    if (task.tsk_ctg_in_process === 1) {
      const nextTasks: Task[] = this.nextTasks[0].tasks;
      const lastInProgressIndex = nextTasks.findLastIndex(
        (e: Task) => e.tsk_ctg_in_process === 2
      );

      // not in progress
      task.tsk_ctg_in_process = 2;
      this.updateTask(task.tsk_id, {
        tsk_ctg_in_process: 2,
      });
      // show timer
      this.showTimer(task, dom);
      this.services.tasksCore.addTimeTracking(task);

      if (!task["inNextToDo"]) {
        // task is not in Next To Do, add it
        this.asNextToDo(task, true);
      }

      // ensure this is at the top, following any other in progress task
      const index = nextTasks.findIndex((e: Task) => e.tsk_id === task.tsk_id);

      // set task after last in progress
      if (lastInProgressIndex === -1) {
        // nothing in progress, task is not the first, we move it to top
        if (index > 0) {
          nextTasks.splice(index, 1);
          nextTasks.unshift(task);
        }
        // we do nothing is task is already on top
      } else {
        // something is in progress, move it after last in progress task
        if (lastInProgressIndex !== index) {
          nextTasks.splice(index, 1);
          nextTasks.splice(lastInProgressIndex + 1, 0, task);
        }
        // else task is already where it should be
      }
      this.projectNextTasksDates();
      // set focus
      this.focusElement(
        `#nextToDoTodayList #${task.tsk_id} span.task-text[contenteditable=true]`,
        100
      );

      localStorage.setItem(
        "NextTasks",
        JSON.stringify(nextTasks.map((e: Task) => e.tsk_id))
      );
    } else {
      // already in progress
      task.tsk_ctg_in_process = 1;
      this.updateTask(task.tsk_id, {
        tsk_ctg_in_process: 1,
      });
      // hide timer
      this.hideTimer(task, dom);
      this.services.tasksCore.stopTimeTracking(task);
      // this.calculateTotalTimeSpentToday();
    }
  }

  showTimer(task: any, dom: HTMLElement) {
    let timer: number = 0;
    let start: Date = this.services.dateUtils.newDateUpToSeconds();

    // if task was running previously, get current running time
    if (task.tsk_time_history.length > 0) {
      let h = task.tsk_time_history[task.tsk_time_history.length - 1];
      if (h.tsh_time_spent === 0) {
        h.tsh_date_start = new Date(h.tsh_date_start);
        start = h.tsh_date_start;
        timer = this.elapsedTime(
          h.tsh_date_start,
          this.services.dateUtils.newDateUpToSeconds()
        );
      }
    }

    // dom.querySelector("span[contenteditable=true]").classList.add("task-in-process");
    let formatTimerString = (timer: number) => {
      if (this.timerModeRemaining) {
        return (
          "R-" +
          this.formatTime(
            parseInt(task.tsk_estimated_duration) * 60 -
              parseInt(task.tsk_total_time_spent) -
              timer
          )
        );
      } else {
        return this.formatTime(timer);
      }
    };

    let calcTimer = (start: Date) => {
      return this.elapsedTime(
        start,
        this.services.dateUtils.newDateUpToSeconds()
      );
    };

    let watch = setInterval(() => {
      let h = task.tsk_time_history[task.tsk_time_history.length - 1];
      timer = calcTimer(new Date(h.tsh_date_start));
      this.timers[task.tsk_id].timerString = formatTimerString(timer);
      if (
        task.tsk_estimated_duration * 60 - 60 <
          task.tsk_total_time_spent + timer &&
        !this.timers[task.tsk_id].burnoutNotified
      ) {
        this.timers[task.tsk_id].burnoutNotified = true;
        if (
          this.tasks.find((t) => t.tsk_id === task.tsk_id).tsk_ctg_status ===
          this.taskStatus.OPEN
        ) {
          this.notification({
            body: `Task "${task.tsk_name}" is about to exceed estimation!`,
            hideIn: 60000,
            useVoice: true,
          });
        }
      }
    }, 1000);

    this.timers[task.tsk_id] = {};
    this.timers[task.tsk_id].timerString = formatTimerString(timer);
    this.timers[task.tsk_id].watch = watch;
    this.timers[task.tsk_id].burnoutNotified = false;
  }

  hideTimer(task: any, dom: HTMLElement) {
    if (this.timers[task.tsk_id]) {
      clearInterval(this.timers[task.tsk_id].watch);
      this.timers[task.tsk_id] = undefined;
    }
    // dom.querySelector("span[contenteditable=true]").classList.remove("task-in-process");
  }

  // TODO: replace with service's method
  elapsedTime(date1: Date, date2: Date): number {
    return this.services.tasksCore.elapsedTime(date1, date2);
    //return Math.abs(date1.getTime() - date2.getTime()) / 1000;
  }

  formatTime(elapsed: number, format: String = undefined): String {
    // time in seconds
    let hr: number = Math.floor(elapsed / (60 * 60));
    let min: number = Math.floor((elapsed - hr * 60 * 60) / 60);
    let sec: number = Math.round(elapsed - hr * 60 * 60 - min * 60);
    let str = "";
    if (format === "hr:min:sec" || format === undefined) {
      if (hr === 0) {
        // only min:sec
        str += min > 9 ? min : "0" + min;
        str += ":" + (sec > 9 ? sec : "0" + sec);
      } else {
        str += hr > 9 ? hr : "0" + hr;
        str += ":" + (min > 9 ? min : "0" + min);
        str += ":" + (sec > 9 ? sec : "0" + sec);
      }
    }
    if (format === "#h#m") {
      if (hr === 0) {
        str = `${min}m`;
      } else {
        if (min === 0) {
          str = `${hr}h`;
        } else {
          str = `${hr}h${min}m`;
        }
      }
    }
    return str;
  }

  deleteTimeTracking(t: any, h: any) {
    let spent: number = 0;

    t.tsk_time_history.forEach((tt: any) => {
      if (tt.tsh_num_secuential < h.tsh_num_secuential) {
        spent += tt.tsh_time_spent;
      }
      if (tt.tsh_num_secuential > h.tsh_num_secuential) {
        tt.tsh_num_secuential -= 1;
        spent += tt.tsh_time_spent;
      }
    });

    t.tsk_time_history.splice(h.tsh_num_secuential - 1, 1);
    t.tsk_total_time_spent = spent;
    // this.calculateTotalTimeSpentToday();
  }

  editTimeTracking(h: any, which: number, event: KeyboardEvent) {
    let newValue: string = event.target["textContent"];
    let field: string = which === 1 ? "tsh_date_start" : "tsh_date_end";
    let oldValue: string = h[field];
    let task: any = this.tasks.find((t: any) => t.tsk_id === h.tsh_id);

    if (
      newValue.length !== 19 ||
      new Date(newValue).getTime() === new Date(oldValue).getTime()
    ) {
      return false;
    }

    if (which !== 1 && task.tsk_ctg_in_process === 2) {
      return false;
    }

    let data: any = {};
    data[field] = new Date(newValue);
    this.updateTaskTimeTracking(h.tsh_id, h.tsh_num_secuential, data);

    if (this.timers[h.tsh_id]) {
      let dom: HTMLElement = this.getTaskDOMElement(task.tsk_id);
      this.hideTimer(task, dom);
      this.showTimer(task, dom);
    }
    // this.calculateTotalTimeSpentToday();
  }

  updateTaskTimeTracking(
    tsh_id: string,
    tsh_num_secuential: number,
    newData: any
  ) {
    let model = this.tasks.find((e) => e.tsk_id === tsh_id);
    if (model) {
      model = model.tsk_time_history.find(
        (h: any) => h.tsh_num_secuential === tsh_num_secuential
      );
    }
    this.services.tasksCore.updateTaskTimeTracking(model, newData);
  }

  getTaskDOMElement(tsk_id: string): HTMLElement {
    let dom: HTMLElement = document.querySelector(
      `div[id="${tsk_id}"] span`
    ).parentElement;
    return dom;
  }

  inputKeyUpHandler(event: KeyboardEvent, { showBatchAdd = false }) {
    if (event.keyCode === 40 && !this.showBatchAdd) {
      // Down arrow
      this.focusElement("span[contenteditable=true]");
    }
    if (event.keyCode == 113 || showBatchAdd) {
      // detect "F2" = toggle Batch Add
      this.showBatchAdd = !this.showBatchAdd;

      autogrowSetup({ componentWillBeVisible: this.showBatchAdd });

      this.viewETABeforeAdd = false;
      setTimeout(() => {
        if (this.showBatchAdd) {
          this.focusElement("textarea[name=tsk_multiple_name]");
        } else {
          this.focusElement("input[name=tsk_name]");
        }
      }, 100);
    }
    // interpret ETAs and sum them up by record
    let t: any;
    let totalETA = 0;
    let totalPerRecord = <any>[];
    let value: string = event.target["value"];
    // console.log('event',event);
    // console.log(value.split('\n'));
    if (value) {
      let totalTasksWritten = 0;
      value.split("\n").forEach((text: string) => {
        if (!text.startsWith("//") && text !== "") {
          t = this.services.tasksCore.parseTask(
            {
              tsk_date_add: this.services.dateUtils.newDateUpToSeconds(),
              tsk_date_due: this.services.dateUtils.newDateUpToSeconds(),
              tsk_name: text,
            },
            this.options
          );
          if (!t.tsk_id_record) {
            t.tsk_id_record = "general";
          }
          if (totalPerRecord.find((r: any) => r.record === t.tsk_id_record)) {
            totalPerRecord.find(
              (r: any) => r.record === t.tsk_id_record
            ).totalETA += t.tsk_estimated_duration || 0;
          } else {
            totalPerRecord.push({
              record: t.tsk_id_record,
              totalETA: t.tsk_estimated_duration || 0,
            });
          }
          totalETA += t.tsk_estimated_duration || 0;
          totalTasksWritten++;
        }
      });
      // Calculate totals in percentage form
      Object.keys(totalPerRecord).forEach((e) => {
        totalPerRecord[e].totalETAPercentage =
          totalETA === 0
            ? 0
            : Math.round((totalPerRecord[e].totalETA * 100) / totalETA);
      });
      this.viewETABeforeAdd = true;
      this.state.beforeAddETA = totalPerRecord;
      this.state.beforeAddTotalETA = totalETA;
      this.state.beforeAddTotalTasksWritten = totalTasksWritten;
    } else {
      this.viewETABeforeAdd = false;
    }
  }

  toggleViewPostponed() {
    this.viewPostponed = !this.viewPostponed;
  }

  toggleViewOptions() {
    this.viewOptions = !this.viewOptions;
  }

  ageFontSizeNormalization(t: any) {
    // range from 8px to 80px
    let age = this.taskAgeRaw(t) / 2;
    return age >= 72 ? 80 : age + 8;
  }

  taskAgeRaw(t: any) {
    return this.services.tasksCore.elapsedDays(
      new Date(t.tsk_date_due),
      new Date()
    );
  }

  taskAge(t: any) {
    if (!t.tsk_date_due) {
      return "(n/a)";
    }
    let diff = this.services.tasksCore.elapsedDays(
      new Date(t.tsk_date_due),
      new Date()
    );
    return `${
      diff > 1 ? "(" + diff + "d ago)" : diff === 1 ? "(yesterday)" : ""
    }`;
  }

  taskAgeClass(t: any) {
    let classes = ["task-age-0", "task-age-1", "task-age-2", "task-age-10"];
    if (!t.tsk_date_due) {
      return classes[0];
    }
    let diff = this.services.tasksCore.elapsedDays(
      new Date(t.tsk_date_due),
      new Date()
    );
    if (diff <= 2) {
      return classes[diff];
    }
    if (2 < diff && diff < 10) {
      return classes[2];
    }
    if (diff >= 10) {
      return classes[3];
    }
    return "";
  }

  deleteTasks() {
    this.services.tasksCore.deleteTasks();
    this.updateState();
  }

  /*calculateTotalTimeSpentToday() {
    let today = new Date();
    let today0 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let tomorrow0 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    this.state.allClosedTimeTrackingToday = <any>[];
    this.state.allOpenTimeTrackingToday = <any>[];
    this.tasks.filter(t => {
      t.tsk_time_history.filter((h: any) => {
        if (
          today0 <= new Date(h.tsh_date_start) &&
          new Date(h.tsh_date_start) <= tomorrow0
        ) {
          if (t.tsk_ctg_status === this.taskStatus.CLOSED) {
            this.state.allClosedTimeTrackingToday.push(h);
          } else {
            this.state.allOpenTimeTrackingToday.push(h);
          }
        }
      });
    });
    let spent = 0;
    this.state.allClosedTimeTrackingToday.forEach((h: any) => {
      spent += h.tsh_time_spent;
    });
    this.state.totalTimeSpentTodayOnClosedTasks = spent;
    this.state.totalTimeSpentToday = 0;
    this.state.totalTimeSpentToday += spent;
    spent = 0;
    this.state.allOpenTimeTrackingToday.forEach((h: any) => {
      spent += h.tsh_time_spent;
    });
    this.state.totalTimeSpentTodayOnOpenTasks = spent;
    this.state.totalTimeSpentToday += spent;
  }*/

  /**
   * @deprecated Now the task has Alt + o to move a task to OPEN
   * @param t
   */
  setOpen(t: Task) {
    const isDateDueNotSet: boolean = !t.tsk_date_due;
    const changes: any = {
      tsk_ctg_status: this.taskStatus.OPEN,
    };
    if (isDateDueNotSet) {
      // if date due is not set, we set it as today's time tracking can take it into account
      // if it as already set, then we leave it as it is, because it was tracked on that date
      changes.tsk_date_due = this.dateUtils.dateOnly(new Date());
    }
    this.updateTask(t.tsk_id, changes);
    setTimeout(() => {
      this.updateState();
    }, 1000);
  }

  taskEstimatedDurationEdit(t: any, event: KeyboardEvent) {
    let newDuration: number = this.services.tasksCore.parseTime(
      event.target["textContent"]
    );
    if (newDuration !== t.tsk_estimated_duration) {
      // if schedule date end is set, update it as well
      let newEnd = t.tsk_schedule_date_end;
      if (t.tsk_schedule_date_end) {
        newEnd = new Date(
          new Date(t.tsk_schedule_date_start).getTime() +
            newDuration * 60 * 1000
        );
      }
      this.updateTask(t.tsk_id, {
        tsk_estimated_duration: newDuration,
        tsk_schedule_date_end: newEnd,
      });
    }
  }

  commandOnTask(t: any, event: KeyboardEvent) {
    if (t.tsk_name !== event.target["textContent"]) {
      this.updateTask(t.tsk_id, {
        tsk_name: event.target["textContent"],
      });
    }

    let command = event.target["textContent"];
    let originalTask = "";
    if (command.indexOf("--") !== -1) {
      // postpone
      command = command.substring(command.indexOf("--") + 2);
      originalTask = t.tsk_name.replace(" --" + command, "");
      console.log("command:", command);
      if (command.startsWith("pos")) {
        // --pos 17:30
        // --pos now +2h30m
        // --pos tomorrow 09:00
        // --pos 2016-12-31 23:59
        let data = command.substring(4);
        let s = this.services.tasksCore.parseDatetime(data);
        console.log("date parsed:", s);
        this.updateTask(t.tsk_id, {
          tsk_name: originalTask,
          tsk_date_view_until: s.date_start,
        });
        this.updateState();
      }
    }
    if (command.startsWith("->[")) {
      // move to other record
      command = command.substring(
        command.indexOf("->[") + 3,
        command.indexOf("]", command.indexOf("->[") + 3)
      );
      originalTask = t.tsk_name.replace("->[" + command + "] ", "");
      originalTask = t.tsk_name.replace("->[" + command + "]", "");
      console.log("command new list:", command);
      if (command) {
        this.updateTask(t.tsk_id, {
          tsk_name: originalTask,
          tsk_id_record: command,
        });
        this.updateState();
      }
    }
    if (command.indexOf("%[") !== -1) {
      // set schedule
      let endPosition =
        command.indexOf("]", command.indexOf("%[")) === -1
          ? command.length
          : command.indexOf("]", command.indexOf("%["));
      command = command.substring(command.indexOf("%[") + 2, endPosition);
      let s = this.services.tasksCore.parseDatetime(command);
      originalTask = t.tsk_name.replace("%[" + command + "] ", "");
      originalTask = t.tsk_name.replace(" %[" + command + "]", "");
      originalTask = t.tsk_name.replace("%[" + command + "]", "");
      this.updateTask(t.tsk_id, {
        tsk_name: originalTask,
        tsk_schedule_date_start: s.date_start,
        tsk_schedule_date_end: s.date_end,
        tsk_estimated_duration: s.duration,
      });
      this.updateState();
    }
    if (command.indexOf("#[") !== -1) {
      // set schedule
      let endPosition =
        command.indexOf("]", command.indexOf("#[")) === -1
          ? command.length
          : command.indexOf("]", command.indexOf("#["));
      command = command.substring(command.indexOf("#[") + 2, endPosition);

      originalTask = t.tsk_name.replace("#[" + command + "] ", "");
      originalTask = t.tsk_name.replace(" #[" + command + "]", "");
      originalTask = t.tsk_name.replace("#[" + command + "]", "");
      this.updateTask(t.tsk_id, {
        tsk_name: originalTask,
        tsk_tags: command,
      });
      this.updateState();
    }
    if (command.indexOf("http://") !== -1) {
      // set url
      this.services.tasksCore.doThisWithAToken(
        t,
        (t: Task, expression: string) => {
          this.updateTask(t.tsk_id, {
            tsk_name: t.tsk_name,
            tsk_url: "http://" + expression,
          });
          this.updateState();
        },
        "http://"
      );
    }
    if (command.indexOf("https://") !== -1) {
      // set url
      this.services.tasksCore.doThisWithAToken(
        t,
        (t: Task, expression: string) => {
          this.updateTask(t.tsk_id, {
            tsk_name: t.tsk_name,
            tsk_url: "https://" + expression,
          });
          this.updateState();
        },
        "https://"
      );
    }
    if (command.indexOf("$[") !== -1) {
      // set url
      this.services.tasksCore.doThisWithAToken(
        t,
        (t: Task, expression: string) => {
          this.updateTask(t.tsk_id, {
            tsk_name: t.tsk_name,
            tsk_qualifiers: `${t.tsk_qualifiers}, ${expression}`,
          });
          this.updateState();
        },
        "$[",
        "]"
      );
    }

    const replacements = {
      "[/MONTH-YEAR]": () =>
        `${DateUtils.getMonthNameSpanish(
          DateUtils.getCurrentMonth()
        )} ${DateUtils.getCurrentYear()}`,
      "[/EN-MONTH-YEAR]": () =>
        `${DateUtils.getMonthName(
          DateUtils.getCurrentMonth()
        )} ${DateUtils.getCurrentYear()}`,
      "[/PREV-MONTH-YEAR]": () =>
        `${DateUtils.getMonthNameSpanish(
          DateUtils.getCurrentMonth() === 1
            ? 12
            : DateUtils.getCurrentMonth() - 1
        )} ${DateUtils.getCurrentYear()}`,
      "[/EN-PREV-MONTH-YEAR]": () =>
        `${DateUtils.getMonthName(
          DateUtils.getCurrentMonth() === 1
            ? 12
            : DateUtils.getCurrentMonth() - 1
        )} ${DateUtils.getCurrentYear()}`,
      "[/NEXT-MONTH-YEAR]": () =>
        `${DateUtils.getMonthNameSpanish(
          DateUtils.getCurrentMonth() === 12
            ? 1
            : DateUtils.getCurrentMonth() + 1
        )} ${DateUtils.getCurrentYear()}`,
      "[/EN-NEXT-MONTH-YEAR]": () =>
        `${DateUtils.getMonthName(
          DateUtils.getCurrentMonth() === 12
            ? 1
            : DateUtils.getCurrentMonth() + 1
        )} ${DateUtils.getCurrentYear()}`,
    };

    Object.keys(replacements).forEach((token) => {
      if (command.indexOf(token) !== -1) {
        this.updateTask(t.tsk_id, {
          tsk_name: t.tsk_name.replace(token, replacements[token](t)),
        });
        this.updateState();
      }
    });

    // token to look up and method that returns the changes to apply
    // * important: remember these tokens apply just one at a time
    // and it should be the last thing in the task name to work properly
    const tokens = {
      "[-LINK]": (t: Task) => ({
        // remove url link
        tsk_name: t.tsk_name,
        tsk_url: null,
      }),
      "[-SCHEDULE]": (t: Task) => ({
        // remove schedule
        tsk_name: t.tsk_name,
        tsk_schedule_date_start: null,
        tsk_schedule_date_end: null,
      }),
      "[-TAGS]": (t: Task) => ({
        // remove tags
        tsk_name: t.tsk_name,
        tsk_tags: "",
      }),
      "[-QUALIFIERS]": (t: Task) => ({
        // remove qualifiers
        tsk_name: t.tsk_name,
        tsk_qualifiers: "",
      }),
    };

    // Iterate tokens and apply changes
    Object.keys(tokens).forEach((token) => {
      if (command.indexOf(token) !== -1) {
        this.services.tasksCore.doThisWithAToken(
          t,
          (t: Task, expression: string) => {
            this.updateTask(t.tsk_id, tokens[token](t));
            this.updateState();
            // remove notification if any
            if (token === "[-SCHEDULE]") {
              this.removeScheduledNotification(t);
            }
          },
          token
        );
      }
    });
  }

  notification({
    title = "Tasks",
    body,
    icon = "favicon.ico",
    hideIn = 0,
    useVoice = false,
    minimalUI = false,
  }) {
    // send in-window notification
    this.notificationService.notifyWithOptions(body, {
      title,
      hideIn,
      minimalUI: true,
      voice: useVoice,
    });
  }

  setUnpostpone(t: any) {
    this.updateTask(t.tsk_id, {
      tsk_date_view_until: this.services.dateUtils.newDateUpToSeconds(),
    });
    if (this.state.postponedTasks.length === 0) {
      this.viewPostponed = false;
    }
    this.updateState();
  }

  scheduleNotificationsForStartingTasks() {
    let now = this.services.dateUtils.newDateUpToSeconds();
    let tomorrow0 = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    if (!this.state.startingTasksSchedule) {
      this.state.startingTasksSchedule = [];
    }
    this.tasks
      .filter((t) => {
        return (
          t.tsk_ctg_status !== this.taskStatus.CLOSED &&
          (t.tsk_schedule_date_start
            ? now < new Date(t.tsk_schedule_date_start) &&
              new Date(t.tsk_schedule_date_start) < tomorrow0
            : false)
        );
      })
      .forEach((t) => {
        let diff = this.services.tasksCore.elapsedTime(
          now,
          new Date(t.tsk_schedule_date_start)
        );
        diff = diff - 5 * 60; // date minus 5 minutes
        // validate if there is no current schedule set
        let found = this.state.startingTasksSchedule.find(
          (s: any) => s.task.tsk_id == t.tsk_id && s.timeoutHandler != -1
        );
        if (found) {
          if (
            new Date(found.task.tsk_schedule_date_start) !=
            new Date(t.tsk_schedule_date_start)
          ) {
            clearTimeout(found.timeoutHandler);
            found.timeoutHandler = -1;
          } else {
            return false; // date is the same, do nothing
          }
        }
        let timeout = setTimeout(() => {
          this.notification({
            body: `Task "${t.tsk_name}" is about to start!`,
            hideIn: 5000 * 60,
            useVoice: true,
          });
          // second reminder on time
          setTimeout(() => {
            this.notification({
              body: `Task "${t.tsk_name}" is starting now!`,
              hideIn: 1000 * 60,
              useVoice: true,
            });
          }, 5000 * 60);
        }, diff * 1000);
        console.log("schedule in " + this.formatTime(diff), t);
        this.state.startingTasksSchedule.push({
          task: t,
          timeoutHandler: timeout,
        });
      });
  }

  taskCancel(t: any) {
    this.updateTask(t.tsk_id, {
      tsk_ctg_status: this.taskStatus.CANCELLED,
    });
    this.updateState();
    console.log("cancelled task", t);
  }

  weekStats() {
    let mondayDate = this.lastMonday(new Date(2016, 11, 15));
    let dayTasks = <any>[];
    let currentDay = mondayDate;
    let tomorrow = this.addDays(currentDay, 1);
    let today = this.services.tasksCore.dateOnly(
      this.services.dateUtils.newDateUpToSeconds()
    );
    let dailyCount = <any>[];
    let estimatedTotalPerDay = 0;
    let spentTotalPerDay = 0;

    while (currentDay <= today) {
      dayTasks = this.tasks.filter(
        (t) =>
          new Date(t.tsk_date_done) > currentDay &&
          new Date(t.tsk_date_done) < tomorrow
      );
      estimatedTotalPerDay = 0;
      spentTotalPerDay = 0;

      dayTasks.forEach((t: any) => {
        estimatedTotalPerDay += t.tsk_estimated_duration;
        spentTotalPerDay += t.tsk_total_time_spent;
      });

      if (spentTotalPerDay !== 0) {
        dailyCount.push({
          date: currentDay,
          tasksDone: dayTasks.length,
          estimated: estimatedTotalPerDay,
          timeSpent: spentTotalPerDay,
          productivity:
            spentTotalPerDay === 0
              ? 0
              : Math.round(
                  (estimatedTotalPerDay * 60 * 100) / spentTotalPerDay
                ) / 100,
          realTimeElapsed: this.elapsedTime(
            this.firstTTEntryFromDay(currentDay),
            this.lastTTEntryFromDay(currentDay)
          ),
        });
      }

      currentDay = this.addDays(currentDay, 1);
      tomorrow = this.addDays(currentDay, 1);
    }

    this.reports.week = dailyCount;
  }

  lastMonday(from: Date) {
    let base: Date = this.services.tasksCore.dateOnly(from);
    while (base.getDay() !== 1) {
      base = this.addDays(base, -1);
    }
    return base;
  }

  addDays(base: Date, days: number) {
    return new Date(base.getTime() + days * 86400000);
  }

  taskQualifiersEdit(task: any, event: KeyboardEvent) {
    let newQualifiers = event.target["textContent"];

    if (task.tsk_qualifiers !== newQualifiers) {
      this.updateTask(task.tsk_id, {
        tsk_qualifiers: newQualifiers,
      });
      // this.updateState();
    }
  }

  firstTTEntryFromDay(date: Date) {
    let day0 = this.services.tasksCore.dateOnly(date);
    let nextDay0 = this.addDays(day0, 1);
    let firstDate: Date = nextDay0;
    let tasksOfTheDay = this.tasks.filter((t: any) => {
      return (
        new Date(t.tsk_date_done) >= day0 &&
        new Date(t.tsk_date_done) < nextDay0
      );
    });
    tasksOfTheDay.forEach((t: any) => {
      if (t.tsk_time_history.length) {
        t.tsk_time_history.forEach((h: any) => {
          if (
            new Date(h.tsh_date_start) < firstDate &&
            day0 < new Date(h.tsh_date_start)
          ) {
            firstDate = new Date(h.tsh_date_start);
          }
        });
      }
    });
    if (firstDate === nextDay0) {
      return null;
    }
    return firstDate;
  }

  lastTTEntryFromDay(date: Date) {
    let day0 = this.services.tasksCore.dateOnly(date);
    let nextDay0 = this.addDays(day0, 1);
    let lastDate: Date = day0;
    let tasksOfTheDay = this.tasks.filter((t: any) => {
      return (
        new Date(t.tsk_date_done) >= day0 &&
        new Date(t.tsk_date_done) < nextDay0 &&
        t.tsk_ctg_status === TaskStatus.CLOSED
      );
    });
    tasksOfTheDay.forEach((t: any) => {
      if (t.tsk_time_history.length) {
        t.tsk_time_history.forEach((h: any) => {
          if (
            new Date(h.tsh_date_end) > lastDate &&
            new Date(h.tsh_date_end) < nextDay0
          ) {
            lastDate = new Date(h.tsh_date_end);
          }
        });
      }
    });
    if (lastDate === day0) {
      return null;
    }
    return lastDate;
  }

  lastDateDoneEntryFromDay(date: Date) {
    let day0 = this.services.tasksCore.dateOnly(date);
    let nextDay0 = this.addDays(day0, 1);
    let lastDate: Date = day0;
    let tasksOfTheDay = this.tasks.filter((t: any) => {
      return (
        new Date(t.tsk_date_done).getTime() >= day0.getTime() &&
        new Date(t.tsk_date_done).getTime() < nextDay0.getTime() &&
        t.tsk_ctg_status === TaskStatus.CLOSED
      );
    });
    tasksOfTheDay.forEach((t: any) => {
      if (t.tsk_date_done) {
        if (
          new Date(t.tsk_date_done).getTime() > lastDate.getTime() &&
          new Date(t.tsk_date_done).getTime() < nextDay0.getTime()
        ) {
          lastDate = new Date(t.tsk_date_done);
        }
      }
    });
    if (lastDate === day0) {
      return null;
    }
    return lastDate;
  }

  taskToBacklog(t: Task) {
    const isDateDueToday: boolean =
      this.dateUtils.dateOnly(new Date(t.tsk_date_due)).getTime() ===
      this.dateUtils.dateOnly(new Date()).getTime();
    const changes: any = {
      tsk_ctg_status: this.taskStatus.BACKLOG,
    };
    if (isDateDueToday) {
      // if date due is today, when moving to backlog set it as null
      // to make it not count on today's timetracking and have the task there
      changes.tsk_date_due = null;
    }
    this.updateTask(t.tsk_id, changes);
    this.updateState();
  }

  dayDistribution() {
    let table = <any>[];
    let records = <any>[];
    let closedTodayTasks = this.state.closedTodayTasks;

    if (closedTodayTasks.length === 0) {
      // if there are no tasks for Today, try Yesterday
      // it will work until there's closed tasks for Today
      closedTodayTasks = this.state.closedYesterdayTasks;
    }

    closedTodayTasks.forEach((t: any) => {
      if (table.indexOf(t.tsk_id_record) === -1) {
        table.push(t.tsk_id_record);
        records.push({
          record: t.tsk_id_record,
          eta: 0,
          real: 0,
          percentageEta: 0,
          percentageReal: 0,
        });
      }
    });

    let rec: any = null;
    let totalEta: number = 0;
    let totalReal: number = 0;
    closedTodayTasks.forEach((t: any) => {
      rec = records.find((r: any) => r.record === t.tsk_id_record);
      if (rec) {
        rec.eta += t.tsk_estimated_duration;
        rec.real += t.tsk_total_time_spent;
        totalEta += t.tsk_estimated_duration;
        totalReal += t.tsk_total_time_spent;
      }
    });

    // order by total real
    records = records.sort((a: any, b: any) => {
      return a.real < b.real ? 1 : -1;
    });

    // percentage
    records.forEach((r: any) => {
      r.percentageEta = Math.round((r.eta * 100) / totalEta) / 100;
      r.percentageReal = Math.round((r.real * 100) / totalReal) / 100;
    });

    if (records.length) {
      this.reports.dayDistribution = records;
      this.viewData.dayDistributionChart.chartData = [
        { data: records.map(({ eta }) => eta), label: "ETA" },
        {
          data: records.map(({ real }) => Math.round(real / 60)),
          label: "Real",
        },
      ];
      this.viewData.dayDistributionChart.chartLabels = records.map(
        ({ record, percentageEta }) =>
          `${record} (${Math.round(percentageEta * 100)}%)`
      );
    }
  }

  editDateDone(t: any, event: KeyboardEvent) {
    let newValue: string = event.target["textContent"];
    let oldValue: string = t.tsk_date_done;

    if (
      newValue.length !== 19 ||
      new Date(newValue).getTime() === new Date(oldValue).getTime()
    ) {
      return false;
    }

    this.updateTask(t.tsk_id, {
      tsk_date_done: new Date(newValue),
    });
  }

  optionsMessage(message: string) {
    document.querySelector("#optionsMessages").innerHTML = message;
  }

  // formatTags(tags: string){
  //     if (tags){
  //         return "#" + tags.replace(/\s/g," #");
  //     }
  //     return "";
  // }

  showTagStats(tag: string) {
    let tasks = this.tasks.filter((t) => t.tsk_tags.indexOf(tag) !== -1);
    this.tagInfo.display = true;
    this.tagInfo.tasks = tasks;
    // this.tagInfo.tasksOpen = tasks.filter(t => t.tsk_ctg_status === this.taskStatus.OPEN || t.tsk_ctg_status === this.taskStatus.BACKLOG);
    // this.tagInfo.tasksClosed = tasks.filter(t => t.tsk_ctg_status === this.taskStatus.CLOSED || t.tsk_ctg_status === this.taskStatus.CANCELLED);

    this.tagInfo.tasksOpenTotalEstimated = 0;
    this.tagInfo.tasksOpenTotalSpent = 0;
    this.tagInfo.tasksClosedTotalEstimated = 0;
    this.tagInfo.tasksClosedTotalSpent = 0;
    tasks.forEach((t) => {
      if (
        t.tsk_ctg_status === this.taskStatus.OPEN ||
        t.tsk_ctg_status === this.taskStatus.BACKLOG
      ) {
        this.tagInfo.tasksOpenTotalEstimated += t.tsk_estimated_duration;
        this.tagInfo.tasksOpenTotalSpent += t.tsk_total_time_spent;
      }
      if (
        t.tsk_ctg_status === this.taskStatus.CLOSED ||
        t.tsk_ctg_status === this.taskStatus.CANCELLED
      ) {
        this.tagInfo.tasksClosedTotalEstimated += t.tsk_estimated_duration;
        this.tagInfo.tasksClosedTotalSpent += t.tsk_total_time_spent;
      }
    });
  }

  statusText(status: number) {
    let r = "";
    switch (status) {
      case this.taskStatus.BACKLOG:
        r = "BACKLOG";
        break;
      case this.taskStatus.OPEN:
        r = "OPEN";
        break;
      case this.taskStatus.CANCELLED:
        r = "CANCELLED";
        break;
      case this.taskStatus.CLOSED:
        r = "CLOSED";
        break;
    }
    return r;
  }

  markTaskAs(t: any, qualifier: string) {
    let task = this.tasks.find((e: any) => {
      return e.tsk_id === t.tsk_id;
    });
    let qualifiers = task.tsk_qualifiers;
    if (qualifiers.indexOf(qualifier) === -1) {
      // not present, add it
      qualifiers = qualifiers ? qualifiers + "," + qualifier : qualifier;
    } else {
      // present, remove it
      qualifiers = qualifiers
        .replace("," + qualifier, "")
        .replace(qualifier + ",", "")
        .replace(qualifier, "");
    }
    this.updateTask(t.tsk_id, {
      tsk_qualifiers: qualifiers,
    });
  }

  clearQualifiers(t: Task) {
    this.updateTask(t.tsk_id, {
      tsk_qualifiers: "",
    });
  }

  isOnline() {
    return navigator.onLine;
  }

  taskTagsEdit(task: any, event: KeyboardEvent) {
    let newData = event.target["textContent"];

    if (task.tsk_tags !== newData) {
      this.updateTask(task.tsk_id, {
        tsk_tags: newData,
      });
      this.updateState();
    }
  }

  registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator["serviceWorker"]
        .register("../service-worker.js")
        .then(function (registration: any) {
          console.log("Service Worker Registered");
          return registration.sync.getTags();
        })
        .then(function () {
          return navigator["serviceWorker"].ready;
        })
        .then(function (reg: any) {
          return reg.sync.register("syncTest");
        })
        .then(function () {
          console.log("Sync registered");
        })
        .catch(function (err: any) {
          console.log("Service Worker Failed to Register", err);
        });
    }
  }

  qualifierTotals() {
    let qualifierCollection = [
      "important",
      "urgent",
      "highlighted",
      "progressed",
    ];
    let tasks = this.tasks.filter(
      (t: Task) => t.tsk_ctg_status === this.taskStatus.OPEN
    );
    let filtered: Array<Task> = [];
    let records = <any>[];
    let rec = {
      qualifier: <string>null,
      taskCount: 0,
      totalETA: 0,
    };

    qualifierCollection.forEach((q) => {
      filtered = tasks.filter(
        (t: Task) => t.tsk_qualifiers && t.tsk_qualifiers.indexOf(q) !== -1
      );
      rec = {
        qualifier: q,
        taskCount: filtered.length,
        totalETA: 0,
      };
      filtered.forEach((t) => {
        rec.totalETA += t.tsk_estimated_duration;
      });

      records.push(rec);
    });

    // order by total ETA
    records = records.sort((a: any, b: any) => {
      return a.totalETA < b.totalETA ? 1 : -1;
    });

    // total overall
    records.push({
      qualifier: "TOTAL",
      taskCount: records.reduce((p: any, n: any) => {
        return (p.taskCount || p) + n.taskCount;
      }),
      totalETA: records.reduce((p: any, n: any) => {
        return (p.totalETA || p) + n.totalETA;
      }),
    });

    this.reports.qualifierTotals = records;
  }

  toggleView(view: string) {
    this[view] = !this[view];
  }

  timeTrackingQuickEdit(task: any, event: KeyboardEvent, target: string) {
    let newValue: string = event.target["textContent"].trim();
    if (
      newValue.length === 8 &&
      /[0-2][0-9]:[0-5][0-9]:[0-5][0-9]/.test(newValue)
    ) {
      let parts = newValue.split(":");
      let data = {};
      data[`tsh_date_${target}`] = new Date(
        this.services.tasksCore
          .dateOnly(this.services.dateUtils.newDateUpToSeconds())
          .getTime() +
          parseInt(parts[0]) * 60 * 60 * 1000 +
          parseInt(parts[1]) * 60 * 1000 +
          parseInt(parts[2]) * 1000
      );
      // safe check if history is empty
      if (task.tsk_time_history.length === 0) {
        task.tsk_time_history.push({
          tsh_id: task.tsk_id,
          tsh_num_secuential: 1,
          tsh_name: task.tsk_name,
          tsh_date_start: DateUtils.newDateUpToSeconds(),
          tsh_date_end: DateUtils.newDateUpToSeconds(),
          tsh_time_spent: 0,
          tsh_id_user: task.tsk_id_user_added,
          tsh_date_add: DateUtils.newDateUpToSeconds(),
          tsh_date_mod: DateUtils.newDateUpToSeconds(),
        });
      }
      // only update if value changed
      let previousValue = new Date(
        task.tsk_time_history[task.tsk_time_history.length - 1][
          `tsh_date_${target}`
        ]
      );
      if (data[`tsh_date_${target}`].getTime() !== previousValue.getTime()) {
        task.tsk_time_history[task.tsk_time_history.length - 1][
          `tsh_date_${target}`
        ] = data[`tsh_date_${target}`];
        this.updateTaskTimeTracking(
          task.tsk_id,
          task.tsk_time_history.length,
          data
        );

        if (this.timers[task.tsk_id]) {
          let dom: HTMLElement = this.getTaskDOMElement(task.tsk_id);
          this.hideTimer(task, dom);
          this.showTimer(task, dom);
        }
        // //this.calculateTotalTimeSpentToday();
        this.triggerEvent(
          "updateTimeTracking",
          task.tsk_time_history[task.tsk_time_history.length - 1]
        );
      }
    }
    let parent = event.target["parentNode"]["parentNode"]["parentNode"];
    if (!event.altKey && event.keyCode == 38) {
      // detect jump up
      this.taskJumpUp(parent, `span.tt-${target}[contenteditable=true]`);
    }
    if (!event.altKey && event.keyCode == 40) {
      // detect jump down
      this.taskJumpDown(parent, `span.tt-${target}[contenteditable=true]`);
    }
  }

  toggleOptionById({ checked, optionId }) {
    this.options[optionId] = checked;
    this.saveOptionsToLocalStorage();
  }

  toggleOption(optionName: string) {
    this.options[optionName] = !this.options[optionName];
    this.saveOptionsToLocalStorage();
  }

  saveOption(optionName: string, value: string) {
    this.options[optionName] = value;
    this.saveOptionsToLocalStorage();
  }

  saveOptionsToLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      // filter out false values
      const truthyOptions = {};
      Object.keys(this.options).forEach((opt) => {
        if (this.options[opt]) {
          truthyOptions[opt] = this.options[opt];
        }
      });
      localStorage.setItem("Options", JSON.stringify(truthyOptions));
    }
  }

  toggleTimeMode() {
    this.timerModeRemaining = !this.timerModeRemaining;
  }

  tasksNotInSync() {
    if (
      this.services.sync.queue.filter((q: any) => q.status !== "processed")
        .length === 0
    ) {
      this.tasks
        .filter((t: any) => t.not_sync === true)
        .forEach((t: any) => (t.not_sync = undefined));
    } else {
      this.services.sync.queue
        .filter((q: any) => q.status !== "processed")
        .forEach((q: any) => {
          let task = this.tasks.find((t: Task) => t.tsk_id === q.model.tsk_id);
          if (task) {
            task.not_sync = true;
          }
        });
    }
  }

  createGroupedClosedTasks(tasks: Array<any>) {
    let res: Array<any> = [];
    let lastHeader: Date = this.services.dateUtils.newDateUpToSeconds();

    tasks.forEach((t) => {
      if (
        this.services.tasksCore
          .dateOnly(new Date(t.tsk_date_done))
          .getTime() !== lastHeader.getTime()
      ) {
        lastHeader = this.services.tasksCore.dateOnly(
          new Date(t.tsk_date_done)
        );
        res.push({
          header: lastHeader,
          totalTimeSpent: 0,
          tasks: [],
        });
      }
      res[res.length - 1].tasks.push(t);
      res[res.length - 1].totalTimeSpent += t.tsk_total_time_spent;
    });

    // order groups by date desc
    res = res.sort((a: any, b: any): number => {
      return a.header > b.header ? -1 : 1;
    });

    // console.log("closed tasks", res);

    return res;
  }

  dayHasActivity(day: Date): boolean {
    let nextDay = this.services.dateUtils.addDays(day, 1);
    if (
      day.getTime() === this.services.dateUtils.dateOnly(new Date()).getTime()
    ) {
      return true;
    } else {
      return (
        this.tasks.filter(
          (t: Task) =>
            new Date(t.tsk_date_done).getTime() >= day.getTime() &&
            new Date(t.tsk_date_done).getTime() <= nextDay.getTime()
        ).length > 0
      );
    }
  }

  calculateIndicators() {
    let today = this.services.dateUtils.newDateUpToSeconds();
    let today0 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let days: Array<Date> = [];
    let dayLabels: Array<String> = [];
    let nextDay: Date;
    for (let i = 0; i < 7; i++) {
      nextDay = this.services.dateUtils.addDays(today0, -1 * i);
      if (this.dayHasActivity(nextDay)) {
        days.push(nextDay);
        dayLabels.push(i === 0 ? "Today" : i === 1 ? "Yesterday" : i + "d ago");
      }
    }
    days.reverse();
    dayLabels.reverse();
    let values = [];

    let yesterdayValue: number = 0,
      todayValue: number = 0;
    this.state.indicators = [];
    this.state.indicatorLabels = dayLabels;
    this.services.taskIndicator.tasks = this.tasks;

    let addIndicator = (
      name: string,
      metric: string,
      values: Array<number>,
      showIndicator: boolean = false,
      formatMethod?: (v: number) => String,
      completedCriteria?: (prev: number, current: number) => any
    ): void => {
      if (!showIndicator) {
        return;
      }
      let formattedValues: Array<String> = [];
      if (formatMethod) {
        formattedValues = values.map((v: number) => formatMethod(v));
      } else {
        formattedValues = values.map((v: number) => v + "");
      }
      let completed = {
        isCompleted: values[values.length - 2] <= values[values.length - 1],
        percentageCompleted:
          values[values.length - 2] !== 0
            ? Math.round(
                (values[values.length - 1] / values[values.length - 2]) * 100
              ) / 100
            : 0,
      };

      if (completedCriteria) {
        completed = completedCriteria(
          values[values.length - 2],
          values[values.length - 1]
        );
      }

      this.state.indicators.push({
        name,
        metric,
        values,
        formattedValues,
        isCompleted: completed.isCompleted,
        percentageCompleted: completed.percentageCompleted,
      });
    };

    let calculateForAllDays = (
      days: Array<any>,
      method: (d1: Date, d2: Date) => number
    ): Array<number> => {
      let calculatedValues: Array<number> = [];
      let context = this.services.taskIndicator;

      days.forEach((d, index, array) => {
        calculatedValues.push(
          method.call(context, d, this.services.dateUtils.addDays(d, 1))
        );
      });

      return calculatedValues;
    };

    const LESS_IS_BETTER = "LESS_IS_BETTER";
    const MORE_IS_BETTER = "MORE_IS_BETTER";

    const TIMESTAMP_FORMAT = "[H]h[m]m";
    const formatTimestamp = (v: number) =>
      DateUtils.formatTimestamp(v, TIMESTAMP_FORMAT);
    const formatTimestampMinutes = (v: number) =>
      DateUtils.formatTimestamp(v * 60, TIMESTAMP_FORMAT);
    const formatTimestampDays = (v: number) =>
      DateUtils.formatTimestamp(v * 60, "[d]d[H]h");

    // all open/backlog task count overall
    addIndicator(
      "All Open Count",
      LESS_IS_BETTER,
      calculateForAllDays(
        days,
        this.services.taskIndicator.allOpenTaskCountUntil
      ),
      this.options["optShowIndicatorAllOpenCount"],
      null,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // All Open/Backlog ETA
    addIndicator(
      "All Open ETA",
      LESS_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.allOpenETA),
      this.options["optShowIndicatorAllOpenETA"],
      formatTimestampDays,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // open task count overall
    addIndicator(
      "Open Count EOD",
      LESS_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.openTaskCountUntil),
      this.options["optShowIndicatorOpenCountEOD"],
      null,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // Open ETA
    addIndicator(
      "Open ETA",
      LESS_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.openETA),
      this.options["optShowIndicatorOpenETA"],
      formatTimestampDays,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // added ETA
    addIndicator(
      "Added ETA",
      LESS_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.addedETA),
      this.options["optShowIndicatorAddedETA"],
      formatTimestampMinutes,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // added count
    addIndicator(
      "Added Count",
      LESS_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.addedTaskCount),
      this.options["optShowIndicatorAddedCount"],
      null,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // closed ETA
    addIndicator(
      "Closed ETA",
      MORE_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.closedETA),
      this.options["optShowIndicatorClosedETA"],
      formatTimestampMinutes
    );

    // spent
    addIndicator(
      "Closed Spent",
      MORE_IS_BETTER,
      calculateForAllDays(
        days,
        (d1: Date, d2: Date): number =>
          this.services.taskIndicator.calculateTotalTimeSpent(d1, d2)
            .totalTimeSpentTodayOnClosedTasks
      ),
      this.options["optShowIndicatorClosedSpent"],
      formatTimestamp
    );

    // closed count
    addIndicator(
      "Closed Count",
      MORE_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.closedTaskCount),
      this.options["optShowIndicatorClosedCount"]
    );

    // productivity ratio
    addIndicator(
      "Productivity Ratio",
      MORE_IS_BETTER,
      calculateForAllDays(
        days,
        this.services.taskIndicator.calculateProductivityRatio
      ),
      this.options["optShowIndicatorProductivityRatio"]
    );

    // time management ratio
    addIndicator(
      "Time Management Ratio",
      MORE_IS_BETTER,
      calculateForAllDays(
        days,
        this.services.taskIndicator.calculateTimeManagementRatio
      ),
      this.options["optShowIndicatorTimeManagementRatio"]
    );

    // first time tracking entry start time stamp for the day
    addIndicator(
      "First TT stamp",
      LESS_IS_BETTER,
      calculateForAllDays(days, (d1: Date, d2: Date): number => {
        const t = this.services.taskIndicator.firstTTEntryFromDay(d1);
        return t ? DateUtils.getTimeOnlyInSeconds(t) : 0;
      }),
      this.options["optShowIndicatorFirstTTStamp"],
      formatTimestamp
    );

    // last time tracking entry end time stamp for the day
    addIndicator(
      "Last TT stamp",
      MORE_IS_BETTER,
      calculateForAllDays(days, (d1: Date, d2: Date): number => {
        const t = this.services.taskIndicator.lastTTEntryFromDay(d1);
        return t ? DateUtils.getTimeOnlyInSeconds(t) : 0;
      }),
      this.options["optShowIndicatorLastTTStamp"],
      formatTimestamp
    );

    // Spent on Open Tasks
    addIndicator(
      "Open Spent",
      LESS_IS_BETTER,
      calculateForAllDays(
        days,
        (d1: Date, d2: Date): number =>
          this.services.taskIndicator.calculateTotalTimeSpent(d1, d2)
            .totalTimeSpentTodayOnOpenTasks
      ),
      this.options["optShowIndicatorOpenSpent"],
      formatTimestampMinutes
    );

    // Backlog count
    addIndicator(
      "Backlog Count",
      LESS_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.backlogTaskCount),
      this.options["optShowIndicatorBacklogCount"],
      null,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // Backlog ETA
    addIndicator(
      "Backlog ETA",
      LESS_IS_BETTER,
      calculateForAllDays(days, this.services.taskIndicator.backlogETA),
      this.options["optShowIndicatorBacklogETA"],
      formatTimestampDays,
      (prev: number, curr: number) => ({
        isCompleted: prev >= curr,
        percentageCompleted:
          prev !== 0 ? Math.round((curr * 100) / prev) / 100 : 0,
      })
    );

    // karma
  }

  asNextToDo(t: any, add: boolean, addAtBeggining: boolean = false) {
    let p = this.nextTasks[0].tasks;
    let index = p.findIndex((e: any) => e.tsk_id === t.tsk_id);
    if (add) {
      if (index === -1) {
        if (addAtBeggining) {
          p.unshift(t);
        } else {
          p.push(t);
        }
        this.nextTasks[0].estimatedDuration += t.tsk_estimated_duration * 60;
        t["inNextToDo"] = true;
        this.projectNextTasksDates();
      }
    } else {
      if (index !== -1) {
        p.splice(index, 1);
        this.nextTasks[0].estimatedDuration -= t.tsk_estimated_duration * 60;
        t["inNextToDo"] = false;
        this.projectNextTasksDates();
      }
    }
    localStorage.setItem(
      "NextTasks",
      JSON.stringify(p.map((e: any) => e.tsk_id))
    );
  }

  togglePinnedToDo(t: any) {
    let p = this.pinnedTasks[0].tasks;
    let index = p.findIndex((e: any) => e.tsk_id === t.tsk_id);
    if (index === -1) {
      p.push(t);
      this.pinnedTasks[0].estimatedDuration += t.tsk_estimated_duration * 60;
      t["inPinnedToDo"] = true;
    } else {
      p.splice(index, 1);
      this.pinnedTasks[0].estimatedDuration -= t.tsk_estimated_duration * 60;
      t["inPinnedToDo"] = false;
    }

    localStorage.setItem(
      "PinnedTasks",
      JSON.stringify(p.map((e: any) => e.tsk_id))
    );
  }

  setTaskNotes(task: any, event: KeyboardEvent) {
    const newNotes = event.target["value"];

    if (task.tsk_notes !== newNotes) {
      this.updateTask(task.tsk_id, {
        tsk_notes: newNotes,
      });
      document.querySelector(".tasks-details textarea").parentNode[
        "dataset"
      ].replicatedValue = newNotes;
    }
  }

  setFocus(task: Task, event: KeyboardEvent) {
    // console.log('task on focus by user',task,event.target);
    this.focusedTask = {
      task,
      element: event.target["parentNode"],
    };
  }

  sendFEToBE(taskDiff: Array<any>) {
    let upd = {};
    taskDiff.forEach((td: any) => {
      upd[td.name] = td.client;
    });
    this.updateTask(taskDiff[0].id, upd);
    //this.services.tasksCore.computeComparisonData().then((data: any) => this.comparisonData = data);
  }

  subscribe(event: string, callback: Function) {
    this.events.push({ event, callback });
  }

  triggerEvent(event: string, params: any) {
    const handlers = this.events
      .filter((e: any) => e.event === event)
      .map((e) => e.callback);
    handlers.forEach((handler: Function) => {
      handler(params);
    });
  }

  formatDateTime(date: Date): string {
    if (
      DateUtils.dateOnly(date).getTime() ===
      DateUtils.dateOnly(new Date()).getTime()
    ) {
      // Date is today, just show time
      return DateUtils.timeFromDateAsString(date).substring(0, 5);
    } else {
      // Date is not today, show date and time
      return DateUtils.formatDate(date, "yyyy-MM-dd HH:mm");
    }
  }

  adjustTimeTracking(t: Task, triggerUpdateTask: boolean) {
    // try peeking into tomorrow if today already finished ;-)
    let tt = this.lastTTEntryFromDay(
      this.services.dateUtils.dateOnly(
        this.services.dateUtils.addDays(new Date(), 1)
      )
    );
    if (!tt) {
      // no task tomorrow, try today
      tt = this.lastTTEntryFromDay(
        this.services.dateUtils.dateOnly(new Date())
      );
    }
    if (!tt) {
      // no task today, try yesterday
      tt = this.lastTTEntryFromDay(
        this.services.dateUtils.dateOnly(
          this.services.dateUtils.addDays(new Date(), -1)
        )
      );
    }
    if (!tt) {
      // no task today, try 2 days earlier
      tt = this.lastTTEntryFromDay(
        this.services.dateUtils.dateOnly(
          this.services.dateUtils.addDays(new Date(), -2)
        )
      );
    }
    if (!tt) {
      // no task, try 3 days earlier
      tt = this.lastTTEntryFromDay(
        this.services.dateUtils.dateOnly(
          this.services.dateUtils.addDays(new Date(), -3)
        )
      );
    }
    const calcRandomFinish = (estimated) =>
      (estimated - 2) * 60 + Math.floor(Math.random() * 2 * 10 * 6);
    if (tt && t["tsk_time_history"].length) {
      // task with history
      t["tsk_time_history"][t["tsk_time_history"].length - 1].tsh_date_start =
        tt;
      if (t.tsk_ctg_in_process == 1) {
        // task 'in progress'
        const randomFinish = calcRandomFinish(t.tsk_estimated_duration);
        t["tsk_time_history"][t["tsk_time_history"].length - 1].tsh_date_end =
          new Date(tt.getTime() + randomFinish * 1000);
        t["tsk_time_history"][t["tsk_time_history"].length - 1].tsh_time_spent =
          randomFinish;
        let total: number = 0;
        t["tsk_time_history"].forEach((tth: any) => {
          total += tth.tsh_time_spent;
        });

        if (triggerUpdateTask) {
          this.services.tasksCore.updateTask(t, {
            tsk_total_time_spent: total,
          });
        }
        t.tsk_total_time_spent = total;
      }
      //this.updateTaskTimeTracking(t.tsk_id,t.tsk_time_history.length,data);
      this.services.tasksCore.tasksToStorage(); // TODO: move this sentence to tasksCore
      // TODO: update time tracking history on server
      this.updateState();
    } else {
      // task with no history, implies also is not 'in progress'
      const randomFinish = calcRandomFinish(t.tsk_estimated_duration);
      this.services.tasksCore.addTimeTracking(t, {
        tsh_date_start: tt,
        tsh_date_end: new Date(tt.getTime() + randomFinish * 1000),
        tsh_time_spent: randomFinish,
      });

      if (triggerUpdateTask) {
        this.services.tasksCore.updateTask(t, {
          tsk_total_time_spent: randomFinish,
        });
      }
      t.tsk_total_time_spent = randomFinish;
    }
  }

  setTaskSelected(task: Task) {
    this.selectedTask = task;
  }

  countTasksDone(record: string) {
    return this.state.closedTodayTasks.filter((i) => i.tsk_id_record === record)
      .length;
  }

  formatTimestamp(stamp: number, format: string = "[H]h[m]m") {
    return DateUtils.formatTimestamp(stamp, format);
  }

  projectNextTasksDates() {
    // start of projection is either current date or last TT end date
    let projectionDate: Date =
      this.lastTTEntryFromDay(new Date()) || new Date();

    this.nextTasks[0].tasks.forEach((t: any) => {
      t.projectedDate = new Date(projectionDate);
      projectionDate = new Date(
        projectionDate.getTime() + t.tsk_estimated_duration * 60 * 1000
      );
    });
  }

  removeQualifiersFromTask(t: Task) {
    t.tsk_qualifiers = "";
    this.services.tasksCore.updateTask(t, {
      tsk_qualifiers: "",
    });
  }

  getDate() {
    return DateUtils.newDateUpToSeconds();
  }

  speechText(text: string) {
    this.speech.textToSpeechVoice(text);
  }

  clearNextTasks() {
    this.nextTasks[0].tasks.forEach((t) => {
      t["inNextToDo"] = false;
    });

    this.nextTasks = [];
    this.nextTasks.push({
      estimatedDuration: 0,
      tasks: [],
    });

    localStorage.setItem(
      "NextTasks",
      JSON.stringify(this.nextTasks[0].tasks.map((e: any) => e.tsk_id))
    );
  }

  clearPinnedTasks() {
    this.pinnedTasks = [];
    this.pinnedTasks.push({
      estimatedDuration: 0,
      tasks: [],
    });

    localStorage.setItem(
      "PinnedTasks",
      JSON.stringify(this.pinnedTasks[0].tasks.map((e: any) => e.tsk_id))
    );
  }

  syncTasks() {
    this.fetchTasks();
  }

  toggleCollapsedRecord(item, collapsedValue: boolean) {
    item.collapsed = collapsedValue;
    this.saveCollapsedRecordsToStorage();
  }

  saveCollapsedRecordsToStorage() {
    localStorage.setItem(
      "TasksCollapsed",
      JSON.stringify(
        this.state.openTasks
          .filter((e) => e.collapsed)
          .map((e: any) => e.header)
      )
    );
  }

  toggleCollapseAllRecords(collapseAll: boolean) {
    const collapsedTasks: String[] = collapseAll
      ? this.state.openTasks.map((e: any) => e.header)
      : [];

    this.state.openTasks.forEach((e) => {
      e.collapsed = collapseAll;
    });
    this.saveCollapsedRecordsToStorage();
  }

  removeScheduledNotification(task: Task) {
    const found = this.state.startingTasksSchedule.find(
      (s: any) => s.task.tsk_id == task.tsk_id && s.timeoutHandler != -1
    );
    if (found) {
      if (
        new Date(found.task.tsk_schedule_date_start).getTime() ===
        new Date(task.tsk_schedule_date_start).getTime()
      ) {
        clearTimeout(found.timeoutHandler);
        found.timeoutHandler = -1;
      } else {
        return false; // date is different, do nothing and leave the scheduled notification
      }
    }
    return true;
  }

  togglePinRecord(recordName: string) {
    const foundIndex = this.viewData.pinnedRecords.findIndex(
      (p) => p === recordName
    );

    if (foundIndex !== -1) {
      this.viewData.pinnedRecords.splice(foundIndex, 1);
    } else {
      this.viewData.pinnedRecords.push(recordName);
    }

    if (this.viewData.selectedFilter !== "all") {
      this.updateState();
    }
  }

  isRecordPinned(recordName: string): boolean {
    return !!this.viewData.pinnedRecords.find((p) => p === recordName);
  }

  recordStyle(recordName: string, attribute: string): string {
    const isPinned = this.viewData.pinnedRecords.find((p) => p === recordName);

    if (
      (isPinned || this.options.optUseColumnsForRecords) &&
      attribute === "height"
    ) {
      return "initial";
    }

    switch (attribute) {
      case "width": {
        return this.options.optRecordWidth !==
          this.defaultOptions.optRecordWidth ||
          this.options.optRecordHeight !== this.defaultOptions.optRecordHeight
          ? this.options.optRecordWidth + "px"
          : this.defaultOptions.optRecordWidth;
      }
      case "height": {
        return this.options.optHideScrollbarsInRecord
          ? "initial"
          : this.options.optRecordWidth !==
              this.defaultOptions.optRecordWidth ||
            this.options.optRecordHeight !== this.defaultOptions.optRecordHeight
          ? this.options.optRecordHeight + "px"
          : this.defaultOptions.optRecordHeight;
      }
      default: {
      }
    }

    return "";
  }
}
