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
      list:
        "/api/external/cartera/provision-payed-receipt?year={year}&month={month}&folio={folio}"
    }
  };

  constructor(private sync: SyncAPI) {}

  list(): iReceiptReportData[] {
    return this.data;
  }

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  fillServiceUrl(year: number, month: number, folio: string | number) {
    if (!folio) {
      return this.config.api.list
        .replace("{year}", year.toString())
        .replace("{month}", month.toString())
        .replace("&folio={folio}", "");
    }
    return this.config.api.list
      .replace("year={year}", "")
      .replace("&month={month}", "")
      .replace("&folio=", "folio=")
      .replace("{folio}", folio.toString());
  }

  async getPaymentReceiptForMonth(
    year: number,
    month: number,
    folio: string | number = null
  ): Promise<iReceiptReportData[]> {
    const defaultData: iReceiptReportData[] = [];

    return this.sync
      .get(this.fillServiceUrl(year, month, folio))
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
