import { Injectable } from "@angular/core";
import { NotificationItem, NotificationStatus } from "./notification-item";
import { Observable, Subject } from "rxjs";
import { Utils } from "src/crosscommon/Utility";

@Injectable({ providedIn: "root" })
export class NotificationService {
  private provider = new Subject<NotificationItem>();
  private queue: NotificationItem[] = [];

  getProvider(): Observable<NotificationItem> {
    return this.provider.asObservable();
  }

  notify(
    message: string,
    title: string = "",
    hideIn: number = 5000,
    date: Date = new Date(),
    status: NotificationStatus = "queue",
    showHeader: boolean = false,
    minimalUI: boolean = false,
    native: boolean = true,
    voice: boolean = true
  ) {
    const id: string = Utils.hashId("not", 32);
    const notification: NotificationItem = {
      id,
      message,
      count: 1,
      hideIn,
      date,
      status,
      title,
      showHeader,
      minimalUI,
      native,
      voice,
    };
    this.queue.push(notification);
    this.provider.next(notification);
    this.tidyUpQueue();
  }

  private tidyUpQueue() {
    this.queue = this.queue
      // .filter(({ status }) => status === "queue")
      .map((q) => ({ ...q, status: "displayed" }));
  }

  notifyWithOptions(
    message: string,
    {
      title = "",
      hideIn = 5000,
      date = new Date(),
      status = "queue",
      showHeader = false,
      minimalUI = true,
      native = true,
      voice = true,
    }
  ): NotificationItem {
    const id: string = Utils.hashId("not", 32);
    const notification: NotificationItem = {
      id,
      message,
      count: 1,
      hideIn,
      date,
      status,
      title,
      showHeader,
      minimalUI,
      native,
      voice,
    };

    this.queue.push(notification);
    this.provider.next(notification);
    this.tidyUpQueue();
    return notification;
  }

  remove(item: NotificationItem) {
    const index = this.queue.findIndex(({ id }) => id === item.id);
    this.queue.splice(index, 1);
  }

  removeAll() {
    this.queue = [];
  }
}
