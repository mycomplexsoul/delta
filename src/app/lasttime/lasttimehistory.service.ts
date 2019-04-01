import { LastTimeHistory } from "../../crosscommon/entities/LastTimeHistory";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";

@Injectable()
export class LastTimeHistoryService {
  private data: Array<LastTimeHistory> = [];
  private sync: SyncAPI = null;
  private config = {
    storageKey: "lasttimehistory",
    defaultUser: "anon",
    api: {
      list: "/api/lasttimehistory"
    }
  };

  constructor(sync: SyncAPI) {
    this.sync = sync;
  }

  list(): Array<LastTimeHistory> {
    return this.data;
  }

  async getAll(id: string = null) {
    const filter = {
      gc: "AND",
      cont: [
        {
          f: "lth_id",
          op: "eq",
          val: id
        }
      ]
    };
    const query = `?q=${JSON.stringify(filter)}`;
    const sort = (a: LastTimeHistory, b: LastTimeHistory) => {
      return a.lth_date_mod.getTime() > b.lth_date_mod.getTime() ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.list}${query}`)
      .then(data => {
        this.data = data.map(
          (d: any): LastTimeHistory => new LastTimeHistory(d)
        );
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  async getAllForUser(user: string, id: string = null) {
    return this.getAll(id).then((all: LastTimeHistory[]) => {
      return all.filter((x: LastTimeHistory) => x.lth_id_user === user);
    });
  }
}
