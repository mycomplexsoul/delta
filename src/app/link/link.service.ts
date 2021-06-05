import { Link } from "../../crosscommon/entities/Link";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class LinkService {
  private data: Array<Link> = [];
  private config = {
    storageKey: "links",
    api: {
      list: "/api/links",
      create: "/api/links",
      update: "/api/links/:id"
    }
  };

  constructor(
    private authenticationService: AuthenticationService,
    private sync: SyncAPI
  ) {}

  list(): Array<Link> {
    return this.data;
  }

  async getAll() {
    const sort = (a: Link, b: Link) => {
      return a.lnk_date_mod.getTime() > b.lnk_date_mod.getTime() ? 1 : -1;
    };
    return this.sync
      .get(`${this.config.api.list}`)
      .then(data => {
        this.data = data.map((d: any): Link => new Link(d));
        this.data = this.data.sort(sort);
        return this.data;
      })
      .catch(err => {
        return [];
      });
  }

  newItem(baseItem: Link): Promise<Link> {
    const newId: string = Utils.hashIdForEntity(new Link(), "lnk_id");
    const newItem = new Link({
      lnk_id: newId,
      lnk_url: baseItem.lnk_url,
      lnk_title: baseItem.lnk_title,
      lnk_tags: baseItem.lnk_tags,
      lnk_comment: baseItem.lnk_comment,
      lnk_id_user: this.authenticationService.currentUserValue.username,
      lnk_date_add: DateUtils.newDateUpToSeconds(),
      lnk_date_mod: DateUtils.newDateUpToSeconds(),
      lnk_ctg_status: 1
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

  updateItem(item: Link): Promise<Link> {
    const updateLocal = () => {
      const index = this.data.findIndex(e => e.lnk_id === item.lnk_id);
      if (index !== -1) {
        this.data[index] = item;
      }
    };

    return this.sync
      .post(
        this.config.api.update.replace(":id", item.lnk_id),
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
