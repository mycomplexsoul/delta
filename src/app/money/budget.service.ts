import { Injectable } from "@angular/core";
import { Budget } from "../../crosscommon/entities/Budget";
import { Utils } from "../../crosscommon/Utility";
import { SyncAPI } from "../common/sync.api";

export interface BudgetBatchSaveResult {
  success: boolean;
  saved: number;
  created: number;
  updated: number;
  savedCategories: string[];
  failures: Array<{ category: string; message: string }>;
}

@Injectable()
export class BudgetService {
  private readonly api = {
    list: "/api/budget",
    batch: "/api/budget/batch",
    update: "/api/budget/:year/:month/:category",
    delete: "/api/budget/:year/:month/:category",
  };

  constructor(private readonly sync: SyncAPI) {}

  async getAll(): Promise<Budget[]> {
    const data = await this.sync.get(this.api.list);
    return data.map((item: any) => new Budget(item));
  }

  async saveBatch(items: Budget[]): Promise<BudgetBatchSaveResult> {
    const tableFields = new Budget().metadata.fields
      .filter((field) => field.isTableField)
      .map((field) => field.dbName);
    const payload = items.map((item) => {
      const rawItem = Utils.removeMetadataFromEntity(item);
      return tableFields.reduce((raw, field) => {
        raw[field] = rawItem[field];
        return raw;
      }, {} as Record<string, any>);
    });
    return this.sync.post(this.api.batch, payload);
  }

  async delete(item: Budget): Promise<void> {
    const url = this.api.delete
      .replace(":year", String(item.bud_year))
      .replace(":month", String(item.bud_month))
      .replace(":category", encodeURIComponent(item.bud_id_category));
    const response = await this.sync.delete(url, item);
    this.ensureSuccess(response, "No se pudo eliminar el presupuesto");
  }

  private ensureSuccess(response: any, fallbackMessage: string): void {
    if (!response || response.success !== true) {
      const details = response?.failures
        ?.map((failure: any) => failure.message)
        .join("; ");
      throw new Error(details || response?.message || fallbackMessage);
    }
  }
}
