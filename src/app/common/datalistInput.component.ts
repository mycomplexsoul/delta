import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "datalist-input",
  templateUrl: "./datalistInput.template.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DatalistInputComponent {
  @Input() label: string = "";
  @Input() inputName: string = "";
  @Input() inputId: string = "";
  @Input() datalistId: string = "";
  @Input() placeholder: string = "";
  @Input() value: string = "";
  @Input() selectedId: any = null;
  @Input() hiddenName: string = "";
  @Input() options: Array<any> = [];
  @Input() optionLabelField: string = "name";
  @Input() optionValueField: string = "id";
  @Input() optionSecondaryField: string = null;
  @Input() optionSecondaryCurrency: string = "USD";
  @Input() optionSecondaryDisplay: string = "symbol-narrow";
  @Input() optionSecondaryDigits: string = "1.2-2";

  @Output() valueChange = new EventEmitter<string>();
  @Output() selectedIdChange = new EventEmitter<any>();

  onInput(event: Event) {
    const input = (event.target as HTMLInputElement).value?.trim() || "";
    this.value = input;
    this.valueChange.emit(input);

    const selectedOption = this.options.find((opt: any) => {
      const optionLabel = this.getOptionLabel(opt)?.toLowerCase() || "";
      return optionLabel === input.toLowerCase();
    });

    const selectedId = selectedOption ? this.getOptionValue(selectedOption) : null;
    if (selectedId !== this.selectedId) {
      this.selectedId = selectedId;
      this.selectedIdChange.emit(selectedId);
    } else if (!selectedOption && this.selectedId !== null) {
      this.selectedId = null;
      this.selectedIdChange.emit(null);
    }
  }

  getOptionLabel(option: any): string {
    return option?.[this.optionLabelField] ?? "";
  }

  getOptionValue(option: any): any {
    return option?.[this.optionValueField] ?? null;
  }

  getOptionSecondary(option: any): any {
    return this.optionSecondaryField ? option?.[this.optionSecondaryField] : null;
  }

  trackByOption = (index: number, option: any) => {
    return this.getOptionValue(option) ?? index;
  };
}
