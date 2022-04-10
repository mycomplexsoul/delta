import { Component, Input, OnInit } from "@angular/core";
import { Task } from "../../crosscommon/entities/Task";
import { TaskCore } from "./task.core";
import { SyncAPI } from "../common/sync.api";

@Component({
  selector: "task-toolbar",
  templateUrl: "./task-toolbar.template.html",
  styleUrls: ["./task-toolbar.css"],
  providers: [],
})
export class TaskToolbarComponent implements OnInit {
  @Input() task: Task = null;
  @Input() groupTasks: Task[] = []; // position in a list, -1 means it was not passed
  @Input() handlers: {
    onViewTaskDetails: (task: Task) => void;
    onMoveUp: (task: Task, event: Event) => void;
    onMoveDown: (task: Task, event: Event) => void;
  } = {
    onViewTaskDetails: null,
    onMoveUp: null,
    onMoveDown: null,
  };
  @Input() options: {} = {};
  private core: TaskCore = null;

  constructor(private syncService: SyncAPI) {}

  ngOnInit(): void {
    this.core = new TaskCore(this.syncService, this.handlers);
  }

  launchHandler(handler: Function, fallback: Function, ...parameters) {
    if (handler) {
      return handler(...parameters);
    }
    return fallback(...parameters);
  }

  handlerMoveUp(t: Task, event: Event) {
    return this.launchHandler(
      this.handlers.onMoveUp,
      this.core.handlerMoveUp.bind(this.core),
      t,
      event,
      this.groupTasks
    );
  }

  handlerMoveDown(t: Task, event: Event) {
    return this.launchHandler(
      this.handlers.onMoveDown,
      this.core.handlerMoveDown.bind(this.core),
      t,
      event,
      this.groupTasks
    );
  }
}
