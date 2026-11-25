import { AppTimersService } from "./app-timers.service";

describe("AppTimersService", () => {
  let service: AppTimersService;

  beforeEach(() => {
    service = new AppTimersService();
  });

  it("reports whether a timer is already active", () => {
    const timer = {
      id: "task:123",
      type: "Task (in progress)" as const,
      label: "Example task",
    };

    expect(service.hasTimer(timer.id)).toBeFalse();

    service.registerTimer(timer);

    expect(service.hasTimer(timer.id)).toBeTrue();

    service.unregisterTimer(timer.id);

    expect(service.hasTimer(timer.id)).toBeFalse();
  });
});
