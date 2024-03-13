import { Activity } from "../../crosscommon/entities/Activity";
import { ApiServer } from "../ApiServer";

import { iNode } from "../iNode";
import { DateUtils } from "../../crosscommon/DateUtility";
import { KeyvalServer } from "../Keyval/KeyvalServer";
import { Timeline } from "../../crosscommon/entities/Timeline";
import { Task } from "../../crosscommon/entities/Task";
import instantiate from "../InstantiateModule";
import { iEntity } from "../../crosscommon/iEntity";
import { Keyval } from "../../crosscommon/entities/Keyval";

export class ActivityServer {
  private api: ApiServer = new ApiServer(new Activity());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = (node: iNode) => {
    const hooks = {
      afterInsertOK: async (responseCreate, model: Activity) => {
        // insert Keyval data
        const { keyvalItems = {} } = node.request.body;
        const keyvalServer = new KeyvalServer();

        await Object.keys(keyvalItems)
          .map((keyname) => ({
            key_id: model.act_id,
            key_name: keyname,
            key_value: keyvalItems[keyname],
            key_date_add: DateUtils.newDateUpToSeconds(),
            key_date_mod: DateUtils.newDateUpToSeconds(),
            key_ctg_status: 1,
          }))
          .map((item) => keyvalServer.create(item));

        return {
          success: true,
          message: `${
            Object.keys(keyvalItems).length
          } Keyval records created successfully`,
        };
      },
    };
    this.api.createRequestHandler(node, hooks);
  };
  create = this.api.create;

  updateRequestHandler = (node: iNode) => {
    const hooks = {
      afterUpdateOK: async (responseUpdate, model: Activity) => {
        // insert Keyval data
        const { keyvalItems = {} } = node.request.body;
        const keyvalServer = new KeyvalServer();

        await Object.keys(keyvalItems)
          .map((keyname) => ({
            key_id: model.act_id,
            key_name: keyname,
            key_value: keyvalItems[keyname],
            key_date_add: DateUtils.newDateUpToSeconds(),
            key_date_mod: DateUtils.newDateUpToSeconds(),
            key_ctg_status: 1,
          }))
          .map((item) => keyvalServer.create(item));

        return {
          success: true,
          message: `${
            Object.keys(keyvalItems).length
          } Keyval records created successfully`,
        };
      },
    };
    this.api.updateRequestHandler(node, hooks);
  };
  update = this.api.update;

  listWithMetadataRequestHandler = async (node: iNode) => {
    const timelineServer = new ApiServer(new Timeline());
    const taskServer = new ApiServer(new Task());
    const keyvalServer = new ApiServer(new Keyval());

    const { username } = node.request?.["userData"] || {};

    const promises: Promise<Array<Array<any>>>[] = [
      this.api.listServer([
        {
          group: "AND",
          _id_username: username,
        },
        {
          group: "OR",
          "act_ctg_status|ne": 6,
          "act_date_mod|ge": DateUtils.addMonths(
            new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            -1
          ),
        },
      ]),
      timelineServer.listServer([
        {
          group: "AND",
          _id_username: username,
          "tim_id_record|lk": "activity|%",
        },
      ]),
      taskServer.listServer([
        {
          group: "AND",
          _id_username: username,
          "tsk_tags|ne": "",
        },
      ]),
      keyvalServer.listServer([
        {
          group: "AND",
          _id_username: username,
        },
      ]),
    ];

    return Promise.all(promises).then((responses: Array<Array<any>>) => {
      const [activityList, timelineList, taskList, keyvalList] = responses;
      const currentMonth =
        new Date().getFullYear() * 100 + new Date().getMonth() - 1;
      const parsedTimelineList = timelineList
        .map(
          (t) =>
            instantiate.instantiateFromString("Timeline", t, true) as Timeline
        )
        .filter((t: Timeline) => t.tim_id_record.startsWith("activity|"));

      const response = {
        date: new Date(),
        data: {
          activity: activityList
            .map(
              (a) =>
                instantiate.instantiateFromString(
                  "Activity",
                  a,
                  true
                ) as Activity
            )
            .map((a: Activity) => {
              a.additional.timeline = parsedTimelineList.filter((t: Timeline) =>
                t.tim_id_record.startsWith("activity|" + a.act_id)
              );

              a.additional.tasks = taskList
                .map(
                  (t) =>
                    instantiate.instantiateFromString("Task", t, true) as Task
                )
                .filter((t: Task) => t.tsk_tags.includes(a.act_tasks_tag));

              a.additional.keyvalItems = keyvalList
                .map(
                  (e) =>
                    instantiate.instantiateFromString(
                      "Keyval",
                      e,
                      true
                    ) as Keyval
                )
                .filter((e: Keyval) => e.key_id === a.act_id);

              return a;
            }),
          timeline: parsedTimelineList
            .sort((a, b) =>
              new Date(a.tim_date).getTime() > new Date(b.tim_date).getTime()
                ? -1
                : 1
            )
            .filter(
              (t) =>
                new Date(t.tim_date).getFullYear() * 100 +
                  new Date(t.tim_date).getMonth() >=
                currentMonth
            ),
        },
      };

      return node.response.end(JSON.stringify(response));
    });
  };
}
