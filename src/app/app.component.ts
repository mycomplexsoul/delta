import { Component } from "@angular/core";

const wakeLockHandler = function () {
  // @ts-ignore
  if ("WakeLock" in window && "request" in window.WakeLock) {
    let wakeLock = null;

    const requestWakeLock = () => {
      const controller = new AbortController();
      const signal = controller.signal;
      window["WakeLock"].request("screen", { signal }).catch((e) => {
        if (e.name === "AbortError") {
          console.log("Wake Lock was aborted");
        } else {
          console.error(`${e.name}, ${e.message}`);
        }
      });
      console.log("Wake Lock is active");
      return controller;
    };

    const handleVisibilityChange = () => {
      if (wakeLock !== null && document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    try {
      document.addEventListener("visibilitychange", handleVisibilityChange);
      requestWakeLock();
    } catch (e) {
      console.log(e);
    }
    // @ts-ignore
  } else if ("wakeLock" in navigator && "request" in navigator["wakeLock"]) {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator["wakeLock"].request("screen");
        wakeLock.addEventListener("release", (e) => {
          console.log(e);
          console.log("Wake Lock was released");
        });
        console.log("Wake Lock is active");
      } catch (e) {
        console.error(`${e.name}, ${e.message}`);
      }
    };

    const handleVisibilityChange = () => {
      if (wakeLock !== null && document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    try {
      document.addEventListener("visibilitychange", handleVisibilityChange);
      requestWakeLock();
    } catch (e) {
      console.log(e);
    }
  } else {
    console.error("Wake Lock API not supported.");
  }
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "intranet";

  constructor() {
    // wake lock
    wakeLockHandler();
  }
}
