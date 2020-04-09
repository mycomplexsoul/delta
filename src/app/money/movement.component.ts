import { Component, OnInit, Renderer } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
//import { CurrencyPipe } from '@angular/common';
// types
import { Movement } from "../../crosscommon/entities/Movement";
import { Account } from "../../crosscommon/entities/Account";
import { Catalog } from "../../crosscommon/entities/Catalog";
import { Category } from "../../crosscommon/entities/Category";
import { Place } from "../../crosscommon/entities/Place";
import { Entry } from "../../crosscommon/entities/Entry";
import { Preset } from "../../crosscommon/entities/Preset";
import { iEntity } from "../../crosscommon/iEntity";

// services
import { StorageService } from "../common/storage.service";
import { AccountService } from "./account.service";
import { CategoryService } from "./category.service";
import { PlaceService } from "./place.service";
import { MovementService } from "./movement.service";
import { EntryService } from "./entry.service";
import { BalanceService } from "./balance.service";
import { PresetService } from "./preset.service";
import { formatCurrency } from "@angular/common";
import { DateUtils } from "src/crosscommon/DateUtility";
import { reduce } from "rxjs/operators";

@Component({
  selector: "movement",
  templateUrl: "./movement.template.html",
  providers: [
    AccountService,
    CategoryService,
    PlaceService,
    MovementService,
    EntryService,
    BalanceService,
    PresetService
  ]
})
export class MovementComponent implements OnInit {
  private accounts: Array<Account> = [];
  public viewData: {
    accounts: Array<Account>;
    types: Array<any>;
    statuses: Array<any>;
    budgets: Array<any>;
    categories: Array<Category>;
    places: Array<Place>;
    movements: Array<Movement>;
    entries: Array<Entry>;
    presets: Array<Preset>;
    showCreateForm: boolean;
  } = {
    accounts: [],
    types: [],
    statuses: [],
    budgets: [],
    categories: [],
    places: [],
    movements: [],
    entries: [],
    presets: [],
    showCreateForm: false
  };
  public model: any = {
    /* UI default form data */
    type: 1,
    date: "",
    category: 0,
    place: 0,
    asPreset: false,
    selectedPreset: null,
    id: null
  };
  public viewAddCategoryForm: boolean = false;
  public _movementFlowType: string = "custom";
  public isTransfer: boolean = false;
  public isCustom: boolean = true;
  public isPreset: boolean = false;
  public services: {
    account: AccountService;
    category: CategoryService;
    place: PlaceService;
    movement: MovementService;
    entry: EntryService;
    balance: BalanceService;
    preset: PresetService;
  } = {
    account: null,
    category: null,
    place: null,
    movement: null,
    entry: null,
    balance: null,
    preset: null
  };

  constructor(
    accountService: AccountService,
    categoryService: CategoryService,
    placeService: PlaceService,
    movementService: MovementService,
    entryService: EntryService,
    balanceService: BalanceService,
    presetService: PresetService,
    private titleService: Title
  ) {
    this.services.account = accountService;
    this.services.category = categoryService;
    this.services.place = placeService;
    this.services.movement = movementService;
    this.services.entry = entryService;
    this.services.balance = balanceService;
    this.services.preset = presetService;

    titleService.setTitle("Movements");

    // TODO: this data should come from localStorage, if not present then fetch from BE
    this.viewData.types = [
      {
        ctg_ctg_value: 1,
        ctg_desc: "Expense"
      },
      {
        ctg_ctg_value: 2,
        ctg_desc: "Income"
      },
      {
        ctg_ctg_value: 3,
        ctg_desc: "Transfer"
      }
    ];

    // TODO: this data should come from localStorage, if not present then fetch from BE
    this.viewData.statuses = [
      {
        ctg_ctg_value: 1,
        ctg_desc: "Active"
      },
      {
        ctg_ctg_value: 2,
        ctg_desc: "Cancelled"
      },
      {
        ctg_ctg_value: 3,
        ctg_desc: "Pending"
      }
    ];

    // TODO: this data should have an entity
    this.viewData.budgets = [
      "Food",
      "Services",
      "Renewal",
      "Groceries",
      "Mom",
      "Health"
    ];

    this.model.date = DateUtils.dateToStringDate(new Date());
  }

  retrieveAccountsAndBalance() {
    this.services.account.getAll(true).then((accounts: Account[]) => {
      this.accounts = accounts;
      this.viewData.accounts = this.accounts;
    });
  }

  ngOnInit() {
    // TODO: this should be refactored the same way as categories and places
    this.retrieveAccountsAndBalance();
    this.services.category.getAll().then((categories: Category[]) => {
      this.viewData.categories = categories;
    });
    this.services.place.getAll().then((places: Place[]) => {
      this.viewData.places = places;
    });
    this.services.entry.getAll();
    this.services.preset.getAll().then((list: Preset[]) => {
      this.viewData.presets = list;
      let p = new Preset();
      p.pre_name = "";
      this.viewData.presets.unshift(p);
    });

    this.viewData.entries = this.services.entry.list();
    this.viewData.presets = this.services.preset.list();

    this.addNewCategoryForUser = this.addNewCategoryForUser.bind(this);
    this.addNewPlaceForUser = this.addNewPlaceForUser.bind(this);
    this.services.movement.getAll().then((list: Array<Movement>) => {
      this.viewData.movements = list;

      this.viewData.movements = this.getLastestMovements(
        this.viewData.movements
      );
    });
    /* analysis */
    // const year = 2017;
    // const month = 6;
    // let iterable = year * 100 + month;
    // const account = '7';
    // let en = this.services.entry.list;
    // console.log('entries',en);
    // let mov = this.services.movement.list
    //     .filter((m: Movement) => (new Date(m.mov_date)).getFullYear() * 100 + (new Date(m.mov_date)).getMonth() + 1 === iterable);
    // let mon = en.filter((e:Entry) => (new Date(e.ent_date)).getFullYear() * 100 + (new Date(e.ent_date)).getMonth() + 1 === iterable);
    // console.log('movements for 2017march',mov);
    // console.log('entries for 2017march',mon);
    // mov.forEach((m: Movement) => {
    //     if (mon.filter((e: Entry) => e.ent_id === m.mov_id).length === 2){
    //         return;
    //     } else {
    //         console.log('mov not found in entries',m);
    //     }
    // });
    // console.log('entries for Mosho Cartera Income',mon.filter((e: Entry) => e.ent_id_account === account && e.ent_ctg_type == 2));
    // console.log('entries for Mosho Cartera Expense',mon.filter((e: Entry) => e.ent_id_account === account && e.ent_ctg_type == 1));
  }

  getLastestMovements(movementList: Movement[]) {
    return movementList
      .sort((a: Movement, b: Movement) => (a.mov_date >= b.mov_date ? -1 : 1))
      .slice(0, 50);
  }

  movementFlowType(value: string) {
    if (!value) {
      return this._movementFlowType;
    }
    this._movementFlowType = value;
    this.isTransfer = false;
    this.isCustom = false;
    this.isPreset = false;
    switch (value) {
      case "custom": {
        this.isCustom = true;
        break;
      }
      case "transfer": {
        this.isTransfer = true;
        break;
      }
      case "preset": {
        this.isPreset = true;
        break;
      }
      default: {
      }
    }
  }

  newMovement(form: NgForm) {
    console.log("as preset?", form.value.fAsPreset);
    const submitButton: HTMLButtonElement = document.getElementById(
      "newFormSubmitButton"
    ) as HTMLButtonElement;
    submitButton.disabled = true;

    if (form.value.fAsPreset) {
      let p = new Preset();
      // TODO: hash generator for IDs
      p.pre_id = this.services.preset.newId();
      p.pre_name = form.value.fName;
      p.pre_date = DateUtils.stringDateToDate(form.value.fDate);
      p.pre_amount = form.value.fAmount;
      p.pre_id_account = form.value.fAccount;
      if (this.isTransfer) {
        p.pre_id_account_to = form.value.fAccountTo;
        p.pre_ctg_type = 3;
      } else {
        p.pre_ctg_type = form.value.fMovementType;
      }
      if (!this.isTransfer) {
        p.pre_budget = form.value.fBudget || null;
        p.pre_id_category = form.value.fCategory;
        p.pre_id_place = form.value.fPlace;
      } else {
        p.pre_budget = null;
        p.pre_id_category = "0";
        p.pre_id_place = "0";
      }
      p.pre_desc = form.value.fDescription;
      p.pre_notes = form.value.fNotes;
      p.pre_ctg_status = 1;

      p.pre_txt_type = this.findIn(
        this.viewData.types,
        (e: any) => e.ctg_ctg_value == p.pre_ctg_type,
        "ctg_desc"
      );
      p.pre_txt_account = this.findIn(
        this.viewData.accounts,
        (e: any) => e.acc_id == p.pre_id_account,
        "acc_name"
      );
      //p.pre_txt_account_to = '';
      p.pre_txt_category = this.findIn(
        this.viewData.categories,
        (e: any) => e.mct_id === p.pre_id_category,
        "mct_name"
      );
      p.pre_txt_place = this.findIn(
        this.viewData.places,
        (e: any) => e.mpl_id === p.pre_id_place,
        "mpl_name"
      );
      p.pre_txt_status = this.findIn(
        this.viewData.statuses,
        (e: any) => e.ctg_ctg_value == p.pre_ctg_status,
        "ctg_desc"
      );

      this.services.preset.newItem(p);
      this.viewData.presets.push(p);
      console.log("this is the preset", p);
    } else {
      let m = new Movement();
      m.mov_date = DateUtils.stringDateToDate(form.value.fDate);
      if (this.model.id) {
        // we are editing instead of creating a new movement
        m.mov_id = this.model.id;
      } else {
        m.mov_id = this.services.movement.newId(m.mov_date);
      }
      m.mov_desc = form.value.fDescription;
      m.mov_amount = form.value.fAmount;
      m.mov_id_account = form.value.fAccount;
      if (this.isTransfer) {
        m.mov_id_account_to = form.value.fAccountTo;
        m.mov_ctg_type = 3;
      } else {
        m.mov_ctg_type = form.value.fMovementType;
      }
      if (!this.isTransfer) {
        m.mov_budget = form.value.fBudget || null;
        m.mov_id_category = form.value.fCategory;
        m.mov_id_place = form.value.fPlace;
      } else {
        m.mov_budget = null;
        m.mov_id_category = "0";
        m.mov_id_place = "0";
      }
      m.mov_notes = form.value.fNotes;
      m.mov_ctg_status = 1;

      m.mov_txt_account = this.findIn(
        this.viewData.accounts,
        (e: any) => e.acc_id == m.mov_id_account,
        "acc_name"
      );
      if (m.mov_id_account_to) {
        m.mov_txt_account_to = this.findIn(
          this.viewData.accounts,
          (e: any) => e.acc_id == m.mov_id_account_to,
          "acc_name"
        );
      }
      m.mov_txt_type = this.findIn(
        this.viewData.types,
        (e: any) => e.ctg_ctg_value == m.mov_ctg_type,
        "ctg_desc"
      );
      //m.mov_txt_budget = m.mov_budget;
      m.mov_txt_category = this.findIn(
        this.viewData.categories,
        (e: any) => e.mct_id === m.mov_id_category,
        "mct_name"
      );
      m.mov_txt_place = this.findIn(
        this.viewData.places,
        (e: any) => e.mpl_id === m.mov_id_place,
        "mpl_name"
      );
      m.mov_txt_status = this.findIn(
        this.viewData.statuses,
        (e: any) => e.ctg_ctg_value == m.mov_ctg_status,
        "ctg_desc"
      );

      if (this.model.id) {
        // edition
        const existingIndex: number = this.viewData.movements.findIndex(
          m => m.mov_id === this.model.id
        );
        m.mov_date_add = new Date(
          this.viewData.movements[existingIndex].mov_date_add
        );
        this.services.movement.edit(m, () => this.retrieveAccountsAndBalance());
        m["isEdited"] = true; // flag to render as edited on UI
        this.viewData.movements[existingIndex] = m;
        this.model.id = null;
      } else {
        // new movement
        this.services.movement.newItem(m, () =>
          this.retrieveAccountsAndBalance()
        );
        m["isNew"] = true; // flag to render as new on UI
        console.log("this is the movement", m);
        this.viewData.movements.unshift(m);
        this.viewData.movements = this.viewData.movements.sort(
          (a: Movement, b: Movement) =>
            new Date(a.mov_date).getTime() >= new Date(b.mov_date).getTime()
              ? -1
              : 1
        );

        // Entries
        let localEntries: Array<Entry> = [];
        localEntries = this.generateEntriesForMovement(m);

        console.log("these are all entries", this.services.entry.list);

        // add to balance
        this.services.balance.add(localEntries);
        console.log("these are all balance", this.services.balance.list);

        // if the movement has `reimburse-50` budget flag
        // add a new movement based on this one with specific changes
        this.createReimburseMovement(m);
      }
      this.resetForm(form);
      submitButton.disabled = false;

      return false;
    }
  }

  createReimburseMovement(base: Movement) {
    const ACCOUNT_FOR_REIMBURSE = "11";
    const REIMBURSE_CATEGORY = "mct20190427225032-314918153583";
    const REIMBURSE_50 = "reimburse-50";
    const REIMBURSE_100 = "reimburse-100";

    let newAmount: number = base.mov_amount;
    let descPrefix: string = "";
    let descSufix: string = "";
    let reimburseType: string = "";
    const budget = base.mov_budget || "";

    if (budget.includes(REIMBURSE_50)) {
      reimburseType = REIMBURSE_50;
      newAmount = base.mov_amount * 0.5;
      descPrefix = "Half for: ";
      descSufix = `, original amount: ${formatCurrency(
        base.mov_amount,
        "en",
        "$"
      )}`;
    }
    if (budget.includes(REIMBURSE_100)) {
      reimburseType = REIMBURSE_100;
      newAmount = base.mov_amount;
      descPrefix = "Reimburse for: ";
    }

    // if no reimburse was detected, do nothing
    if (!reimburseType) {
      return false;
    }

    const reimburse: Movement = new Movement(base);
    reimburse.mov_desc = `${descPrefix}${base.mov_desc}${descSufix}`;
    reimburse.mov_amount = newAmount;
    reimburse.mov_ctg_type = 2;
    reimburse.mov_id_account = ACCOUNT_FOR_REIMBURSE;
    reimburse.mov_txt_account = this.viewData.accounts.find(
      acc => acc.acc_id === ACCOUNT_FOR_REIMBURSE
    ).acc_name;
    reimburse.mov_id_category = REIMBURSE_CATEGORY; // 'Rembolsos' Reimburse category
    reimburse.mov_txt_category = this.viewData.categories.find(
      cat => cat.mct_id === REIMBURSE_CATEGORY
    ).mct_name; // 'Rembolsos' Reimburse category
    reimburse.mov_budget = base.mov_budget.replace(REIMBURSE_50, "");

    // new movement
    this.services.movement.newItem(reimburse, () =>
      this.retrieveAccountsAndBalance()
    );
    reimburse["isNew"] = true; // flag to render as new on UI
    console.log("this is the reimburse movement", reimburse);
    this.viewData.movements.unshift(reimburse);
    this.viewData.movements = this.viewData.movements.sort(
      (a: Movement, b: Movement) =>
        new Date(a.mov_date).getTime() >= new Date(b.mov_date).getTime()
          ? -1
          : 1
    );

    // Entries
    let localEntries: Array<Entry> = [];
    localEntries = this.generateEntriesForMovement(reimburse);

    console.log("these are all entries", this.services.entry.list);

    // add to balance
    this.services.balance.add(localEntries);
    console.log("these are all balance", this.services.balance.list);
  }

  generateEntriesForMovement(m: Movement): Array<Entry> {
    let localEntries: Array<Entry> = [];
    // TODO: Entry creation should be inside entry.service, just pass the movement as argument
    let e = new Entry();
    e.ent_id = m.mov_id;
    e.ent_sequential = 1;
    e.ent_desc = m.mov_desc;
    e.ent_amount = m.mov_amount;
    e.ent_id_account = m.mov_id_account;
    e.ent_ctg_type = m.mov_ctg_type === 3 ? 1 : m.mov_ctg_type;
    e.ent_date = m.mov_date;
    e.ent_budget = m.mov_budget;
    e.ent_id_category = m.mov_id_category;
    e.ent_id_place = m.mov_id_place;
    e.ent_notes = m.mov_notes;
    e.ent_id_user = m.mov_id_user;
    e.ent_ctg_status = m.mov_ctg_status;

    e.ent_txt_account = m.mov_txt_account;
    e.ent_txt_type = m.mov_txt_type;
    //e.ent_txt_budget = m.mov_txt_budget;
    e.ent_txt_category = m.mov_txt_category;
    e.ent_txt_place = m.mov_txt_place;
    e.ent_txt_status = m.mov_txt_status;

    localEntries.push(this.services.entry.newItem(e));

    e = new Entry();
    e.ent_id = m.mov_id;
    e.ent_sequential = 2;
    e.ent_desc = m.mov_desc;
    e.ent_amount = m.mov_amount;
    e.ent_id_account = m.mov_id_account_to || "1";
    e.ent_ctg_type = m.mov_ctg_type === 1 || m.mov_ctg_type === 3 ? 2 : 1;
    e.ent_date = m.mov_date;
    e.ent_budget = m.mov_budget;
    e.ent_id_category = m.mov_id_category;
    e.ent_id_place = m.mov_id_place;
    e.ent_notes = m.mov_notes;
    e.ent_id_user = m.mov_id_user;
    e.ent_ctg_status = m.mov_ctg_status;

    e.ent_txt_account = this.findIn(
      this.viewData.accounts,
      (i: any) => i.acc_id == e.ent_id_account,
      "acc_name"
    );
    e.ent_txt_type = this.findIn(
      this.viewData.types,
      (i: any) => i.ctg_ctg_value == e.ent_ctg_type,
      "ctg_desc"
    );
    //e.ent_txt_budget = m.mov_txt_budget;
    e.ent_txt_category = m.mov_txt_category;
    e.ent_txt_place = m.mov_txt_place;
    e.ent_txt_status = m.mov_txt_status;

    localEntries.push(this.services.entry.newItem(e));

    return localEntries;
  }

  // TODO: local methods that can be used as generic should be moved to utils.service
  findIn(arr: Array<any>, findCriteria: Function, returnField: string) {
    const f = arr.find((e: any) => findCriteria(e));
    if (f) {
      return f[returnField];
    } else {
      return undefined;
    }
  }

  addNewCategoryForUser(category: string) {
    this.services.category
      .newItem(new Category({ mct_name: category }))
      .then((item: Category) => {
        this.viewData.categories = this.services.category.list();
        this.model.category = item.mct_id;
      });
  }

  addNewPlaceForUser(place: string) {
    this.services.place
      .newItem(new Place({ mpl_name: place }))
      .then((item: Place) => {
        this.viewData.places = this.services.place.list();
        this.model.place = item.mpl_id;
      });
  }

  cancelMovement() {
    // TODO: upon cancellation, change status, modify other movement references to filter active movements, rebuild and transfer
  }

  import(dataArray: Array<string>) {
    // imports raw data
    var data: Array<string> = dataArray;
    //let movements: Array<Movement> = [];
    let m: Movement;
    let transferFlag: boolean = false;
    let yearInitial: number = 9999;
    let monthInitial: number = 0;
    let yearFinal: number = new Date().getFullYear();
    let monthFinal: number = new Date().getMonth() + 1;
    let movements: Array<Movement> = [];
    let categories: Array<string> = [];
    //let place: string;

    // categories and places
    data.forEach((d: string, index: number, arr: string[]) => {
      let values: Array<string> = d.split("|");
      if (
        !this.findIn(
          this.services.category.list(),
          (e: Category) => e.mct_name === values[5],
          "mct_id"
        )
      ) {
        this.services.category.newItem(new Category({ mct_name: values[5] }));
      }
      if (
        !this.findIn(
          this.services.place.list(),
          (e: Place) => e.mpl_name === values[6],
          "mpl_id"
        )
      ) {
        this.services.place.newItem(new Place({ mpl_name: values[6] }));
      }
    });
    this.viewData.categories = this.services.category.list();
    this.viewData.places = this.services.place.list();

    data.forEach((d: string, index: number, arr: string[]) => {
      try {
        let values: Array<string> = d.split("|");
        if (transferFlag && values[5] === "Traspaso") {
          transferFlag = false;
          return;
        }
        m = new Movement();

        //m.mov_id = this.services.movement.newId();
        m.mov_desc = values[7];
        m.mov_amount = parseFloat(values[3]);
        if (
          this.findIn(
            this.viewData.accounts,
            (e: any) => e.acc_name == values[1],
            "acc_id"
          )
        ) {
          m.mov_id_account = this.findIn(
            this.viewData.accounts,
            (e: any) => e.acc_name == values[1],
            "acc_id"
          );
        } else {
          console.log("account not found", values[1], d);
        }
        m.mov_date = DateUtils.stringDateToDate(values[0]);
        if (
          yearInitial * 100 + monthInitial >
          m.mov_date.getFullYear() * 100 + (m.mov_date.getMonth() + 1)
        ) {
          yearInitial = m.mov_date.getFullYear();
          monthInitial = m.mov_date.getMonth() + 1;
        }
        if (
          values[5] === "Traspaso" &&
          arr[index + 1] &&
          arr[index + 1].split("|")[5] === "Traspaso" &&
          arr[index + 1].split("|")[7] === values[7] &&
          arr[index + 1].split("|")[3] === values[3]
        ) {
          transferFlag = true;
          m.mov_ctg_type = 3;
          // peek next item
          // if (arr[index+1] && arr[index+1].split('|')[5] === "Traspaso" && arr[index+1].split('|')[7] === values[7]){
          m.mov_id_account_to = this.findIn(
            this.viewData.accounts,
            (e: any) => e.acc_name == arr[index + 1].split("|")[1],
            "acc_id"
          );
          // }
          // Transfers always have to be expense first, income later, fix when provided the other way around
          if (values[2] === "CARGO") {
            // swap accounts
            let temp = m.mov_id_account;
            m.mov_id_account = m.mov_id_account_to;
            m.mov_id_account_to = temp;
          }
          m.mov_id_category = "0";
          m.mov_id_place = "0";
        } else {
          m.mov_ctg_type = values[2] === "ABONO" ? 1 : 2;
          m.mov_budget =
            "" + (m.mov_date.getFullYear() * 100 + (m.mov_date.getMonth() + 1));
          m.mov_id_category = this.findIn(
            this.viewData.categories,
            (e: any) => e.mct_name === values[5],
            "mct_id"
          );
          m.mov_id_place = this.findIn(
            this.viewData.places,
            (e: any) => e.mpl_name === values[6],
            "mpl_id"
          );
        }
        m.mov_notes = "";
        m.mov_id_user = "anon";
        m.mov_ctg_status = 1;
        m.mov_date_add = new Date();
        m.mov_date_mod = new Date();

        m.mov_txt_account = this.findIn(
          this.viewData.accounts,
          (e: any) => e.acc_id == m.mov_id_account,
          "acc_name"
        );
        if (m.mov_id_account_to) {
          m.mov_txt_account_to = this.findIn(
            this.viewData.accounts,
            (e: any) => e.acc_id == m.mov_id_account_to,
            "acc_name"
          );
        }
        m.mov_txt_type = this.findIn(
          this.viewData.types,
          (e: any) => e.ctg_ctg_value == m.mov_ctg_type,
          "ctg_desc"
        );
        //m.mov_txt_budget = m.mov_budget;
        m.mov_txt_category = this.findIn(
          this.viewData.categories,
          (e: any) => e.mct_id === m.mov_id_category,
          "mct_name"
        );
        m.mov_txt_place = this.findIn(
          this.viewData.places,
          (e: any) => e.mpl_id === m.mov_id_place,
          "mpl_name"
        );
        m.mov_txt_status = this.findIn(
          this.viewData.statuses,
          (e: any) => e.ctg_ctg_value == m.mov_ctg_status,
          "ctg_desc"
        );

        movements.push(m);
        // this.services.movement.newItem(m);
        // this.generateEntriesForMovement(m);
      } catch (e) {
        console.log("err", e);
      }
    });

    this.services.movement.newBatch(movements).forEach((m: Movement) => {
      this.generateEntriesForMovement(m);
    });

    // now apply to balance
    this.services.balance.rebuildAndTransferRange(
      yearInitial,
      monthInitial,
      yearFinal,
      monthFinal,
      "anon"
    );
  }

  setModelDetails(id: string, form: any, prefix: string) {
    let model: iEntity;
    if (!this.viewData.showCreateForm) {
      this.viewData.showCreateForm = !this.viewData.showCreateForm;
    }

    if (prefix === "pre") {
      model = this.viewData.presets.find((m: Preset) => m.pre_id === id);
    } else {
      model = this.viewData.movements.find((m: Movement) => m.mov_id === id);
      this.model.id = model[prefix + "_id"]; // to tell the newMovementForm that this is an edition
    }

    if (model[prefix + "_ctg_type"] === 3) {
      this.movementFlowType("transfer");
    } else {
      this.movementFlowType("custom");
    }

    let fields: Array<any> = [
      {
        control: "fDescription",
        value: "_desc"
      },
      {
        control: "fAmount",
        value: "_amount"
      },
      {
        control: "fAccount",
        value: "_id_account"
      },
      {
        control: "fAccountTo",
        value: "_id_account_to"
      },
      {
        control: "fMovementType",
        value: "_ctg_type"
      },
      {
        control: "fDate",
        value: "_date"
      },
      {
        control: "fBudget",
        value: "_budget"
      },
      {
        control: "fCategory",
        value: "_id_category"
      },
      {
        control: "fPlace",
        value: "_id_place"
      },
      {
        control: "fNotes",
        value: "_notes"
      }
    ];
    setTimeout(() => {
      fields.forEach((f: any) => {
        if (form.controls[f.control]) {
          const value = model[prefix + f.value];
          let valueToSet = null;

          if (f.value === "_date") {
            if (value !== null) {
              valueToSet = DateUtils.dateToStringDate(new Date(value));
            } else {
              valueToSet = DateUtils.dateToStringDate(new Date());
            }
          } else {
            valueToSet = value || null;
          }

          form.controls[f.control].setValue(valueToSet);
        }
      });
    }, 0);
  }

  handleNewMovement(form: NgForm) {
    if (this.viewData.showCreateForm) {
      // if it's visible, reset and then hide
      this.resetForm(form);
    }
    this.viewData.showCreateForm = !this.viewData.showCreateForm;
  }

  resetForm(form: NgForm) {
    this.model.id = null;
    this.model.selectedPreset = null;
    this.movementFlowType("custom");
    form.reset();
    form.controls["fMovementFlowType"].setValue("custom");
    this.model.type = 1;
    if (form.controls["fMovementType"]) {
      form.controls["fMovementType"].setValue(1);
    }
    form.controls["fDate"].setValue(DateUtils.dateToStringDate(new Date()));
  }

  cancel(id: string, form: NgForm) {
    const m = this.viewData.movements.find(m => m.mov_id === id);
    const existingIndex = this.viewData.movements.findIndex(
      m => m.mov_id === id
    );

    // updates status for cancellation
    m.mov_ctg_status = 2;

    this.services.movement.edit(m, () => {
      this.retrieveAccountsAndBalance();
    });
    m["isEdited"] = true; // flag to render as edited on UI
    this.viewData.movements[existingIndex] = m;
    this.model.id = null;
    this.resetForm(form);
  }

  deleteMovement(id: string, form: NgForm) {
    const m = this.viewData.movements.find(m => m.mov_id === id);
    const existingIndex = this.viewData.movements.findIndex(
      m => m.mov_id === id
    );

    this.services.movement.delete(m, () => {
      this.retrieveAccountsAndBalance();
    });
    m["isEdited"] = true; // flag to render as edited on UI
    this.viewData.movements.splice(existingIndex, 1);
    this.model.id = null;
    this.resetForm(form);
  }

  /**
   * Given a provided place id and a movement listing, it will look into the
   * movement listing and return the related category used in one of those
   * movements representing the associated category for the place to help
   * reducing capture in movement form.
   * @param place Provided place whose category will be looked up
   * @param movementList Universe of movements to search into
   */
  suggestCategoryByPlace(place: string, movementList: Movement[]): string {
    const usage = movementList
      .filter(({ mov_id_place }) => mov_id_place === place)
      .reduce((collection, { mov_id_category }) => {
        if (collection[mov_id_category]) {
          collection[mov_id_category] += 1;
        } else {
          collection[mov_id_category] = 1;
        }
        return collection;
      }, {});

    const max = Object.keys(usage).reduce(
      ({ category, usageCount }, categoryId) => {
        if (usageCount < usage[categoryId]) {
          return {
            category: categoryId,
            usageCount: usage[categoryId]
          };
        }
        return { category, usageCount };
      },
      { category: "", usageCount: 0 }
    );

    return max.category;
  }

  onChangePlace(selectedPlace: string) {
    const suggestedCategory: string = this.suggestCategoryByPlace(
      selectedPlace,
      this.services.movement.list()
    );

    if (suggestedCategory) {
      this.model.category = suggestedCategory;
    }
  }

  onSearch(searchTerm) {
    const fields = [
      // fields considered for the search
      "mov_desc",
      "mov_txt_category",
      "mov_txt_place",
      "mov_amount",
      "mov_budget"
    ];

    if (searchTerm) {
      this.viewData.movements = this.services.movement.list().filter((
        movement // if one field string comparison ignoring case returns true, then use the movement
      ) =>
        fields.some(
          field =>
            movement[field] &&
            movement[field]
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
      );
    } else {
      this.viewData.movements = this.getLastestMovements(
        this.services.movement.list()
      );
    }
  }
}
