import { Activity } from "../../crosscommon/entities/Activity";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AuthenticationService } from "../common/authentication.service";
import { Keyval } from "src/crosscommon/entities/Keyval";
import { Task } from "src/crosscommon/entities/Task";
import { Timeline } from "src/crosscommon/entities/Timeline";

@Injectable()
export class ActivityService {
  private data: Array<Activity> = [];
  private config = {
    storageKey: "activities",
    api: {
      list: "/api/activities", // TODO: remove
      listing: "/api/activities/list",
      create: "/api/activities",
      update: "/api/activities/:id",
    },
  };

  constructor(
    private authenticationService: AuthenticationService,
    private sync: SyncAPI
  ) {}

  list(): Array<Activity> {
    return this.data;
  }

  async getAll() {
    const sort = (a: Activity, b: Activity) => {
      return a.act_date_mod.getTime() > b.act_date_mod.getTime() ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.list}`)
      .then((data) => {
        this.data = data.map((d: any): Activity => new Activity(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch((err) => {
        return [];
      });
  }

  async getAll2() {
    const sort = (a: Activity, b: Activity) => {
      return a.act_date_mod.getTime() > b.act_date_mod.getTime() ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.listing}`)
      .then((response) => {
        const newData: {
          activity: Activity[];
          timeline: Timeline[];
        } = {
          activity: response.data.activity
            .map((d: any): Activity => {
              const e = new Activity(d);
              e.additional = {
                keyvalItems: d.additional.keyvalItems.map((k) => new Keyval(k)),
                tasks: d.additional.tasks.map((k) => new Task(k)),
                timeline: d.additional.timeline.map((k) => new Timeline(k)),
              };
              return e;
            })
            .sort(sort),
          timeline: response.data.timeline.map(
            (t: any): Timeline => new Timeline(t)
          ),
        };
        return newData;
      })
      .catch((err) => {
        console.log("Error parsing activity data", err);
        return {} as {
          activity: Activity[];
          timeline: Timeline[];
        };
      });
  }

  newItem(baseItem: Activity): Promise<Activity> {
    const newId: string = Utils.hashIdForEntity(new Activity(), "act_id");
    // complete all fields for item creation
    baseItem.act_id = newId;
    baseItem.act_id_user = this.authenticationService.currentUserValue.username;
    baseItem.act_date_add = DateUtils.newDateUpToSeconds();
    baseItem.act_date_mod = DateUtils.newDateUpToSeconds();

    return this.sync
      .post(this.config.api.create, Utils.removeMetadataFromEntity(baseItem))
      .then((response) => {
        if (response.success) {
          this.data.push(baseItem);
        } else {
          baseItem["sync"] = false;
          this.data.push(baseItem);
        }
        return baseItem;
      })
      .catch((err) => {
        // Append it to the listing but flag it as non-synced yet
        baseItem["sync"] = false;
        this.data.push(baseItem);
        return baseItem;
      });
  }

  updateItem(item: Activity): Promise<Activity> {
    const updateLocal = () => {
      const index = this.data.findIndex((e) => e.act_id === item.act_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.act_id),
        Utils.removeMetadataFromEntity(item)
      )
      .then((response) => {
        if (!response.success) {
          item["sync"] = false;
        }
        updateLocal();
        return item;
      })
      .catch((err) => {
        // Append it to the listing but flag it as non-synced yet
        console.log("error on update", err);
        item["sync"] = false;
        updateLocal();
        return item;
      });
  }
}
