import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Movement } from "src/crosscommon/entities/Movement";
import { Balance } from "src/crosscommon/entities/Balance";

const LAYOUTS: string[] = ["cards", "compact", "grid"];

@Component({
    selector: "movement-listing",
    templateUrl: "./movementListing.template.html",
    styleUrls: ["./movementListing.css"],
    providers: [],
    standalone: false
})
export class MovementListingComponent {
  @Input() selectedView: string = LAYOUTS[0];
  @Input() movementList: Movement[] = [];
  @Input() selectedBalance: Balance = null;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();
  @Input() showSearch: boolean;
  @Input() searchTerm: string;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onSelectMovement: EventEmitter<any> = new EventEmitter();

  handleClick(id: string) {
    if (this.onItemClick) {
      this.onItemClick.emit(id);
    }
  }

  handleSearch() {
    if (this.onSearch) {
      this.onSearch.emit(this.searchTerm);
    }
  }

  handleSelectMovement(movement: Movement, event: Event) {
    if (this.onSelectMovement) {
      this.onSelectMovement.emit({value: movement, event});
    }
  }
}
