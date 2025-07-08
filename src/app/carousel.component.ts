import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export const ROTATION_INTERVAL = 5; // segundos

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.template.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() interval?: number;
  @Input() altTexts: string[] = [];
  @Input() className = "";

  current = signal(0);
  validImages = signal<string[]>([]);
  paused = signal(false);
  rotationInterval = signal(ROTATION_INTERVAL);
  private timer: any;
  private col: string = "default";

  constructor(private route: ActivatedRoute) {}

  private startTimer() {
    this.stopTimer();
    if (this.validImages().length > 0 && !this.paused()) {
      this.timer = setInterval(() => {
        this.next();
      }, this.rotationInterval() * 1000); // convertir a ms
      this.paused.set(false);
    }
  }

  private stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.col = params.get("col") || "default";
      const colParam = this.col ? `?col=${encodeURIComponent(this.col)}` : "";
      fetch(`/images${colParam}`)
        .then((res) => res.json())
        .then((files: string[]) => {
          this.validImages.set(
            (files || []).map(
              (name) =>
                `/images/image?col=${encodeURIComponent(
                  this.col
                )}&q=${encodeURIComponent(name)}`
            )
          );
          this.startTimer();
        });
    });
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  goTo(idx: number) {
    this.current.set(idx);
  }

  next() {
    this.current.set((this.current() + 1) % this.validImages().length);
  }

  prev() {
    this.current.set(
      (this.current() - 1 + this.validImages().length) %
        this.validImages().length
    );
  }

  pause() {
    this.paused.set(true);
    this.stopTimer();
  }

  play() {
    if (!this.paused()) return;
    this.paused.set(false);
    this.startTimer();
  }

  togglePlayPause() {
    if (this.paused()) {
      this.play();
    } else {
      this.pause();
    }
  }

  onIntervalChange(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    if (!isNaN(value) && value > 0) {
      this.rotationInterval.set(value);
      if (!this.paused()) {
        this.startTimer();
      }
    }
  }
}
