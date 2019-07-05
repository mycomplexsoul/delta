import { Component, OnInit, Renderer } from "@angular/core";
import { Title } from "@angular/platform-browser";

// types
import { Balance } from "../../crosscommon/entities/Balance";
import { Movement } from "../../crosscommon/entities/Movement";

// services
import { StorageService } from "../common/storage.service";
import { BalanceService } from "./balance.service";
import { MovementService } from "./movement.service";
import { SyncAPI } from "../common/sync.api";
import { DateUtils } from "src/crosscommon/DateUtility";

@Component({
  selector: "balance",
  templateUrl: "./balance.template.html",
  styleUrls: ["./balance.css"],
  providers: [BalanceService, MovementService]
})
export class BalanceComponent implements OnInit {
  private user: string = "anon";
  public viewData: {
    balance: Array<Balance>;
    movements: Array<Movement>;
    monthBalance: Array<Balance>;
    monthList: Array<any>;
    filterNonZero: boolean;
    averageBalanceInfo: any;
    showDailyBalance: boolean;
    monthlyExpenseChart: {
      chartData: any[];
      chartLabels: string[];
      chartOptions: any;
      chartLegend: boolean;
      chartType: string;
    };
    monthlyIncomeChart: {
      chartData: any[];
      chartLabels: string[];
      chartOptions: any;
      chartLegend: boolean;
      chartType: string;
    };
    showOptions: boolean;
    monthlyExpenseVsIncomeChart: any;
  } = {
    balance: [],
    movements: [],
    monthBalance: [],
    monthList: [],
    filterNonZero: true,
    averageBalanceInfo: {},
    showDailyBalance: false,
    monthlyExpenseChart: {
      chartData: [
        {
          data: []
        }
      ],
      chartLabels: [],
      chartOptions: {
        responsive: true
      },
      chartLegend: true,
      chartType: "pie"
    },
    monthlyIncomeChart: {
      chartData: [
        {
          data: []
        }
      ],
      chartLabels: [],
      chartOptions: {
        responsive: true
      },
      chartLegend: true,
      chartType: "pie"
    },
    showOptions: false,
    monthlyExpenseVsIncomeChart: {
      chartType: "bar",
      chartData: [
        {
          data: []
        }
      ],
      chartLabels: []
    }
  };
  public services: {
    balance: BalanceService;
    movement: MovementService;
    sync: SyncAPI;
  } = {
    balance: null,
    movement: null,
    sync: null
  };
  public model: {
    iterable: number;
    year: number;
    month: number;
    selectedBalance: Balance;
    movementListingView: string;
    selectedMonthName: string;
  } = {
    iterable: 0,
    year: 2017,
    month: 12,
    selectedBalance: null,
    movementListingView: "compact",
    selectedMonthName: null
  };
  public state: {
    movementList: Movement[];
  } = {
    movementList: []
  };

  constructor(
    balanceService: BalanceService,
    movementService: MovementService,
    syncService: SyncAPI,
    private titleService: Title
  ) {
    this.services.balance = balanceService;
    this.services.movement = movementService;
    this.services.sync = syncService;

    titleService.setTitle("Balance");
  }

  ngOnInit() {
    this.model.iterable =
      new Date().getFullYear() * 100 + (new Date().getMonth() + 1);
    this.parseIterable();

    this.services.balance
      .getAllForUser(this.user)
      .then((list: Array<Balance>) => {
        this.viewData.balance = list;

        /*this.viewData.balance = this.viewData.balance
            .sort((a: Balance, b: Balance) => a.mov_date >= b.mov_date ? -1 : 1)
            .slice(0,10);*/
        this.viewData.monthBalance = this.filterMonthBalance();
        //this.viewData.monthBalance = this.services.balance.list;
        // TODO: add list of year/months of balance for combo box
        this.viewData.monthList = this.services.balance.monthList(this.user);

        this.checkCurrentBalance(list);

        this.monthlyIncomeVsExpense();
      });
    this.services.movement
      .getAllForUser(this.user)
      .then((list: Array<Movement>) => {
        this.state.movementList = list;
        this.monthlyTotals();
      });
  }

  fetchBalance() {
    this.services.balance
      .getAllForUser(this.user)
      .then((list: Array<Balance>) => {
        this.viewData.balance = list;

        this.viewData.monthBalance = this.filterMonthBalance();
        this.viewData.monthList = this.services.balance.monthList(this.user);
        this.monthlyIncomeVsExpense();
      });
  }

  parseIterable() {
    this.model.year = Math.floor(this.model.iterable / 100);
    this.model.month = this.model.iterable % 100;
  }

  reloadBalance() {
    this.parseIterable();
    this.viewData.monthBalance = this.filterMonthBalance();
    if (this.model.selectedBalance) {
      this.model.selectedBalance = this.viewData.balance.find(
        b =>
          b.bal_id_account === this.model.selectedBalance.bal_id_account &&
          b.bal_year === this.model.year &&
          b.bal_month === this.model.month
      );
      this.renderMovements(this.model.selectedBalance, undefined);
    }
    this.monthlyTotals();
  }

  filterMonthBalance() {
    let filter = (b: Balance) =>
      b.bal_year == this.model.year && b.bal_month == this.model.month;
    if (this.viewData.filterNonZero) {
      filter = (b: Balance) =>
        b.bal_year == this.model.year &&
        b.bal_month == this.model.month &&
        !(
          b.bal_initial === 0 &&
          b.bal_charges === 0 &&
          b.bal_withdrawals === 0 &&
          b.bal_final === 0
        );
    }

    return this.services.balance.list().filter((b: Balance) => filter(b));
  }

  toggleFilterNonZero() {
    this.viewData.filterNonZero = !this.viewData.filterNonZero;
    this.viewData.monthBalance = this.filterMonthBalance();
  }

  renderMovements(balance: Balance, event: Event) {
    event && event.preventDefault && event.preventDefault();
    const url = `/api/movements/average-balance?account=${
      balance.bal_id_account
    }&checkday=true&year=${balance.bal_year}&month=${balance.bal_month}`;
    this.services.sync.get(url).then(response => {
      this.viewData.averageBalanceInfo = response;
      this.viewData.averageBalanceInfo.startingDate = new Date(
        this.viewData.averageBalanceInfo.startingDate
      );
      this.viewData.averageBalanceInfo.finalDate = new Date(
        this.viewData.averageBalanceInfo.finalDate
      );
      this.viewData.averageBalanceInfo.dailyBalance = this.viewData.averageBalanceInfo.dailyBalance.map(
        (balance, index) => ({
          date: DateUtils.addDays(
            this.viewData.averageBalanceInfo.startingDate,
            index
          ),
          balance
        })
      );
    });
    this.services.movement
      .getAllForUser(this.user)
      .then((list: Array<Movement>) => {
        let ref = balance.bal_year * 100 + balance.bal_month;
        this.viewData.movements = list.filter(m => {
          let movRef =
            new Date(m.mov_date).getFullYear() * 100 +
            (new Date(m.mov_date).getMonth() + 1);
          return (
            ref === movRef &&
            (balance.bal_id_account === m.mov_id_account ||
              balance.bal_id_account === m.mov_id_account_to)
          );
        });
        this.model.selectedBalance = balance;
        this.model.selectedMonthName = DateUtils.getMonthName(
          balance.bal_month
        );
        console.log(
          `movements fetched for balance`,
          balance,
          this.viewData.movements
        );
      });
  }

  toggleDailyBalance() {
    this.viewData.showDailyBalance = !this.viewData.showDailyBalance;
  }

  monthlyTotals() {
    this.parseIterable();
    const movementList: Movement[] = this.state.movementList.filter(
      item =>
        item.mov_date.getFullYear() === this.model.year &&
        item.mov_date.getMonth() + 1 === this.model.month
    );
    type T = { title: string; movements: Movement[]; total: number };

    const data = {
      income: movementList
        .filter(item => item.mov_ctg_type === 2)
        .reduce((previous, item) => {
          const categoryGroup: T = previous.find(
            x => x.title === item.mov_txt_category
          );
          if (categoryGroup) {
            categoryGroup.movements.push(item);
            categoryGroup.total += item.mov_amount;
          } else {
            previous.push({
              title: item.mov_txt_category,
              movements: [item],
              total: item.mov_amount
            });
          }
          return previous;
        }, []),
      expenses: movementList
        .filter(item => item.mov_ctg_type === 1)
        .reduce((previous, item) => {
          const categoryGroup: T = previous.find(
            x => x.title === item.mov_txt_category
          );
          if (categoryGroup) {
            categoryGroup.movements.push(item);
            categoryGroup.total += item.mov_amount;
          } else {
            previous.push({
              title: item.mov_txt_category,
              movements: [item],
              total: item.mov_amount
            });
          }
          return previous;
        }, [])
    };

    // include totals
    data.income.forEach(item => {
      item["total"] = item.movements.reduce((p, x) => p + x.mov_amount, 0);
    });

    data.expenses.forEach(item => {
      item["total"] = item.movements.reduce((p, x) => p + x.mov_amount, 0);
    });
    console.log("monthlyTotals", data);

    const chartExpenses = this.viewData.monthlyExpenseChart;
    chartExpenses.chartData = [
      { data: data.expenses.map(item => item.total), label: "Expenses" }
    ];
    chartExpenses.chartLabels = data.expenses.map(
      item => `${item.title} (${item.movements.length})`
    );

    const chartIncome = this.viewData.monthlyIncomeChart;
    chartIncome.chartData = [
      { data: data.income.map(item => item.total), label: "Income" }
    ];
    chartIncome.chartLabels = data.income.map(
      item => `${item.title} (${item.movements.length})`
    );
  }

  parseModel(): { parsedYear: number; parsedMonth: number } {
    this.model.iterable = parseInt(this.model.iterable + "");
    const parsedYear: number = Math.floor(this.model.iterable / 100);
    const parsedMonth: number = this.model.iterable % 100;
    return {
      parsedYear,
      parsedMonth
    };
  }

  rebuild() {
    const model = this.parseModel();

    this.services.sync
      .post("/api/balance/rebuild", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: "anon"
      })
      .then(() => {
        this.fetchBalance();
      });
  }

  transfer() {
    const model = this.parseModel();

    this.services.sync
      .post("/api/balance/transfer", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: "anon"
      })
      .then(() => {
        this.fetchBalance();
      });
  }

  rebuildAndTransfer() {
    const model = this.parseModel();

    this.services.sync
      .post("/api/balance/rebuild-and-transfer", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: "anon"
      })
      .then(() => {
        this.fetchBalance();
      });
  }

  rebuildAndTransferUntilCurrentMonth() {
    const model = this.parseModel();

    this.services.sync
      .post("/api/balance/rebuild-and-transfer-range", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: "anon"
      })
      .then(() => {
        this.fetchBalance();
      });
  }

  monthlyIncomeVsExpense() {
    this.parseIterable();
    const capitalAccountId: string = "1";
    const itemCount: number = 12;
    const monthList: {
      iterable: number;
      year: number;
      month: number;
      name: string;
    }[] = this.viewData.monthList
      .filter((m, index) => index < itemCount)
      .reverse();
    const capitalBalanceMonthly: Balance[] = this.services.balance
      .list()
      .filter(b => b.bal_id_account === capitalAccountId);
    const graphData = {
      chartLabels: monthList.map(m => m.name),
      chartData: [
        {
          label: `Income`,
          backgroundColor: "rgb(54, 162, 235)",
          borderColor: "rgb(54, 162, 235)",
          data: monthList.map(
            m =>
              capitalBalanceMonthly.find(
                b => b.bal_year === m.year && b.bal_month === m.month
              ).bal_charges
          )
        },
        {
          label: `Expenses`,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: monthList.map(
            m =>
              capitalBalanceMonthly.find(
                b => b.bal_year === m.year && b.bal_month === m.month
              ).bal_withdrawals
          )
        },
        {
          label: `Final`,
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
          data: monthList.map(
            m =>
              capitalBalanceMonthly.find(
                b => b.bal_year === m.year && b.bal_month === m.month
              ).bal_final
          )
        }
      ],
      chartType: "pie"
    };

    this.viewData.monthlyExpenseVsIncomeChart = graphData;
  }

  /**
   * Check if there's balance for current month, if it is proceed with rendering.
   * If it isn't look for balance on previous month,
   * - if no balance is found, proceed with rendering,
   * - if balance is found, do a balance transfer from previous to current month
   */
  checkCurrentBalance(balanceList: Balance[]) {
    const currentMonthIterable: number = this.model.iterable;
    const previousMonthIterable: number = DateUtils.getIterablePreviousMonth(
      this.model.year,
      this.model.month
    ).iterable;

    const existsBalanceForCurrentMonth: boolean =
      balanceList.filter(
        b => b.bal_year * 100 + b.bal_month === currentMonthIterable
      ).length > 0;

    if (!existsBalanceForCurrentMonth) {
      const existsBalanceForPreviousMonth: boolean =
        balanceList.filter(
          b => b.bal_year * 100 + b.bal_month === previousMonthIterable
        ).length > 0;

      if (existsBalanceForPreviousMonth) {
        this.model.iterable = previousMonthIterable;
        this.transfer();
      }
    }
  }
}
