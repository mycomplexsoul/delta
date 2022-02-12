import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from '../../crosscommon/entities/Task';

const defaults = {

};
const noop = () => {};

@Component({
  selector: "task",
  templateUrl: "./task.template.html",
  styleUrls: ["./task.css"],
  providers: []
})
export class TaskComponent {
  public format: string = "yyyy-MM-dd HH:mm:ss";
  public taskStatus = {
    BACKLOG: 1,
    OPEN: 2,
    CLOSED: 3,
    CANCELLED: 4,
  };

  @Input() task: Task = null;
  @Input() handlers: {
    onViewTaskDetails: (task: Task) => void
  } = {
    onViewTaskDetails: noop
  };
  /* @Input() selectedView: string = LAYOUTS[0];
  @Input() movementList: Movement[] = [];
  @Input() selectedBalance: Balance = null;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();
  @Input() showSearch: boolean;
  @Input() searchTerm: string;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onSelectMovement: EventEmitter<any> = new EventEmitter();
*/
  /*handleClick(id: string) {
    if (this.onItemClick) {
      this.onItemClick.emit(id);
    }
  }*/

  /*handleSearch() {
    if (this.onSearch) {
      this.onSearch.emit(this.searchTerm);
    }
  }*/

  /*handleSelectMovement(movement: Movement, event: Event) {
    if (this.onSelectMovement) {
      this.onSelectMovement.emit({value: movement, event});
    }
  }*/
}
