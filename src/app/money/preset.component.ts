import { Component, OnInit } from "@angular/core";
import { Preset } from "../../crosscommon/entities/Preset";
import { PresetService } from "./preset.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";
import { DateUtils } from "src/crosscommon/DateUtility";
import { AccountService } from "./account.service";
import { CategoryService } from "./category.service";
import { PlaceService } from "./place.service";
import { Account } from "src/crosscommon/entities/Account";
import { Category } from "src/crosscommon/entities/Category";
import { Place } from "src/crosscommon/entities/Place";

@Component({
  selector: "preset",
  templateUrl: "./preset.template.html",
  providers: [PresetService, AccountService, CategoryService, PlaceService]
})
export class PresetComponent implements OnInit {
  public viewData: {
    presetList: Preset[];
    accountList: Account[];
    categoryList: Category[];
    placeList: Place[];
    showItemForm: boolean;
  } = {
    presetList: [],
    accountList: [],
    categoryList: [],
    placeList: [],
    showItemForm: false
  };

  public model: {
    id: string;
  } = {
    id: null
  };
  public common: CommonComponent<Preset> = null;
  public _movementFlowType: string = "custom";
  public isTransfer: boolean = false;
  public isCustom: boolean = true;

  constructor(
    private presetService: PresetService,
    private accountService: AccountService,
    private categoryService: CategoryService,
    private placeService: PlaceService
  ) {
    this.common = new CommonComponent<Preset>();
  }

  async ngOnInit() {
    this.presetService.getAll().then(list => {
      this.viewData.presetList = list;
    });
    this.viewData.accountList = await this.accountService
      .getAll()
      .catch(() => []);
    this.viewData.categoryList = await this.categoryService
      .getAll()
      .catch(() => []);
    this.viewData.placeList = await this.placeService.getAll().catch(() => []);
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.presetList,
        onFindExpression: item => this.findById(item, this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Preset(item);
          newItem.pre_name = formValues.fName;
          newItem.pre_date = formValues.fDate
            ? DateUtils.stringDateToDate(formValues.fDate)
            : null;
          newItem.pre_amount = formValues.fAmount;
          newItem.pre_id_account = formValues.fAccount;
          if (this.isTransfer) {
            newItem.pre_id_account_to = formValues.fAccountTo;
            newItem.pre_ctg_type = 3;
          } else {
            newItem.pre_ctg_type = formValues.fMovementType;
          }
          if (!this.isTransfer) {
            newItem.pre_budget = formValues.fBudget || null;
            newItem.pre_id_category = formValues.fCategory;
            newItem.pre_id_place = formValues.fPlace;
          } else {
            newItem.pre_budget = null;
            newItem.pre_id_category = "0";
            newItem.pre_id_place = "0";
          }
          newItem.pre_desc = formValues.fDescription;
          newItem.pre_notes = formValues.fNotes;
          newItem.pre_ctg_status = 1;

          return newItem;
        },
        onUpdateItemService: item => this.presetService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        }
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.presetList,
        onFindExpression: (item, newItem) =>
          this.findById(item, newItem.pre_id),
        onAssignForCreate: formValues => {
          const newItem = new Preset();
          newItem.pre_name = formValues.fName;
          newItem.pre_date = formValues.fDate
            ? DateUtils.stringDateToDate(formValues.fDate)
            : null;
          newItem.pre_amount = formValues.fAmount;
          newItem.pre_id_account = formValues.fAccount;
          if (this.isTransfer) {
            newItem.pre_id_account_to = formValues.fAccountTo;
            newItem.pre_ctg_type = 3;
          } else {
            newItem.pre_ctg_type = formValues.fMovementType;
          }
          if (!this.isTransfer) {
            newItem.pre_budget = formValues.fBudget || null;
            newItem.pre_id_category = formValues.fCategory;
            newItem.pre_id_place = formValues.fPlace;
          } else {
            newItem.pre_budget = null;
            newItem.pre_id_category = "0";
            newItem.pre_id_place = "0";
          }
          newItem.pre_desc = formValues.fDescription;
          newItem.pre_notes = formValues.fNotes;
          newItem.pre_ctg_status = 1;
          return newItem;
        },
        onNewItemService: item => this.presetService.newItem(item),
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
    this.resetForm(form);

    model = this.viewData.presetList.find(item => this.findById(item, id));
    this.model.id = model["pre_id"]; // to tell the form that this is an edition

    setTimeout(() => {
      form.controls["fName"].setValue(model["pre_name"]);
      form.controls["fDescription"].setValue(model["pre_desc"]);
      form.controls["fAmount"].setValue(model["pre_amount"]);
      form.controls["fDate"].setValue(model["pre_date"]);
      form.controls["fAccount"].setValue(model["pre_id_account"]);
      form.controls["fNotes"].setValue(model["pre_notes"]);

      if (model["pre_id_account_to"]) {
        this.movementFlowType("transfer");
        setTimeout(() => {
          form.controls["fAccountTo"].setValue(model["pre_id_account_to"]);
        }, 50);
      } else {
        this.movementFlowType("custom");
        setTimeout(() => {
          form.controls["fMovementType"].setValue(model["pre_ctg_type"]);
          form.controls["fPlace"].setValue(model["pre_id_place"]);
          form.controls["fCategory"].setValue(model["pre_id_category"]);
          form.controls["fBudget"].setValue(model["pre_budget"]);
        }, 50);
      }
    }, 0);
  }

  findById(item: Preset, id: string) {
    return item.pre_id === id;
  }

  movementFlowType(value: string) {
    if (!value) {
      return this._movementFlowType;
    }
    this._movementFlowType = value;
    this.isTransfer = false;
    this.isCustom = false;
    switch (value) {
      case "custom": {
        this.isCustom = true;
        break;
      }
      case "transfer": {
        this.isTransfer = true;
        break;
      }
      default: {
      }
    }
  }
}
