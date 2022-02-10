import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from '../../crosscommon/entities/Task';

const defaults = {

};

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

  formatTime(elapsed: number, format: String = undefined): String {
    // time in seconds
    let hr: number = Math.floor(elapsed / (60 * 60));
    let min: number = Math.floor((elapsed - hr * 60 * 60) / 60);
    let sec: number = Math.round(elapsed - hr * 60 * 60 - min * 60);
    let str = "";
    if (format === "hr:min:sec" || format === undefined) {
      if (hr === 0) {
        // only min:sec
        str += min > 9 ? min : "0" + min;
        str += ":" + (sec > 9 ? sec : "0" + sec);
      } else {
        str += hr > 9 ? hr : "0" + hr;
        str += ":" + (min > 9 ? min : "0" + min);
        str += ":" + (sec > 9 ? sec : "0" + sec);
      }
    }
    if (format === "#h#m") {
      if (hr === 0) {
        str = `${min}m`;
      } else {
        if (min === 0) {
          str = `${hr}h`;
        } else {
          str = `${hr}h${min}m`;
        }
      }
    }
    return str;
  }
}
