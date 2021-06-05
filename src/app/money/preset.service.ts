import { Preset } from "../../crosscommon/entities/Preset";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class PresetService {
  private data: Array<Preset> = [];
  private config = {
    storageKey: "presets",
    api: {
      list: "/api/presets",
      create: "/api/presets",
      update: "/api/presets/:id"
    }
  };

  constructor(
    private authenticationService: AuthenticationService,
    private sync: SyncAPI,
    storage: StorageService
  ) {}

  list(): Array<Preset> {
    return this.data;
  }

  getAll() {
    return this.sync
      .get(`${this.config.api.list}`)
      .then(data => {
        this.data = data.map((d: any): Preset => new Preset(d));
        this.data = this.data.sort(this.sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  sort(a: Preset, b: Preset) {
    if (a.pre_name > b.pre_name) {
      return -1;
    } else if (a.pre_name < b.pre_name) {
      return 1;
    } else {
      return 0;
    }
  }

  saveToStorage() {
    //this.storage.set(this.config.storageKey,JSON.stringify(this.data));
  }

  newId() {
    return Utils.hashIdForEntity(new Preset(), "pre_id");
  }

  newItem(baseItem: Preset): Promise<Preset> {
    const newId: string = this.newId();
    baseItem.pre_id = newId;
    baseItem.pre_ctg_currency = 1;
    baseItem.pre_id_user = this.authenticationService.currentUserValue.username;
    baseItem.pre_date_add = new Date();
    baseItem.pre_date_mod = new Date();
    const newItem = new Preset(baseItem);

    return this.sync
      .post(this.config.api.create, newItem)
      .then(response => {
        if (response.success) {
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

  updateItem(item: Preset): Promise<Preset> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.pre_id === item.pre_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.pre_id),
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
