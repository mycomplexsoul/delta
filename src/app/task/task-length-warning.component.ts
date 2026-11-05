import { Component, Input } from "@angular/core";

@Component({
  selector: "task-length-warning",
  template: `
    @if (status.visible) {
    <span
      class="task-char-counter"
      [ngClass]="{
        'task-char-counter-warning': !status.isExceeded,
        'task-char-counter-exceeded': status.isExceeded
      }"
      [title]="
        status.isExceeded ? 'Task length exceeded' : 'Task length warning'
      "
    >
      {{ status.length }} / {{ limit }}
    </span>
    }
  `,
  styles: [
    `
      .task-char-counter {
        display: inline-block;
        margin-left: 4px;
        font-size: inherit;
        font-weight: 600;
        opacity: 0.9;
        vertical-align: middle;
      }

      .task-char-counter-warning {
        color: #c77d12;
      }

      .task-char-counter-exceeded {
        color: #b42318;
      }
    `,
  ],
  standalone: false,
})
export class TaskLengthWarningComponent {
  @Input() currentValue: number | string | null | undefined;
  @Input() warningThreshold: number = 100;
  @Input() limit: number = 500;

  get status() {
    const rawValue =
      typeof this.currentValue === "string"
        ? this.currentValue
        : String(this.currentValue ?? "");
    const length = rawValue.length;
    const remaining = this.limit - length;
    const isExceeded = length > this.limit;
    const isWarning =
      length >= this.limit - this.warningThreshold || isExceeded;

    return {
      length,
      remaining,
      visible: isWarning,
      isWarning,
      isExceeded,
      maxLength: this.limit,
    };
  }
}
