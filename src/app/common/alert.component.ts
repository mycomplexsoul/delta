import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Subscription } from "rxjs";

import { AlertService } from "./alert.service";

@Component({
  selector: "alert",
  templateUrl: "./alert.template.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe((message) => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
