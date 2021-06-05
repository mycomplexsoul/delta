import { LastTime } from "../../crosscommon/entities/LastTime";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class LastTimeService {
  private data: Array<LastTime> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "lasttime",
    defaultUser: "anon",
    api: {
      list: "/api/lasttime",
      create: "/api/lasttime",
      update: "/api/lasttime/:id"
    }
  };
  private includeArchived: boolean = false;

  constructor(
    storage: StorageService,
    sync: SyncAPI,
    private authenticationService: AuthenticationService
  ) {
    this.storage = storage;
    this.sync = sync;
  }

  list(): Array<LastTime> {
    return this.data;
  }

  async getAll() {
    const filter = {
      gc: "AND",
      cont: [
        {
          f: "lst_ctg_status",
          op: "eq",
          val: 1
        }
      ]
    };
    const query = `?q=${JSON.stringify(filter)}`;
    const sort = (a: LastTime, b: LastTime) => {
      return a.lst_date_mod.getTime() > b.lst_date_mod.getTime() ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.list}${this.includeArchived ? "" : query}`)
      .then(data => {
        this.data = data.map((d: any): LastTime => new LastTime(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  async getAllForUser(user: string) {
    return this.getAll().then((all: LastTime[]) => {
      return all.filter((x: LastTime) => x.lst_id_user === user);
    });
  }

  saveToStorage() {
    this.storage.set(this.config.storageKey, JSON.stringify(this.data));
  }

  newItem(
    name: string,
    value: string,
    validity: number,
    tags: string,
    notes: string
  ): Promise<LastTime> {
    let newId: string = Utils.hashIdForEntity(new LastTime(), "lst_id");
    let newItem = new LastTime({
      lst_id: newId,
      lst_name: name,
      lst_value: value,
      lst_validity: validity,
      lst_tags: tags,
      lst_notes: notes,
      lst_id_user: this.authenticationService.currentUserValue.username,
      lst_date_add: new Date(),
      lst_date_mod: new Date(),
      lst_ctg_status: 1
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

  updateItem(item: LastTime, specialData: any = {}): Promise<LastTime> {
    item.lst_id_user = this.authenticationService.currentUserValue.username;
    item.lst_date_mod = new Date();

    const updateLocal = () => {
      const index = this.data.findIndex(e => e.lst_id === item.lst_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(this.config.api.update.replace(":id", item.lst_id), {
        ...Utils.entityToRawTableFields(item),
        ...specialData
      })
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

  setIncludeArchived(status: boolean) {
    this.includeArchived = status;
  }
}
