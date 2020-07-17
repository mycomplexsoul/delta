import { Component, OnInit } from "@angular/core";
import {
  ReceiptReportService,
  iReceiptReportData
} from "./ReceiptReportService";
import { Title } from "@angular/platform-browser";
import { DateUtils } from "src/crosscommon/DateUtility";
// import { generatePDF } from "src/crosscommon/pdfModule";

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
    folio: string;
    date: Date;
  } = {
    paymentReportData: [],
    title: null,
    year: 0,
    month: 0,
    displayYearMonth: null,
    folio: null,
    date: null
  };

  parseQueryString() {
    const query = this.receiptReportService.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10) || null;
    this.viewData.month = parseInt(query.get("month"), 10) || null;
    this.viewData.folio = query.get("folio") || null;

    this.viewData.displayYearMonth = this.getYearMonth(
      this.viewData.year,
      this.viewData.month
    );
  }

  constructor(
    private receiptReportService: ReceiptReportService,
    private titleService: Title
  ) {
    this.parseQueryString();
    this.viewData.title = `Recibos de pago ${this.viewData.displayYearMonth}`;
    this.titleService.setTitle(this.viewData.title);
  }

  ngOnInit() {
    this.deriveState();
  }

  deriveState() {
    this.viewData.date = DateUtils.dateOnly();

    this.receiptReportService
      .getPaymentReceiptForMonth(
        this.viewData.year,
        this.viewData.month,
        this.viewData.folio
      )
      .then((response: iReceiptReportData[]) => {
        this.viewData.paymentReportData = response;
        if (this.viewData.folio) {
          const prov =
            this.viewData.paymentReportData.length &&
            this.viewData.paymentReportData[0].provision;
          this.setTitleForFolio(prov);
        }
      });
  }

  setTitleForFolio(prov) {
    if (prov) {
      this.viewData.displayYearMonth = this.getYearMonth(
        prov.cpr_year,
        prov.cpr_month
      );
      this.viewData.title = `${this.viewData.folio} Recibo de pago ${
        prov.cpr_id_unit
      } - ${this.viewData.displayYearMonth}`;
      this.titleService.setTitle(this.viewData.title);
    }
  }

  getYearMonth(year, month) {
    return `${DateUtils.getMonthNameSpanish(month)} ${year}`;
  }

  generatePDFReceipt() {
    // generatePDF(document.body);
  }
}
