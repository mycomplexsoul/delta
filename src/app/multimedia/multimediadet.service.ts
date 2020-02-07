import { MultimediaDet } from "../../crosscommon/entities/MultimediaDet";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";
import { DateUtils } from "src/crosscommon/DateUtility";

@Injectable()
export class MultimediaDetService {
  private data: Array<MultimediaDet> = [];
  private config = {
    api: {
      list: "/api/multimediadet"
    }
  };

  constructor(
    private authenticationService: AuthenticationService,
    private sync: SyncAPI
  ) {}

  list(): Array<MultimediaDet> {
    return this.data;
  }

  async getAll() {
    const filter = {
      gc: "AND",
      cont: [
        {
          f: "mmd_ctg_status",
          op: "eq",
          val: 1
        }
      ]
    };
    const query = `?q=${JSON.stringify(filter)}`;
    const sort = (a: MultimediaDet, b: MultimediaDet) => {
      return a.mmd_date_mod.getTime() > b.mmd_date_mod.getTime() ? 1 : -1;
    };

    return this.sync
      .get(`${this.config.api.list}${query}`)
      .then(data => {
        this.data = data.map((d: any): MultimediaDet => new MultimediaDet(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  newItem(
    id: string,
    epId: string,
    title: string,
    altTitle: string,
    year: number,
    url: string
  ): MultimediaDet {
    let newItem = new MultimediaDet({
      mmd_id: id,
      mmd_id_ep: epId,
      mmd_ep_title: title,
      mmd_ep_alt_title: altTitle,
      mmd_year: year,
      mmd_url: url,
      mmd_id_user: this.authenticationService.currentUserValue.username,
      mmd_date_add: DateUtils.newDateUpToSeconds(),
      mmd_date_mod: DateUtils.newDateUpToSeconds(),
      mmd_ctg_status: 1
    });

    this.data.push(newItem);
    return newItem;
  }

  asSyncQueue(item: MultimediaDet) {
    return this.sync.asSyncQueue(
      "create",
      Utils.entityToRawTableFields(item),
      Utils.getPKFromEntity(item),
      "MultimediaDet",
      () => {
        item["not_sync"] = false; // means it's synced
      },
      item.recordName,
      item2 =>
        item.mmd_id === item2.mmd_id && item.mmd_id_ep === item2.mmd_id_ep
    );
  }

  asUpdateSyncQueue(item: MultimediaDet) {
    const updateLocal = () => {
      const index = this.data.findIndex(
        e => e.mmd_id === item.mmd_id && e.mmd_id_ep === item.mmd_id_ep
      );
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync.asSyncQueue(
      "update",
      Utils.entityToRawTableFields(item),
      Utils.getPKFromEntity(item),
      "MultimediaDet",
      () => {
        item["not_sync"] = false; // means it's synced
        updateLocal();
      },
      item.recordName,
      e => e.mmd_id === item.mmd_id && e.mmd_id_ep === item.mmd_id_ep
    );
  }
}
