import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotificationItem } from "./notification-item";
import { NotificationService } from "./notification.service";
import { Subscription } from "rxjs";
import { TextToSpeech } from "./speechRecognition";

@Component({
  selector: "notification",
  styleUrls: ["./notification.css"],
  templateUrl: "./notification.template.html",
})
export class NotificationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public notificationList: NotificationItem[] = [];
  private speech = new TextToSpeech();

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.subscription = this.notificationService
      .getProvider()
      .subscribe((item) => {
        const foundIndex = this.notificationList.findIndex(
          ({ message }) => message === item.message
        );
        if (foundIndex !== -1) {
          const found = this.notificationList[foundIndex];
          this.notificationList.splice(foundIndex, 1);
          this.notificationService.remove(found);

          item.count = found.count + 1;
        }
        this.notificationList.push(item);

        if (item.native) {
          const not = window["Notification"];
          if (not && not.permission !== "denied") {
            not.requestPermission(function (status: string) {
              // send browser notification
              // status is "granted", if accepted by user
              const n = new not(item.title, {
                body: item.message,
                icon: "favicon.ico", // TODO: Parametrize icon for notifications
              });
            });
          }
        }

        if (item.voice) {
          // notify with speech :-D
          this.speech.textToSpeechVoice(item.message);
        }

        if (item.hideIn) {
          setTimeout(() => this.onClose(item), item.hideIn);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClose(notificationItem: NotificationItem) {
    if (notificationItem.count > 1) {
      notificationItem.count -= 1;
    } else {
      const index = this.notificationList.findIndex(
        (item) => notificationItem.id === item.id
      );
      this.notificationList.splice(index, 1);
      this.notificationService.remove(notificationItem);
    }
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
