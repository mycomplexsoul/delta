import { Component, OnInit, Input } from "@angular/core";
import { DateUtils } from "src/crosscommon/DateUtility";

@Component({
  selector: "time-format",
  templateUrl: "./time-format.template.html",
  providers: []
})
export class TimeFormatComponent implements OnInit {
  public result: String;
  @Input() value: Date | number;
  @Input() format: string = "[HH]:[mm]:[ss]";

  ngOnInit() {
    let timestamp = this.value;
    if (!(this.value instanceof Date)) {
      timestamp = Number.parseInt(this.value + "", 10);
    }
    this.result = DateUtils.formatTimestamp(timestamp, this.format);
  }
}
