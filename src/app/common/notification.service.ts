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
    showHeader: boolean = false
  ) {
    const id: string = Utils.hashId("not", 32);
    const notification: NotificationItem = {
      id,
      message,
      hideIn,
      date,
      status,
      title,
      showHeader
    };
    this.queue.push(notification);
    this.provider.next(notification);
    this.tidyUpQueue();
  }

  private tidyUpQueue() {
    this.queue = this.queue
      .filter(({ status }) => status === "queue")
      .map(q => ({ ...q, status: "displayed" }));
  }
}
