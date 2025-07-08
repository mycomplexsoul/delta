import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";

@Injectable({ providedIn: "root" })
export class CarteraSendReceiptService {
  constructor(private sync: SyncAPI) {}

  sendReceipts(year: string, month: string): Promise<any> {
    // ! TODO: use internal route and remove external route access since it will deprecate it
    return this.sync.post("/api/external/cartera-ext/send-receipts-email", {
      year,
      month,
    });
  }
}
