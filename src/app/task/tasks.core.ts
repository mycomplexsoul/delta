import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from "../../crosscommon/entities/Task";
import { TaskTimeTracking } from "../../crosscommon/entities/TaskTimeTracking";
import { SyncAPI } from "../common/sync.api";
import { DateUtils } from "../../crosscommon/DateUtility";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class TasksCore {
  pendingRequests: Array<any> = [];
  data: any = {
    taskList: <Array<Task>>[],
  };
  public services: any = {};
  serverData: any = {};
  comparisonData: any = {};
  //apiRoot: string = "http://10.230.9.78:8081";
  private headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private sync: SyncAPI
  ) {
    let tasks: Array<Task> = this.tasksFromStorage();
    this.data.taskList = tasks;
    //this.getTasks();
    this.http = http;
    this.sync = sync;
  }

  getAll(): Promise<Array<Task>> {
    return this.sync.get(`/api/tasks/list-open`).then((data) => {
      this.data.taskList = data.tasks.map((d: any): Task => {
        let item: Task = new Task(d);
        item["tsk_time_history"] =
          data.timetracking.filter((tt: TaskTimeTracking) => {
            return tt.tsh_id === item.tsk_id;
          }) || [];
        if (item["tsk_time_history"].length) {
          item["tsk_time_history"].sort(
            (a: TaskTimeTracking, b: TaskTimeTracking) => {
              return a.tsh_num_secuential < b.tsh_num_secuential ? 1 : -1;
            }
          );
        }
        return item;
      });
      return this.data.taskList;
    });
  }

  /** BEGIN API methods */
  /**
   * Creation and addition of a new task to the collection.
   * @param {object} task A basic task model, for simplicity to be extended and added to the task collection.
   * @return {object} The task added to the collection (as a complete task model).
   */
  addTask(task: any, options: any) {
    let T = this.data.taskList;

    let parsedTask = this.parseTask(task, options);

    if (parsedTask.tsk_ctg_status === 1) {
      parsedTask.tsk_date_due = null;
    }

    T.push(this.newTaskTemplate(parsedTask));
    // console.log(T[T.length-1]);
    this.postTask(T[T.length - 1]);
    //this.tasksToStorage();
    return T[T.length - 1];
  }

  batchAddTasks(tasks: Array<any>, options: any, tsk_date_due: Date = null) {
    let T = this.data.taskList;
    let parsedTask: any;
    let list: Array<any> = [];
    let task: any;
    tasks.forEach((text: string) => {
      if (!text.startsWith("//") && text !== "") {
        //t = this.addTask({
        //    'tsk_date_add': DateUtils.newDateUpToSeconds(),
        //    'tsk_name': text
        //}, options);

        parsedTask = this.parseTask(
          {
            tsk_date_add: DateUtils.newDateUpToSeconds(),
            tsk_date_due,
            tsk_name: text,
          },
          options
        );

        task = this.newTaskTemplate(parsedTask);
        T.push(task);
        list.push(task);
        task["not_sync"] = true;
        //this.postTask(T[T.length-1]);
        //return T[T.length-1];
        //console.log("added task:",t);
      }
    });
    this.tasksToStorage();
    this.postBatch(list);
    return list;
  }

  postBatch(list: any[]) {
    this.sync.post("/api/tasks/batch", list).then((response: any) => {
      list.forEach((item: any) => {
        item["not_sync"] = false;
      });
    });
  }

  parseTask(task: any, options: any) {
    // detect group list for the task (at start of text)
    if (task.tsk_name.startsWith("[")) {
      task.tsk_id_record = task.tsk_name.substr(
        task.tsk_name.indexOf("[") + 1,
        task.tsk_name.indexOf("]") - 1
      );
      task.tsk_name = task.tsk_name
        .replace(`[${task.tsk_id_record}] `, "")
        .replace(`[${task.tsk_id_record}]`, "");
    }

    // Parse special tokens
    // [DATE]
    let tokens = [
      {
        tokenStr: "[DATE]",
        replaceMethod: () =>
          this.dateWithFormat(DateUtils.dateOnly()).substring(0, 10),
      },
      {
        tokenStr: "[DATETIME]",
        replaceMethod: () => this.dateWithFormat(DateUtils.dateOnly()),
      },
    ];
    tokens.forEach((token) => {
      task.tsk_name = this.replaceAll(
        task.tsk_name,
        token.tokenStr,
        token.replaceMethod()
      );
    });

    // detect Start Date and End Date
    if (task.tsk_name.indexOf("%[") !== -1) {
      let endPosition =
        task.tsk_name.indexOf("]", task.tsk_name.indexOf("%[")) === -1
          ? task.tsk_name.length
          : task.tsk_name.indexOf("]", task.tsk_name.indexOf("%["));
      let expression = task.tsk_name.substring(
        task.tsk_name.indexOf("%[") + 2,
        endPosition
      );
      let parts = "";
      let parsed = false;
      task.tsk_name = task.tsk_name.replace("%[" + expression + "] ", "");
      task.tsk_name = task.tsk_name.replace(" %[" + expression + "]", "");
      task.tsk_name = task.tsk_name.replace("%[" + expression + "]", "");

      let patternTime = /\d{2}/i;
      let patternDateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/i;
      let patternDateTimeEnd = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} - \d{2}:\d{2}/i;
      let patternDateTimeDuration = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} \+ /i;
      let patternTimeEnd = /\d{2}:\d{2} - \d{2}:\d{2}/i;
      let patternTimeDuration = /\d{2}:\d{2} \+ /i;

      // start date and time and duration -> yyyy-MM-dd HH:mm + ##h##m
      if (patternDateTimeDuration.test(expression)) {
        parts = expression.split(" + ");
        task.tsk_schedule_date_start = new Date(parts[0]);
        task.tsk_estimated_duration = this.parseTime(parts[1]);
        task.tsk_schedule_date_end = new Date(
          task.tsk_schedule_date_start.getTime() +
            task.tsk_estimated_duration * 60 * 1000
        );
        parsed = true;
      }

      // start time and duration -> HH:mm + ##h##m
      if (patternTimeDuration.test(expression) && !parsed) {
        parts = expression.split(" + ");
        let min =
          parseInt(parts[0].split(":")[0]) * 60 +
          parseInt(parts[0].split(":")[1]);
        task.tsk_schedule_date_start = new Date(
          this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
            min * 60 * 1000
        );
        task.tsk_estimated_duration = this.parseTime(parts[1]);
        task.tsk_schedule_date_end = new Date(
          task.tsk_schedule_date_start.getTime() +
            task.tsk_estimated_duration * 60 * 1000
        );
        parsed = true;
      }

      // start date and time and end time -> yyyy-MM-dd HH:mm - HH:mm
      if (patternDateTimeEnd.test(expression) && !parsed) {
        parts = expression.split(" - ");
        let dateOnly = parts[0].split(" ")[0];
        task.tsk_schedule_date_start = new Date(parts[0]);
        task.tsk_schedule_date_end = new Date(dateOnly + " " + parts[1]);
        task.tsk_estimated_duration =
          this.elapsedTime(
            task.tsk_schedule_date_start,
            task.tsk_schedule_date_end
          ) / 60;
        parsed = true;
      }

      // start time and end time -> HH:mm - HH:mm
      if (patternTimeEnd.test(expression) && !parsed) {
        parts = expression.split(" - ");
        let min1 =
          parseInt(parts[0].split(":")[0]) * 60 +
          parseInt(parts[0].split(":")[1]);
        let min2 =
          parseInt(parts[1].split(":")[0]) * 60 +
          parseInt(parts[1].split(":")[1]);
        task.tsk_schedule_date_start = new Date(
          this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
            min1 * 60 * 1000
        );
        task.tsk_schedule_date_end = new Date(
          this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
            min2 * 60 * 1000
        );
        task.tsk_estimated_duration =
          this.elapsedTime(
            task.tsk_schedule_date_start,
            task.tsk_schedule_date_end
          ) / 60;
        parsed = true;
      }

      // start date and time -> yyyy-MM-dd HH:mm
      if (patternDateTime.test(expression) && !parsed) {
        let dateParts = expression.substring(0, 10).split("-");
        task.tsk_schedule_date_start = new Date(expression);
        parsed = true;
      }

      // time only -> HH:mm
      if (patternTime.test(expression) && !parsed) {
        let min =
          parseInt(expression.split(":")[0]) * 60 +
          parseInt(expression.split(":")[1]);
        task.tsk_schedule_date_start = new Date(
          this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
            min * 60 * 1000
        );
        parsed = true;
      }
    }

    // detect estimated duration
    if (
      task.tsk_name.indexOf("%") !== -1 &&
      task.tsk_name.indexOf("%%") === -1
    ) {
      let endPosition =
        task.tsk_name.indexOf(" ", task.tsk_name.indexOf("%")) === -1
          ? task.tsk_name.length
          : task.tsk_name.indexOf(" ", task.tsk_name.indexOf("%"));
      let duration = task.tsk_name.substring(
        task.tsk_name.indexOf("%") + 1,
        endPosition
      );

      task.tsk_name = task.tsk_name.replace("%" + duration + " ", "");
      task.tsk_name = task.tsk_name.replace(" %" + duration, "");
      task.tsk_name = task.tsk_name.replace("%" + duration, "");

      duration = this.parseTime(duration);

      task.tsk_estimated_duration = parseInt(duration);
    }

    // detect [OPEN] token, creates task as an OPEN task
    const tokenBacklog = "[BACKLOG]";
    if (task.tsk_name.indexOf(tokenBacklog) !== -1) {
      task.tsk_name = task.tsk_name.replace(`${tokenBacklog} `, "");
      task.tsk_name = task.tsk_name.replace(` ${tokenBacklog}`, "");
      task.tsk_name = task.tsk_name.replace(`${tokenBacklog}`, "");

      task.tsk_ctg_status = 1; // BACKLOG
    } else {
      if (options.optNewTaskStatusIsBacklog) {
        task.tsk_ctg_status = 1; // BACKLOG
      } else {
        task.tsk_ctg_status = 2; // OPEN
        if (!task.tsk_date_due) {
          task.tsk_date_due = DateUtils.dateOnly(new Date());
        }
      }
    }

    // detects $[] qualifiers
    if (task.tsk_name.indexOf("$[") !== -1) {
      let endPosition =
        task.tsk_name.indexOf("]", task.tsk_name.indexOf("$[")) === -1
          ? task.tsk_name.length
          : task.tsk_name.indexOf("]", task.tsk_name.indexOf("$["));
      let expression = task.tsk_name.substring(
        task.tsk_name.indexOf("$[") + 2,
        endPosition
      );

      task.tsk_name = task.tsk_name.replace("$[" + expression + "] ", "");
      task.tsk_name = task.tsk_name.replace(" $[" + expression + "]", "");
      task.tsk_name = task.tsk_name.replace("$[" + expression + "]", "");

      task.tsk_qualifiers = expression;
    }

    // detects #[] hashtags (multiple)
    if (task.tsk_name.indexOf("#[") !== -1) {
      let endPosition =
        task.tsk_name.indexOf("]", task.tsk_name.indexOf("#[")) === -1
          ? task.tsk_name.length
          : task.tsk_name.indexOf("]", task.tsk_name.indexOf("#["));
      let expression = task.tsk_name.substring(
        task.tsk_name.indexOf("#[") + 2,
        endPosition
      );

      task.tsk_name = this.replaceTokenInText(
        task.tsk_name,
        "#[" + expression + "]"
      );

      task.tsk_tags = expression;
    }

    // detects # hashtags (individual)
    while (task.tsk_name.indexOf("#") !== -1) {
      let endPosition =
        task.tsk_name.indexOf(" ", task.tsk_name.indexOf("#")) === -1
          ? task.tsk_name.length
          : task.tsk_name.indexOf(" ", task.tsk_name.indexOf("#"));
      let expression = task.tsk_name.substring(
        task.tsk_name.indexOf("#") + 1,
        endPosition
      );

      task.tsk_name = this.replaceTokenInText(task.tsk_name, "#" + expression);

      task.tsk_tags = task.tsk_tags
        ? task.tsk_tags + " " + expression
        : expression;
    }

    // detects URLs
    this.doThisWithAToken(
      task,
      (t: Task, expression: string) => {
        t.tsk_url = "http://" + expression;
        console.log("task with url", t);
      },
      "http://"
    );

    this.doThisWithAToken(
      task,
      (t: Task, expression: string) => {
        t.tsk_url = "https://" + expression;
        console.log("task with url", t);
      },
      "https://"
    );

    // detects repetition options
    this.doThisWithAToken(
      task,
      (t: Task, expression: string) => {
        let repetitionBasis: string = ""; // daily|weekly|monthly
        let completionCriteria: string = "onCompletion";
        let terminationCriteria: string = "iterations";
        let terminationValue: string = "10";
        let frequency: number = 0;
        let frequencyRule: string = "";
        const patternDate = /\d{4}-\d{2}-\d{2}/i;

        const repetitionTypeValues: Array<string> = [
          "",
          "daily",
          "weekly",
          "monthly",
          "workdays",
          "weekends",
          "each",
          "weekdays",
          "onDay",
        ];
        const completionValues: Array<string> = ["", "strict", "onCompletion"];
        const repetitionEndValues: Array<string> = [
          "",
          "forever",
          "date",
          "iterations",
        ];
        const frequencyRuleValues: Array<string> = ["", "d", "w", "m"];
        const weekdaysValues: Array<string> = [
          "",
          "Mo",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa",
          "Su",
        ];

        if (expression) {
          if (expression.indexOf("|") !== -1) {
            let basis: Array<string> = expression.split("|");
            if (basis[0].indexOf("-") !== -1) {
              repetitionBasis = basis[0].split("-")[0].trim();
              completionCriteria = basis[0].split("-")[1].trim();
            } else {
              completionCriteria = "";
              repetitionBasis = basis[0].trim();
            }
            terminationCriteria = basis[1].split(":")[0].trim();
            terminationValue = basis[1].split(":")[1].trim();
          } else {
            if (expression.indexOf("-") !== -1) {
              repetitionBasis = expression.split("-")[0].trim();
              completionCriteria = expression.split("-")[1].trim();
            } else {
              completionCriteria = "";
              repetitionBasis = expression.trim();
            }
            terminationCriteria = "";
            terminationValue = "";
          }

          if (repetitionBasis.indexOf(":") !== -1) {
            if (/[A-Z]+/.test(repetitionBasis.split(":")[1].trim())) {
              // weekdays only
              frequencyRule = repetitionBasis.split(":")[1].trim();
            }
            if (/\d+[a-zA-Z]+/.test(repetitionBasis.split(":")[1].trim())) {
              // number and literal
              frequency = parseInt(repetitionBasis.split(":")[1].trim()); // parse ignoring literal chars
              if (repetitionBasis.split(":")[0].trim() === "each") {
                frequencyRule = repetitionBasis.split(":")[1].trim().substr(-1); // last char is literal
              }
              if (repetitionBasis.split(":")[0].trim() === "onDay") {
                frequencyRule = repetitionBasis.split(":")[1].trim().substr(-2); // last chars is weekday
              }
            }
            repetitionBasis = repetitionBasis.split(":")[0].trim();
          }

          t.tsk_ctg_rep_type = repetitionTypeValues.indexOf(repetitionBasis);
          t.tsk_ctg_repeats = t.tsk_ctg_rep_type > 0 ? 2 : 1;
          t.tsk_ctg_rep_after_completion =
            completionValues.indexOf(completionCriteria);
          t.tsk_ctg_rep_end = repetitionEndValues.indexOf(terminationCriteria);
          if (terminationValue && patternDate.test(terminationValue)) {
            t.tsk_rep_date_end = new Date(
              parseInt(terminationValue.split("-")[0]),
              parseInt(terminationValue.split("-")[1]) - 1,
              parseInt(terminationValue.split("-")[2])
            );
          }
          if (
            terminationValue &&
            /\d+/.test(terminationValue) &&
            !patternDate.test(terminationValue)
          ) {
            t.tsk_rep_end_iteration = parseInt(terminationValue);
          }
          t.tsk_rep_iteration = 1;
          t.tsk_rep_frequency = frequency;
          if (repetitionBasis === "each") {
            t.tsk_ctg_rep_frequency_rule =
              frequencyRuleValues.indexOf(frequencyRule);
          }
          if (repetitionBasis === "onDay") {
            t.tsk_ctg_rep_frequency_rule =
              weekdaysValues.indexOf(frequencyRule);
          }
          if (repetitionBasis === "weekdays") {
            t.tsk_rep_weekdays = frequencyRule;
          }
        }
        console.log("task with repetition", t);
      },
      "*[",
      "]"
    );

    return task;
  }

  /**
   * Extends a basic task model so it has all of the properties of a complete task model.
   * @param {object} a Basic task model to be extended, it has some properties used in the complete task model.
   * @return {object} A complete task model extended with the data of the basic task model.
   */
  newTaskTemplate(task: any) {
    const id = this.generateId();
    const { username } = this.authenticationService.currentUserValue;
    return {
      tsk_id: id,
      tsk_id_container: "tasks",
      tsk_id_record: task.tsk_id_record || "general",
      tsk_name: task.tsk_name,
      tsk_notes: task.tsk_notes || "",
      tsk_parent: task.tsk_parent || "0",
      tsk_order: this.nextOrder(),
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

  nextOrder() {
    if (this.data.taskList.length) {
      // find max existent order
      let order = 0;
      this.data.taskList.forEach((t: any) => {
        if (order < parseInt(t.tsk_order)) {
          order = parseInt(t.tsk_order);
        }
      });
      return order + 1;
    }
    return 1;
  }

  tasks() {
    return this.data.taskList;
  }

  tasksGroups() {}

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

  /** BEGIN Storage */
  tasksFromStorage() {
    if (typeof window.localStorage !== "undefined") {
      let tasks: Array<Task> = JSON.parse(localStorage.getItem("Tasks"));
      //console.log('from storage recent',tasks.length);
      // tasks = tasks.concat(JSON.parse(localStorage.getItem("Tasks.old")));
      //console.log('from storage all',tasks.length);
      if (tasks) {
        // parse dates
        // tasks.forEach((t: any) => {
        //     t.tsk_date_done = this.stringDateToDate(t.tsk_date_done);
        //     t.tsk_schedule_date_start = this.stringDateToDate(t.tsk_schedule_date_start);
        //     t.tsk_schedule_date_end = this.stringDateToDate(t.tsk_schedule_date_end);
        //     t.tsk_date_view_until = this.stringDateToDate(t.tsk_date_view_until);
        //     t.tsk_date_add = this.stringDateToDate(t.tsk_date_add);
        //     t.tsk_date_mod = this.stringDateToDate(t.tsk_date_mod);

        //     t.tsk_time_history.forEach((h: any) => {
        //         h.tsh_date_start = this.stringDateToDate(h.tsh_date_start);
        //         h.tsh_date_end = this.stringDateToDate(h.tsh_date_end);
        //         h.tsh_date_add = this.stringDateToDate(h.tsh_date_add);
        //         h.tsh_date_mod = this.stringDateToDate(h.tsh_date_mod);
        //     });
        // });
        return tasks;
      }
    }
    return [];
  }

  tasksToStorage() {
    // do this once
    // change timestamps in dates to not have milliseconds
    // let tasks = this.data.taskList;
    // let convertDateToDateUpToSeconds: Function = (d: any): Date => {
    //     if (d){
    //         return new Date(Math.floor((new Date(d)).getTime() / 1000) * 1000);
    //     }
    //     return null;
    // };
    // let total: number = 0;
    // tasks.forEach((t: any) => {
    //     // t.tsk_date_done = convertDateToDateUpToSeconds(t.tsk_date_done);
    //     // t.tsk_schedule_date_start = convertDateToDateUpToSeconds(t.tsk_schedule_date_start);
    //     // t.tsk_schedule_date_end = convertDateToDateUpToSeconds(t.tsk_schedule_date_end);
    //     // t.tsk_date_view_until = convertDateToDateUpToSeconds(t.tsk_date_view_until);
    //     // t.tsk_date_add = convertDateToDateUpToSeconds(t.tsk_date_add);
    //     // t.tsk_date_mod = convertDateToDateUpToSeconds(t.tsk_date_mod);

    //     total = 0;
    //     t.tsk_time_history.forEach((h: any) => {
    //         h.tsh_date_start = convertDateToDateUpToSeconds(h.tsh_date_start);
    //         h.tsh_date_end = convertDateToDateUpToSeconds(h.tsh_date_end);
    //         // h.tsh_date_add = convertDateToDateUpToSeconds(h.tsh_date_add);
    //         // h.tsh_date_mod = convertDateToDateUpToSeconds(h.tsh_date_mod);
    //         if (h.tsh_date_end){
    //             h.tsh_time_spent = this.elapsedTime(h.tsh_date_start,h.tsh_date_end);
    //             total += h.tsh_time_spent;
    //         } else {
    //             h.tsh_time_spent = 0;
    //         }
    //     });
    //     t.tsk_total_time_spent = total;
    // });
    if (typeof window.localStorage !== "undefined") {
      // let date = new Date();
      // date = new Date(2017,9,1);
      // let old = this.data.taskList.filter((t: any) => new Date(t.tsk_date_add) < date && t.tsk_ctg_status === 3);
      // let recent = this.data.taskList.filter((t: any) => new Date(t.tsk_date_add) >= date || t.tsk_ctg_status !== 3);
      //console.log('old storage',old.length);
      //console.log('recent storage',recent.length);
      //    localStorage.setItem("Tasks", JSON.stringify(this.data.taskList));
      // localStorage.setItem("Tasks", JSON.stringify(recent));
      //localStorage.setItem("Tasks.old", JSON.stringify(old));
    }
  }
  /** END Storage */

  stringDateToDate(date: string) {
    if (/\d{4}-\d{2}-\d{2}/.test(date)) {
      // looks like a date
      return new Date(date);
    }
    return undefined;
  }

  updateTask(task: any, newData: any) {
    Object.keys(newData).forEach((k) => {
      task[k] = newData[k];
    });
    task.tsk_date_mod = DateUtils.newDateUpToSeconds();
    const index = this.tasks().findIndex((e: any) => e.tsk_id === task.tsk_id);
    this.data.taskList[index] = task;
    this.updateTaskBE(task);
    this.tasksToStorage();
  }

  addTimeTracking(task: any, specifics: any = {}) {
    task.tsk_time_history.push({
      tsh_id: task.tsk_id,
      tsh_num_secuential: task.tsk_time_history.length + 1,
      tsh_name: task.tsk_name,
      tsh_date_start: DateUtils.newDateUpToSeconds(),
      tsh_date_end: null,
      tsh_time_spent: 0,
      tsh_id_user: this.authenticationService.currentUserValue.username,
      tsh_date_add: DateUtils.newDateUpToSeconds(),
      tsh_date_mod: DateUtils.newDateUpToSeconds(),
      ...specifics,
    });
    this.tasksToStorage();
  }

  stopTimeTracking(task: any) {
    let h = task.tsk_time_history[task.tsk_time_history.length - 1];
    h.tsh_name = task.tsk_name;
    h.tsh_date_end = DateUtils.newDateUpToSeconds();
    h.tsh_time_spent = this.elapsedTime(h.tsh_date_start, h.tsh_date_end);
    h.tsh_date_mod = DateUtils.newDateUpToSeconds();

    this.recalculateTotalTimeSpent(task);
    this.tasksToStorage();
  }

  recalculateTotalTimeSpent(task: any) {
    // sum in task
    let sum: number = 0;
    task.tsk_time_history.forEach((t: any) => {
      sum += t.tsh_time_spent;
    });
    task.tsk_total_time_spent = sum;
    return task;
  }

  elapsedTime(date1: Date, date2: Date): number {
    // return diff in seconds
    if (date1 && date2) {
      return Math.floor(Math.abs(date1.getTime() - date2.getTime()) / 1000);
    }
    return 0;
  }

  elapsedDays(date1: Date, date2: Date): number {
    return Math.floor(
      this.elapsedTime(this.dateOnly(date1), this.dateOnly(date2)) /
        (60 * 60 * 24)
    );
  }

  updateTaskTimeTracking(taskTimeTracking: any, newData: any) {
    Object.keys(newData).forEach((k) => {
      taskTimeTracking[k] = newData[k];
    });
    if (taskTimeTracking.tsh_date_end !== null) {
      taskTimeTracking.tsh_time_spent = this.elapsedTime(
        new Date(taskTimeTracking.tsh_date_start),
        new Date(taskTimeTracking.tsh_date_end)
      );
    } else {
      taskTimeTracking.tsh_time_spent = 0;
    }
    taskTimeTracking.tsh_date_mod = DateUtils.newDateUpToSeconds();
    const task = this.recalculateTotalTimeSpent(
      this.data.taskList.find((t: any) => t.tsk_id === taskTimeTracking.tsh_id)
    );
    const index = this.data.taskList.findIndex(
      (t: any) => t.tsk_id === taskTimeTracking.tsh_id
    );
    this.data.taskList[index] = task;
    const historyIndex = task.tsk_time_history.findIndex(
      (h: any) =>
        h.tsh_id === taskTimeTracking.tsh_id &&
        h.tsh_num_secuential === taskTimeTracking.tsh_num_secuential
    );
    task.tsk_time_history[historyIndex] = taskTimeTracking;
    this.tasksToStorage();
    this.updateTaskBE(task);
  }

  deleteTasks() {
    this.data.taskList = [];
    this.tasksToStorage();
  }

  dateOnly(base: Date) {
    return new Date(
      base.getFullYear(),
      base.getMonth(),
      base.getDate(),
      0,
      0,
      0
    );
  }

  dateWithFormat(date: Date) {
    var str =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 > 9
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "-" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate());
    str +=
      " " +
      (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) +
      ":" +
      (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) +
      ":" +
      (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
    return str;
  }

  replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(this.escapeRegExp(find), "g"), replace);
  }

  escapeRegExp(str: string) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  // TODO: remove this, already moved into DateUtils
  parseTime(duration: string) {
    let hours = 0,
      min = 0;
    if (duration.indexOf("h") !== -1) {
      hours = parseInt(duration.substring(0, duration.indexOf("h")));
      duration = duration.replace(hours + "h", "");
    }
    if (duration.indexOf(":") !== -1) {
      hours = parseInt(duration.substring(0, duration.indexOf(":")));
      duration = duration.replace(hours + ":", "");
    }
    if (duration.indexOf("m") !== -1) {
      min = parseInt(duration.substring(0, duration.indexOf("m")));
      duration = duration.replace(min + "m", "");
    } else {
      if (duration !== "") {
        min = parseInt(duration);
        duration = duration.replace(min + "", "");
      }
    }
    if (duration === "") {
      return hours * 60 + min;
    }
    return parseInt(duration);
  }

  // TODO: remove this, already moved into DateUtils
  parseDatetime(expression: string) {
    let parts = <any>[];
    let parsed: boolean = false;
    let s = {
      date_start: <Date>null,
      date_end: <Date>null,
      duration: 0,
      pattern: "",
    };

    let patternTime = /\d{2}/i;
    let patternDateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/i;
    let patternDateTimeEnd = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} - \d{2}:\d{2}/i;
    let patternDateTimeDuration = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} \+ /i;
    let patternTimeEnd = /\d{2}:\d{2} - \d{2}:\d{2}/i;
    let patternTimeDuration = /\d{2}:\d{2} \+ /i;

    // start date and time and duration -> yyyy-MM-dd HH:mm + ##h##m
    if (patternDateTimeDuration.test(expression)) {
      parts = expression.split(" + ");
      s.date_start = new Date(parts[0]);
      s.duration = this.parseTime(parts[1]);
      s.date_end = new Date(s.date_start.getTime() + s.duration * 60 * 1000);
      parsed = true;
      s.pattern = "yyyy-MM-dd HH:mm + ##h##m";
    }

    // start time and duration -> HH:mm + ##h##m
    if (patternTimeDuration.test(expression) && !parsed) {
      parts = expression.split(" + ");
      let min =
        parseInt(parts[0].split(":")[0]) * 60 +
        parseInt(parts[0].split(":")[1]);
      s.date_start = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min * 60 * 1000
      );
      s.duration = this.parseTime(parts[1]);
      s.date_end = new Date(s.date_start.getTime() + s.duration * 60 * 1000);
      parsed = true;
      s.pattern = "HH:mm + ##h##m";
    }

    // start date and time and end time -> yyyy-MM-dd HH:mm - HH:mm
    if (patternDateTimeEnd.test(expression) && !parsed) {
      parts = expression.split(" - ");
      let dateOnly = parts[0].split(" ")[0];
      s.date_start = new Date(parts[0]);
      s.date_end = new Date(dateOnly + " " + parts[1]);
      s.duration = this.elapsedTime(s.date_start, s.date_end) / 60;
      parsed = true;
      s.pattern = "yyyy-MM-dd HH:mm - HH:mm";
    }

    // start time and end time -> HH:mm - HH:mm
    if (patternTimeEnd.test(expression) && !parsed) {
      parts = expression.split(" - ");
      let min1 =
        parseInt(parts[0].split(":")[0]) * 60 +
        parseInt(parts[0].split(":")[1]);
      let min2 =
        parseInt(parts[1].split(":")[0]) * 60 +
        parseInt(parts[1].split(":")[1]);
      s.date_start = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min1 * 60 * 1000
      );
      s.date_end = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min2 * 60 * 1000
      );
      s.duration = this.elapsedTime(s.date_start, s.date_end) / 60;
      parsed = true;
      s.pattern = "HH:mm - HH:mm";
    }

    // start date and time -> yyyy-MM-dd HH:mm
    if (patternDateTime.test(expression) && !parsed) {
      let dateParts = expression.substring(0, 10).split("-");
      s.date_start = new Date(expression);
      parsed = true;
      s.pattern = "yyyy-MM-dd HH:mm";
    }

    // time only -> HH:mm
    if (patternTime.test(expression) && !parsed) {
      let min =
        parseInt(expression.split(":")[0]) * 60 +
        parseInt(expression.split(":")[1]);
      s.date_start = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min * 60 * 1000
      );
      parsed = true;
      s.pattern = "HH:mm";
    }

    return s;
  }

  import(tasks: any[]) {
    tasks.forEach((t: any) => {
      this.data.taskList.push(t);
    });
    this.tasksToStorage();
  }

  // getTasks(){
  //     this.http.get(`${this.apiRoot}/task/list`).subscribe(
  //         (data) => {
  //             this.serverData.tasks = JSON.parse(data["_body"]);
  //             console.log('from BE',this.serverData.tasks);
  //         },
  //         (err) => {
  //             console.log(err);
  //         }
  //     )
  // }

  getTasks() {
    //return this.http.get(`${this.apiRoot}/api/tasks`).toPromise() // => data.json()
    return this.getAll()
      .then((data) => {
        this.serverData.tasks = data;
        console.log("from BE", this.serverData.tasks);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // postTask(t: any){
  //     this.http.post(`${this.apiRoot}/task/create`,this.parseToPost(t)).subscribe(
  //         response => {
  //             console.log('post response',response);
  //         }
  //     );
  // }

  postTask(t: any) {
    t.not_sync = true;
    this.sync.request(
      "create",
      Utils.entityToRawTableFields(t),
      {
        tsk_id: t.tsk_id,
      },
      "Task",
      () => {
        t.not_sync = false;
      },
      (e: Task) => e.tsk_id + " / " + e.tsk_name,
      (val: Task) => val.tsk_id === t.tsk_id
    );
  }

  postMultipleTasks(list: Array<any>) {
    let syncList: Array<any> = [];
    list.forEach((t: any) => {
      t.not_sync = true;
      syncList.push({
        action: "create",
        model: t,
        pk: {
          tsk_id: t.tsk_id,
        },
        entity: "Task",
        callback: (model: any, response: any) => {
          model.not_sync = false;
        },
        recordName: (task: any) => task.tsk_id,
        matchMethod: (val: any) => val.tsk_id === t.tsk_id, // use pk's instead
      });
    });
    this.sync.multipleRequest(syncList);
  }

  prepareTaskToPostBE(t: Task): any {
    const history = t["tsk_time_history"];
    const simpleTask = Utils.entityToRawTableFields(t);
    simpleTask["tsk_time_history"] = history;
    return simpleTask;
  }

  updateTaskBE(t: any) {
    t.not_sync = true;
    this.sync.request(
      "update",
      this.prepareTaskToPostBE(t),
      {
        tsk_id: t.tsk_id,
      },
      "Task",
      () => {
        t.not_sync = false;
      },
      (e: Task) => e.tsk_id + " / " + e.tsk_name,
      (val: Task) => val.tsk_id === t.tsk_id
    );
  }

  parseToPost(obj: any) {
    let resp = "";
    Object.keys(obj).forEach((k) => {
      if (obj[k] === 0 || (obj[k] !== "" && obj[k])) {
        resp = (resp !== "" ? resp + "&" : "") + `${k}=${obj[k]}`;
      }
    });
    return resp;
  }

  purgeDoneTasks() {
    let filtered = this.data.taskList.filter((t: any) => {
      return t.tsk_ctg_status !== 3; // CLOSED
    });

    this.data.taskList = filtered;
    this.tasksToStorage();
  }

  replaceTokenInText(
    tsk_name: string,
    expression: string,
    replacement: string = ""
  ) {
    let r = tsk_name;
    r = r.replace(expression, replacement).trim();
    return r;
  }

  doThisWithAToken(
    task: any,
    method: Function,
    token: string,
    tokenEnd: string = " ",
    replacement: string = ""
  ) {
    while (task.tsk_name.indexOf(token) !== -1) {
      let endPosition =
        task.tsk_name.indexOf(tokenEnd, task.tsk_name.indexOf(token)) === -1
          ? task.tsk_name.length
          : task.tsk_name.indexOf(tokenEnd, task.tsk_name.indexOf(token));
      let expression = task.tsk_name.substring(
        task.tsk_name.indexOf(token) + token.length,
        endPosition
      );

      task.tsk_name = this.replaceTokenInText(
        task.tsk_name,
        token + expression + (tokenEnd === " " ? "" : tokenEnd),
        replacement
      );

      method(task, expression);
    }
  }

  computeComparisonData() {
    return this.getAll().then((serverData) => {
      let clientData = this.data.taskList;
      let singleTask: any;
      let comparisonResults: Array<any> = [];
      let result: any;

      // compare tasks, client first
      clientData.forEach((t: any) => {
        singleTask = serverData.find((s: any) => s.tsk_id === t.tsk_id);

        if (singleTask) {
          result = this.compareTask(t, singleTask);
          if (result.length > 0) {
            comparisonResults.push(result);
          }
        } else {
          // use this if task is not in server
          //comparisonResults.push(this.compareTask(t,{}));
          console.log("this task is not in the server", t);
        }
      });

      this.comparisonData = {
        results: comparisonResults,
        clientTaskCount: clientData.length,
        serverTaskCount: serverData.length,
      };
      return this.comparisonData;
    });
  }

  compareTask(t: any, s: any) {
    //let fields = ['tsk_id_container','tsk_id_record','tsk_name','tsk_notes', 'tsk_parent', 'tsk_order', 'tsk_date_done', 'tsk_total_time_spent', 'tsk_ctg_in_process', 'tsk_qualifiers', 'tsk_tags', 'tsk_estimated_duration', 'tsk_schedule_date_start', 'tsk_schedule_date_end', 'tsk_date_view_until', 'tsk_id_user_added', 'tsk_id_user_asigned', 'tsk_date_add', 'tsk_date_mod', 'tsk_ctg_status'];
    //let fields = ['tsk_id_container','tsk_id_record','tsk_name','tsk_notes','tsk_parent','tsk_order','tsk_date_done','tsk_total_time_spent','tsk_ctg_in_process','tsk_qualifiers','tsk_tags','tsk_estimated_duration','tsk_schedule_date_start','tsk_schedule_date_end','tsk_date_view_until','tsk_id_user_added','tsk_id_user_asigned','tsk_template','tsk_template_state','tsk_date_due','tsk_id_related','tsk_url','tsk_ctg_repeats','tsk_id_main','tsk_ctg_rep_type','tsk_ctg_rep_after_completion','tsk_ctg_rep_end','tsk_rep_date_end','tsk_rep_end_iteration','tsk_rep_iteration','tsk_rep_frequency','tsk_ctg_rep_frequency_rule','tsk_rep_weekdays','tsk_date_add','tsk_date_mod','tsk_ctg_status'];
    let fields = [
      "tsk_id_container",
      "tsk_id_record",
      "tsk_name",
      "tsk_notes",
      "tsk_parent",
      "tsk_order",
      "tsk_date_done",
      "tsk_total_time_spent",
      "tsk_ctg_in_process",
      "tsk_tags",
      "tsk_estimated_duration",
      "tsk_schedule_date_start",
      "tsk_schedule_date_end",
      "tsk_date_view_until",
      "tsk_id_user_added",
      "tsk_id_user_asigned",
      "tsk_template",
      "tsk_template_state",
      "tsk_date_due",
      "tsk_id_related",
      "tsk_url",
      "tsk_id_main",
      "tsk_rep_date_end",
      "tsk_rep_weekdays",
      "tsk_date_add",
      "tsk_ctg_status",
    ];
    //let fields = ['tsk_date_done'];
    let comparison: Array<any> = [];
    let field: any = {};

    fields.forEach((f: string) => {
      field = {};
      field.id = t.tsk_id;
      field.displayName = t.tsk_id + " - " + t.tsk_name;
      field.name = f;
      field.client = t[f];
      field.server = s[f];
      if (t[f] instanceof Date) {
        s[f] = new Date(s[f]);
        field.isEqual = t[f].getTime() == s[f].getTime();
      } else {
        field.isEqual = t[f] == s[f];
      }
      if (field.name === "tsk_total_time_spent" && !field.isEqual) {
        // let's find out which one is the real one
        let taskClient: Task = this.data.taskList.find(
          (t: Task) => t.tsk_id === field.id
        );
        this.recalculateTotalTimeSpent(taskClient);
        field.isEqual = taskClient[f] == s[f];
      }
      if (field.name === "tsk_date_mod" && !field.isEqual) {
        // we preserve server date if it defers from browser
        let taskClient: Task = this.data.taskList.find(
          (t: Task) => t.tsk_id === field.id
        );
        taskClient[f] = new Date(s[f]);
        field.isEqual = taskClient[f].getTime() == new Date(s[f]).getTime();
      }
      if (!field.isEqual) {
        comparison.push(field);
      }
    });

    return comparison;
  }

  /*setApiRoot(root: string) {
    this.apiRoot = root;
    console.log("api root has changed to:", root);
  }*/
}
