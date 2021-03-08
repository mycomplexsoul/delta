import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Timeline } from "../../crosscommon/entities/Timeline";

@Injectable()
export class ResultsReportService {
  private data: {
    movementList: Array<{
      concept: string;
      amount: number;
      type: string;
    }>;
    initialBalance: number;
    timeline: Timeline[];
  } = {
    movementList: [],
    initialBalance: 0,
    timeline: []
  };
  private config = {
    api: {
      list: "/api/external/cartera/results-for-month"
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
      timeline: Timeline[];
    } = {
      movementList: [],
      initialBalance: 0,
      timeline: []
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
