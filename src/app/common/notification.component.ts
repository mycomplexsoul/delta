import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotificationItem } from "./notification-item";
import { NotificationService } from "./notification.service";
import { Subscription } from "rxjs";

@Component({
  selector: "notification",
  styleUrls: ["./notification.css"],
  templateUrl: "./notification.template.html"
})
export class NotificationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private notificationList: NotificationItem[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.subscription = this.notificationService
      .getProvider()
      .subscribe(item => {
        this.notificationList.push(item);
        if (item.hideIn) {
          setTimeout(() => this.onClose(item), item.hideIn);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClose(notificationItem: NotificationItem) {
    const index = this.notificationList.findIndex(
      item => notificationItem.id === item.id
    );
    this.notificationList.splice(index, 1);
  }

  /**
   * TODO: Add dismissable notice: auto-dismiss in 5 seconds...
   * Add a prevent dismiss "lock notification" icon which prevents notification to dismiss
   * Add a snooze button with a select box with options: 5min, 10min, 15min, 30min, 1hour
   * Add custom options from item: mark as done, start timetracking, stop timetracking
   * Add animation for new notification and for dismissed notification
   * Add a notification center to see all previous notifications
   */
}
