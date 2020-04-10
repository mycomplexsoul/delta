import { Component, OnInit } from "@angular/core";
import { ResultsReportService } from "./ResultsReportService";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "results-report",
  templateUrl: "./ResultsReport.html",
  styleUrls: ["./ResultsReport.css"],
  providers: [ResultsReportService]
})
export class ResultsReportComponent implements OnInit {
  public viewData: {
    movementList: Array<{
      concept: string;
      amount: number;
      type: string;
    }>;
    renderList: Array<{
      concept: string;
      amount: number;
      type: string;
    }>;
    title: string;
    initialBalance: number;
    incomeTotal: number;
    expenseTotal: number;
    finalBalance: number;
    year: number;
    month: number;
    displayYearMonth: string;
  } = {
    movementList: [],
    renderList: [],
    title: null,
    initialBalance: 0,
    incomeTotal: 0,
    expenseTotal: 0,
    finalBalance: 0,
    year: 0,
    month: 0,
    displayYearMonth: null
  };

  parseQueryString() {
    const query = this.ResultsReportService.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10);
    this.viewData.month = parseInt(query.get("month"), 10);

    this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
      this.viewData.month
    )} ${this.viewData.year}`;
  }

  constructor(
    private ResultsReportService: ResultsReportService,
    private titleService: Title
  ) {
    this.parseQueryString();
    this.viewData.title = `Estado de Resultados ${
      this.viewData.displayYearMonth
    } FFJ78`;
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
    this.ResultsReportService.getResultsForMonth(
      this.viewData.year,
      this.viewData.month
    ).then(response => {
      const { movementList, initialBalance } = response;

      this.viewData.movementList = movementList;

      // calculate pending totals
      this.viewData.initialBalance = initialBalance;
      this.viewData.incomeTotal = this.sumByField(
        this.viewData.movementList.filter(e => e.type.includes("income")),
        "amount"
      );
      this.viewData.expenseTotal = this.sumByField(
        this.viewData.movementList.filter(e => e.type.includes("expense")),
        "amount"
      );
      this.viewData.finalBalance =
        this.viewData.initialBalance +
        this.viewData.incomeTotal -
        this.viewData.expenseTotal;

      this.prepareToRender();
    });
  }

  prepareToRender() {
    const renderList: Array<{
      concept: string;
      amount: number;
      type: string;
    }> = [];

    renderList.push({
      concept: "Ingresos",
      amount: 0,
      type: "header"
    });

    this.viewData.movementList
      .filter(e => e.type.includes("income"))
      .forEach(e => {
        renderList.push({
          ...e,
          type: "movement"
        });
      });

    renderList.push({
      concept: "Total ingresos",
      amount: this.viewData.incomeTotal,
      type: "total"
    });

    renderList.push({
      concept: "Egresos",
      amount: 0,
      type: "header"
    });

    this.viewData.movementList
      .filter(e => e.type.includes("expense"))
      .forEach(e => {
        renderList.push({
          ...e,
          type: "movement"
        });
      });

    renderList.push({
      concept: "Total egresos",
      amount: this.viewData.expenseTotal,
      type: "total"
    });

    renderList.push({
      concept: "Balance del periodo",
      amount: this.viewData.incomeTotal - this.viewData.expenseTotal,
      type: "total"
    });

    this.viewData.renderList = renderList;
  }
}
