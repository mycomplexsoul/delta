import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-stopwatch",
  template: `
    <div class="stopwatch-timestamp-edit">
      <label>Timestamp inicial:</label>
      <input
        type="time"
        [value]="timeInputValue"
        (input)="onTimeInput($event)"
        step="1"
      />
      <span class="stopwatch-date">{{ readableDate }}</span>
    </div>
    <div class="stopwatch-container">
      <span class="stopwatch-time">{{ displayTime }}</span>

      <div class="stopwatch-toggle-and-controls">
        <button (click)="toggleControls()">
          {{ showControls ? "Ocultar" : "Mostrar" }} controles
        </button>

        <div class="stopwatch-controls" *ngIf="showControls">
          <button (click)="start()" [disabled]="running">Start</button>
          <button (click)="pause()" [disabled]="!running">Pause</button>
          <button (click)="stop()">Stop</button>
          <button (click)="reset()">Reset</button>
        </div>
      </div>

      <div class="add-minutes-group">
        <button (click)="addMinutes(15)">+15min</button>
        <button (click)="addMinutes(30)">+30min</button>
        <button (click)="addMinutes(60)">+60min</button>
      </div>
    </div>
  `,
  styles: [
    `
      .stopwatch-container {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .stopwatch-toggle-and-controls {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .stopwatch-controls {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .add-minutes-group {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-left: 8px;
      }
      .stopwatch-time {
        font-size: 1.2em;
        min-width: 90px;
        text-align: center;
      }
      button {
        padding: 4px 10px;
      }
      .stopwatch-timestamp-edit {
        margin-top: 8px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .stopwatch-timestamp-edit input {
        width: 120px;
        text-align: center;
      }
      .stopwatch-date {
        margin-left: 10px;
        font-size: 1em;
        color: #555;
        min-width: 200px;
      }
    `,
  ],
})
export class StopwatchComponent {
  private timer: any;
  running = false;
  startTimestamp: number = 0;
  private elapsedMs: number = 0;

  readonly STORAGE_KEY = "StopwatchTimestamp";

  showControls = false;
  private keydownHandler: any;
  private keydownTarget: EventTarget | null = null;

  ngOnInit() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      const ts = parseInt(stored, 10);
      if (!isNaN(ts)) {
        this.startTimestamp = ts;
        this.running = true;
        this.timer = setInterval(() => {}, 1000); // Dummy interval to trigger change detection
      }
    }
    // Registrar atajo: Ctrl+Alt+M => +15min
    this.keydownHandler = (e: KeyboardEvent) => this.handleHotkey(e);
    this.keydownTarget = document.body || document;
    if (this.keydownTarget instanceof EventTarget) {
      this.keydownTarget.addEventListener("keydown", this.keydownHandler, true);
    }
  }

  get displayTime(): string {
    const totalMs = this.running
      ? Date.now() - this.startTimestamp
      : this.elapsedMs;
    let totalSeconds = Math.floor(totalMs / 1000);
    let negative = false;
    if (totalSeconds < 0) {
      negative = true;
      totalSeconds = Math.abs(totalSeconds);
    }
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${negative ? "-" : ""}${this.pad(hours)}:${this.pad(
      minutes
    )}:${this.pad(seconds)}`;
  }

  get readableDate(): string {
    if (!this.startTimestamp) return "";
    const date = new Date(this.startTimestamp);
    return this.formatFullDate(date);
  }

  get timeInputValue(): string {
    const date = new Date(this.startTimestamp || Date.now());
    const h = this.pad(date.getHours());
    const m = this.pad(date.getMinutes());
    const s = this.pad(date.getSeconds());
    return `${h}:${m}:${s}`;
  }

  pad(val: number): string {
    return val < 10 ? "0" + val : val.toString();
  }

  formatFullDate(date: Date): string {
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName} ${day} de ${month} de ${year}`;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.startTimestamp = Date.now();
      this.saveTimestamp();
      this.timer = setInterval(() => {}, 1000); // Dummy interval to trigger change detection
    }
  }

  pause() {
    if (this.running) {
      this.elapsedMs += Date.now() - this.startTimestamp;
      clearInterval(this.timer);
      this.running = false;
    }
  }

  stop() {
    this.pause();
    this.elapsedMs = 0;
  }

  reset() {
    this.elapsedMs = 0;
    if (this.running) {
      this.startTimestamp = Date.now();
      this.saveTimestamp();
    }
  }

  onTimeInput(event: any) {
    const val = event.target.value;
    if (val) {
      const [h, m, s] = val.split(":").map(Number);
      const now = new Date();
      now.setHours(h, m, s || 0, 0);
      this.startTimestamp = now.getTime();
      this.saveTimestamp();
      if (this.running) {
        this.elapsedMs = Date.now() - this.startTimestamp;
      }
    }
  }

  addMinutes(minutes: number) {
    this.startTimestamp += minutes * 60 * 1000;
    this.saveTimestamp();
  }

  toggleControls() {
    this.showControls = !this.showControls;
  }

  private handleHotkey(e: KeyboardEvent) {
    // Hotkey: Ctrl + Alt + M
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "m") {
      e.preventDefault();
      this.addMinutes(15);
    }
  }

  ngOnDestroy() {
    if (this.keydownHandler && this.keydownTarget) {
      this.keydownTarget.removeEventListener("keydown", this.keydownHandler);
    }
  }

  saveTimestamp() {
    localStorage.setItem(this.STORAGE_KEY, this.startTimestamp.toString());
  }
}
