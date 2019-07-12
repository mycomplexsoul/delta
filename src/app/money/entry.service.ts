import { Entry } from "../../crosscommon/entities/Entry";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";

@Injectable()
export class EntryService {
  private data: Array<Entry> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "entries"
  };
  private apiRoot: string = "";

  constructor(storage: StorageService, sync: SyncAPI) {
    this.storage = storage;
    this.sync = sync;
    const options = storage.getObject("Options");
    this.apiRoot = options ? options["optServerAddress"] : "";
  }

  list(): Array<Entry> {
    return this.data;
  }

  getAll(): Promise<Array<Entry>> {
    const sort = (a: Entry, b: Entry) => {
      if (a.ent_date < b.ent_date) {
        return -1;
      } else if (a.ent_date > b.ent_date) {
        return 1;
      } else {
        return 0;
      }
    };
    return this.sync.get(`${this.apiRoot}/api/entries`).then(data => {
      this.data = data.map((d: any): Entry => new Entry(d));
      this.data = this.data.sort(sort);
      return this.data;
    });
  }

  saveToStorage() {
    // this.storage.set(this.config.storageKey,JSON.stringify(this.data));
  }

  newId() {
    return this.data.length + 1 + "";
  }

  newItem(item: Entry): Entry {
    //let newId: string = this.newId();
    //item.ent_id = newId;
    let newItem = new Entry(item);
    this.data.push(newItem);
    this.saveToStorage();
    return newItem;
  }
}
