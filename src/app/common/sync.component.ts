import { Component, OnInit } from "@angular/core";
import { SyncQueue } from "./SyncQueue";
import { SyncAPI } from "./sync.api";

@Component({
    selector: "sync",
    templateUrl: "./sync.template.html",
    standalone: false
})
export class SyncComponent implements OnInit {
  public viewData: {
    queue: SyncQueue[];
    message: string;
    showCheckIcon: boolean;
  } = {
    queue: [],
    message: null,
    showCheckIcon: false
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
    const filterWithStatus = (st: string) =>
      queue.filter(({ status }) => status === st);

    if (!queue.length) {
      this.viewData.message = "All items synced";
      this.viewData.showCheckIcon = true;
      setTimeout(() => {
        this.viewData.message = null;
        this.viewData.showCheckIcon = false;
      }, 3000);
      return;
    }

    const syncingList = filterWithStatus("syncing");

    if (syncingList.length) {
      this.viewData.message = `Syncing ${syncingList.length} ${
        syncingList.length === 1 ? `item` : `items`
      }...`;
      return;
    }

    const queueList = filterWithStatus("queue");
    const errorList = filterWithStatus("error");

    if (queueList.length || errorList.length) {
      this.viewData.message = `${queueList.length} pending, ${
        errorList.length
      } with error`;
    }
  }
}
