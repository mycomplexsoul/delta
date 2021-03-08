import { CarteraProvision } from "../../../crosscommon/entities/CarteraProvision";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../../common/sync.api";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { CarteraPayDet } from "src/crosscommon/entities/CarteraPayDet";

export interface iPaymentReportData {
  provision: CarteraProvision;
  previousPayDetList: CarteraPayDet[];
  paymentList: Array<{
    payment: CarteraPayment;
    payDetList: CarteraPayDet[];
  }>;
}

@Injectable()
export class PaymentReportService {
  private data: iPaymentReportData[] = [];
  private config = {
    api: {
      list: "/api/external/cartera/provision-payment-listing"
    }
  };

  constructor(private sync: SyncAPI) {}

  list(): iPaymentReportData[] {
    return this.data;
  }

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  async getPaymentsForMonth(
    year: number,
    month: number
  ): Promise<iPaymentReportData[]> {
    const defaultData: iPaymentReportData[] = [];

    return this.sync
      .get(`${this.config.api.list}?year=${year}&month=${month}`)
      .then(({ provisionList }) => {
        this.data = provisionList.map((d: any) => ({
          provision: new CarteraProvision(d.provision),
          previousPayDetList: d.previousPayDetList.map(
            item => new CarteraPayDet(item)
          ),
          paymentList: d.paymentList.map((p: any) => ({
            payment: new CarteraPayment(p.payment),
            payDetList: p.payDetList.map(item => new CarteraPayDet(item))
          }))
        }));
        return this.data;
      })
      .catch(err => {
        return defaultData;
      });
  }
}
