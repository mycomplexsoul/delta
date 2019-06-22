import { Component, OnInit, Renderer } from "@angular/core";
import { Place } from "../../crosscommon/entities/Place";
import { PlaceService } from "./place.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";

@Component({
  selector: "place",
  templateUrl: "./place.template.html",
  providers: [PlaceService]
})
export class PlaceComponent implements OnInit {
  public viewData: {
    placeList: Place[];
    showItemForm: boolean;
  } = {
    placeList: [],
    showItemForm: false
  };
  private services: {
    placeService: PlaceService;
  } = {
    placeService: null
  };
  public model: {
    id: string;
  } = {
    id: null
  };
  public common: CommonComponent<Place> = null;

  constructor(placeService: PlaceService) {
    this.services.placeService = placeService;
    this.common = new CommonComponent<Place>();
  }

  ngOnInit() {
    this.services.placeService.getAll().then(list => {
      this.viewData.placeList = list;
    });
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.placeList,
        onFindExpression: item => item.mpl_id === this.model.id,
        onAssignForEdit: (item, formValues) => {
          const newItem = new Place(item);
          newItem.mpl_name = formValues.fName;
          return newItem;
        },
        onUpdateItemService: item =>
          this.services.placeService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        }
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.placeList,
        onFindExpression: item => item.mpl_id === this.model.id,
        onAssignForCreate: formValues => {
          const newItem = new Place({
            mpl_name: formValues.fName
          });
          return newItem;
        },
        onNewItemService: item => this.services.placeService.newItem(item),
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

    model = this.viewData.placeList.find(e => e.mpl_id === id);
    this.model.id = model["mpl_id"]; // to tell the form that this is an edition

    setTimeout(() => {
      form.controls["fName"].setValue(model["mpl_name"]);
    }, 0);
  }
}
