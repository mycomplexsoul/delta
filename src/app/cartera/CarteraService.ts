import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { CarteraPayDet } from "src/crosscommon/entities/CarteraPayDet";
import { AuthenticationService } from "../common/authentication.service";
import { Timeline } from "src/crosscommon/entities/Timeline";
import { DateUtils } from "src/crosscommon/DateUtility";

@Injectable()
export class CarteraService {
  private data: {
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    nonIdentifiedPaymentList: CarteraPayment[];
    lastFolio: number;
  } = {
    pendingProvisionList: [],
    futureProvisionList: [],
    nonIdentifiedPaymentList: [],
    lastFolio: 0
  };
  private config = {
    api: {
      list: "/api/external/cartera-ext/rebuild-pending-payments-month",
      create: "/api/external/cartera-ext/payment"
    }
  };

  constructor(
    private sync: SyncAPI,
    private authenticationService: AuthenticationService
  ) {}

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  async getPendingProvisionForMonth(year: number, month: number) {
    const defaultData = {
      pendingProvisionList: [],
      futureProvisionList: [],
      nonIdentifiedPaymentList: [],
      timelineList: [],
      lastFolio: 0
    };

    return this.sync
      .get(`${this.config.api.list}?year=${year}&month=${month}&future=1`)
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
          lastFolio: data.lastFolio
        };
        return this.data;
      })
      .catch(err => {
        return defaultData;
      });
  }

  async createPayment(
    paymentType: string,
    date: Date,
    amount: number,
    unit: string | number,
    description: string,
    paymentId: string,
    payDetList: any,
    payDetFolioList: any
  ): Promise<{
    payment: CarteraPayment;
    payDetList: CarteraPayDet[];
  }> {
    return this.sync
      .post(this.config.api.create, {
        payment: {
          paymentType,
          date: DateUtils.formatDate(date),
          amount,
          unit,
          description,
          paymentId,
          user: this.authenticationService.currentUserValue.username
        },
        payDetList,
        payDetFolioList
      })
      .then(data => {
        return {
          payment: new CarteraPayment(data.payment),
          payDetList: data.payDetList.map(
            (d: any): CarteraPayDet => new CarteraPayDet(d)
          )
        };
      })
      .catch(err => {
        return {
          payment: null,
          payDetList: []
        };
      });
  }
}
