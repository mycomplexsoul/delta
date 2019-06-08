import { Account } from "../../crosscommon/entities/Account";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "src/crosscommon/Utility";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class AccountService {
  private data: Array<Account> = [];
  private sync: SyncAPI = null;
  private config = {
    storageKey: "accounts",
    api: {
      list: "/api/movements/accounts",
      create: "/api/accounts",
      update: "/api/accounts/:id"
    }
  };

  constructor(
    private authenticationService: AuthenticationService,
    sync: SyncAPI
  ) {
    this.sync = sync;
  }

  getUser() {
    const currentUser = this.authenticationService.currentUserValue;
    return currentUser ? currentUser.username : null;
  }

  list() {
    return this.data;
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

  newItem(
    acc_name: string,
    acc_ctg_type: number,
    acc_comment: string,
    acc_check_day: number,
    acc_average_min_balance: number,
    acc_payment_day: number
  ): Promise<Account> {
    const newId: string = Utils.hashIdForEntity(new Account(), "acc_id");
    const newItem = new Account({
      acc_id: newId,
      acc_name,
      acc_ctg_type,
      acc_comment,
      acc_check_day,
      acc_average_min_balance,
      acc_payment_day,
      acc_id_user: this.getUser(),
      acc_date_add: DateUtils.newDateUpToSeconds(),
      acc_date_mod: DateUtils.newDateUpToSeconds(),
      acc_ctg_status: 1
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

  updateItem(item: Account): Promise<Account> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.acc_id === item.acc_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.acc_id),
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
