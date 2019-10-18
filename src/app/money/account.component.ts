import { Component, OnInit, Renderer } from "@angular/core";
import { Account } from "../../crosscommon/entities/Account";
import { AccountService } from "./account.service";
import { SyncAPI } from "../common/sync.api";
import { Catalog } from "src/crosscommon/entities/Catalog";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";

@Component({
  selector: "account",
  templateUrl: "./account.template.html",
  providers: [AccountService]
})
export class AccountComponent implements OnInit {
  public accountList: Array<Account> = [];
  public viewData: {
    accountList: Account[];
    showItemForm: boolean;
    typeList: Catalog[];
  } = {
    accountList: [],
    showItemForm: false,
    typeList: []
  };
  private services: {
    accountService: AccountService;
    syncService: SyncAPI;
  } = {
    accountService: null,
    syncService: null
  };
  public model: {
    id: string;
  } = {
    id: null
  };

  constructor(accountService: AccountService, syncService: SyncAPI) {
    this.services.accountService = accountService;
    this.services.syncService = syncService;

    this.getCatalogTypes();
  }

  getCatalogTypes() {
    const platformQuery: string = JSON.stringify({
      gc: "AND",
      cont: [
        {
          f: "ctg_id",
          op: "eq",
          val: "ACCOUNT_TYPES" // TODO: fix database length for field ctg_name
        }
      ]
    });
    this.services.syncService
      .get(`/api/sync?entity=Catalog&q=${platformQuery}`)
      .then(data => {
        this.viewData.typeList = data.list;
      });
  }

  ngOnInit() {
    this.services.accountService.getAll().then(list => {
      this.viewData.accountList = list;
    });
  }

  newItem(form: NgForm) {
    let values = form.value;

    if (this.model.id) {
      // edit
      const existingIndex: number = this.viewData.accountList.findIndex(
        e => e.acc_id === this.model.id
      );
      const item: Account = this.viewData.accountList[existingIndex];

      item.acc_name = values.fName;
      item.acc_ctg_type = values.fType;
      item.acc_comment = values.fComment;
      item.acc_check_day = values.fCheckDay;
      item.acc_average_min_balance = values.fAverageMinBalance;
      item.acc_payment_day = values.fPaymentDay;

      this.services.accountService.updateItem(item);
      item["isEdited"] = true; // flag to render as edited on UI
      this.viewData.accountList[existingIndex] = item;
      this.model.id = null;
    } else {
      // new item
      this.services.accountService
        .newItem(
          values.fName,
          values.fType,
          values.fComment,
          values.fCheckDay,
          values.fAverageMinBalance,
          values.fPaymentDay
        )
        .then(item => {
          this.viewData.accountList = this.services.accountService.list();
          const listItem = this.viewData.accountList.find(
            elem => elem.acc_id === item.acc_id
          );
          listItem["isNew"] = true;
        });
    }

    this.resetForm(form);
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

    model = this.viewData.accountList.find((e: Account) => e.acc_id === id);
    this.model.id = model["acc_id"]; // to tell the form that this is an edition

    setTimeout(() => {
      form.controls["fName"].setValue(model["acc_name"]);
      form.controls["fType"].setValue(model["acc_ctg_type"]);
      form.controls["fComment"].setValue(model["acc_comment"]);
      form.controls["fCheckDay"].setValue(model["acc_check_day"]);
      form.controls["fAverageMinBalance"].setValue(
        model["acc_average_min_balance"]
      );
      form.controls["fPaymentDay"].setValue(model["acc_payment_day"]);
    }, 0);
  }

  toggleStatus(item: Account) {
    item.acc_ctg_status = item.acc_ctg_status === 1 ? 2 : 1;

    this.services.accountService
      .updateItem(item)
      .then((updatedItem: Account) => {
        updatedItem["isEdited"] = true;
        item.acc_txt_status =
          item.acc_ctg_status === 1 ? "ACTIVE" : "CANCELLED";
      });
  }
}
