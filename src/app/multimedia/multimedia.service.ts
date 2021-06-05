import { Multimedia } from "../../crosscommon/entities/Multimedia";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";
import { DateUtils } from "src/crosscommon/DateUtility";

@Injectable()
export class MultimediaService {
  private data: Array<Multimedia> = [];
  private config = {
    api: {
      list: "/api/multimedia",
      create: "/api/multimedia",
      update: "/api/multimedia/:id"
    }
  };

  constructor(
    private authenticationService: AuthenticationService,
    private sync: SyncAPI
  ) {}

  list(): Array<Multimedia> {
    return this.data;
  }

  async getAll() {
    const filter = {
      gc: "AND",
      cont: [
        {
          f: "mma_ctg_status",
          op: "eq",
          val: 1
        }
      ]
    };
    const query = `?q=${JSON.stringify(filter)}`;
    const sort = (a: Multimedia, b: Multimedia) => {
      return a.mma_date_mod.getTime() > b.mma_date_mod.getTime() ? 1 : -1;
    };

    return this.sync
      .get(`${this.config.api.list}${query}`)
      .then(data => {
        this.data = data.map((d: any): Multimedia => new Multimedia(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  newId() {
    const m: Multimedia = new Multimedia();
    const length: number = m.metadata.fields.find(f => f.dbName === "mma_id")
      .size;
    return Utils.hashId(m.metadata.prefix, length);
  }

  newItem(baseItem: Multimedia): Promise<Multimedia> {
    const newId: string = Utils.hashIdForEntity(new Multimedia(), "mma_id");
    // complete all fields for item creation
    baseItem.mma_id = newId;
    baseItem.mma_id_user = this.authenticationService.currentUserValue.username;
    baseItem.mma_date_add = DateUtils.newDateUpToSeconds();
    baseItem.mma_date_mod = DateUtils.newDateUpToSeconds();

    return this.sync
      .post(this.config.api.create, Utils.removeMetadataFromEntity(baseItem))
      .then(response => {
        if (response.success) {
          this.data.push(baseItem);
        } else {
          baseItem["sync"] = false;
          this.data.push(baseItem);
        }
        return baseItem;
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        baseItem["sync"] = false;
        this.data.push(baseItem);
        return baseItem;
      });
  }

  updateItem(item: Multimedia): Promise<Multimedia> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.mma_id === item.mma_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.mma_id),
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

  asUpdateSyncQueue(item: Multimedia) {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.mma_id === item.mma_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync.asSyncQueue(
      "update",
      Utils.entityToRawTableFields(item),
      Utils.getPKFromEntity(item),
      "Multimedia",
      () => {
        item["not_sync"] = false; // means it's synced
        updateLocal();
      },
      item.recordName,
      item => item.mma_id === item.mma_id
    );
  }
}
