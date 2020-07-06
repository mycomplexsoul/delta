import { CarteraProvision } from "../../../crosscommon/entities/CarteraProvision";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../../common/sync.api";

export interface iReceiptReportData {
  provision: CarteraProvision;
  hash: string;
  name: string;
  paymentDate: Date;
}

@Injectable()
export class ReceiptReportService {
  private data: iReceiptReportData[] = [];
  private config = {
    api: {
      list: "/api/external/cartera-ext/provision-payed-receipt"
    }
  };

  constructor(private sync: SyncAPI) {}

  list(): iReceiptReportData[] {
    return this.data;
  }

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  async getPaymentReceiptForMonth(
    year: number,
    month: number,
    unit: string | number = null
  ): Promise<iReceiptReportData[]> {
    const defaultData: iReceiptReportData[] = [];

    return this.sync
      .get(`${this.config.api.list}?year=${year}&month=${month}`)
      .then(response => {
        this.data = response.provisionList.map((d: any) => ({
          provision: new CarteraProvision(d.provision),
          hash: d.hash,
          name: d.name,
          paymentDate: new Date(d.paymentDate)
        }));
        return this.data;
      })
      .catch(err => {
        return defaultData;
      });
  }
}
