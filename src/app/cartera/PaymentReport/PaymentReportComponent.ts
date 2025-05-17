import { Component, OnInit } from "@angular/core";
import {
  PaymentReportService,
  iPaymentReportData,
} from "./PaymentReportService";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";

const UNIT_LABEL = "Departamento";

@Component({
    selector: "payment-report",
    templateUrl: "./PaymentReport.html",
    styleUrls: ["./PaymentReport.css"],
    providers: [PaymentReportService],
    standalone: false
})
export class PaymentReportComponent implements OnInit {
  public viewData: {
    paymentReportData: iPaymentReportData;
    title: string;
    year: number;
    month: number;
    displayYearMonth: string;
    previousTotal: number;
    total: number;
    layout: string;
    unit: string;
    extraordinary: boolean;
  } = {
    paymentReportData: {
      provisionList: [],
      unitBalance: {},
    },
    title: null,
    year: 0,
    month: 0,
    displayYearMonth: null,
    previousTotal: 0,
    total: 0,
    layout: null, // print, report (default), report-reference
    unit: null,
    extraordinary: false,
  };

  parseQueryString() {
    const query = this.paymentReportService.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10);
    this.viewData.month = parseInt(query.get("month"), 10);
    this.viewData.layout = query.get("layout") || "report";
    this.viewData.unit = query.get("unit") || null;
    this.viewData.extraordinary = !!query.get("extraordinary");

    if (this.viewData.extraordinary) {
      this.viewData.displayYearMonth = "Cuota Extraordinaria";
    } else {
      this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
        this.viewData.month
      )} ${this.viewData.year}`;
    }
  }

  constructor(
    private paymentReportService: PaymentReportService,
    private titleService: Title
  ) {
    this.parseQueryString();
    this.viewData.title = `Recaudación ${this.viewData.displayYearMonth} FFJ78`;
    if (this.viewData.layout === "print") {
      titleService.setTitle(`Formato de ${this.viewData.title}`);
    } else {
      titleService.setTitle(this.viewData.title);
    }
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

  getUnitFromMatchHint(payment: CarteraPayment): number {
    return parseInt(payment.cpy_match_hint.substr(-3), 10);
  }

  deriveState() {
    this.viewData.previousTotal = 0;
    this.viewData.total = 0;

    const baseDate = new Date(this.viewData.year, this.viewData.month - 1, 1);

    this.paymentReportService
      .getPaymentsForMonth(
        this.viewData.year,
        this.viewData.month,
        this.viewData.extraordinary
      )
      .then((response: iPaymentReportData) => {
        // filter unit when provided, else use all provisions
        if (this.viewData.unit) {
          this.viewData.paymentReportData.provisionList =
            response.provisionList.filter(
              (e) => e.provision.cpr_id_unit === this.viewData.unit
            );
        } else {
          this.viewData.paymentReportData = response;
        }

        // when we are reporting current month, we filter out payments done during this month

        this.viewData.paymentReportData.provisionList.forEach((item) => {
          // when there are payments, calculate total of payments for this provision
          if (item.previousPayDetList.length) {
            item["previousPayDetTotal"] = item.previousPayDetList.reduce(
              (total, current) => total + current.cpd_amount,
              0
            );
          }

          // total sum for previuos payments
          this.viewData.previousTotal += item.previousPayDetList.reduce(
            (total, current) => total + current.cpd_amount,
            0
          );

          // total sum, excluding condoned payments
          this.viewData.total += item.paymentList.reduce(
            (total, current) =>
              total +
              (current.payment.cpy_ctg_type === 1
                ? current.payment.cpy_amount
                : 0),
            0
          );

          //
          item["totalPayment"] = item.paymentList.reduce(
            (total, current) =>
              total +
              (current.payment.cpy_ctg_type === 1
                ? current.payment.cpy_amount
                : 0),
            0
          );

          item["isCurrentProvisionPayed"] = item.provision.cpr_remaining === 0;
          if (
            !item["previousPayDetTotal"] &&
            response.unitBalance[item.provision.cpr_id_unit]
          ) {
            item["previousPayDetTotal"] =
              response.unitBalance[item.provision.cpr_id_unit];
            this.viewData.previousTotal += item["previousPayDetTotal"];
          }
        });
      });
  }
}
