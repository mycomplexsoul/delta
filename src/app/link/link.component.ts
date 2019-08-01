import { Component, OnInit } from "@angular/core";
import { Link } from "../../crosscommon/entities/Link";
import { LinkService } from "./link.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";

@Component({
  selector: "link",
  templateUrl: "./link.template.html",
  styleUrls: ["./link.css"],
  providers: [LinkService]
})
export class LinkComponent implements OnInit {
  public viewData: {
    linkList: Link[];
    showItemForm: boolean;
  } = {
    linkList: [],
    showItemForm: false
  };

  public model: {
    id: string;
  } = {
    id: null
  };
  public common: CommonComponent<Link> = null;

  constructor(private linkService: LinkService) {
    this.common = new CommonComponent<Link>();
  }

  ngOnInit() {
    this.linkService.getAll().then(list => {
      this.viewData.linkList = list;
    });
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.linkList,
        onFindExpression: item => this.findById(item, this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Link(item);
          newItem.lnk_url = formValues.fUrl;
          newItem.lnk_title = formValues.fTitle;
          newItem.lnk_tags = formValues.fTags;
          newItem.lnk_comment = formValues.fComment;

          return newItem;
        },
        onUpdateItemService: item => this.linkService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        }
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.linkList,
        onFindExpression: (item, newItem) =>
          this.findById(item, newItem.lnk_id),
        onAssignForCreate: formValues => {
          const newItem = new Link({
            lnk_url: formValues.fUrl,
            lnk_title: formValues.fTitle,
            lnk_tags: formValues.fTags,
            lnk_comment: formValues.fComment
          });
          return newItem;
        },
        onNewItemService: item => this.linkService.newItem(item),
        onFinalExecution: () => {
          this.viewData.showItemForm = false;
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

    model = this.viewData.linkList.find(item => this.findById(item, id));
    this.model.id = model["lnk_id"]; // to tell the form that this is an edition

    setTimeout(() => {
      form.controls["fUrl"].setValue(model["lnk_url"]);
      form.controls["fTitle"].setValue(model["lnk_title"]);
      form.controls["fTags"].setValue(model["lnk_tags"]);
      form.controls["fComment"].setValue(model["lnk_comment"]);
    }, 0);
  }

  findById(item: Link, id: string) {
    return item.lnk_id === id;
  }
}
