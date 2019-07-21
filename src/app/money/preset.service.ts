import { Preset } from "../../crosscommon/entities/Preset";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class PresetService {
  private data: Array<Preset> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "presets",
    defaultUser: "anon",
    api: {
      list: "/api/presets",
      create: "/api/presets",
      update: "/api/presets/:id"
    }
  };

  constructor(
    storage: StorageService,
    sync: SyncAPI,
    private authenticationService: AuthenticationService
  ) {
    this.storage = storage;
    this.sync = sync;
    // get api root
    const options = storage.getObject("Options");
  }

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
    return Utils.hashId("pre", 32);
  }

  newItem(preset: Preset): Preset {
    const newId: string = this.newId();
    preset.pre_id = newId;
    preset.pre_ctg_currency = 1;
    preset.pre_id_user = this.authenticationService.currentUserValue.username;
    preset.pre_date_add = new Date();
    preset.pre_date_mod = new Date();
    const newItem = new Preset(preset);
    //this.data.push(newItem);
    //this.saveToStorage();
    this.sync
      .post(this.config.api.create, newItem)
      .then(response => {
        if (response.processOk) {
          this.data.push(newItem);
        } else {
          newItem["sync"] = false;
          this.data.push(newItem);
        }
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        newItem["sync"] = false;
        this.data.push(newItem);
      });

    return newItem;
  }
}
