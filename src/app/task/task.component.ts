import { Component, Input, OnInit } from "@angular/core";
import { Task } from "../../crosscommon/entities/Task";
import { DateUtils } from "../../crosscommon/DateUtility";
import { TaskCore } from "./task.core";
import { SyncAPI } from "../common/sync.api";
import { getTextForLang } from "./task.lang";

const defaults = {};
const noop = () => {};

@Component({
  selector: "task",
  templateUrl: "./task.template.html",
  styleUrls: ["./task.css"],
  providers: [],
  standalone: false,
})
export class TaskComponent implements OnInit {
  public format: string = "yyyy-MM-dd HH:mm:ss";
  public taskStatus = {
    BACKLOG: 1,
    OPEN: 2,
    CLOSED: 3,
    CANCELLED: 4,
  };
  public TEXT: Record<string, string> = getTextForLang("es");

  @Input() task: Task = null;
  @Input() record: string = null; // record grouping name in a list, null means it was not passed
  @Input() groupTasks: Task[] = []; // position in a list, -1 means it was not passed
  @Input() containerSelector: string = null; // query selector of the container of the task, null means it was not passed
  @Input() handlers: {
    onViewTaskDetails?: (task: Task) => void;
    onTaskMarkAsDone?: (task: Task, event: Event) => void;
    onTimeTrackingQuickEdit?: (
      task: Task,
      event: Event,
      target: string
    ) => void;
    onToggleTimeMode?: () => void;
    onTaskEdit?: (task: Task, event: KeyboardEvent) => void;
    onTaskBlur?: (task: Task, event: KeyboardEvent) => void;
    onTaskFocus?: (task: Task, event: Event) => void;
    onTaskKeyDown?: (task: Task, event: KeyboardEvent) => void;
    onTaskEditEstimatedDuration?: (task: Task, event: Event) => void;
    onTaskEditEtaKeyDown?: (task: Task, event: Event) => void;
    onShowTagStats?: (tag: string, event: Event) => void;
    onGetTaskAgeClass?: (tag: string) => void;
    onGetTaskAge?: (tag: string) => void;
    onEvent?: ({
      type,
      task,
      changes,
    }: {
      type: string;
      task: Task;
      changes: any;
    }) => void;
  } = {
    onViewTaskDetails: null,
    onTaskMarkAsDone: noop,
    onTimeTrackingQuickEdit: noop,
    onToggleTimeMode: noop,
    onTaskEdit: null,
    onTaskBlur: null,
    onTaskFocus: null,
    onTaskKeyDown: null,
    onTaskEditEstimatedDuration: noop,
    onTaskEditEtaKeyDown: noop,
    onShowTagStats: noop,
    onGetTaskAgeClass: noop,
    onGetTaskAge: noop,
    onEvent: null,
  };
  @Input() options: {
    optAllowToEditETA: boolean;
    optViewElapsedDays: boolean;
    optShowRecordNameInline: boolean;
    optShowBadgeIfTaskIsInBacklog: boolean;
    optShowTimeTrackingHistory: boolean;
    optShowDetailsButton: boolean;
  } = {
    optAllowToEditETA: false,
    optViewElapsedDays: false,
    optShowRecordNameInline: false,
    optShowBadgeIfTaskIsInBacklog: false,
    optShowTimeTrackingHistory: true,
    optShowDetailsButton: false,
  };
  private core: TaskCore = null;
  public selectorId: string = null;

  constructor(private syncService: SyncAPI) {}

  ngOnInit() {
    this.core = new TaskCore(this.syncService, this.handlers);
  }

  launchHandler(handler: Function, fallback: Function, ...parameters) {
    if (handler) {
      return handler(...parameters);
    }
    return fallback(...parameters);
  }

  handlerTaskKeyUp(t: Task, event: KeyboardEvent) {
    return this.launchHandler(
      this.handlers.onTaskEdit,
      this.core.handlerTaskKeyUp.bind(this.core),
      t,
      event,
      this.groupTasks
    );
  }

  handlerTaskBlur(t: Task, event: KeyboardEvent) {
    return this.launchHandler(
      this.handlers.onTaskBlur,
      this.core.handlerTaskBlur.bind(this.core),
      t,
      event
    );
  }

  handlerTaskFocus(t: Task, event: KeyboardEvent) {
    return this.launchHandler(
      this.handlers.onTaskFocus,
      () => {},
      t,
      event,
      this.groupTasks
    );
  }

  handlerTaskKeyDown(t: Task, event: KeyboardEvent) {
    return this.launchHandler(
      this.handlers.onTaskKeyDown,
      this.core.handlerTaskKeyDown.bind(this.core),
      t,
      event,
      this.groupTasks,
      this.containerSelector
    );
  }

  handlerViewTaskDetails(t: Task, event: Event) {
    return this.launchHandler(
      this.handlers.onViewTaskDetails,
      () => {},
      t,
      event,
      this.groupTasks,
      this.containerSelector
    );
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

  onEvent() {
    this.core.onTaskEvent.subscribe((event) => {
      this.handlers.onEvent(event);
    });
  }
}
