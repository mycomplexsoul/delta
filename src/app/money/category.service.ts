import { Category } from "../../crosscommon/entities/Category";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class CategoryService {
  private data: Array<Category> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "categories",
    api: {
      list: "/api/categories",
      create: "/api/categories"
    }
  };

  constructor(
    storage: StorageService,
    sync: SyncAPI,
    private authenticationService: AuthenticationService
  ) {
    this.storage = storage;
    this.sync = sync;
  }

  list(): Array<Category> {
    return this.data;
  }

  async getAll() {
    /*let fromStorage = this.storage.get(this.config.storageKey);
        if (fromStorage){
            this.data = JSON.parse(fromStorage);
        } else {
            this.data = this.initialData();
        }*/
    const sort = (a: Category, b: Category) => {
      return a.mct_name > b.mct_name ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.list}`)
      .then(data => {
        this.data = data.map((d: any): Category => new Category(d));
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
    const m: Category = new Category();
    const length: number = m.metadata.fields.find(f => f.dbName === "mct_id")
      .size;
    return Utils.hashId(m.metadata.prefix, length);
  }

  newItem(category: string): Promise<Category> {
    let newId: string = this.newId();
    let newItem = new Category({
      mct_id: newId,
      mct_name: category,
      mct_id_user: this.authenticationService.currentUserValue.username,
      mct_date_add: new Date(),
      mct_date_mod: new Date(),
      mct_ctg_status: 1
    });
    //this.data.push(newItem);
    //this.saveToStorage();
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
}
