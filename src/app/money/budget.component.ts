import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Budget } from "../../crosscommon/entities/Budget";
import { Category } from "../../crosscommon/entities/Category";
import { Movement } from "../../crosscommon/entities/Movement";
import { AuthenticationService } from "../common/authentication.service";
import { NotificationService } from "../common/notification.service";
import { BudgetService } from "./budget.service";
import { CategoryService } from "./category.service";
import { MovementService } from "./movement.service";

@Component({
  selector: "budget",
  templateUrl: "./budget.template.html",
  styleUrls: ["./budget.css"],
  providers: [BudgetService, CategoryService, MovementService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class BudgetComponent implements OnInit {
  readonly historyMonths = [1, 2, 3];
  private readonly budgetHistory = new Map<
    string,
    Array<{ monthsAgo: number; budget: Budget }>
  >();
  private readonly actualHistory = new Map<
    string,
    Array<{ monthsAgo: number; amount: number }>
  >();
  private readonly categoryNameById = new Map<string, string>();
  private readonly persistedCategories = new Set<string>();
  period = this.currentPeriod();
  rows: Budget[] = [];
  budgets: Budget[] = [];
  categories: Category[] = [];
  movements: Movement[] = [];
  selectedForDeletion = new Set<string>();
  isLoading = false;
  isSaving = false;
  errorMessage = "";

  constructor(
    private readonly budgetService: BudgetService,
    private readonly categoryService: CategoryService,
    private readonly movementService: MovementService,
    private readonly authenticationService: AuthenticationService,
    private readonly notificationService: NotificationService,
    private readonly changeDetector: ChangeDetectorRef,
    titleService: Title
  ) {
    titleService.setTitle("Budget");
  }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    try {
      const [budgets, categories, movements] = await Promise.all([
        this.budgetService.getAll(),
        this.categoryService.getAll(),
        this.movementService.getAll(),
      ]);
      this.budgets = budgets;
      this.categories = categories;
      this.categoryNameById.clear();
      this.categories.forEach((category) =>
        this.categoryNameById.set(category.mct_id, category.mct_name)
      );
      this.movements = movements.map((movement) => {
        movement.mov_date = new Date(movement.mov_date);
        return movement;
      });
      this.loadPeriod();
    } catch (error) {
      this.errorMessage = this.errorText(error);
      this.notificationService.notify(
        `No se pudieron cargar los datos de presupuestos: ${this.errorMessage}`
      );
    } finally {
      this.isLoading = false;
      this.changeDetector.markForCheck();
    }
  }

  onPeriodChange(): void {
    this.selectedForDeletion.clear();
    this.loadPeriod();
  }

  loadPeriod(): void {
    const { year, month } = this.selectedYearMonth();
    const periodBudgets = new Map(
      this.budgets
        .filter(
          (budget) =>
            Number(budget.bud_year) === year &&
            Number(budget.bud_month) === month
        )
        .map((budget) => [budget.bud_id_category, budget])
    );
    this.persistedCategories.clear();
    periodBudgets.forEach((_, categoryId) =>
      this.persistedCategories.add(categoryId)
    );
    this.rows = this.categories
      .map((category) => {
        const existing = periodBudgets.get(category.mct_id);
        return existing
          ? new Budget(existing)
          : new Budget({
              bud_year: year,
              bud_month: month,
              bud_id_category: category.mct_id,
              bud_ctg_type: 2,
              bud_expected_amount: 0,
              bud_real_amount: 0,
              bud_id_user: this.authenticationService.currentUserValue.username,
              bud_date_add: new Date(),
              bud_date_mod: new Date(),
              bud_ctg_status: 1,
            });
      })
      .sort((a, b) => this.categoryName(a).localeCompare(this.categoryName(b)));
    this.loadHistorySuggestions();
  }

  categoryName(row: Budget): string {
    return this.categoryNameById.get(row.bud_id_category) || "Categoría";
  }

  keyFor(row: Budget): string {
    return `${row.bud_year}-${row.bud_month}-${row.bud_id_category}`;
  }

  isPersisted(row: Budget): boolean {
    return this.persistedCategories.has(row.bud_id_category);
  }

  toggleDeletion(row: Budget, selected: boolean): void {
    const key = this.keyFor(row);
    if (selected) {
      this.selectedForDeletion.add(key);
    } else {
      this.selectedForDeletion.delete(key);
    }
  }

  async saveChanges(): Promise<void> {
    if (this.isSaving || this.rows.length === 0) {
      return;
    }

    const { year, month } = this.selectedYearMonth();
    const invalidRow = this.rows.find(
      (row) =>
        !row.bud_id_category ||
        !Number.isFinite(Number(row.bud_expected_amount)) ||
        row.bud_expected_amount === null
    );
    if (invalidRow) {
      this.notificationService.notify(
        "Cada presupuesto debe tener una categoría y un monto válido."
      );
      return;
    }
    if (
      new Set(this.rows.map((row) => row.bud_id_category)).size !==
      this.rows.length
    ) {
      this.notificationService.notify(
        "No puede haber más de un presupuesto por categoría en el período."
      );
      return;
    }

    this.isSaving = true;
    for (const row of this.rows) {
      row.bud_year = year;
      row.bud_month = month;
      row.bud_ctg_type = row.bud_expected_amount < 0 ? 1 : 2;
      row.bud_id_user = this.authenticationService.currentUserValue.username;
      row.bud_date_mod = new Date();
      if (!this.isPersisted(row)) {
        row.bud_date_add = new Date();
      }
    }

    try {
      const result = await this.budgetService.saveBatch(this.rows);
      const savedCategories = new Set(result.savedCategories);
      const savedRows = this.rows.filter((row) =>
        savedCategories.has(row.bud_id_category)
      );
      this.budgets = this.budgets
        .filter(
          (budget) =>
            budget.bud_year !== year ||
            budget.bud_month !== month ||
            !savedCategories.has(budget.bud_id_category)
        )
        .concat(savedRows.map((row) => new Budget(row)));
      savedRows.forEach((row) =>
        this.persistedCategories.add(row.bud_id_category)
      );
      const summary = `Guardados correctamente: ${result.saved} (${result.updated} actualizados, ${result.created} nuevos). Fallidos: ${result.failures.length}.`;
      if (result.failures.length > 0) {
        const details = result.failures
          .map(
            (failure) =>
              `${
                this.categoryNameById.get(failure.category) || failure.category
              }: ${failure.message}`
          )
          .join("\n");
        this.notificationService.notifyWithOptions(`${summary}\n${details}`, {
          title: "Resultado del guardado de presupuestos",
          hideIn: 15000,
          showHeader: true,
          minimalUI: true,
          native: false,
          voice: false,
        });
      } else {
        this.notificationService.notify(summary);
      }
    } catch (error) {
      this.notificationService.notifyWithOptions(
        `Guardados correctamente: 0. Fallidos o no confirmados: ${
          this.rows.length
        }.\n${this.errorText(error)}`,
        {
          title: "Error al guardar presupuestos",
          hideIn: 15000,
          showHeader: true,
          minimalUI: true,
          native: false,
          voice: false,
        }
      );
    } finally {
      this.isSaving = false;
      this.changeDetector.markForCheck();
    }
  }

  async deleteSelected(): Promise<void> {
    if (this.isSaving || this.selectedForDeletion.size === 0) {
      return;
    }

    this.isSaving = true;
    let deleted = 0;
    const failures: string[] = [];
    for (const row of this.rows.filter((item) =>
      this.selectedForDeletion.has(this.keyFor(item))
    )) {
      try {
        if (this.isPersisted(row)) {
          await this.budgetService.delete(row);
          this.budgets = this.budgets.filter(
            (budget) => this.keyFor(budget) !== this.keyFor(row)
          );
        }
        this.selectedForDeletion.delete(this.keyFor(row));
        deleted++;
      } catch (error) {
        failures.push(`${this.categoryName(row)}: ${this.errorText(error)}`);
      }
    }

    try {
      if (failures.length) {
        this.notificationService.notify(
          `${deleted} presupuesto(s) eliminado(s). No se eliminaron: ${failures.join(
            "; "
          )}`
        );
      } else {
        this.notificationService.notify(
          `${deleted} presupuesto(s) eliminado(s) correctamente.`
        );
      }
    } finally {
      this.isSaving = false;
      this.loadPeriod();
      this.changeDetector.markForCheck();
    }
  }

  applyBudgetSuggestion(row: Budget, monthsAgo: number): void {
    const previous = this.previousBudgets(row).find(
      (suggestion) => suggestion.monthsAgo === monthsAgo
    )?.budget;
    if (previous) {
      row.bud_expected_amount = previous.bud_expected_amount;
      row.bud_ctg_type = previous.bud_ctg_type;
    }
  }

  applyPreviousActual(
    row: Budget,
    movementType: 1 | 2,
    monthsAgo: number
  ): void {
    const total = this.previousActuals(row, movementType).find(
      (suggestion) => suggestion.monthsAgo === monthsAgo
    )?.amount;
    if (total !== null) {
      row.bud_expected_amount = total;
      row.bud_ctg_type = movementType;
    }
  }

  previousBudgets(row: Budget): Array<{ monthsAgo: number; budget: Budget }> {
    return this.budgetHistory.get(row.bud_id_category) || [];
  }

  previousActuals(
    row: Budget,
    movementType: 1 | 2
  ): Array<{ monthsAgo: number; amount: number }> {
    return (
      this.actualHistory.get(`${row.bud_id_category}:${movementType}`) || []
    );
  }

  get incomeTotal(): number {
    return this.rows.reduce(
      (total, row) =>
        total +
        (Number(row.bud_expected_amount) > 0
          ? Number(row.bud_expected_amount)
          : 0),
      0
    );
  }

  get expenseTotal(): number {
    return this.rows.reduce(
      (total, row) =>
        total +
        (Number(row.bud_expected_amount) < 0
          ? Math.abs(Number(row.bud_expected_amount))
          : 0),
      0
    );
  }

  private currentPeriod(): string {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  }

  private selectedYearMonth(): { year: number; month: number } {
    const [year, month] = this.period.split("-").map(Number);
    return { year, month };
  }

  private getRelativeMonth(monthsAgo: number): { year: number; month: number } {
    const { year, month } = this.selectedYearMonth();
    const date = new Date(year, month - 1 - monthsAgo, 1);
    return { year: date.getFullYear(), month: date.getMonth() + 1 };
  }

  private loadHistorySuggestions(): void {
    this.budgetHistory.clear();
    this.actualHistory.clear();

    const periods = this.historyMonths.map((monthsAgo) => ({
      monthsAgo,
      ...this.getRelativeMonth(monthsAgo),
    }));
    const periodKeys = new Set(
      periods.map(({ year, month }) => `${year}-${month}`)
    );
    const movementTotals = new Map<string, { amount: number; count: number }>();

    this.movements.forEach((movement) => {
      const date = movement.mov_date;
      const periodKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (movement.mov_ctg_status !== 1 || !periodKeys.has(periodKey)) {
        return;
      }
      const key = `${movement.mov_id_category}:${movement.mov_ctg_type}:${periodKey}`;
      const total = movementTotals.get(key) || { amount: 0, count: 0 };
      total.amount += Number(movement.mov_amount || 0);
      total.count++;
      movementTotals.set(key, total);
    });

    this.categories.forEach((category) => {
      const budgets = periods
        .map(({ monthsAgo, year, month }) => ({
          monthsAgo,
          budget: this.budgets.find(
            (budget) =>
              budget.bud_id_category === category.mct_id &&
              Number(budget.bud_year) === year &&
              Number(budget.bud_month) === month
          ),
        }))
        .filter(
          (
            suggestion
          ): suggestion is {
            monthsAgo: number;
            budget: Budget;
          } => suggestion.budget !== undefined
        );
      this.budgetHistory.set(category.mct_id, budgets);

      ([1, 2] as const).forEach((movementType) => {
        const amounts = periods
          .map(({ monthsAgo, year, month }) => {
            const total = movementTotals.get(
              `${category.mct_id}:${movementType}:${year}-${month}`
            );
            if (!total || total.count === 0) {
              return null;
            }
            return {
              monthsAgo,
              amount:
                movementType === 1
                  ? -Math.abs(total.amount)
                  : Math.abs(total.amount),
            };
          })
          .filter(
            (suggestion): suggestion is { monthsAgo: number; amount: number } =>
              suggestion !== null
          );
        this.actualHistory.set(`${category.mct_id}:${movementType}`, amounts);
      });
    });
  }

  private errorText(error: unknown): string {
    if (error && typeof error === "object") {
      const errorObject = error as Record<string, unknown>;
      const responseBody = errorObject.error;
      if (responseBody && typeof responseBody === "object") {
        const body = responseBody as Record<string, unknown>;
        if (Array.isArray(body.failures)) {
          const messages = body.failures
            .map((failure) => {
              if (!failure || typeof failure !== "object") {
                return String(failure);
              }
              const details = failure as Record<string, unknown>;
              const category =
                typeof details.category === "string"
                  ? `${details.category}: `
                  : "";
              return `${category}${
                typeof details.message === "string"
                  ? details.message
                  : "Error desconocido"
              }`;
            })
            .join("\n");
          if (messages) {
            return messages;
          }
        }
        if (typeof body.message === "string" && body.message.length > 0) {
          return body.message;
        }
      }
    }
    return error instanceof Error ? error.message : String(error);
  }
}
