import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "checkbox-option",
    templateUrl: "./checkbox-option.template.html",
    providers: [],
    standalone: false
})
export class CheckboxOptionComponent {
  @Input() checked: boolean = false;
  @Input() optionId: string;
  @Input() label: string = "Option";
  @Output() onClick: EventEmitter<{
    checked: boolean;
    optionId: string;
  }> = new EventEmitter<{ checked: boolean; optionId: string }>();

  toggleCheckbox(event: MouseEvent) {
    this.checked = event.target["checked"];

    this.onClick.emit({ checked: this.checked, optionId: this.optionId });
  }
}
