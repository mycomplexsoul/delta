import { Component, OnInit } from "@angular/core";
import {
  ReceiptReportService,
  iReceiptReportData
} from "./ReceiptReportService";
import { Title } from "@angular/platform-browser";
import { DateUtils } from "src/crosscommon/DateUtility";

const UNIT_LABEL = "Departamento";

@Component({
  selector: "receipt-report",
  templateUrl: "./ReceiptReport.html",
  styleUrls: ["./ReceiptReport.css"],
  providers: [ReceiptReportService]
})
export class ReceiptReportComponent implements OnInit {
  public viewData: {
    paymentReportData: iReceiptReportData[];
    title: string;
    year: number;
    month: number;
    displayYearMonth: string;
    unit: string;
    date: Date;
  } = {
    paymentReportData: [],
    title: null,
    year: 0,
    month: 0,
    displayYearMonth: null,
    unit: null,
    date: null
  };

  parseQueryString() {
    const query = this.receiptReportService.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10);
    this.viewData.month = parseInt(query.get("month"), 10);
    this.viewData.unit = query.get("unit");

    this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
      this.viewData.month
    )} ${this.viewData.year}`;
  }

  constructor(
    private receiptReportService: ReceiptReportService,
    private titleService: Title
  ) {
    this.parseQueryString();
    this.viewData.title = !this.viewData.unit
      ? `Recibos de pago ${this.viewData.displayYearMonth}`
      : `Recibo de pago ${this.viewData.unit} - ${
          this.viewData.displayYearMonth
        }`;
    this.titleService.setTitle(this.viewData.title);
  }

  ngOnInit() {
    this.deriveState();
  }

  deriveState() {
    this.viewData.date = DateUtils.dateOnly();

    this.receiptReportService
      .getPaymentReceiptForMonth(this.viewData.year, this.viewData.month)
      .then((response: iReceiptReportData[]) => {
        this.viewData.paymentReportData = response;
      });
  }
}
