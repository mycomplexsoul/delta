import { Keyval } from "../../crosscommon/entities/Keyval";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { DateUtils } from "../../crosscommon/DateUtility";

@Injectable()
export class KeyvalService {
  private data: Array<Keyval> = [];
  private config = {
    storageKey: "keyval",
    api: {
      list: "/api/keyval",
      create: "/api/keyval",
      update: "/api/keyval/:id"
    }
  };

  constructor(
    private sync: SyncAPI
  ) {}

  list(): Array<Keyval> {
    return this.data;
  }

  async getAll() {
    const sort = (a: Keyval, b: Keyval) => {
      return a.key_date_mod.getTime() > b.key_date_mod.getTime() ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.list}`)
      .then(data => {
        this.data = data.map((d: any): Keyval => new Keyval(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  newItem(baseItem: Keyval): Promise<Keyval> {
    const newId: string = Utils.hashIdForEntity(new Keyval(), "act_id");
    // complete all fields for item creation
    baseItem.key_id = newId;
    baseItem.key_date_add = DateUtils.newDateUpToSeconds();
    baseItem.key_date_mod = DateUtils.newDateUpToSeconds();

    return this.sync
      .post(this.config.api.create, Utils.removeMetadataFromEntity(baseItem))
      .then(response => {
        if (response.success) {
          this.data.push(baseItem);
        } else {
          baseItem["sync"] = false;
          this.data.push(baseItem);
        }
        return baseItem;
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        baseItem["sync"] = false;
        this.data.push(baseItem);
        return baseItem;
      });
  }

  updateItem(item: Keyval): Promise<Keyval> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.key_id === item.key_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.key_id),
        Utils.entityToRawTableFields(item)
      )
      .then(response => {
        if (!response.success) {
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
