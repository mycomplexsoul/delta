import { Component, OnInit } from "@angular/core";
import { Activity } from "../../crosscommon/entities/Activity";
import { ActivityService } from "./activity.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";

@Component({
  selector: "activity",
  templateUrl: "./activity.template.html",
  styleUrls: ["./activity.css"],
  providers: [ActivityService]
})
export class ActivityComponent implements OnInit {
  public viewData: {
    activityList: Activity[];
    showItemForm: boolean;
  } = {
    activityList: [],
    showItemForm: false
  };

  public model: {
    id: string;
  } = {
    id: null
  };
  public common: CommonComponent<Activity> = null;

  constructor(private activityService: ActivityService) {
    this.common = new CommonComponent<Activity>();
  }

  ngOnInit() {
    this.activityService.getAll().then(list => {
      this.viewData.activityList = list;
    });
  }

  toggleShowItemForm() {
    if (this.viewData.showItemForm) {
      this.model.id = null;
    }
    this.viewData.showItemForm = !this.viewData.showItemForm;
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.activityList,
        onFindExpression: item => this.findById(item, this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Activity(item);

          // newItem.act_id_project = formValues.fProjectId;
          newItem.act_name = formValues.fName;
          // newItem.act_description = formValues.fDescription;
          newItem.act_tags = formValues.fTags;
          // newItem.act_close_comment = formValues.fCloseComment;
          // newItem.act_ctg_status = formValues.fCtgStatus;

          return newItem;
        },
        onUpdateItemService: item => this.activityService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        }
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.activityList,
        onFindExpression: (item, newItem) =>
          this.findById(item, newItem.act_id),
        onAssignForCreate: formValues => {
          const newItem = new Activity({
            act_id_project: formValues.fProjectId || "0",
            act_name: formValues.fName,
            act_description: formValues.fDescription,
            act_tags: formValues.fTags,
            act_close_comment: formValues.fCloseComment,
            act_ctg_status: formValues.fCtgStatus || "1"
          });
          return newItem;
        },
        onNewItemService: item => this.activityService.newItem(item),
        onFinalExecution: () => {
          this.viewData.showItemForm = false;
          this.model.id = null;
        }
      });
    }

    this.common.resetForm(form, () => {
      this.model.id = null;
    });
    this.viewData.showItemForm = false;
  }

  resetForm(form: NgForm) {
    this.model.id = null;
    form.reset();
  }

  setModelDetails(id: string, form: NgForm) {
    let model: iEntity;
    if (!this.viewData.showItemForm) {
      this.viewData.showItemForm = !this.viewData.showItemForm;
    }

    model = this.viewData.activityList.find(item => this.findById(item, id));
    this.model.id = model["act_id"]; // to tell the form that this is an edition

    setTimeout(() => {
      // form.controls["fProjectId"].setValue(model["act_id_project"]);
      form.controls["fName"].setValue(model["act_name"]);
      // form.controls["fDescription"].setValue(model["act_description"]);
      form.controls["fTags"].setValue(model["act_tags"]);
      // form.controls["fCloseComment"].setValue(model["act_close_comment"]);
      // form.controls["fCtgStatus"].setValue(model["act_ctg_status"]);
    }, 0);
  }

  findById(item: Activity, id: string) {
    return item.act_id === id;
  }
}
