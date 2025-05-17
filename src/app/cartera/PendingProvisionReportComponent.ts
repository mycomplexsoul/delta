import { Component, OnInit } from "@angular/core";
import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { PendingProvisionService } from "./PendingProvisionService";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";
import { Timeline } from "../../crosscommon/entities/Timeline";

const CUOTA_NORMAL = "cuota-normal";
const OLD_PROVISION_AMOUNT = 1480;
const PROVISION_AMOUNT = 1500;

@Component({
    selector: "pending-payments-report",
    templateUrl: "./PendingProvisionReport.html",
    styleUrls: ["./PendingProvisionReport.css"],
    providers: [PendingProvisionService],
    standalone: false
})
export class PendingProvisionReportComponent implements OnInit {
  public viewData: {
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    pendingTotalAmount: number;
    pendingTotalCondoned: number;
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
    timelineList: Timeline[];
    title: string;
    layout: string;
    unit: string;
  } = {
    pendingProvisionList: [],
    futureProvisionList: [],
    pendingTotalAmount: 0,
    pendingTotalCondoned: 0,
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
    displayYearMonth: null,
    timelineList: [],
    title: null,
    layout: null, // 2-pages, 1-page
    unit: null,
  };

  parseQueryString() {
    const query = this.pendingProvisionService.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10);
    this.viewData.month = parseInt(query.get("month"), 10);
    this.viewData.layout = query.get("layout") || "1-page";
    this.viewData.unit = query.get("unit") || null;

    this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
      this.viewData.month
    )} ${this.viewData.year}`;
    this.viewData.title = `Relación de Cobranza ${this.viewData.displayYearMonth} FFJ78`;
  }

  constructor(
    private pendingProvisionService: PendingProvisionService,
    private titleService: Title
  ) {
    this.parseQueryString();
    titleService.setTitle(this.viewData.title);
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
      .then((response) => {
        const {
          pendingProvisionList,
          futureProvisionList,
          nonIdentifiedPaymentList,
          timelineList,
        } = response;

        if (this.viewData.unit) {
          this.viewData.pendingProvisionList = pendingProvisionList.filter(
            (e) => e.cpr_id_unit === this.viewData.unit
          );
          this.viewData.futureProvisionList = futureProvisionList.filter(
            (e) => e.cpr_id_unit === this.viewData.unit
          );
          this.viewData.nonIdentifiedPaymentList = [];
          this.viewData.timelineList = [];
        } else {
          this.viewData.pendingProvisionList = pendingProvisionList;
          this.viewData.futureProvisionList = futureProvisionList;
          this.viewData.nonIdentifiedPaymentList = nonIdentifiedPaymentList;
          this.viewData.timelineList = timelineList.map(this.parseNewline);
        }

        // calculate totals
        this.viewData.pendingTotalAmount = this.sumByField(
          this.viewData.pendingProvisionList,
          "cpr_amount"
        );
        this.viewData.pendingTotalCondoned = this.sumByField(
          this.viewData.pendingProvisionList,
          "cpr_condoned"
        );
        this.viewData.pendingTotalPayed = this.sumByField(
          this.viewData.pendingProvisionList,
          "cpr_payed"
        );
        this.viewData.pendingTotalRemaining = this.sumByField(
          this.viewData.pendingProvisionList,
          "cpr_remaining"
        );

        this.viewData.futureTotalAmount = this.sumByField(
          this.viewData.futureProvisionList,
          "cpr_amount"
        );
        this.viewData.futureTotalPayed = this.sumByField(
          this.viewData.futureProvisionList,
          "cpr_payed"
        );
        this.viewData.futureTotalRemaining = this.sumByField(
          this.viewData.futureProvisionList,
          "cpr_remaining"
        );

        // totals per unit
        this.viewData.pendingTotals = this.viewData.pendingProvisionList
          .reduce((previous, current) => {
            const found = previous.find((e) => e.unit === current.cpr_id_unit);
            // the ones that are normal provisions and that doesn't have any payments
            const isNormalProvision =
              current.cpr_code_reference.split("|")[0] === CUOTA_NORMAL &&
              (current.cpr_remaining === PROVISION_AMOUNT ||
                current.cpr_remaining === OLD_PROVISION_AMOUNT);

            if (found) {
              found.remaining += current.cpr_remaining;
              found.normalProvisionCount += isNormalProvision ? 1 : 0;
            } else {
              previous.push({
                unit: current.cpr_id_unit,
                remaining: current.cpr_remaining,
                normalProvisionCount: isNormalProvision ? 1 : 0,
              });
            }
            return previous;
          }, [])
          .filter((r) => r.remaining >= 0.01);
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
      .map((n) => parseInt(n, 10));
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
        year * 100 + month || ![1, 16].includes(provision.cpr_date.getDate())
    );
  }

  handleNewTimeline({ timeline }) {
    this.viewData.timelineList.push(this.parseNewline(timeline));
  }

  parseNewline(timeline: Timeline): Timeline {
    timeline.tim_description = timeline.tim_description.replace(/\n/gi, "<br>");
    return timeline;
  }
}
