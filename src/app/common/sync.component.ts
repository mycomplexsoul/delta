import { Component, OnInit } from "@angular/core";
import { SyncQueue } from "./SyncQueue";
import { SyncAPI } from "./sync.api";

@Component({
  selector: "sync",
  templateUrl: "./sync.template.html"
})
export class SyncComponent implements OnInit {
  public viewData: {
    queue: SyncQueue[];
    message: string;
  } = {
    queue: [],
    message: null
  };

  constructor(private syncService: SyncAPI) {}

  ngOnInit() {
    this.viewData.queue = this.syncService.queue;
    this.syncService.statusObservableNotifier().subscribe(queue => {
      this.viewData.queue = queue.map(q => {
        q["recordNameString"] = q.recordName && q.recordName(q.model);
        return q;
      });
      this.parseStatusToMessage(queue);
    });
  }

  parseStatusToMessage(queue: SyncQueue[]) {
    let message = null;
    const filterWithStatus = (st: string) =>
      queue.filter(({ status }) => status === st);

    if (!queue.length) {
      this.viewData.message = message;
      return;
    }

    if (queue.every(({ status }) => status === "processed")) {
      message = `${queue.length} items, all synced`;
    }

    const syncingList = filterWithStatus("syncing");

    if (syncingList.length) {
      message = `Syncing ${syncingList.length} items...`;
    }

    const queueList = filterWithStatus("queue");
    const errorList = filterWithStatus("error");

    if (queueList.length || errorList.length) {
      message = `${queueList.length} pending, ${errorList.length} with error`;
    }

    this.viewData.message = message;
  }
}
