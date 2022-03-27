import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

// types
import { Balance } from "../../crosscommon/entities/Balance";
import { Movement } from "../../crosscommon/entities/Movement";
import { Category } from "../../crosscommon/entities/Category";

// services
import { BalanceService } from "./balance.service";
import { MovementService } from "./movement.service";
import { SyncAPI } from "../common/sync.api";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AuthenticationService } from "../common/authentication.service";
import { totalExpenseByDate } from "./movement.indicators";
import { NotificationService } from "../common/notification.service";

@Component({
  selector: "balance",
  templateUrl: "./balance.template.html",
  styleUrls: ["./balance.css"],
  providers: [BalanceService, MovementService]
})
export class BalanceComponent implements OnInit {
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
    monthlyExpenseComparisonChart: any;
    monthlyExpenseComparisonFoodChart: any;
    selectedTotal: number;
    selectedIncome: number;
    selectedExpense: number;
    comparisonMonthlyExpense: any;
    comparisonMonthlyExpenseFood: any;
    balanceDistribution: any[];
    monthCount: number;
    categoryList: Category[];
    selectedCategories: Category[];
    movementsPerSelectedCategories: Movement[];
    movementSummary: {
      movementCount: number;
      expenseCount: number;
      incomeCount: number;
      transferCount: number;
    }
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
    },
    monthlyExpenseComparisonChart: {
      chartType: "line",
      chartData: [
        {
          data: []
        }
      ],
      chartLabels: []
    },
    monthlyExpenseComparisonFoodChart: {
      chartType: "line",
      chartData: [
        {
          data: []
        }
      ],
      chartLabels: []
    },
    selectedTotal: 0,
    selectedIncome: 0,
    selectedExpense: 0,
    comparisonMonthlyExpense: {},
    comparisonMonthlyExpenseFood: {},
    balanceDistribution: [],
    monthCount: 5,
    categoryList: [],
    selectedCategories: [],
    movementsPerSelectedCategories: [],
    movementSummary: {
      movementCount: 0,
      expenseCount: 0,
      incomeCount: 0,
      transferCount: 0
    }
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
    private balanceService: BalanceService,
    private movementService: MovementService,
    private syncService: SyncAPI,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService
  ) {
    this.titleService.setTitle("Balance");
  }

  sort(a, b) {
    if (a.bal_ctg_account_type === b.bal_ctg_account_type) {
      return a.bal_txt_account > b.bal_txt_account ? 1 : -1;
    }
    return a.bal_ctg_account_type > b.bal_ctg_account_type ? 1 : -1;
  }

  refreshData() {
    let shouldCheckForCurrentBalance = false;
    if (this.model.iterable === 0) {
      shouldCheckForCurrentBalance = true;
      this.model.iterable =
        new Date().getFullYear() * 100 + (new Date().getMonth() + 1);
    }
    this.parseIterable();
      
    this.balanceService.getAll().then((list: Array<Balance>) => {
      this.viewData.balance = list;
  
      this.viewData.monthBalance = this.filterMonthBalance();
      this.viewData.balanceDistribution = this.balanceDistribution(
        this.viewData.monthBalance
      );

      // TODO: add list of year/months of balance for combo box
      this.viewData.monthList = this.balanceService.monthList();
  
      if (shouldCheckForCurrentBalance) {
        this.checkCurrentBalance(list);
      }
  
      this.monthlyIncomeVsExpense();
    });
    this.movementService.getAll().then((list: Array<Movement>) => {
      this.state.movementList = list;
      this.monthlyTotals();
    });
    this.notificationService.notifyWithOptions('Data refreshed correctly', { title: 'Balance' });
    return null;
  }

  ngOnInit() {
    this.refreshData();
  }

  fetchBalance(): Promise<any> {
    return this.balanceService.getAll().then((list: Array<Balance>) => {
      this.viewData.balance = list;

      this.viewData.monthBalance = this.filterMonthBalance();
      this.viewData.monthList = this.balanceService.monthList();
      this.viewData.balanceDistribution = this.balanceDistribution(
        this.viewData.monthBalance
      );
      this.monthlyIncomeVsExpense();
      return true;
    });
  }

  balanceDistribution(monthBalance: Balance[]) {
    return [...Array(7).keys()]
      .map(i => ({
        type: i,
        total: monthBalance
          .filter(b => b.bal_ctg_account_type === i)
          .reduce((sum, current) => sum + current.bal_final, 0),
        name:
          monthBalance.find(b => b.bal_ctg_account_type === i) &&
          monthBalance.find(b => b.bal_ctg_account_type === i)
            .bal_txt_account_type
      }))
      .filter(t => t.name);
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

    return this.balanceService
      .list()
      .filter((b: Balance) => filter(b))
      .sort(this.sort);
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
    this.syncService.get(url).then(response => {
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
    this.movementService.getAll().then((list: Array<Movement>) => {
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
      this.model.selectedMonthName = DateUtils.getMonthName(balance.bal_month);
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

    this.viewData.selectedCategories = [];
    this.viewData.movementsPerSelectedCategories = [];

    this.viewData.movementSummary.movementCount = movementList.length;
    this.viewData.movementSummary.expenseCount = movementList.filter(m => m.mov_ctg_type === 1).length;
    this.viewData.movementSummary.incomeCount = movementList.filter(m => m.mov_ctg_type === 2).length;
    this.viewData.movementSummary.transferCount = movementList.filter(m => m.mov_ctg_type === 3).length;

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

    // get category listing
    const { monthCount } = this.viewData;
    const { year, month } = this.model;
    const initialDate: Date = DateUtils.addMonths(new Date(year, month - 1, 1, 0, 0, 0), -1 * monthCount);
    const finalDate: Date = new Date(year, month + 1, 1);
    let categoryList: Category[] = [];

    this.state.movementList.filter(
        m => m.mov_date.getTime() >= initialDate.getTime() &&
        finalDate.getTime() > m.mov_date.getTime()
        && m.mov_ctg_type === 1
      ).map(m => new Category({
        mct_id: m.mov_id_category,
        mct_name: m.mov_txt_category
    })).forEach(c => {
      if (!categoryList.find(cat => cat.mct_id === c.mct_id)) {
        categoryList.push(c);
      }
    });
    categoryList = categoryList.sort((a, b) => a.mct_name > b.mct_name ? 1 : -1);
    this.viewData.categoryList = categoryList;

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

    this.monthlyExpenseComparison();
    this.monthlyExpenseComparisonFood();
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

    this.syncService
      .post("/api/balance/rebuild", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: this.authenticationService.currentUserValue.username
      })
      .then(this.fetchBalance.bind(this))
      .then(() => {
          this.notificationService.notify('Rebuild finished correctly, balances are updated');
      });
  }

  transfer() {
    const model = this.parseModel();

    this.syncService
      .post("/api/balance/transfer", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: this.authenticationService.currentUserValue.username
      })
      .then(this.fetchBalance.bind(this))
      .then(() => {
          this.notificationService.notify('Transfer finished correctly, balances are updated');
      });
  }

  rebuildAndTransfer() {
    const model = this.parseModel();

    this.syncService
      .post("/api/balance/rebuild-and-transfer", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: this.authenticationService.currentUserValue.username
      })
      .then(this.fetchBalance.bind(this))
      .then(() => {
          this.notificationService.notify('Rebuild and transfer finished correctly, balances are updated');
      });
  }

  rebuildAndTransferUntilCurrentMonth() {
    const model = this.parseModel();

    this.syncService
      .post("/api/balance/rebuild-and-transfer-range", {
        year: model.parsedYear,
        month: model.parsedMonth,
        user: this.authenticationService.currentUserValue.username
      })
      .then(this.fetchBalance.bind(this))
      .then(() => {
          this.notificationService.notify('Rebuild and transfer finished correctly, balances are updated');
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
    const capitalBalanceMonthly: Balance[] = this.balanceService
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
              ).bal_withdrawals
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
              ).bal_charges
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
              ).bal_final * -1
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

  selectMovement({value: movement, event}: {value: Movement, event: Event}) {
    const factor = event.target['checked'] ? 1 : -1;
    if (movement.mov_ctg_type === 1 || (movement.mov_ctg_type === 3 && movement.mov_id_account === this.model.selectedBalance.bal_id_account)) {
      this.viewData.selectedExpense += factor * movement.mov_amount;
    }
    if (movement.mov_ctg_type === 2 || (movement.mov_ctg_type === 3 && movement.mov_id_account_to === this.model.selectedBalance.bal_id_account)) {
      this.viewData.selectedIncome += factor * movement.mov_amount;
    }

    this.viewData.selectedTotal =
      this.viewData.selectedIncome - this.viewData.selectedExpense;
  }

  monthlyExpenseComparison() {
    this.parseIterable();
    const monthCount = 5;

    this.viewData.comparisonMonthlyExpense = totalExpenseByDate(
      this.state.movementList,
      this.model.year,
      this.model.month,
      monthCount
    );
    console.log(
      "comparison day by day",
      this.viewData.comparisonMonthlyExpense
    );

    const data = this.viewData.comparisonMonthlyExpense;
    const graphData = {
      chartLabels: data.dailyTotals.map(d => d.day),
      chartData: [...Array(monthCount + 1).keys()].map(i => ({
        label: `${DateUtils.getMonthName((this.model.month - i + 12) % 12)} ${
          this.model.year
        } ${
          data.dailyTotals.map(
            t => `$${t[`expenseMonth${i}`]} (${t[`expenseMonthCount${i}`]})`
          )[
            DateUtils.lastDayInMonth(
              this.model.year,
              (this.model.month - i + 12) % 12
            ) - 1
          ]
        }`,
        fill: false,
        data: data.dailyTotals.map(t => t[`expenseMonth${i}`])
      })),
      chartType: "line"
    };
    console.log('-- graphData', graphData);

    this.viewData.monthlyExpenseComparisonChart = graphData;
  }

  monthlyExpenseComparisonFood() {
    this.parseIterable();
    const monthCount = 5;

    this.viewData.comparisonMonthlyExpenseFood = totalExpenseByDate(
      this.state.movementList,
      this.model.year,
      this.model.month,
      monthCount,
      m =>
        !!this.viewData.selectedCategories.find(c => c.mct_id === m.mov_id_category)
    );
    console.log(
      "comparison day by day food",
      this.viewData.comparisonMonthlyExpenseFood
    );

    const data = this.viewData.comparisonMonthlyExpenseFood;
    const graphData = {
      chartLabels: data.dailyTotals.map(d => d.day),
      chartData: [...Array(monthCount + 1).keys()].map(i => ({
        label: `${DateUtils.getMonthName(((this.model.month - i + 12) % 12 === 0) ? 12 : (this.model.month - i + 12) % 12 )} ${
          this.model.year
        } ${
          data.dailyTotals.map(
            t => `${t[`expenseMonth${i}`]} (${t[`expenseMonthCount${i}`]})`
          )[
            DateUtils.lastDayInMonth(
              this.model.year,
              (this.model.month - i + 12) % 12 === 0 ? 12 : (this.model.month - i + 12) % 12
            ) - 1
          ]
        }`,
        fill: false,
        data: data.dailyTotals.map(t => t[`expenseMonth${i}`])
      })),
      chartType: "line"
    };

    this.viewData.monthlyExpenseComparisonFoodChart = graphData;
  }

  toggleCategorySelection(id: string, event: Event) {
    if (event.target['checked']) {
      if (!this.viewData.selectedCategories.find(c => c.mct_id === id)) {
        this.viewData.selectedCategories.push(this.viewData.categoryList.find(c => c.mct_id === id));
      }
    }
    else {
      if (this.viewData.selectedCategories.find(c => c.mct_id === id)) {
        this.viewData.selectedCategories.splice(this.viewData.selectedCategories.findIndex(c => c.mct_id === id), 1);
      }
    }

    const { year, month } = this.model;
    const initialDate: Date = new Date(year, month - 1, 1);
    const finalDate: Date = new Date(year, month, 1);

    this.viewData.movementsPerSelectedCategories = this.state.movementList.filter(m => 
      m.mov_date.getTime() >= initialDate.getTime() &&
      m.mov_date.getTime() < finalDate.getTime() &&
      m.mov_ctg_type === 1 &&
      !!this.viewData.selectedCategories.find(c => c.mct_id === m.mov_id_category));
    
    this.monthlyExpenseComparisonFood();
  }

  selectAllCategories() {
    this.viewData.categoryList.forEach(({ mct_id }) => {
      document.querySelector(`input[type=checkbox]#cat${mct_id}`)['click']();
    });
  }
}
