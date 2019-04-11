import { Component, OnInit, Renderer } from "@angular/core";
import { Account } from "../../crosscommon/entities/Account";
import { AccountService } from "./account.service";

@Component({
  selector: "account",
  templateUrl: "./account.template.html",
  providers: [AccountService]
})
export class AccountComponent implements OnInit {
  public accountList: Array<Account> = [];
  public viewData: {
    accountList: Account[];
  } = {
    accountList: []
  };
  private services: {
    accountService: AccountService;
  } = {
    accountService: null
  };

  constructor(accountService: AccountService) {
    this.services.accountService = accountService;
  }

  ngOnInit() {
    this.services.accountService.getAll().then(list => {
      this.viewData.accountList = list;
    });
  }

  showNewAccountForm() {}
}
