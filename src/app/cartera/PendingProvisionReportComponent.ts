import { Component, OnInit } from "@angular/core";
import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { PendingProvisionService } from "./PendingProvisionService";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";

const CUOTA_NORMAL = "cuota-normal";
const PROVISION_AMOUNT = 1480;

@Component({
  selector: "pending-payments-report",
  templateUrl: "./PendingProvisionReport.html",
  styleUrls: ["./PendingProvisionReport.css"],
  providers: [PendingProvisionService]
})
export class PendingProvisionReportComponent implements OnInit {
  public viewData: {
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    pendingTotalAmount: number;
    pendingTotalPayed: number;
    pendingTotalRemaining: number;
    pendingTotals: Array<{ unit: string; remaining: number }>;
    totalRemainingFromPendingTotals: number;
    futureTotalAmount: number;
    futureTotalPayed: number;
    futureTotalRemaining: number;
    year: number;
    month: number;
    nonIdentifiedPaymentList: CarteraPayment[];
    nonIdentifiedTotalAmount: number;
    displayYearMonth: string;
  } = {
    pendingProvisionList: [],
    futureProvisionList: [],
    pendingTotalAmount: 0,
    pendingTotalPayed: 0,
    pendingTotalRemaining: 0,
    pendingTotals: [],
    totalRemainingFromPendingTotals: 0,
    futureTotalAmount: 0,
    futureTotalPayed: 0,
    futureTotalRemaining: 0,
    year: 0,
    month: 0,
    nonIdentifiedPaymentList: [],
    nonIdentifiedTotalAmount: 0,
    displayYearMonth: null
  };

  parseQueryString() {
    const query = this.pendingProvisionService.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10);
    this.viewData.month = parseInt(query.get("month"), 10);
    this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
      this.viewData.month
    )} ${this.viewData.year}`;
  }

  constructor(
    private pendingProvisionService: PendingProvisionService,
    private titleService: Title
  ) {
    this.parseQueryString();
    titleService.setTitle(
      `Relación de Cobranza ${this.viewData.displayYearMonth} FFJ78`
    );
  }

  ngOnInit() {
    this.deriveState();
  }

  sumByField<T>(list: T[], fieldName: string): number {
    return list.reduce(
      (previous: number, current: T) => previous + current[fieldName],
      0
    );
  }

  deriveState() {
    this.pendingProvisionService
      .getPendingProvisionForMonth(this.viewData.year, this.viewData.month)
      .then(response => {
        const {
          pendingProvisionList,
          futureProvisionList,
          nonIdentifiedPaymentList
        } = response;

        this.viewData.pendingProvisionList = pendingProvisionList;
        this.viewData.futureProvisionList = futureProvisionList;
        this.viewData.nonIdentifiedPaymentList = nonIdentifiedPaymentList;

        // calculate totals
        this.viewData.pendingTotalAmount = this.sumByField(
          pendingProvisionList,
          "cpr_amount"
        );
        this.viewData.pendingTotalPayed = this.sumByField(
          pendingProvisionList,
          "cpr_payed"
        );
        this.viewData.pendingTotalRemaining = this.sumByField(
          pendingProvisionList,
          "cpr_remaining"
        );

        this.viewData.futureTotalAmount = this.sumByField(
          futureProvisionList,
          "cpr_amount"
        );
        this.viewData.futureTotalPayed = this.sumByField(
          futureProvisionList,
          "cpr_payed"
        );
        this.viewData.futureTotalRemaining = this.sumByField(
          futureProvisionList,
          "cpr_remaining"
        );

        // totals per unit
        this.viewData.pendingTotals = this.viewData.pendingProvisionList.reduce(
          (previous, current) => {
            const found = previous.find(e => e.unit === current.cpr_id_unit);
            // the ones that are normal provisions and that doesn't have any payments
            const isNormalProvision =
              current.cpr_code_reference.split("|")[0] === CUOTA_NORMAL &&
              current.cpr_remaining === PROVISION_AMOUNT;

            if (found) {
              found.remaining += current.cpr_remaining;
              found.normalProvisionCount += isNormalProvision ? 1 : 0;
            } else {
              previous.push({
                unit: current.cpr_id_unit,
                remaining: current.cpr_remaining,
                normalProvisionCount: isNormalProvision ? 1 : 0
              });
            }
            return previous;
          },
          []
        );
        // total from pendingTotals
        this.viewData.totalRemainingFromPendingTotals = this.sumByField(
          this.viewData.pendingTotals,
          "remaining"
        );

        // total from nonIdentified
        this.viewData.nonIdentifiedTotalAmount = this.sumByField(
          nonIdentifiedPaymentList,
          "cpy_amount"
        );
      });
  }

  getProvisionYearMonth(provision: CarteraProvision): number[] {
    return provision.cpr_code_reference
      .split("|")[1]
      .split("-")
      .map(n => parseInt(n, 10));
  }

  isProvisionForCurrentRenderedMonth(
    provision: CarteraProvision,
    year: number,
    month: number
  ) {
    return (
      this.getProvisionYearMonth(provision).reduce(
        (previous, current) => previous * 100 + current,
        0
      ) ===
      year * 100 + month
    );
  }
}
