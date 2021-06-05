import { Place } from "../../crosscommon/entities/Place";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class PlaceService {
  private data: Array<Place> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "places",
    defaultUser: "anon",
    api: {
      list: "/api/places",
      create: "/api/places",
      update: "/api/places/:id"
    }
  };

  constructor(
    private authenticationService: AuthenticationService,
    storage: StorageService,
    sync: SyncAPI
  ) {
    this.storage = storage;
    this.sync = sync;
  }

  list(): Array<Place> {
    return this.data;
  }

  async getAll() {
    const sort = (a: Place, b: Place) => {
      return a.mpl_name > b.mpl_name ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.list}`)
      .then(data => {
        this.data = data.map((d: any): Place => new Place(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  saveToStorage() {
    this.storage.set(this.config.storageKey, JSON.stringify(this.data));
  }

  newId() {
    const m: Place = new Place();
    const length: number = m.metadata.fields.find(f => f.dbName === "mpl_id")
      .size;
    return Utils.hashId(m.metadata.prefix, length);
  }

  newItem(baseItem: Place): Promise<Place> {
    const newId: string = Utils.hashIdForEntity(new Place(), "mpl_id");
    const newItem = new Place({
      mpl_id: newId,
      mpl_name: baseItem.mpl_name,
      mpl_id_user: this.authenticationService.currentUserValue.username,
      mpl_date_add: DateUtils.newDateUpToSeconds(),
      mpl_date_mod: DateUtils.newDateUpToSeconds(),
      mpl_ctg_status: 1
    });

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

  updateItem(item: Place): Promise<Place> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.mpl_id === item.mpl_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.mpl_id),
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
