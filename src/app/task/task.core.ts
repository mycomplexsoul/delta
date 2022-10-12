import { Injectable, EventEmitter } from "@angular/core";
import { DateUtils } from "../../crosscommon/DateUtility";
import { Utils } from "../../crosscommon/Utility";
import { Task } from "../../crosscommon/entities/Task";
import { SyncAPI } from "../common/sync.api";

const ALL_TASK_STATUS = {
  BACKLOG: 1,
  OPEN: 2,
  CLOSED: 3,
  CANCELLED: 4,
};

@Injectable()
export class TaskCore {
  tasks: any;
  public onTaskEvent: EventEmitter<{ type: string; task: Task; changes: any }> =
    new EventEmitter(true);

  constructor(private syncService: SyncAPI, private componentHandlers: any) {}

  updateRemoteTask(t: Task, changes: any) {
    t["not_sync"] = true;

    this.syncService.request(
      "update",
      Utils.removeMetadataFromEntity(t),
      t.metadata.fields
        .filter((f) => f.isPK)
        .reduce((final, f) => {
          final[f.dbName] = t[f.dbName];
          return final;
        }, {}),
      t.metadata.name,
      () => {
        t["not_sync"] = false;
        // broadcast update event
        this.onTaskEvent.emit({
          type: "update",
          task: t,
          changes,
        });
      },
      t.recordName,
      (item: Task) => item.tsk_id === t.tsk_id
    );
  }

  applyChangesToTask(
    t: Task,
    changes: any,
    { updateLocalCopy = true, triggerRemoteUpdate = true } = {
      updateLocalCopy: Boolean,
      triggerRemoteUpdate: Boolean,
    }
  ) {
    // update local copy
    if (updateLocalCopy) {
      Object.entries(changes).forEach(([key, value]) => {
        t[key] = value;
      });
    }

    if (triggerRemoteUpdate) {
      this.updateRemoteTask(t, changes);
    }
  }

  recalculateTotalTimeSpent(t: Task): Task {
    // sum in task
    let sum: number = 0;
    t["tsk_time_history"].forEach((tt: any) => {
      sum += tt.tsh_time_spent;
    });
    t.tsk_total_time_spent = sum;
    return t;
  }

  saveTimeTracking(
    t: Task,
    state: "start" | "stop",
    overrideTimeTrackingProps: any = {}
  ): Task {
    let history = null;
    if (!t["tsk_time_history"]) {
      t["tsk_time_history"] = [];
    }

    history = t["tsk_time_history"];

    if (state === "start") {
      history.push({
        tsh_id: t.tsk_id,
        tsh_num_secuential: history.length + 1,
        tsh_name: t.tsk_name,
        tsh_date_start: DateUtils.newDateUpToSeconds(),
        tsh_date_end: null,
        tsh_time_spent: 0,
        tsh_id_user: t.tsk_id_user_asigned,
        tsh_date_add: DateUtils.newDateUpToSeconds(),
        tsh_date_mod: DateUtils.newDateUpToSeconds(),
        ...overrideTimeTrackingProps,
      });
    }

    if (state === "stop") {
      const tt = history[history.length - 1];

      tt.tsh_name = t.tsk_name;
      tt.tsh_date_end = DateUtils.newDateUpToSeconds();
      tt.tsh_time_spent = Math.abs(
        DateUtils.elapsedTime(tt.tsh_date_start, tt.tsh_date_end)
      );
      tt.tsh_date_mod = DateUtils.newDateUpToSeconds();

      this.recalculateTotalTimeSpent(t);
    }

    return t;
  }

  toggleTimeTracking(t: Task) {
    // Values for not in progress, should set as in progress
    const changes = {
      tsk_ctg_in_process: 2,
    };

    if (t.tsk_ctg_in_process === 2) {
      // already in progress, should stop
      changes.tsk_ctg_in_process = 1;
    }

    const timerState = changes.tsk_ctg_in_process === 2 ? "show" : "hide";
    const timeTrackingState =
      changes.tsk_ctg_in_process === 2 ? "start" : "stop";

    this.saveTimeTracking(t, timeTrackingState);
    this.applyChangesToTask(t, changes);
    // show/hide timer
    this.toggleTimer(t, timerState);
  }
  toggleTimer(t: Task, timerState: string) {
    throw new Error("Method not implemented.");
  }

  /**
   * Sets or removes a qualifier from the task, and updates local and remote task.
   * @param t Task
   * @param qualifier qualifier string
   */
  toggleQualifier(t: Task, qualifier: string): void {
    let qualifiers = t.tsk_qualifiers;

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

    this.applyChangesToTask(t, {
      tsk_qualifiers: qualifiers,
    });
  }

  handlerTaskKeyUp(
    t: Task,
    { key, altKey, ctrlKey, shiftKey },
    groupTasks: Task[]
  ) {
    const isKey = (key: string, options: string | string[]) => {
      if (Array.isArray(options)) {
        return options.includes(key);
      }
      return options === key;
    };

    const SHIFT_ACTIONS = {
      F2: (t: Task) => {
        // detect "Shift + F2" = find time tracking task, stop it, close the task and start the focused one
        // find tasks in progress
        let inprogress: Array<Task> = this.tasks.filter(
          // TODO: Accessing all other tasks from a single one should not be possible, maybe this action should not exist
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
        this.toggleTimeTracking(t);
      },
    };

    const ALT_ACTIONS = {
      s: (t: Task) => this.setSelected(t, {}, groupTasks),
      Delete: (t: Task) => this.taskCancel(t),
      b: (t: Task) => this.taskToBacklog(t),
      o: (t: Task) => this.moveTaskToOpen(t),
      "1": (t: Task) =>
        this.markTaskAsDone(t, { target: { checked: true }, shiftKey }),
      "2": (t: Task) => this.toggleQualifier(t, "star"),
      "3": (t: Task) => this.toggleQualifier(t, "highlighted"),
      "4": (t: Task) => this.toggleQualifier(t, "priority"),
      "5": (t: Task) => this.toggleQualifier(t, "important"),
      "6": (t: Task) => this.toggleQualifier(t, "urgent"),
      "7": (t: Task) => this.toggleQualifier(t, "unexpected"),
      "8": (t: Task) => this.toggleQualifier(t, "progressed"),
      "9": (t: Task) => this.toggleQualifier(t, "people"),
      "/": (t: Task) => this.toggleQualifier(t, "flag"),
      "-": (t: Task) => this.toggleQualifier(t, "blocked"),
      "'": (t: Task) => this.toggleQualifier(t, "directions"),
      ".": (t: Task) => this.toggleQualifier(t, "mobile"),
      "0": (t: Task) => this.clearQualifiers(t),
      "+": (t: Task) => this.focusElement("input[name=tsk_name]"),
      n: (t: Task) => this.asNextToDo(t, true),
      r: (t: Task) => this.asNextToDo(t, false),
      t: (t: Task) => this.adjustTimeTracking(t, true),
    };

    // most used actions should be at the top
    // so they are processed early and finish quickly
    const OTHER_ACTIONS = {
      "!Shift + F2": {
        matchExpression: ({ altKey, shiftKey, key }) =>
          !shiftKey && isKey(key, "F2"),
        actionMethod: (t: Task) => this.toggleTimeTracking(t),
      },
    };

    if (altKey && ALT_ACTIONS[key]) {
      return ALT_ACTIONS[key](t);
    }

    if (shiftKey && SHIFT_ACTIONS[key]) {
      return SHIFT_ACTIONS[key](t);
    }

    // other actions
    // just one of them will be true because matchers are exclusive
    Object.entries(OTHER_ACTIONS).some(
      ([actionName, { matchExpression, actionMethod }]) => {
        if (matchExpression({ altKey, shiftKey, key })) {
          actionMethod(t);
          return true; // have a match, skip all other actions
        }
        return false; // does not match, try the next action
      }
    );
  }

  moveTaskToOpen(t: Task) {
    const isDateDueNotSet: boolean = !t.tsk_date_due;
    const changes: any = {
      tsk_ctg_status: ALL_TASK_STATUS.OPEN,
    };
    if (isDateDueNotSet) {
      // if date due is not set, we set it as today's time tracking can take it into account
      // if it as already set, then we leave it as it is, because it was tracked on that date
      changes.tsk_date_due = DateUtils.dateOnly();
    }
    this.applyChangesToTask(t, changes);
  }

  setSelected(t: Task, event: any, groupTasks: Task[]) {
    if (this.componentHandlers.onViewTaskDetails) {
      this.componentHandlers.onViewTaskDetails(t, event, groupTasks);
    }
  }
  taskCancel(t: Task) {
    throw new Error("Method not implemented.");
  }
  taskToBacklog(t: Task) {
    throw new Error("Method not implemented.");
  }
  markTaskAsDone(
    t: Task,
    arg1: { target: { checked: boolean }; shiftKey: any }
  ) {
    throw new Error("Method not implemented.");
  }
  clearQualifiers(t: Task) {
    throw new Error("Method not implemented.");
  }
  focusElement(arg0: string) {
    throw new Error("Method not implemented.");
  }
  asNextToDo(t: Task, arg1: boolean) {
    throw new Error("Method not implemented.");
  }
  adjustTimeTracking(t: Task, arg1: boolean) {
    throw new Error("Method not implemented.");
  }
  //#region KeyUp handler
  /**
   * Replaces one `expression` appereance in the original `text`.
   *
   * @param text Original text where expression will be removed
   * @param expression Text to be removed
   * @returns Original text with `expression` removed from it
   */
  replaceTokenInText(text: string, expression: string) {
    return text
      .replace(expression + " ", "")
      .replace(" " + expression, "")
      .replace(expression, "");
  }

  /**
   *
   * @param t Task
   * @param method
   * @param token
   * @param tokenEnd
   */
  doThisWithAToken(
    textWithToken: string,
    doThisWithExpression: (
      textWithoutToken: string,
      expression: string,
      token: string
    ) => void,
    token: string,
    tokenEnd: string = " "
  ) {
    // executes only if the token is found
    if (textWithToken.indexOf(token) !== -1) {
      // either the first tokenEnd appereance or the end of the string
      const endPosition =
        textWithToken.indexOf(tokenEnd, textWithToken.indexOf(token)) === -1
          ? textWithToken.length
          : textWithToken.indexOf(tokenEnd, textWithToken.indexOf(token));
      // we call expression the text between token and tokenEnd/end of the string
      const expression = textWithToken.substring(
        textWithToken.indexOf(token) + token.length,
        endPosition
      );

      const cleanText = this.replaceTokenInText(
        textWithToken,
        token + expression + (tokenEnd === " " ? "" : tokenEnd)
      );

      doThisWithExpression(cleanText, expression, token);
    }
  }

  handlerTaskBlur(t: Task, { target: { textContent } }) {
    const changesToApply: any = {};

    changesToApply.tsk_name = textContent;

    // Example: ->%(18:00)   |   ->%(2050-01-25 17:30)
    this.doThisWithAToken(
      // postpone task
      changesToApply.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        changesToApply.tsk_name = tsk_name;
        const schedule = DateUtils.parseDatetime(expression);

        if (schedule.date_start) {
          changesToApply.tsk_id_record = schedule.date_start;
        }
      },
      "->%(",
      ")"
    );

    this.doThisWithAToken(
      // move to other record
      changesToApply.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        changesToApply.tsk_name = tsk_name;
        changesToApply.tsk_id_record = expression;
      },
      "->[",
      "]"
    );

    this.doThisWithAToken(
      // set schedule
      changesToApply.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        changesToApply.tsk_name = tsk_name;
        const schedule = DateUtils.parseDatetime(expression);

        changesToApply.tsk_schedule_date_start = schedule.date_start;
        changesToApply.tsk_estimated_duration =
          schedule.duration ?? t.tsk_estimated_duration;
        changesToApply.tsk_schedule_date_end =
          schedule.date_end ?? t.tsk_schedule_date_end;
      },
      "%[",
      "]"
    );

    this.doThisWithAToken(
      // set tags
      changesToApply.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        changesToApply.tsk_name = tsk_name;
        changesToApply.tsk_tags = expression;
      },
      "#[",
      "]"
    );

    this.doThisWithAToken(
      // set url
      changesToApply.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        changesToApply.tsk_name = tsk_name;
        changesToApply.tsk_url = `${token}${expression}`;
      },
      "http://"
    );

    this.doThisWithAToken(
      // set url
      changesToApply.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        changesToApply.tsk_name = tsk_name;
        changesToApply.tsk_url = `${token}${expression}`;
      },
      "https://"
    );

    this.doThisWithAToken(
      // set qualifiers
      changesToApply.tsk_name,
      (tsk_name: string, expression: string) => {
        changesToApply.tsk_name = tsk_name;
        changesToApply.tsk_qualifiers = `${t.tsk_qualifiers}, ${expression}`;
      },
      "$[",
      "]"
    );

    // token to look up and method that returns the changes to apply
    // * important: remember these tokens apply just one at a time
    // and it should be the last thing in the task name to work properly
    const tokens = {
      "[-LINK]": (t: Task) => ({
        // remove url link
        tsk_url: null,
      }),
      "[-SCHEDULE]": (t: Task) => ({
        // remove schedule
        tsk_schedule_date_start: null,
        tsk_schedule_date_end: null,
      }),
      "[-TAGS]": (t: Task) => ({
        // remove tags
        tsk_tags: "",
      }),
      "[-QUALIFIERS]": (t: Task) => ({
        // remove qualifiers
        tsk_qualifiers: "",
      }),
    };

    // Iterate tokens and apply changes
    Object.keys(tokens).forEach((token) => {
      if (changesToApply.tsk_name.indexOf(token) !== -1) {
        const changesFromToken = tokens[token](t);

        Object.entries(changesFromToken).forEach(([field, value]) => {
          changesToApply[field] = value;
        });

        changesToApply.tsk_name = changesToApply.tsk_name.replace(token, "");

        // remove notification if any
        if (token === "[-SCHEDULE]") {
          this.removeScheduledNotification(t); // TODO: this should call the notificationService
        }
      }
    });

    if (
      changesToApply.tsk_name !== t.tsk_name ||
      Object.keys(changesToApply).length > 1
    ) {
      // when tsk_name changed or there are more changes, apply them
      // otherwise we can say there was no changes, so do nothing
      this.applyChangesToTask(t, changesToApply);
    }
  }

  removeScheduledNotification(t: Task) {
    throw new Error("Method not implemented.");
  }
  // #endregion

  // #region KeyDown handler
  jumpToAnotherRecord(
    t: Task,
    direction: number,
    containerSelector: string,
    recordJump: boolean = true
  ) {
    const taskSelector = "span.task-text[contenteditable]";
    const isThereATaskHere = (container) => {
      const domElement: HTMLElement = container?.querySelector(taskSelector);

      return !!domElement;
    };
    const focusFirstOrLastTask = (container, first = true) => {
      const domElement: HTMLElement =
        container?.querySelectorAll(taskSelector)[
          first ? 0 : container?.querySelectorAll(taskSelector).length - 1
        ];

      domElement?.focus();
    };

    // determine current record
    const currentRecord: any = document.getElementById(t.tsk_id).parentNode
      .parentNode.parentNode;

    // determine destination record if any
    const getAnotherRecord = (current) =>
      direction === -1
        ? current.previousElementSibling
        : current.nextElementSibling;

    let destinationRecord = getAnotherRecord(currentRecord);
    while (
      destinationRecord &&
      destinationRecord.classList.contains("hidden")
    ) {
      // skip hidden records
      destinationRecord = getAnotherRecord(destinationRecord);
    }

    if (destinationRecord && isThereATaskHere(destinationRecord)) {
      if (recordJump) {
        // record jump, always focus first task
        focusFirstOrLastTask(destinationRecord, true);
      } else {
        // regular jump, focus is inverse to direction
        focusFirstOrLastTask(destinationRecord, direction === 1);
      }
    } else {
      // no task found anywhere in siblings
      // try with siblings of major container
      destinationRecord = getAnotherRecord(
        document.querySelector(containerSelector)
      );
      if (destinationRecord && isThereATaskHere(destinationRecord)) {
        // jumping major containers always focus first
        if (recordJump) {
          // record jump, always focus first task
          focusFirstOrLastTask(destinationRecord, true);
        } else {
          // regular jump, focus is inverse to direction
          focusFirstOrLastTask(destinationRecord, direction === 1);
        }
      }
    }
  }

  handlerTaskKeyDown(
    t: Task,
    { key, altKey, ctrlKey },
    groupTasks: Task[],
    containerSelector: string
  ) {
    const focusTask = (container: string, d: Task) => {
      const domElement: HTMLElement = document
        .querySelector(container)
        ?.querySelector(`div#${d.tsk_id}`)
        ?.querySelector("span.task-text[contenteditable]");

      domElement?.focus();
    };

    // determine position and direction
    const position: number = groupTasks.findIndex((g) => g.tsk_id === t.tsk_id);

    if (position >= 0 && ["ArrowUp", "ArrowDown"].includes(key)) {
      const direction: number = key === "ArrowUp" ? -1 : 1;
      const destination: number = position + direction;
      const withinLimits: boolean =
        destination >= 0 && destination < groupTasks.length;

      if (withinLimits) {
        if (altKey) {
          // move task
          // swap order and save to remote
          const { tsk_order } = t;
          this.applyChangesToTask(t, {
            tsk_order: groupTasks[destination].tsk_order,
          });
          this.applyChangesToTask(groupTasks[destination], {
            tsk_order,
          });

          // swap with next/previous task
          [groupTasks[position], groupTasks[destination]] = [
            groupTasks[destination],
            groupTasks[position],
          ];

          setTimeout(() => {
            focusTask(containerSelector, t);
          }, 100);
        }

        if (!altKey && !ctrlKey) {
          // jump cursor to another task, no state changes
          return focusTask(containerSelector, groupTasks[destination]);
        }
      }

      if (ctrlKey) {
        // jump cursor to a task in another record
        this.jumpToAnotherRecord(t, direction, containerSelector, true);
      } else {
        if (!altKey && !ctrlKey) {
          // we are either at the beggining and want to go up
          // or the end of the record and want to go down
          // so try to jump to another record
          this.jumpToAnotherRecord(t, direction, containerSelector, false);
        }
      }
    }
  }
  // #endregion
  // #region MoveUp task-toolbar handler
  handlerMoveUp(
    task: Task,
    event: Event,
    groupTasks: Task[],
    containerSelector: string
  ) {
    this.handlerTaskKeyDown(
      task,
      { key: "ArrowUp", altKey: true, ctrlKey: false },
      groupTasks,
      containerSelector
    );
  }
  // #endregion
  // #region MoveDown task-toolbar handler
  handlerMoveDown(
    task: Task,
    event: Event,
    groupTasks: Task[],
    containerSelector: string
  ) {
    this.handlerTaskKeyDown(
      task,
      { key: "ArrowDown", altKey: true, ctrlKey: false },
      groupTasks,
      containerSelector
    );
  }
  // #endregion
  // #region createTask
  parseTask(task: any, options: any) {
    if (task.tsk_name.startsWith("[")) {
      // should be at the beggining of the string
      // otherwise skip this token
      this.doThisWithAToken(
        task.tsk_name,
        (tsk_name: string, expression: string, token: string) => {
          task.tsk_name = tsk_name;
          task.tsk_id_record = expression;
        },
        "[",
        "]"
      );
    }

    // Parse special tokens
    let statusFromToken: boolean = false;
    const tokens = [
      {
        tokenStr: "[DATE]",
        replaceMethod: () => DateUtils.formatDate(DateUtils.dateOnly()),
      },
      {
        tokenStr: "[DATETIME]",
        replaceMethod: () => DateUtils.formatTimestamp(DateUtils.dateOnly()),
      },
      {
        tokenStr: "[BACKLOG]",
        replaceMethod: () => "",
        postAction: (task: any) => {
          task.tsk_ctg_status = 1;
          statusFromToken = true;
        },
      },
      {
        tokenStr: "[OPEN]",
        replaceMethod: () => "",
        postAction: (task: any) => {
          task.tsk_ctg_status = 2;
          task.tsk_date_due = DateUtils.dateOnly();
          statusFromToken = true;
        },
      },
    ];
    tokens.forEach((token) => {
      const matched = task.tsk_name.includes(token);
      task.tsk_name = Utils.replaceAll(
        task.tsk_name,
        token.tokenStr,
        token.replaceMethod()
      );
      if (matched && token.postAction) {
        token.postAction(task);
      }
    });

    // detect Schedule (Start Date and End Date)
    this.doThisWithAToken(
      task.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        task.tsk_name = tsk_name;

        const parsed = DateUtils.parseDatetime(expression);
        task.tsk_schedule_date_start = parsed.date_start;
        if (parsed.date_end) {
          task.tsk_schedule_date_end = parsed.date_end;
        }
        if (parsed.duration) {
          task.tsk_estimated_duration = parsed.duration;
        }
      },
      "%[",
      "]"
    );

    // detect estimated duration
    this.doThisWithAToken(
      task.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        task.tsk_name = tsk_name;

        task.tsk_estimated_duration = DateUtils.parseTime(expression);
      },
      "%"
    );

    // Status in case a token is not provided
    if (!statusFromToken) {
      // override from options for backlog
      if (options.optNewTaskStatusIsBacklog) {
        task.tsk_ctg_status = 1;
      } else {
        // this is the default
        // when override not provided and token not provided
        task.tsk_ctg_status = 2;
        task.tsk_date_due = DateUtils.dateOnly();
      }
    }

    // detects $[] qualifiers
    this.doThisWithAToken(
      task.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        task.tsk_name = tsk_name;

        task.tsk_qualifiers = expression;
      },
      "$[",
      "]"
    );

    // detects #[] hashtags (multiple)
    this.doThisWithAToken(
      task.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        task.tsk_name = tsk_name;

        task.tsk_tags = expression;
      },
      "#[",
      "]"
    );

    // detects # hashtags (individual)
    this.doThisWithAToken(
      task.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        task.tsk_name = tsk_name;

        task.tsk_tags = expression;
      },
      "#"
    );

    // detects URLs
    this.doThisWithAToken(
      task.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        task.tsk_name = tsk_name;

        task.tsk_url = `${token}${expression}`;
      },
      "http://"
    );

    this.doThisWithAToken(
      task.tsk_name,
      (tsk_name: string, expression: string, token: string) => {
        task.tsk_name = tsk_name;

        task.tsk_url = `${token}${expression}`;
      },
      "https://"
    );

    task.tsk_name = task.tsk_name.trim();

    return task;
  }

  pad(
    value: string | number,
    fillChar: string,
    length: number,
    dir: number = -1
  ) {
    let result: string = value + "";
    while (result.length < length) {
      if (dir === -1) {
        result = fillChar + result;
      } else {
        result = result + fillChar;
      }
    }
    return result;
  }

  generateId() {
    // take date + time + random 10 digits
    // total digits 10 + 6 + 10 = 26
    let date = DateUtils.newDateUpToSeconds();
    let random = Math.floor(Math.random() * 1e14);
    let datetimeString = `${date.getFullYear()}${this.pad(
      date.getMonth() + 1,
      "0",
      2
    )}${this.pad(date.getDate(), "0", 2)}`;
    datetimeString += `${this.pad(date.getHours(), "0", 2)}${this.pad(
      date.getMinutes(),
      "0",
      2
    )}${this.pad(date.getSeconds(), "0", 2)}`;
    let id = `T${datetimeString}-${random}`;
    return id;
  }

  /**
   * Extends a basic task model so it has all of the properties of a complete task model.
   * @param {Object} task Basic task model to be extended, it has some properties used in the complete task model.
   * @return {Object} A complete task model extended with the data of the basic task model.
   */
  newTaskTemplate(task: any) {
    const id = this.generateId();
    const username = this.componentHandlers.getUser();
    const nextOrder = this.componentHandlers.nextOrder();

    return {
      tsk_id: id,
      tsk_id_container: "tasks",
      tsk_id_record: task.tsk_id_record || "general",
      tsk_name: task.tsk_name,
      tsk_notes: task.tsk_notes || "",
      tsk_parent: task.tsk_parent || "0",
      tsk_order: nextOrder,
      tsk_date_done: task.tsk_date_done || null,
      tsk_total_time_spent: 0,
      tsk_time_history: task.tsk_time_history || <any>[],
      tsk_ctg_in_process: task.tsk_ctg_in_process || 1,
      tsk_qualifiers: task.tsk_qualifiers || "",
      tsk_tags: task.tsk_tags || "",
      tsk_estimated_duration: task.tsk_estimated_duration || 0,
      tsk_schedule_date_start: task.tsk_schedule_date_start || null,
      tsk_schedule_date_end: task.tsk_schedule_date_end || null,
      tsk_schedule_history: <any>[],
      tsk_date_view_until: task.tsk_date_view_until || null,
      tsk_notifications: <any>[],
      tsk_id_user_added: task.tsk_id_user_added || username,
      tsk_id_user_asigned: task.tsk_id_user_asigned || username,
      tsk_template: task.tsk_template || "",
      tsk_template_state: task.tsk_template_state || "",
      tsk_date_due: task.tsk_date_due || null,
      tsk_id_related: task.tsk_id_related || "0",
      tsk_url: task.tsk_url || "",
      tsk_ctg_repeats: task.tsk_ctg_repeats || 0,
      tsk_id_main: task.tsk_id_main || id,
      tsk_ctg_rep_type: task.tsk_ctg_rep_type || 0,
      tsk_ctg_rep_after_completion: task.tsk_ctg_rep_after_completion || 0,
      tsk_ctg_rep_end: task.tsk_ctg_rep_end || 0,
      tsk_rep_date_end: task.tsk_rep_date_end || null,
      tsk_rep_end_iteration: task.tsk_rep_end_iteration || 0,
      tsk_rep_iteration: task.tsk_rep_iteration || 0,
      tsk_rep_frequency: task.tsk_rep_frequency || 0,
      tsk_ctg_rep_frequency_rule: task.tsk_ctg_rep_frequency_rule || 0,
      tsk_rep_weekdays: task.tsk_rep_weekdays || "",
      tsk_date_add: task.tsk_date_add || DateUtils.newDateUpToSeconds(),
      tsk_date_mod: DateUtils.newDateUpToSeconds(),
      tsk_ctg_status: task.tsk_ctg_status,
    };
  }

  createTask(task: any, options: any) {
    const t: Task = new Task(
      this.newTaskTemplate(this.parseTask(task, options))
    );

    this.syncService.request(
      "create",
      Utils.removeMetadataFromEntity(t),
      t.metadata.fields
        .filter((f) => f.isPK)
        .reduce((final, f) => {
          final[f.dbName] = t[f.dbName];
          return final;
        }, {}),
      t.metadata.name,
      () => {
        t["not_sync"] = false;
        // broadcast crate event
        this.onTaskEvent.emit({
          type: "create",
          task: t,
          changes: {},
        });
      },
      t.recordName,
      (item: Task) => item.tsk_id === t.tsk_id
    );

    return t;
  }
  // #endregion
}
