import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AppTimersService } from "../AppTimers.component";
import { NotificationService } from "./notification.service";
import { StorageService } from "./storage.service";

interface Reminder {
  id: string;
  title: string;
  startTime: number;
  schedule: number;
  started: boolean;
  nextOcurrence: Date | null;
  startTimeFormatted: string;
  timeoutReference: ReturnType<typeof setTimeout> | null;
  custom: boolean;
  selectedForLaunch: boolean;
  selectedForDeletion: boolean;
}

interface ReminderDraft {
  title: string;
  startTime: string;
  schedule: number;
}

@Component({
  selector: "drink-water",
  templateUrl: "./Reminders.template.html",
  providers: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RemindersComponent implements OnInit {
  private readonly storageKey = "Reminders";
  private nextReminderId = 1;
  public errorMessage = "";
  public reminderDrafts: { [id: string]: ReminderDraft } = {};
  public newReminder = {
    title: "",
    startTime: "",
    schedule: 30,
  };
  public viewData: { reminders: Reminder[] } = {
    reminders: this.createDefaultReminders(),
  };

  constructor(
    private notificationService: NotificationService,
    private storage: StorageService,
    private appTimers: AppTimersService
  ) {}

  ngOnInit(): void {
    const savedReminders = this.storage.getObject(this.storageKey);
    if (Array.isArray(savedReminders)) {
      this.viewData.reminders = savedReminders.map((saved, index) => {
        const startTime = Number(saved.startTime);
        const schedule = Number(saved.schedule);
        const id =
          typeof saved.id === "string" && saved.id
            ? saved.id
            : `reminder-${index + 1}`;
        if (
          typeof saved.title !== "string" ||
          !Number.isInteger(startTime) ||
          startTime < 0 ||
          startTime >= 24 * 60 ||
          !Number.isFinite(schedule) ||
          schedule <= 0
        ) {
          throw new Error(`Invalid reminder configuration at index ${index}`);
        }
        return this.toReminder(
          id,
          saved.title,
          startTime,
          schedule,
          typeof saved.custom === "boolean"
            ? saved.custom
            : !/^reminder-\d+$/.test(id),
          saved.selectedForLaunch !== false
        );
      });
    }
    this.viewData.reminders.forEach((reminder) => {
      this.formatStartTime(reminder);
      this.updateReminderDraft(reminder);
    });
    this.newReminder.startTime = this.currentTime();
  }

  private createDefaultReminders(): Reminder[] {
    const defaults: [string, number, number][] = [
      ["Water", 9 * 60 + 5, 30],
      ["Lipstick", 9 * 60 + 10, 240],
      ["Downloads state", 9 * 60 + 20, 120],
      ["Get up", 9 * 60 + 40, 90],
      ["Slack Globant", 9 * 60 + 50, 270],
      ["Solar protector", 9 * 60 + 15, 240],
      ["Clean teeth", 9 * 60 + 45, 360],
      ["Kiss Lau", 10 * 60 + 25, 360],
      ["Speak English", 10 * 60 + 45, 120],
      ["Update Lili notes", 10 * 60 + 25, 60],
    ];
    return defaults.map(([title, startTime, schedule], index) =>
      this.toReminder(`reminder-${index + 1}`, title, startTime, schedule)
    );
  }

  private toReminder(
    id: string,
    title: string,
    startTime: number,
    schedule: number,
    custom: boolean = false,
    selectedForLaunch: boolean = true
  ): Reminder {
    return {
      id,
      title,
      startTime,
      schedule,
      started: false,
      nextOcurrence: null,
      startTimeFormatted: "",
      timeoutReference: null,
      custom,
      selectedForLaunch,
      selectedForDeletion: false,
    };
  }

  private currentTime(): string {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
  }

  private formatStartTime(reminder: Reminder): void {
    reminder.startTimeFormatted = DateUtils.formatTime(
      reminder.startTime * 60,
      "[HH]:[mm]"
    );
  }

  private updateReminderDraft(reminder: Reminder): void {
    this.reminderDrafts[reminder.id] = {
      title: reminder.title,
      startTime: reminder.startTimeFormatted,
      schedule: reminder.schedule,
    };
  }

  private persistReminders(): void {
    this.storage.setObject(
      this.storageKey,
      this.viewData.reminders.map(
        ({ id, title, startTime, schedule, custom, selectedForLaunch }) => ({
          id,
          title,
          startTime,
          schedule,
          custom,
          selectedForLaunch,
        })
      )
    );
  }

  showDialog(): void {
    const dialog = document.querySelector(
      "#reminders-dialog"
    ) as HTMLDialogElement;
    if (dialog && !dialog.open) {
      dialog.show();
    }
  }

  closeDialog(): void {
    const dialog = document.querySelector(
      "#reminders-dialog"
    ) as HTMLDialogElement;
    if (dialog && dialog.open) {
      dialog.close();
    }
  }

  applyChanges(reminder: Reminder): void {
    this.errorMessage = "";
    const draft = this.reminderDrafts[reminder.id];
    const title = draft.title.trim();
    const startTime = this.parseTime(draft.startTime);
    const schedule = Number(draft.schedule);
    if (
      !title ||
      startTime === null ||
      !Number.isFinite(schedule) ||
      schedule <= 0
    ) {
      this.errorMessage =
        "Enter a description, start time, and duration greater than 0.";
      return;
    }

    const wasStarted = reminder.started;
    this.cancelReminder(reminder);
    reminder.title = title;
    reminder.startTime = startTime;
    reminder.schedule = schedule;
    reminder.nextOcurrence = null;
    this.formatStartTime(reminder);
    this.updateReminderDraft(reminder);
    this.persistReminders();
    if (wasStarted) {
      reminder.nextOcurrence = this.calculateNextOccurence(reminder);
      if (reminder.nextOcurrence) {
        this.scheduleReminder(reminder);
      }
    }
  }

  addReminder(): void {
    this.errorMessage = "";
    const title = this.newReminder.title.trim();
    const startTime = this.parseTime(this.newReminder.startTime);
    const schedule = Number(this.newReminder.schedule);
    if (
      !title ||
      startTime === null ||
      !Number.isFinite(schedule) ||
      schedule <= 0
    ) {
      this.errorMessage =
        "Enter a description, start time, and duration greater than 0.";
      return;
    }

    const reminder = this.toReminder(
      `custom-reminder-${Date.now()}-${this.nextReminderId++}`,
      title,
      startTime,
      schedule,
      true
    );
    this.formatStartTime(reminder);
    this.viewData.reminders.push(reminder);
    this.updateReminderDraft(reminder);
    this.persistReminders();
    this.newReminder = {
      title: "",
      startTime: this.currentTime(),
      schedule: 30,
    };
  }

  private parseTime(value: string): number | null {
    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value || "");
    return match ? Number(match[1]) * 60 + Number(match[2]) : null;
  }

  private cancelReminder(reminder: Reminder): void {
    if (reminder.timeoutReference !== null) {
      clearTimeout(reminder.timeoutReference);
    }
    this.appTimers.unregisterTimer(`reminder:${reminder.id}`);
    reminder.timeoutReference = null;
    reminder.started = false;
  }

  setReminderRunning(reminder: Reminder, running: boolean): void {
    if (!running) {
      this.stopReminder(reminder);
      return;
    }
    if (reminder.started) {
      return;
    }
    reminder.nextOcurrence = this.calculateNextOccurence(reminder);
    this.scheduleReminder(reminder);
  }

  stopReminder(reminder: Reminder): void {
    this.cancelReminder(reminder);
    reminder.nextOcurrence = null;
  }

  setLaunchSelection(reminder: Reminder, selected: boolean): void {
    reminder.selectedForLaunch = selected;
    this.persistReminders();
  }

  deleteSelectedCustomReminders(): void {
    this.errorMessage = "";
    const selected = this.viewData.reminders.filter(
      (reminder) => reminder.custom && reminder.selectedForDeletion
    );
    if (!selected.length) {
      this.errorMessage = "Select at least one custom reminder to delete.";
      return;
    }

    selected.forEach((reminder) => {
      this.cancelReminder(reminder);
      delete this.reminderDrafts[reminder.id];
    });
    this.viewData.reminders = this.viewData.reminders.filter(
      (reminder) => !selected.includes(reminder)
    );
    this.persistReminders();
  }

  calculateNextOccurence(reminder: Reminder): Date | null {
    if (reminder.schedule <= 0) {
      return null;
    }
    const currentDate = DateUtils.addMinutes(new Date(), 1);
    let nextOcurrence = reminder.nextOcurrence;
    if (!nextOcurrence) {
      nextOcurrence = DateUtils.addMinutes(
        DateUtils.dateOnly(),
        reminder.startTime
      );
    }

    while (nextOcurrence.getTime() < currentDate.getTime()) {
      nextOcurrence = DateUtils.addMinutes(nextOcurrence, reminder.schedule);
    }

    if (
      nextOcurrence.getTime() >
      DateUtils.addDays(DateUtils.dateOnly(), 1).getTime()
    ) {
      nextOcurrence = null;
    }
    return nextOcurrence;
  }

  private scheduleReminder(reminder: Reminder): void {
    const nextOcurrence = reminder.nextOcurrence;
    if (!nextOcurrence) {
      reminder.started = false;
      return;
    }

    reminder.started = true;
    reminder.timeoutReference = setTimeout(() => {
      this.appTimers.unregisterTimer(`reminder:${reminder.id}`);
      reminder.timeoutReference = null;
      this.notificationService.notifyWithOptions(reminder.title, {
        title: "Reminders",
        hideIn: 0,
      });

      reminder.nextOcurrence = this.calculateNextOccurence(reminder);
      if (reminder.nextOcurrence) {
        this.scheduleReminder(reminder);
      } else {
        reminder.started = false;
      }
    }, Math.max(0, DateUtils.elapsedTime(nextOcurrence, new Date()) * 1000));

    this.appTimers.registerTimer({
      id: `reminder:${reminder.id}`,
      type: "Reminder",
      label: reminder.title,
      scheduledFor: nextOcurrence,
    });
  }

  launchReminders(): void {
    this.stopReminders();
    this.viewData.reminders
      .filter((reminder) => reminder.selectedForLaunch)
      .forEach((reminder) => {
        reminder.nextOcurrence = this.calculateNextOccurence(reminder);
        this.scheduleReminder(reminder);
      });
  }

  toggleDarkMode(): void {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.style.colorScheme = "light";
      return;
    }
    document.documentElement.style.colorScheme = "light dark";
    document.documentElement.setAttribute("data-theme", "dark");
  }

  stopReminders(): void {
    this.viewData.reminders.forEach((reminder) => {
      this.stopReminder(reminder);
    });
  }

  clearReminderNotifications(): void {
    this.notificationService.removeAll();
  }
}
