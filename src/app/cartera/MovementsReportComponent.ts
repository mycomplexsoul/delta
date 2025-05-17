import { Component, OnInit } from "@angular/core";
import { MovementService } from "../money/movement.service";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";
import { Movement } from "../../crosscommon/entities/Movement";
import { Utils } from "../../crosscommon/Utility";

@Component({
    selector: "movements-report",
    templateUrl: "./MovementsReport.html",
    styleUrls: ["./MovementsReport.css"],
    providers: [MovementService],
    standalone: false
})
export class MovementsReportComponent implements OnInit {
  public viewData: {
    movementList: Movement[];
    title: string;
    incomeTotal: number;
    expenseTotal: number;
    year: number;
    month: number;
    displayYearMonth: string;
  } = {
    movementList: [],
    title: null,
    incomeTotal: 0,
    expenseTotal: 0,
    year: 0,
    month: 0,
    displayYearMonth: null,
  };

  getQueryStringParameters() {
    return new URL(window.location.href).searchParams;
  }

  parseQueryString() {
    const query = this.getQueryStringParameters();

    this.viewData.year = parseInt(query.get("year"), 10);
    this.viewData.month = parseInt(query.get("month"), 10);

    this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
      this.viewData.month
    )} ${this.viewData.year}`;
  }

  constructor(
    private MovementsReportService: MovementService,
    private titleService: Title
  ) {
    this.parseQueryString();
    this.viewData.title = `Ingresos y Egresos ${this.viewData.displayYearMonth} FFJ78`;
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
    const { year, month } = this.viewData;
    const filter = JSON.stringify({
      gc: "AND",
      cont: [
        {
          f: "mov_date",
          op: "ge",
          val: `${year}-${Utils.pad(month, "0", 2, -1)}-01`,
        },
        {
          f: "mov_date",
          op: "lt",
          val: `${year}-${Utils.pad(month + 1, "0", 2, -1)}-01`,
        },
      ],
    });

    const sortByDateUnitAndDateMod = (a: Movement, b: Movement): number => {
      if (a.mov_date.getTime() === b.mov_date.getTime()) {
        if (a.mov_ctg_type === b.mov_ctg_type) {
          if (a.mov_ctg_type === 2) {
            return a.mov_date_mod.getTime() > b.mov_date_mod.getTime() ? 1 : -1;
          } else {
            // both expense
            return a.mov_budget > b.mov_budget
              ? 1
              : a.mov_amount < b.mov_amount
              ? 1
              : -1;
          }
        } else {
          // income vs expense, income first
          return a.mov_ctg_type < b.mov_ctg_type ? 1 : -1;
        }
      }
      // first criteria: date
      return a.mov_date.getTime() > b.mov_date.getTime() ? 1 : -1;
    };

    this.MovementsReportService.getMovementList(filter).then((response) => {
      const { movementList } = response;

      this.viewData.movementList = movementList.sort(sortByDateUnitAndDateMod);

      // calculate pending totals
      this.viewData.incomeTotal = this.sumByField(
        this.viewData.movementList.filter((e) => e.mov_ctg_type === 2),
        "mov_amount"
      );
      this.viewData.expenseTotal = this.sumByField(
        this.viewData.movementList.filter((e) => e.mov_ctg_type === 1),
        "mov_amount"
      );
    });
  }
}
