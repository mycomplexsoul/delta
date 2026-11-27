import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ActiveTimer {
  id: string;
  type: "Reminder" | "Task (in progress)" | "Task (start soon)";
  label: string;
  scheduledFor?: Date;
}

function sortTimersByDueDate(timers: ActiveTimer[]): ActiveTimer[] {
  return [...timers].sort((a, b) => {
    const aDue = a.scheduledFor
      ? a.scheduledFor.getTime()
      : Number.POSITIVE_INFINITY;
    const bDue = b.scheduledFor
      ? b.scheduledFor.getTime()
      : Number.POSITIVE_INFINITY;
    return aDue - bDue || a.label.localeCompare(b.label);
  });
}

@Injectable({ providedIn: "root" })
export class AppTimersService {
  private readonly timers = new Map<string, ActiveTimer>();
  private readonly activeTimersSubject = new BehaviorSubject<ActiveTimer[]>([]);
  private readonly visibilitySubject = new BehaviorSubject<boolean>(true);
  readonly activeTimers$ = this.activeTimersSubject.asObservable();
  readonly visibility$ = this.visibilitySubject.asObservable();

  get isVisible(): boolean {
    return this.visibilitySubject.value;
  }

  setVisible(visible: boolean): void {
    this.visibilitySubject.next(visible);
  }

  getActiveTimers(): ActiveTimer[] {
    return sortTimersByDueDate(Array.from(this.timers.values()));
  }

  hasTimer(id: string): boolean {
    return this.timers.has(id);
  }

  registerTimer(timer: ActiveTimer): void {
    this.timers.set(timer.id, timer);
    this.publish();
  }

  unregisterTimer(id: string): void {
    if (this.timers.delete(id)) {
      this.publish();
    }
  }

  private publish(): void {
    this.activeTimersSubject.next(this.getActiveTimers());
  }
}
