import { Component } from "@angular/core";
import { NotificationService } from "./notification.service";
import { DateUtils } from "src/crosscommon/DateUtility";

@Component({
  selector: "drink-water",
  templateUrl: "./drinkwater.template.html",
  providers: [],
})
export class DrinkWaterComponent {
  constructor(private notificationService: NotificationService) {}

  /////////////////////////////
  public titles = [
    "Water",
    "Lipstick",
    "Check downloads state",
    "Excercise",
    "Slack Globant",
    "Solar protector",
    "Post tweet",
    "Custom",
  ];
  public viewData = {
    reminders: [
      {
        title: "Water",
        startTime: 9 * 60,
        started: false,
        schedule: 30,
        nextOcurrence: null,
      },
      {
        title: "Lipstick",
        startTime: 9 * 60 + 10,
        started: false,
        schedule: 240,
        nextOcurrence: null,
      },
      {
        title: "Downloads state",
        startTime: 9 * 60 + 20,
        started: false,
        schedule: 120,
        nextOcurrence: null,
      },
      {
        title: "Get up",
        startTime: 9 * 60 + 40,
        started: false,
        schedule: 90,
        nextOcurrence: null,
      },
      {
        title: "Slack Globant",
        startTime: 9 * 60 + 50,
        started: false,
        schedule: 270,
        nextOcurrence: null,
      },
      {
        title: "Solar protector",
        startTime: 9 * 60 + 15,
        started: false,
        schedule: 240,
        nextOcurrence: null,
      },
      {
        title: "Clean teeth",
        startTime: 9 * 60 + 45,
        started: false,
        schedule: 360,
        nextOcurrence: null,
      },
      {
        title: "Kiss Lau",
        startTime: 10 * 60 + 25,
        started: false,
        schedule: 360,
        nextOcurrence: null,
      },
      {
        title: "Tweetdeck",
        startTime: 10 * 60 + 35,
        started: false,
        schedule: 30,
        nextOcurrence: null,
      },
      {
        title: "Speak English",
        startTime: 10 * 60 + 45,
        started: false,
        schedule: 120,
        nextOcurrence: null,
      },
    ],
  };

  showDialog() {
    const dialog = document.querySelector("#reminders-dialog");

    dialog["show"]();
  }

  closeDialog() {
    const dialog = document.querySelector("#reminders-dialog");

    dialog["close"]();
  }

  generateReminder({ title, startTime, schedule }) {
    const reminders = this.viewData.reminders;
    const reminder = reminders.find((r) => r.title === title);

    if (reminder) {
      // update
    } else {
      // create
      reminders.push({
        title,
        startTime,
        started: false,
        schedule,
        nextOcurrence: null,
      });
    }
  }

  addReminder() {}

  calculateNextOccurence(reminder) {
    const currentDate = DateUtils.addMinutes(new Date(), 1); // To prevent matching current time for next occurence
    let { nextOcurrence } = reminder;
    // set next occurrence to be the startTime when null
    if (!nextOcurrence) {
      nextOcurrence = DateUtils.addMinutes(
        DateUtils.dateOnly(),
        reminder.startTime
      );
    }

    // we calculate the next occurrence using the schedule
    // in case the occurence is projected in the past, calculate the next one
    while (nextOcurrence.getTime() < currentDate.getTime()) {
      nextOcurrence = DateUtils.addMinutes(nextOcurrence, reminder.schedule);
    }

    // stop if we spill into the next day / stop mark
    if (
      nextOcurrence.getTime() >
      DateUtils.addDays(DateUtils.dateOnly(), 1).getTime()
    ) {
      nextOcurrence = null;
    }

    return nextOcurrence;
  }

  scheduleReminder(reminder) {
    console.log(
      `schedule reminder in ${DateUtils.formatTimestamp(
        DateUtils.elapsedTime(reminder.nextOcurrence, new Date()),
        "[HH]:[mm]:[ss]"
      )}`,
      reminder
    );

    // schedule reminder notification for the next ocurrence
    // TODO: refactor to a proper timerService implementation to track all timers
    setTimeout(() => {
      this.notificationService.notifyWithOptions(reminder.title, {
        title: "Reminders",
        hideIn: 0,
      });

      // schedule the next notification
      reminder.nextOcurrence = this.calculateNextOccurence(reminder);
      if (reminder.nextOcurrence) {
        this.scheduleReminder(reminder);
      }
    }, DateUtils.elapsedTime(reminder.nextOcurrence, new Date()) * 1000);
  }

  launchReminders() {
    const { reminders } = this.viewData;

    reminders.forEach((reminder) => {
      reminder.nextOcurrence = this.calculateNextOccurence(reminder);
      this.scheduleReminder(reminder);
    });
  }

  toggleDarkMode() {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.style.colorScheme = "light";
      return;
    }
    document.documentElement.style.colorScheme = "light dark";
    document.documentElement.setAttribute("data-theme", "dark");
    return;
  }
}
