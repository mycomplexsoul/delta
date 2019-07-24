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
  } = {
    queue: []
  };

  constructor(private syncService: SyncAPI) {}

  ngOnInit() {
    this.viewData.queue = this.syncService.queue;
  }
}
