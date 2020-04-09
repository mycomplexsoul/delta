import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { DateUtils } from "src/crosscommon/DateUtility";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";

@Injectable()
export class PendingProvisionService {
  private data: {
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    nonIdentifiedPaymentList: CarteraPayment[];
  } = {
    pendingProvisionList: [],
    futureProvisionList: [],
    nonIdentifiedPaymentList: []
  };
  private config = {
    api: {
      list: "/api/external/cartera-ext/rebuild-pending-payments-month"
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
    const defaultData = {
      pendingProvisionList: [],
      futureProvisionList: [],
      nonIdentifiedPaymentList: []
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
          )
        };
        return this.data;
      })
      .catch(err => {
        return defaultData;
      });
  }
}
