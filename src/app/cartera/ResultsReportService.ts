import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";

@Injectable()
export class ResultsReportService {
  private data: {
    movementList: Array<{
      concept: string;
      amount: number;
      type: string;
    }>;
    initialBalance: number;
  } = {
    movementList: [],
    initialBalance: 0
  };
  private config = {
    api: {
      list: "/api/external/cartera-ext/results-for-month"
    }
  };

  constructor(private sync: SyncAPI) {}

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  async getResultsForMonth(year: number, month: number) {
    const defaultData: {
      movementList: Array<{
        concept: string;
        amount: number;
        type: string;
      }>;
      initialBalance: number;
    } = {
      movementList: [],
      initialBalance: 0
    };

    return this.sync
      .get(`${this.config.api.list}?year=${year}&month=${month}`)
      .then(data => {
        this.data = data;
        return this.data;
      })
      .catch(err => {
        return defaultData;
      });
  }
}
