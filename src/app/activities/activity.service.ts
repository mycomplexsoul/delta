import { Activity } from "../../crosscommon/entities/Activity";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class ActivityService {
  private data: Array<Activity> = [];
  private config = {
    storageKey: "activities",
    api: {
      list: "/api/activities",
      create: "/api/activities",
      update: "/api/activities/:id"
    }
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
      .then(data => {
        this.data = data.map((d: any): Activity => new Activity(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  newItem(baseItem: Activity): Promise<Activity> {
    const newId: string = Utils.hashIdForEntity(new Activity(), "act_id");
    const newItem = new Activity({
      act_id: newId,
      act_id_project: "0",
      act_name: baseItem.act_name,
      act_description: null,
      act_tags: baseItem.act_tags || null,
      act_close_comment: null,
      act_id_user: this.authenticationService.currentUserValue.username,
      act_date_add: DateUtils.newDateUpToSeconds(),
      act_date_mod: DateUtils.newDateUpToSeconds(),
      act_ctg_status: 1
    });

    return this.sync
      .post(this.config.api.create, newItem)
      .then(response => {
        if (response.processOk) {
          this.data.push(newItem);
        } else {
          newItem["sync"] = false;
          this.data.push(newItem);
        }
        return newItem;
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        newItem["sync"] = false;
        this.data.push(newItem);
        return newItem;
      });
  }

  updateItem(item: Activity): Promise<Activity> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.act_id === item.act_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.act_id),
        Utils.entityToRawTableFields(item)
      )
      .then(response => {
        if (!response.operationOk) {
          item["sync"] = false;
        }
        updateLocal();
        return item;
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        console.log("error on update", err);
        item["sync"] = false;
        updateLocal();
        return item;
      });
  }
}
