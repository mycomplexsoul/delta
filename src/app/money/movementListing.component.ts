import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Movement } from "src/crosscommon/entities/Movement";
import { Balance } from "src/crosscommon/entities/Balance";

const LAYOUTS: string[] = ["cards", "compact", "grid"];

@Component({
  selector: "movement-listing",
  templateUrl: "./movementListing.template.html",
  styleUrls: ["./movementListing.css"],
  providers: []
})
export class MovementListingComponent {
  @Input() selectedView: string = LAYOUTS[0];
  @Input() movementList: Movement[] = [];
  @Input() selectedBalance: Balance = null;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();

  handleClick(id: string) {
    if (this.onItemClick) {
      this.onItemClick.emit(id);
    }
  }
}
