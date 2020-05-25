import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Movement } from "../../crosscommon/entities/Movement";
import { Utils } from "src/crosscommon/Utility";

@Injectable()
export class MovementsReportService {
  private data: {
    movementList: Movement[];
  } = {
    movementList: []
  };
  private config = {
    api: {
      list: "/api/movement/list"
    }
  };

  constructor(private sync: SyncAPI) {}

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  async getMovementsForMonth(year: number, month: number) {
    const defaultData: {
      movementList: Movement[];
    } = {
      movementList: []
    };

    const filter = JSON.stringify({
      gc: "AND",
      cont: [
        {
          f: "mov_date",
          op: "ge",
          val: `${year}-${Utils.pad(month, "0", 2, -1)}-01`
        },
        {
          f: "mov_date",
          op: "lt",
          val: `${year}-${Utils.pad(month + 1, "0", 2, -1)}-01`
        }
      ]
    });

    return this.sync
      .get(`${this.config.api.list}?q=${filter}`)
      .then(data => {
        this.data = data;
        return this.data;
      })
      .catch(err => {
        return defaultData;
      });
  }
}
