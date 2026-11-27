import { AppTimersService } from "../app-timers.service";
import { NotificationService } from "./notification.service";
import { RemindersComponent } from "./Reminders.component";
import { StorageService } from "./storage.service";

describe("RemindersComponent", () => {
  const visibilityStorageKey = "remindersShowTimers";

  afterEach(() => {
    localStorage.removeItem(visibilityStorageKey);
    localStorage.removeItem("Reminders");
  });

  it("persists and restores the global timers visibility toggle", () => {
    const appTimers = new AppTimersService();
    const component = new RemindersComponent(
      new NotificationService(),
      new StorageService(),
      appTimers
    );
    component.ngOnInit();

    component.setAppTimersVisibility(false);

    expect(localStorage.getItem(visibilityStorageKey)).toBe("false");
    expect(appTimers.isVisible).toBeFalse();

    const restoredAppTimers = new AppTimersService();
    const restoredComponent = new RemindersComponent(
      new NotificationService(),
      new StorageService(),
      restoredAppTimers
    );
    restoredComponent.ngOnInit();

    expect(restoredComponent.appTimersVisible).toBeFalse();
    expect(restoredAppTimers.isVisible).toBeFalse();
  });
});
