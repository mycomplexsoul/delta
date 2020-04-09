import { Component } from "@angular/core";
import { NotificationService } from "./notification.service";
import { DateUtils } from "src/crosscommon/DateUtility";

@Component({
  selector: "drink-water",
  templateUrl: "./drinkwater.template.html",
  providers: []
})
export class DrinkWaterComponent {
  public count: number = 0;
  private intervalRef: number = 0;
  private timeoutRef: number = 0;
  public notifyEnabled: boolean = false;
  private MESSAGE: string = "Hey! drink some water";

  constructor(private notificationService: NotificationService) {
    this.startNotification();
  }

  notification(data: any) {
    let not = window["Notification"];
    if (not && not.permission !== "denied") {
      not.requestPermission(function(status: string) {
        // status is "granted", if accepted by user
        var n = new not(data.title || "Tasks", {
          body: data.body,
          icon: data.icon || "favicon.ico" // optional
        });
      });
    }
    this.notificationService.notify(data.body, data.title, 0);
  }

  addOne() {
    this.count++;
  }

  stopNotification() {
    window.clearTimeout(this.timeoutRef);
    window.clearInterval(this.intervalRef);
    this.timeoutRef = 0;
    this.intervalRef = 0;
    this.notifyEnabled = false;
  }

  startNotification() {
    const min = 30;
    this.notifyEnabled = true;

    // adjust next notification to show within the next 00 or 30 minutes of the hour
    let currDate: Date = new Date();
    if (currDate.getMinutes() > 30) {
      currDate = DateUtils.addMinutes(currDate, 60 - currDate.getMinutes());
      currDate.setSeconds(0);
    } else {
      currDate = DateUtils.addMinutes(currDate, 30 - currDate.getMinutes());
      currDate.setSeconds(0);
    }
    const scheduleIn: number = currDate.getTime() - new Date().getTime();

    const self = this;
    console.log(
      `Schedule to start Drink Water notification in ${scheduleIn /
        (1000 * 60)} minutes`
    );
    const notification = () =>
      self.notification({
        title: "Drink Water",
        body: self.MESSAGE
      });
    this.timeoutRef = window.setTimeout(() => {
      notification();
      self.intervalRef = window.setInterval(() => {
        notification();
      }, min * 60 * 1000);
    }, scheduleIn);
  }
}
