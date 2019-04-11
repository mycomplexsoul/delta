import { Account } from "../../crosscommon/entities/Account";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";

@Injectable()
export class AccountService {
  private data: Array<Account> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "accounts",
    api: {
      list: "/api/movements/accounts"
    }
  };

  constructor(storage: StorageService, sync: SyncAPI) {
    this.storage = storage;
    this.sync = sync;
  }

  async getAll() {
    /*let fromStorage = this.storage.get(this.config.storageKey);
        if (fromStorage){
            this.data = JSON.parse(fromStorage);
        } else {
            this.data = this.initialData();
        }*/
    const sort = (a: Account, b: Account) => {
      return a.acc_name > b.acc_name ? 1 : -1;
    };
    const filter = {
      gc: "AND",
      cont: [
        {
          f: "acc_ctg_status",
          op: "eq",
          val: "1"
        },
        {
          f: "acc_ctg_type",
          op: "ne",
          val: "4"
        }
      ]
    };
    const query = `?q=${JSON.stringify(filter)}`;
    return this.sync
      .get(`${this.config.api.list}${query}`)
      .then(data => {
        this.data = data.map(
          (d: any): Account => {
            let item = new Account(d);
            item["bal_final"] = d["bal_final"];
            return item;
          }
        );
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }
}
