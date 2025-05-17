import { Component, Input } from "@angular/core";
import { DateUtils } from "src/crosscommon/DateUtility";

@Component({
    selector: "time-format",
    templateUrl: "./time-format.template.html",
    providers: [],
    standalone: false
})
export class TimeFormatComponent {
  @Input() value: Date | number;
  @Input() format: string = "[HH]:[mm]:[ss]";

  formatValue() {
    let timestamp = this.value;
    if (!(this.value instanceof Date)) {
      timestamp = Number.parseInt(this.value + "", 10);
    }
    return DateUtils.formatTimestamp(timestamp, this.format);
  }
}
