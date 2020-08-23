import { Component, OnInit } from "@angular/core";
import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { UnitStatusService } from "./UnitStatusService";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";
import { CarteraPayDet } from "src/crosscommon/entities/CarteraPayDet";

const UNIT_LABEL = "Departamento";

@Component({
  selector: "unit-status-report",
  templateUrl: "./UnitStatusReport.html",
  styleUrls: ["./UnitStatusReport.css"],
  providers: [UnitStatusService],
})
export class UnitStatusReportComponent implements OnInit {
  public viewData: {
    provisionList: Array<{
      provision: CarteraProvision;
      payDetList: CarteraPayDet[];
    }>;
    paymentList: CarteraPayment[];
    title: string;
    movementList: Array<{
      concept: string;
      type: string;
      amount: number;
      date: Date;
      balance: number;
      comment: string;
      orderIndex: number;
      highlight: boolean;
    }>;
    finalBalance: number;
    pendingTotalAmount: number;
    pendingTotalPayed: number;
    pendingTotalRemaining: number;
    futureProvisionList: CarteraProvision[];
    futureTotalAmount: number;
    futureTotalPayed: number;
    futureTotalRemaining: number;
    year: number;
    month: number;
    unit: string;
    displayYearMonth: string;
    layout: string;
  } = {
    provisionList: [],
    paymentList: [],
    title: null,
    movementList: [],
    finalBalance: 0,
    pendingTotalAmount: 0,
    pendingTotalPayed: 0,
    pendingTotalRemaining: 0,
    futureProvisionList: [],
    futureTotalAmount: 0,
    futureTotalPayed: 0,
    futureTotalRemaining: 0,
    year: 0,
    month: 0,
    unit: null,
    displayYearMonth: null,
    layout: "1-page",
  };

  parseQueryString() {
    const query = this.UnitStatusService.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10);
    this.viewData.month = parseInt(query.get("month"), 10);
    this.viewData.unit = query.get("unit");
    if (query.get("layout")) {
      this.viewData.layout = query.get("layout");
    }
    this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
      this.viewData.month
    )} ${this.viewData.year}`;
  }

  constructor(
    private UnitStatusService: UnitStatusService,
    private titleService: Title
  ) {
    this.parseQueryString();
    this.viewData.title = `Estado de Cuenta ${UNIT_LABEL} ${this.viewData.unit} ${this.viewData.displayYearMonth} FFJ78`;
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
    this.UnitStatusService.getUnitStatusForMonth(
      this.viewData.year,
      this.viewData.month,
      this.viewData.unit
    ).then((response) => {
      const { provisionList, paymentList } = response;

      this.viewData.provisionList = provisionList;
      this.viewData.paymentList = paymentList;

      // calculate pending totals
      this.viewData.pendingTotalAmount = this.sumByField(
        this.viewData.provisionList.map((e) => e.provision),
        "cpr_amount"
      );
      this.viewData.pendingTotalPayed = this.sumByField(
        this.viewData.provisionList.map((e) => e.provision),
        "cpr_payed"
      );
      this.viewData.pendingTotalRemaining = this.sumByField(
        this.viewData.provisionList.map((e) => e.provision),
        "cpr_remaining"
      );

      const limitDate: Date = new Date(
        this.viewData.year,
        this.viewData.month,
        1
      ); // next month
      // create unified movement list
      this.viewData.provisionList
        .filter((p) => p.provision.cpr_date.getTime() < limitDate.getTime())
        .forEach(({ provision }, index) => {
          this.viewData.movementList.push({
            concept: provision.cpr_concept,
            type: "PROVISION",
            amount: provision.cpr_amount,
            date: provision.cpr_date,
            balance: 0,
            comment: null,
            orderIndex: index,
            highlight: provision.cpr_txt_status === "highlight",
          });
        });

      this.viewData.paymentList.forEach((payment, index) => {
        this.viewData.movementList.push({
          concept:
            payment.cpy_ctg_type === 1
              ? `Pago #${index + 1}`
              : `Condonación/Ajuste #${index + 1}`,
          type: "PAYMENT",
          amount: payment.cpy_amount,
          date: payment.cpy_date,
          balance: 0,
          comment: null,
          orderIndex: index,
          highlight: payment.cpy_txt_status === "highlight",
        });
      });

      // order movements
      this.viewData.movementList = this.viewData.movementList.sort((a, b) => {
        if (a.date.getTime() === b.date.getTime()) {
          const order = { PROVISION: 1, PAYMENT: 2 };
          if (order[a.type] === order[b.type]) {
            return a.orderIndex > b.orderIndex ? 1 : -1;
          }
          return order[a.type] > order[b.type] ? 1 : -1;
        }
        return a.date.getTime() > b.date.getTime() ? 1 : -1;
      });

      // calculate each movement's balance
      this.viewData.movementList.forEach((mov, index, arr) => {
        mov.balance =
          (index === 0 ? 0 : arr[index - 1].balance) +
          (mov.type === "PROVISION" ? -1 * mov.amount : mov.amount);
      });

      this.viewData.finalBalance = this.viewData.movementList[
        this.viewData.movementList.length - 1
      ].balance;

      // set future provisions
      this.viewData.futureProvisionList = this.viewData.provisionList
        .filter((p) => p.provision.cpr_date.getTime() >= limitDate.getTime())
        .map((item) => item.provision)
        .sort((a, b) => {
          if (a.cpr_date.getTime() === b.cpr_date.getTime()) {
            return a.cpr_concept > b.cpr_concept ? 1 : -1;
          }
          return a.cpr_date.getTime() > b.cpr_date.getTime() ? 1 : -1;
        });

      // calculate future totals
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
    });
  }

  getPayment(id: string) {
    return this.viewData.paymentList.find((e) => e.cpy_id === id);
  }

  getPaymentIndex(id: string) {
    return this.viewData.paymentList.findIndex((e) => e.cpy_id === id);
  }
}
