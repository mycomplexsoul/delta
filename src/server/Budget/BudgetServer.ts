import { Budget } from "../../crosscommon/entities/Budget";
import { ApiServer } from "../ApiServer";
import { iNode } from "../iNode";

export class BudgetServer {
  private api: ApiServer = new ApiServer(new Budget());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;

  deleteRequestHandler = this.api.deleteRequestHandler;
  delete = this.api.delete;

  batchSaveRequestHandler = async ({ request, response }: iNode) => {
    const username = (
      request as typeof request & { userData?: { username?: string } }
    ).userData?.username;
    const body = request.body;
    if (!Array.isArray(body) || !username) {
      response.status(400).json({
        success: false,
        message: "Se esperaba una lista de presupuestos autenticada.",
      });
      return;
    }

    if (body.length === 0) {
      response.json({ success: true, saved: 0 });
      return;
    }

    const model = new Budget();
    const tableFields = model.metadata.fields.filter(
      (field) => field.isTableField
    );
    const categories = new Set<string>();
    let period: { year: number; month: number } | null = null;
    const items: Budget[] = [];

    for (const entry of body) {
      if (!entry || typeof entry !== "object") {
        response.status(400).json({
          success: false,
          message: "La lista contiene un presupuesto no válido.",
        });
        return;
      }

      const item = new Budget();
      const values = tableFields.reduce(
        (fields, field) => ({
          ...fields,
          [field.dbName]: entry[field.dbName],
        }),
        {} as Record<string, unknown>
      );
      Object.assign(item, values);
      const year = Number(item.bud_year);
      const month = Number(item.bud_month);
      const amount = Number(item.bud_expected_amount);
      if (
        !Number.isInteger(year) ||
        !Number.isInteger(month) ||
        month < 1 ||
        month > 12 ||
        typeof item.bud_id_category !== "string" ||
        item.bud_id_category.trim().length === 0 ||
        !Number.isFinite(amount)
      ) {
        response.status(400).json({
          success: false,
          message:
            "Un presupuesto contiene período, categoría o monto no válido.",
        });
        return;
      }
      period = period || { year, month };
      if (period.year !== year || period.month !== month) {
        response.status(400).json({
          success: false,
          message:
            "Todos los presupuestos deben corresponder al mismo período.",
        });
        return;
      }
      if (categories.has(item.bud_id_category)) {
        response.status(400).json({
          success: false,
          message: "No puede haber más de un presupuesto por categoría.",
        });
        return;
      }
      categories.add(item.bud_id_category);
      item.bud_year = year;
      item.bud_month = month;
      item.bud_expected_amount = amount;
      item.bud_ctg_type = amount < 0 ? 1 : 2;
      item.bud_id_user = username;
      item.bud_date_mod = new Date();
      items.push(item);
    }

    try {
      const existing = await this.api.list({ username });
      let saved = 0;
      let created = 0;
      let updated = 0;
      const savedCategories: string[] = [];
      const failures: Array<{ category: string; message: string }> = [];
      for (const item of items) {
        const current = existing.find(
          (budget: Budget) =>
            Number(budget.bud_year) === item.bud_year &&
            Number(budget.bud_month) === item.bud_month &&
            budget.bud_id_category === item.bud_id_category
        );
        let result: any;
        if (current) {
          item.bud_date_add = current.bud_date_add
            ? new Date(current.bud_date_add)
            : current.bud_date_add;
          try {
            result = await this.api.update(item, {
              bud_year: item.bud_year,
              bud_month: item.bud_month,
              bud_id_category: item.bud_id_category,
            });
          } catch (error) {
            failures.push({
              category: item.bud_id_category,
              message: error instanceof Error ? error.message : String(error),
            });
            continue;
          }
        } else {
          item.bud_date_add = new Date();
          try {
            result = await this.api.create(item);
          } catch (error) {
            failures.push({
              category: item.bud_id_category,
              message: error instanceof Error ? error.message : String(error),
            });
            continue;
          }
        }

        if (result?.success) {
          saved++;
          savedCategories.push(item.bud_id_category);
          if (current) {
            updated++;
          } else {
            created++;
          }
        } else {
          failures.push({
            category: item.bud_id_category,
            message: result?.message || "No se pudo guardar.",
          });
        }
      }
      response.json({
        success: failures.length === 0,
        saved,
        created,
        updated,
        savedCategories,
        failures,
      });
    } catch (error) {
      console.error("Error guardando presupuestos en batch", error);
      response.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  };
}
