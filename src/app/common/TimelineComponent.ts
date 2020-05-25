import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Timeline } from "../../crosscommon/entities/Timeline";
import { NgForm } from "@angular/forms";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "./authentication.service";
import { DateUtils } from "../../crosscommon/DateUtility";
import { TimelineService } from "./TimelineService";

@Component({
  selector: "timeline",
  templateUrl: "./TimelineTemplate.html",
  styleUrls: ["./Timeline.css"],
  providers: [TimelineService]
})
export class TimelineComponent {
  @Input() recordId: string = "general";
  @Output() onNewItem: EventEmitter<any> = new EventEmitter();

  private viewData: {
    showForm: boolean;
  } = {
    showForm: false
  };
  private model: {
    id: string;
    date: string;
    time: string;
  } = {
    id: null,
    date: DateUtils.formatDate(DateUtils.newDateUpToSeconds()),
    time: DateUtils.timeFromDateAsString(DateUtils.newDateUpToSeconds())
  };

  constructor(
    private authenticationService: AuthenticationService,
    private timelineService: TimelineService
  ) {}

  handleNewItem(form: NgForm) {
    const { fDate, fDescription, fTags, fTime } = form.value;

    const timeline: Timeline = new Timeline({
      tim_id: Utils.hashIdForEntity(new Timeline(), "tim_id"),
      tim_id_record: this.recordId,
      tim_date: `${fDate}T${fTime}`,
      tim_description: fDescription,
      tim_tags: fTags,
      tim_id_user: this.authenticationService.currentUserValue.username,
      tim_date_add: DateUtils.newDateUpToSeconds(),
      tim_date_mod: DateUtils.newDateUpToSeconds(),
      tim_ctg_status: 1
    });

    this.timelineService.create(timeline).then(() => {
      if (this.onNewItem) {
        this.onNewItem.emit({ timeline });
      }
    });

    this.viewData.showForm = false;
    this.resetForm(form);

    return false;
  }

  resetForm(form: NgForm) {
    this.model.id = null;
    form.reset();
    form.controls["fDate"].setValue(
      DateUtils.dateToStringDate(DateUtils.newDateUpToSeconds())
    );
  }
}
