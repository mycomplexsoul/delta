import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Subscription } from "rxjs";
import { ActiveTimer, AppTimersService } from "./app-timers.service";

@Component({
  selector: "app-timers",
  template: `
    <details *ngIf="isVisible" class="app-timers">
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
  isVisible = true;
  private subscriptions = new Subscription();

  constructor(private timerRegistry: AppTimersService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.timerRegistry.activeTimers$.subscribe((timers) => {
        this.activeTimers = timers;
        this.inProgressTimers = timers.filter(
          (timer) => timer.type === "Task (in progress)"
        );
        this.startSoonTimers = timers.filter(
          (timer) => timer.type === "Task (start soon)"
        );
        this.reminders = timers.filter((timer) => timer.type === "Reminder");
      })
    );
    this.subscriptions.add(
      this.timerRegistry.visibility$.subscribe(
        (visible) => (this.isVisible = visible)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
