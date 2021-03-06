import { TaskStatus } from "./task.type";
import { DateCommon } from "../common/date.common";
import { Injectable } from "@angular/core";
import { Task } from "src/crosscommon/entities/Task";
import { DateUtils } from "src/crosscommon/DateUtility";

@Injectable()
export class TaskIndicator {
  public tasks: Array<Task> = [];
  private dateUtils: DateCommon;

  constructor(dateUtils: DateCommon) {
    this.dateUtils = dateUtils;
  }

  closedETA(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    this.tasks
      .filter(
        (t: Task) =>
          t.tsk_ctg_status == TaskStatus.CLOSED &&
          new Date(t.tsk_date_done) >= initialDate &&
          new Date(t.tsk_date_done) <= finalDate
      )
      .forEach((t: Task) => {
        total += t.tsk_estimated_duration;
      });
    return total;
  }

  addedETA(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    this.tasks
      .filter(
        (t: Task) =>
          new Date(t.tsk_date_due).getTime() === initialDate.getTime()
      )
      .forEach((t: Task) => {
        total += t.tsk_estimated_duration;
      });
    return total;
  }

  closedTaskCount(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    total = this.tasks.filter(
      (t: Task) =>
        t.tsk_ctg_status == TaskStatus.CLOSED &&
        new Date(t.tsk_date_done) >= initialDate &&
        new Date(t.tsk_date_done) <= finalDate
    ).length;
    return total;
  }

  addedTaskCount(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    total = this.tasks.filter(
      (t: Task) => new Date(t.tsk_date_due).getTime() === initialDate.getTime()
    ).length;
    return total;
  }

  calculateTotalTimeSpent(initialDate: Date, finalDate: Date) {
    let state = <any>{};

    state.allClosedTimeTrackingToday = <any>[];
    state.allOpenTimeTrackingToday = <any>[];

    this.tasks.filter(t => {
      // for all tasks
      t["tsk_time_history"].filter((h: any) => {
        // get each time tracking
        if (
          initialDate <= new Date(h.tsh_date_start) &&
          new Date(h.tsh_date_start) <= finalDate
        ) {
          // that is between the range
          if (t.tsk_ctg_status === TaskStatus.CLOSED) {
            // closed tasks
            state.allClosedTimeTrackingToday.push(h);
          } else {
            // open tasks
            state.allOpenTimeTrackingToday.push(h);
          }
        }
      });
    });
    let spent = 0;
    state.allClosedTimeTrackingToday.forEach((h: any) => {
      spent += h.tsh_time_spent;
    });
    state.totalTimeSpentTodayOnClosedTasks = spent;
    state.totalTimeSpentToday = 0;
    state.totalTimeSpentToday += spent;
    spent = 0;
    state.allOpenTimeTrackingToday.forEach((h: any) => {
      spent += h.tsh_time_spent;
    });
    state.totalTimeSpentTodayOnOpenTasks = spent;
    state.totalTimeSpentToday += spent;

    return state;
  }

  calculateProductivityRatio(initialDate: Date, finalDate: Date): number {
    let totalTimeETAClosed = this.closedETA(initialDate, finalDate);
    let totalTimeSpent = this.calculateTotalTimeSpent(initialDate, finalDate)
      .totalTimeSpentTodayOnClosedTasks;

    if (totalTimeSpent === 0) {
      return 0;
    }
    return Math.round((totalTimeETAClosed * 60 * 100) / totalTimeSpent) / 100;
  }

  calculateTimeManagementRatio(initialDate: Date, finalDate: Date): number {
    let realTimeElapsed = this.dateUtils.elapsedTime(
      this.firstTTEntryFromDay(initialDate),
      this.lastTTEntryFromDay(initialDate)
    );
    let totalTimeSpent = this.calculateTotalTimeSpent(initialDate, finalDate)
      .totalTimeSpentTodayOnClosedTasks;

    if (realTimeElapsed === 0) {
      return 0;
    }
    return Math.round((totalTimeSpent * 100) / realTimeElapsed) / 100;
  }

  calculateKarma(initialDate: Date, finalDate: Date): number {
    let totalTimeETAClosed = this.closedETA(initialDate, finalDate);
    let totalTimeSpent = this.calculateTotalTimeSpent(initialDate, finalDate)
      .totalTimeSpentTodayOnClosedTasks;

    return Math.round((totalTimeETAClosed * 60 * 100) / totalTimeSpent) / 100;
  }

  firstTTEntryFromDay(date: Date) {
    let day0 = this.dateUtils.dateOnly(date);
    let nextDay0 = this.dateUtils.addDays(day0, 1);
    let firstDate: Date = nextDay0;
    let tasksOfTheDay = this.tasks.filter((t: Task) => {
      return (
        new Date(t.tsk_date_done) >= day0 &&
        new Date(t.tsk_date_done) < nextDay0
      );
    });
    tasksOfTheDay.forEach((t: Task) => {
      if (t["tsk_time_history"].length) {
        t["tsk_time_history"].forEach((h: any) => {
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
    let day0 = this.dateUtils.dateOnly(date);
    let nextDay0 = this.dateUtils.addDays(day0, 1);
    let lastDate: Date = day0;
    let tasksOfTheDay = this.tasks.filter((t: Task) => {
      return (
        new Date(t.tsk_date_done) >= day0 &&
        new Date(t.tsk_date_done) < nextDay0
      );
    });
    tasksOfTheDay.forEach((t: Task) => {
      if (t["tsk_time_history"].length) {
        t["tsk_time_history"].forEach((h: any) => {
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

  /**
   * Returns de total number of tasks until finalDate date (including that day).
   * @param initialDate ignore this param.
   * @param finalDate Date until total task count should be calculated, including this day.
   */
  openTaskCountUntil(initialDate: Date, finalDate: Date): number {
    let total: Array<any>;
    total = this.tasks.filter(
      (t: Task) =>
        new Date(t.tsk_date_due) <= initialDate &&
        (new Date(t.tsk_date_done) >= finalDate ||
          (t.tsk_ctg_status !== TaskStatus.CLOSED &&
            t.tsk_ctg_status !== TaskStatus.CANCELLED &&
            t.tsk_ctg_status !== TaskStatus.BACKLOG))
    );
    return total.length;
  }

  openETA(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    this.tasks
      .filter(
        (t: Task) =>
          (t.tsk_ctg_status === TaskStatus.OPEN ||
            new Date(t.tsk_date_done).getTime() > finalDate.getTime()) &&
          new Date(t.tsk_date_add).getTime() <= finalDate.getTime()
      )
      .forEach((t: Task) => {
        total += t.tsk_estimated_duration;
      });
    return total;
  }

  backlogTaskCount(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    total = this.tasks.filter(
      (t: Task) =>
        t.tsk_ctg_status == TaskStatus.BACKLOG &&
        new Date(t.tsk_date_add).getTime() <= finalDate.getTime()
    ).length;
    return total;
  }

  backlogETA(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    this.tasks
      .filter(
        (t: Task) =>
          t.tsk_ctg_status === TaskStatus.BACKLOG &&
          new Date(t.tsk_date_add).getTime() <= finalDate.getTime()
      )
      .forEach((t: Task) => {
        total += t.tsk_estimated_duration;
      });
    return total;
  }

  allOpenETA(initialDate: Date, finalDate: Date) {
    let total: number = 0;
    this.tasks
      .filter(
        (t: Task) =>
          (t.tsk_ctg_status === TaskStatus.OPEN ||
            (t.tsk_date_done &&
              new Date(t.tsk_date_done).getTime() > finalDate.getTime()) ||
            ((t.tsk_ctg_status === TaskStatus.BACKLOG &&
              t.tsk_date_due &&
              new Date(t.tsk_date_due).getTime() < finalDate.getTime()) ||
              (!t.tsk_date_due &&
                DateUtils.dateOnly().getTime() < finalDate.getTime()))) &&
          new Date(t.tsk_date_add).getTime() <= finalDate.getTime()
      )
      .forEach((t: Task) => {
        total += t.tsk_estimated_duration;
      });
    return total;
  }

  allOpenTaskCountUntil(initialDate: Date, finalDate: Date): number {
    let total: Array<any>;
    total = this.tasks.filter(
      (t: Task) =>
        (t.tsk_date_due &&
          new Date(t.tsk_date_due) <= initialDate &&
          (new Date(t.tsk_date_done) >= finalDate ||
            (t.tsk_ctg_status !== TaskStatus.CLOSED &&
              t.tsk_ctg_status !== TaskStatus.CANCELLED))) ||
        (!t.tsk_date_due && t.tsk_date_add.getTime() < finalDate.getTime())
    );
    return total.length;
  }
}
