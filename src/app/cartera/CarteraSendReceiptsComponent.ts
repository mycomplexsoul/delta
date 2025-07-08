import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NotificationService } from "../common/notification.service";
import { CarteraSendReceiptService } from "./CarteraSendReceipt.service";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "cartera-send-receipts",
  templateUrl: "./CarteraSendReceipt.html",
  standalone: true,
  providers: [CarteraSendReceiptService],
  imports: [CommonModule, FormsModule],
})
export class CarteraSendReceiptsComponent implements OnInit {
  public periodOptions: { value: string; label: string }[] = [];
  public selectedPeriod: string;
  public loading = false;

  constructor(
    private sendReceiptService: CarteraSendReceiptService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;
    this.periodOptions = [
      {
        value: `${currentYear}${currentMonth.toString().padStart(2, "0")}`,
        label: `${currentYear}-${currentMonth.toString().padStart(2, "0")}`,
      },
      {
        value: `${prevYear}${prevMonth.toString().padStart(2, "0")}`,
        label: `${prevYear}-${prevMonth.toString().padStart(2, "0")}`,
      },
    ];
    this.selectedPeriod = this.periodOptions[0].value;
  }

  sendReceipts() {
    if (!this.selectedPeriod) {
      this.notificationService.notify(
        "Debe seleccionar un periodo para enviar los recibos"
      );
      return;
    }
    // Parse year and month from selectedPeriod (format: YYYYMM)
    const year = this.selectedPeriod.substring(0, 4);
    const month = this.selectedPeriod.substring(4, 6);
    this.loading = true;
    this.sendReceiptService
      .sendReceipts(year, month)
      .then(() => {
        this.notificationService.notify("Recibos enviados correctamente");
        this.loading = false;
      })
      .catch((err) => {
        this.notificationService.notify(
          "Ocurrió un error al enviar los recibos"
        );
        console.error(err);
        this.loading = false;
      });
  }
}
