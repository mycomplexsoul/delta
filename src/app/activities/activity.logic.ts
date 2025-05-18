import { DateUtils } from "../../crosscommon/DateUtility";
import { Task } from "../../crosscommon/entities/Task";
import { Timeline } from "../../crosscommon/entities/Timeline";
import { Keyval } from "../../crosscommon/entities/Keyval";
import { Activity } from "../../crosscommon/entities/Activity";

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

const TIMELINE_KEY = "activity|";

const LAYOUT_LIST = [
  { id: "all", name: "All details" },
  { id: "timeline-only", name: "Timeline only" },
  { id: "activities-only", name: "Activities only" },
  { id: "title-only", name: "Titles only" },
];

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

const groupByProperty = (
  list: Activity[],
  key: string,
  properties?: (e: Activity) => any
): {
  key: string;
  act_ctg_status: number;
  act_txt_status: string;
  items: Activity[];
  [key: string]: any;
}[] => {
  return list.reduce(
    (
      response: Array<{
        key: string;
        act_ctg_status: number;
        act_txt_status: string;
        items: Activity[];
        [key: string]: any;
      }>,
      item
    ) => {
      const group = response.find((g) => g.key === item[key]);

      if (item[key] === 6) {
        // keep only activities that were closed within current month
        const currentMonthDate: Date = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        );
        const closedDate: Date | null | undefined =
          item.additional?.keyvalItems?.find(
            (k: Keyval) => k.key_name === "ACT_DATE_TO_CLOSED"
          )
            ? DateUtils.stringDateToDate(
                item.additional?.keyvalItems?.find(
                  (k: Keyval) => k.key_name === "ACT_DATE_TO_CLOSED"
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
          ...properties?.(item),
          items: [item],
        });
      }
      return response;
    },
    []
  );
};

const calculateActivityGroups = (
  activityList: Activity[],
  selectedProject: string,
  sortGroupsDescending: boolean,
  ALL_STATUS_TEXT: string[]
) => {
  return groupByProperty(
    selectedProject !== "ALL"
      ? activityList.filter((a) => a.act_tasks_tag.startsWith(selectedProject))
      : activityList,
    "act_ctg_status",
    (e) => ({ act_txt_status: ALL_STATUS_TEXT[e.act_ctg_status - 1] })
  ).toSorted(
    (a, b) =>
      (Number(a.key) > Number(b.key) ? 1 : -1) * (sortGroupsDescending ? -1 : 1)
  );
};

const generateHealthGroupData = (
  activityList: Activity[],
  selectedProject: string
) => {
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
};

const calculateProjectList = (activityList: Activity[]) =>
  activityList.reduce(
    (prev, current) => {
      const projectId = current.act_tasks_tag.split("-")[0];
      const found = prev.find((p) => p.id === projectId);
      if (!found && projectId) {
        prev.push({
          id: projectId,
          name: projectId,
          count: activityList.filter(
            (a) => a.act_tasks_tag.startsWith(projectId) && a.act_ctg_status < 6
          ).length,
        });
      }
      return prev;
    },
    [
      {
        id: "ALL",
        name: "ALL",
        count: activityList.filter((a) => a.act_ctg_status < 6).length,
      },
    ]
  );

export {
  activityAdditionalSchema,
  ALL_STATUS_CODES,
  TIMELINE_KEY,
  LAYOUT_LIST,
  tagTasks,
  sortTasks,
  calculateUniqueTasks,
  calculateTimelineOnly,
  calculateNotes,
  calculateNotesHidden,
  sortTimelineList,
  calculateLastTimeline,
  calculateHealth,
  groupByProperty,
  calculateActivityGroups,
  generateHealthGroupData,
  calculateProjectList,
};
