import { Component, OnInit, Renderer } from "@angular/core";
import { Account } from "../../crosscommon/entities/Account";
import { AccountService } from "./account.service";
import { SyncAPI } from "../common/sync.api";
import { Catalog } from "src/crosscommon/entities/Catalog";
import { NgForm } from "@angular/forms";

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
}
