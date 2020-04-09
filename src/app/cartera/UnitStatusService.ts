import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { CarteraPayDet } from "src/crosscommon/entities/CarteraPayDet";

@Injectable()
export class UnitStatusService {
  private data: {
    provisionList: [
      {
        provision: CarteraProvision;
        payDetList: CarteraPayDet[];
      }
    ];
    paymentList: CarteraPayment[];
  } = {
    provisionList: [
      {
        provision: null,
        payDetList: []
      }
    ],
    paymentList: []
  };
  private config = {
    api: {
      list: "/api/external/cartera-ext/unit-status-for-month"
    }
  };

  constructor(private sync: SyncAPI) {}

  list(): {
    provisionList: [
      {
        provision: CarteraProvision;
        payDetList: CarteraPayDet[];
      }
    ];
    paymentList: CarteraPayment[];
  } {
    return this.data;
  }

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  async getUnitStatusForMonth(year: number, month: number, unit: string) {
    const defaultData: {
      provisionList:
        | [
            {
              provision: CarteraProvision;
              payDetList: CarteraPayDet[];
            }
          ]
        | [];
      paymentList: CarteraPayment[];
    } = {
      provisionList: [],
      paymentList: []
    };

    return this.sync
      .get(`${this.config.api.list}?year=${year}&month=${month}&unit=${unit}`)
      .then(data => {
        this.data = {
          provisionList: data.provisionList.map(
            (
              d: any
            ): {
              provision: CarteraProvision;
              payDetList: CarteraPayDet[];
            } => ({
              provision: new CarteraProvision(d.provision),
              payDetList: d.payDetList.map(
                (e: any): CarteraPayDet => new CarteraPayDet(e)
              )
            })
          ),
          paymentList: data.paymentList.map(
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
