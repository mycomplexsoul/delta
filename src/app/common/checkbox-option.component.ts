import { Component, Input } from "@angular/core";

@Component({
  selector: "checkbox-option",
  templateUrl: "./checkbox-option.template.html",
  providers: []
})
export class CheckboxOptionComponent {
  @Input() checked: boolean;
  @Input() onClick: Function;
  @Input() optionId: string;
  @Input() label: string = "Option";

  toggleCheckbox(event: MouseEvent) {
    this.checked = event.target["checked"];

    if (this.onClick) {
      this.onClick(this.checked);
    }
  }
}
