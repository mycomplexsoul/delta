import { DateUtils } from "src/crosscommon/DateUtility";
import { Task } from "../../crosscommon/entities/Task";
import { Timeline } from "../../crosscommon/entities/Timeline";

const tagTasks = (tasks: Task[], tag: string) =>
  tasks.filter((t) => t.tsk_tags && t.tsk_tags.includes(tag));

const sortTasks = (a: Task, b: Task): number => {
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
  return 0;
};

const calculateUniqueTasks = (tasks: Task[] = []) =>
  tasks
    .sort(sortTasks)
    .reduce((result: Array<{ count: number; task: Task }>, current: Task) => {
      const found = result.find((e) => e.task.tsk_name === current.tsk_name);
      if (found) {
        found.count += 1;
      } else {
        result.push({
          count: 1,
          task: current,
        });
      }
      return result;
    }, []);

const calculateTimelineOnly = (
  timeline: Timeline[] = [],
  timelineKey: string,
  activityId: string
) =>
  timeline.filter(
    (t: Timeline) =>
      t.tim_id_record === timelineKey + activityId &&
      !t.tim_tags.includes("note")
  );

const calculateNotes = (
  timeline: Timeline[] = [],
  timelineKey: string,
  activityId: string
) =>
  timeline.filter(
    (t: Timeline) =>
      t.tim_id_record === timelineKey + activityId &&
      t.tim_tags.includes("note") &&
      !t.tim_tags.includes("note-hidden")
  );

const calculateNotesHidden = (
  timeline: Timeline[] = [],
  timelineKey: string,
  activityId: string
) =>
  timeline.filter(
    (t) =>
      t.tim_id_record === timelineKey + activityId &&
      t.tim_tags.includes("note-hidden")
  );

const sortTimelineList = (timeline: Timeline[] = []) => {
  const timelineOnly = timeline.filter(
    (t: Timeline) => !t.tim_tags.includes("note")
  );

  return timelineOnly.sort((a: Timeline, b: Timeline) => {
    if (new Date(a.tim_date).getTime() > new Date(b.tim_date).getTime()) {
      return 1;
    }
    return -1;
  });
};

const calculateLastTimeline = (timeline: Timeline[]): Timeline | undefined =>
  timeline?.length > 0 ? timeline.at(-1) : undefined;

const calculateHealth = (timeline: Timeline): string => {
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
};

export {
  tagTasks,
  sortTasks,
  calculateUniqueTasks,
  calculateTimelineOnly,
  calculateNotes,
  calculateNotesHidden,
  sortTimelineList,
  calculateLastTimeline,
  calculateHealth,
};
