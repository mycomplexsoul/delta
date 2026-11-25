import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

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

@Component({
  selector: "app-timers",
  template: `
    <details class="app-timers">
      <summary>Active timers ({{ activeTimers.length }})</summary>
      <section>
        <h4>Task (in progress)</h4>
        <ol>
          @for (timer of inProgressTimers; track timer.id) {
          <li>
            @if (timer.scheduledFor) { [{{
              timer.scheduledFor | date : "yyyy-MM-dd HH:mm:ss"
            }}] }
            {{ timer.label }}
          </li>
          } @empty {
          <li>No active timers</li>
          }
        </ol>
      </section>
      <section>
        <h4>Task (start soon)</h4>
        <ol>
          @for (timer of startSoonTimers; track timer.id) {
          <li>
            @if (timer.scheduledFor) { [{{
              timer.scheduledFor | date : "yyyy-MM-dd HH:mm:ss"
            }}] }
            {{ timer.label }}
          </li>
          } @empty {
          <li>No active timers</li>
          }
        </ol>
      </section>
      <section>
        <h4>Reminders</h4>
        <ol>
          @for (timer of reminders; track timer.id) {
          <li>
            @if (timer.scheduledFor) { [{{
              timer.scheduledFor | date : "yyyy-MM-dd HH:mm:ss"
            }}] }
            {{ timer.label }}
          </li>
          } @empty {
          <li>No active timers</li>
          }
        </ol>
      </section>
    </details>
  `,
  styles: [
    `
      .app-timers {
        position: fixed;
        left: 8px;
        bottom: 8px;
        z-index: 1000;
        max-width: min(420px, 90vw);
        padding: 6px;
        background: var(--app-background, white);
        border: 1px solid currentColor;
      }
      .app-timers ul {
        max-height: 40vh;
        overflow: auto;
      }
      .app-timers h4 {
        margin: 8px 0 4px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppTimersComponent implements OnInit, OnDestroy {
  activeTimers: ActiveTimer[] = [];
  inProgressTimers: ActiveTimer[] = [];
  startSoonTimers: ActiveTimer[] = [];
  reminders: ActiveTimer[] = [];
  private subscription: Subscription;

  constructor(private timerRegistry: AppTimersService) {}

  ngOnInit(): void {
    this.subscription = this.timerRegistry.activeTimers$.subscribe((timers) => {
      const orderedTimers = sortTimersByDueDate(timers);
      this.activeTimers = orderedTimers;
      this.inProgressTimers = orderedTimers.filter(
        (timer) => timer.type === "Task (in progress)"
      );
      this.startSoonTimers = orderedTimers.filter(
        (timer) => timer.type === "Task (start soon)"
      );
      this.reminders = orderedTimers.filter(
        (timer) => timer.type === "Reminder"
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

@Injectable({ providedIn: "root" })
export class AppTimersService {
  private readonly timers = new Map<string, ActiveTimer>();
  private readonly activeTimersSubject = new BehaviorSubject<ActiveTimer[]>([]);
  readonly activeTimers$ = this.activeTimersSubject.asObservable();

  getActiveTimers(): ActiveTimer[] {
    return sortTimersByDueDate(Array.from(this.timers.values()));
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
