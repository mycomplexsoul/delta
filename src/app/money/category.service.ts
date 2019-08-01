import { Category } from "../../crosscommon/entities/Category";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";
import { DateUtils } from "src/crosscommon/DateUtility";

@Injectable()
export class CategoryService {
  private data: Array<Category> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "categories",
    api: {
      list: "/api/categories",
      create: "/api/categories",
      update: "/api/categories/:id"
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

  list(): Array<Category> {
    return this.data;
  }

  async getAll() {
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

  newItem(baseItem: Category): Promise<Category> {
    let newId: string = Utils.hashIdForEntity(new Category(), "mct_id");
    let newItem = new Category({
      mct_id: newId,
      mct_name: baseItem.mct_name,
      mct_id_user: this.authenticationService.currentUserValue.username,
      mct_date_add: DateUtils.newDateUpToSeconds(),
      mct_date_mod: DateUtils.newDateUpToSeconds(),
      mct_ctg_status: 1
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

  updateItem(item: Category): Promise<Category> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.mct_id === item.mct_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.mct_id),
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
