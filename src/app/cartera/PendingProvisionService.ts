import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { Timeline } from "src/crosscommon/entities/Timeline";

@Injectable()
export class PendingProvisionService {
  private data: {
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    nonIdentifiedPaymentList: CarteraPayment[];
    timelineList: Timeline[];
  } = {
    pendingProvisionList: [],
    futureProvisionList: [],
    nonIdentifiedPaymentList: [],
    timelineList: []
  };
  private config = {
    api: {
      list: "/api/external/cartera/rebuild-pending-payments-month"
    }
  };

  constructor(private sync: SyncAPI) {}

  list(): {
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    nonIdentifiedPaymentList: CarteraPayment[];
  } {
    return this.data;
  }

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  async getPendingProvisionForMonth(year: number, month: number) {
    const defaultData: {
      pendingProvisionList: CarteraProvision[];
      futureProvisionList: CarteraProvision[];
      nonIdentifiedPaymentList: CarteraPayment[];
      timelineList: Timeline[];
    } = {
      pendingProvisionList: [],
      futureProvisionList: [],
      nonIdentifiedPaymentList: [],
      timelineList: []
    };

    return this.sync
      .get(`${this.config.api.list}?year=${year}&month=${month}`)
      .then(data => {
        this.data = {
          pendingProvisionList: data.pendingProvisionList.map(
            (d: any): CarteraProvision => new CarteraProvision(d)
          ),
          futureProvisionList: data.futureProvisionList.map(
            (d: any): CarteraProvision => new CarteraProvision(d)
          ),
          nonIdentifiedPaymentList: data.nonIdentifiedPaymentList.map(
            (d: any): CarteraPayment => new CarteraPayment(d)
          ),
          timelineList: data.timelineList.map(
            (d: any): Timeline => new Timeline(d)
          )
        };
        return this.data;
      })
      .catch(err => {
        return defaultData;
      });
  }
}
