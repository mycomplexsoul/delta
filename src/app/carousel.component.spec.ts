import { CarouselComponent, ROTATION_INTERVAL } from "./carousel.component";
import { ActivatedRoute } from "@angular/router";

describe("CarouselComponent", () => {
  let component: CarouselComponent;
  let routeMock: any;

  beforeEach(() => {
    routeMock = {
      queryParamMap: { subscribe: (fn: any) => fn({ get: () => null }) },
    };
    component = new CarouselComponent(routeMock as any);
  });

  it("should initialize with default values", () => {
    expect(component.current()).toBe(0);
    expect(component.validImages()).toEqual([]);
    expect(component.paused).toBe(false);
  });

  it("should go to a specific index", () => {
    component.validImages.set(["a", "b", "c"]);
    component.goTo(2);
    expect(component.current()).toBe(2);
  });

  it("should go to next image and wrap around", () => {
    component.validImages.set(["a", "b", "c"]);
    component.current.set(2);
    component.next();
    expect(component.current()).toBe(0);
  });

  it("should go to previous image and wrap around", () => {
    component.validImages.set(["a", "b", "c"]);
    component.current.set(0);
    component.prev();
    expect(component.current()).toBe(2);
  });

  it("should pause and stop timer", () => {
    component.timer = setInterval(() => {}, 1000);
    component.paused = false;
    component.pause();
    expect(component.paused).toBe(true);
    expect(component.timer).toBeNull();
  });

  it("should play and start timer if paused", () => {
    const startTimerSpy = spyOn<any>(component, "startTimer").and.callFake(
      () => {}
    );
    component.paused = true;
    component.play();
    expect(component.paused).toBe(false);
    expect(startTimerSpy).toHaveBeenCalled();
  });

  it("should not start timer if already playing", () => {
    const startTimerSpy = spyOn<any>(component, "startTimer").and.callFake(
      () => {}
    );
    component.paused = false;
    component.play();
    expect(startTimerSpy).not.toHaveBeenCalled();
  });

  it("should clear timer on destroy", () => {
    component.timer = setInterval(() => {}, 1000);
    const stopTimerSpy = spyOn<any>(component, "stopTimer").and.callThrough();
    component.ngOnDestroy();
    expect(stopTimerSpy).toHaveBeenCalled();
    expect(component.timer).toBeNull();
    expect(component.paused).toBe(true);
  });

  it("should start timer only if images exist and not paused", () => {
    component.validImages.set(["a"]);
    component.paused = false;
    (component as any).startTimer();
    expect(component.timer).not.toBeNull();
    clearInterval(component.timer);
  });

  it("should not start timer if paused or no images", () => {
    component.validImages.set([]);
    component.paused = false;
    (component as any).startTimer();
    expect(component.timer).toBeUndefined();
    component.validImages.set(["a"]);
    component.paused = true;
    (component as any).startTimer();
    expect(component.timer).toBeUndefined();
  });

  it("should set col from query params in ngOnInit", (done) => {
    const testCol = "mine";
    routeMock.queryParamMap = {
      subscribe: (fn: any) =>
        fn({ get: (k: string) => (k === "col" ? testCol : null) }),
    };
    // Mock fetch
    const files = ["img1.jpg", "img2.png"];
    spyOn(window, "fetch").and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve(files),
      }) as any
    );
    component = new CarouselComponent(routeMock as any);
    // @ts-expect-error: test override
    component["startTimer"] = () => {};
    component.ngOnInit();
    setTimeout(() => {
      expect(component.validImages()).toEqual([
        `/images/image?col=mine&q=img1.jpg`,
        `/images/image?col=mine&q=img2.png`,
      ]);
      done();
    }, 0);
  });
});
