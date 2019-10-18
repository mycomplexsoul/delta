import { Component, OnInit, Renderer } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
// types
import { LastTime } from "../../crosscommon/entities/LastTime";

// services
import { LastTimeService } from "./lasttime.service";
import { DateUtils } from "../../crosscommon/DateUtility";
import { LastTimeHistory } from "src/crosscommon/entities/LastTimeHistory";
import { LastTimeHistoryService } from "./lasttimehistory.service";

@Component({
  selector: "lasttime",
  templateUrl: "./lasttime.template.html",
  styleUrls: ["./lasttime.css"],
  providers: [LastTimeService, LastTimeHistoryService]
})
export class LastTimeComponent implements OnInit {
  public viewData: {
    lastTime: Array<LastTime>;
    showCreateForm: boolean;
    historyList: LastTimeHistory[];
    historyMetadata: LastTime;
    includeArchived: boolean;
  } = {
    lastTime: [],
    showCreateForm: false,
    historyList: [],
    historyMetadata: null,
    includeArchived: false
  };
  public services: {
    lastTime: LastTimeService;
    lastTimeHistory: LastTimeHistoryService;
  } = {
    lastTime: null,
    lastTimeHistory: null
  };
  public model: {
    id: string;
  } = {
    id: null
  };
  public filterApplied: string = "";

  constructor(
    lastTimeService: LastTimeService,
    lastTimeHistoryService: LastTimeHistoryService,
    private titleService: Title
  ) {
    this.services.lastTime = lastTimeService;
    this.services.lastTimeHistory = lastTimeHistoryService;
    titleService.setTitle("Last Time");
  }

  ngOnInit() {
    this.services.lastTime.getAll().then((list: Array<LastTime>) => {
      this.viewData.lastTime = list;
      // calculate validity on each
      this.calculateValidityForAll();
    });

    this.reloadItems = this.reloadItems.bind(this);
  }

  handleNewItem(form: NgForm) {
    this.viewData.showCreateForm = !this.viewData.showCreateForm;
  }

  calculateValidity(item: LastTime) {
    const valueIsDate: boolean = DateUtils.isDate(item.lst_value);
    const baseValue: Date = valueIsDate
      ? new Date(item.lst_value)
      : item.lst_date_mod;
    item["expiryDate"] = DateUtils.addDays(baseValue, item.lst_validity);
    item["ageSentence"] = this.ageSentence(item["expiryDate"]);
    item["ageClass"] = this.ageClass(item["expiryDate"]);
  }

  sort(a: LastTime, b: LastTime) {
    return a["expiryDate"].getTime() >= b["expiryDate"].getTime() ? 1 : -1;
  }

  calculateValidityForAll() {
    let list: LastTime[] = this.services.lastTime.list();
    list.forEach(item => {
      this.calculateValidity(item);
    });

    list = list.sort(this.sort);
    if (this.filterApplied) {
      list = list.filter(i => this.criteriaForFilter(i, this.filterApplied));
    } else {
    }
    this.viewData.lastTime = list;
  }

  async newItem(form: NgForm) {
    let values = form.value;

    if (this.model.id) {
      // edit
      const existingIndex: number = this.viewData.lastTime.findIndex(
        e => e.lst_id === this.model.id
      );
      const item: LastTime = this.viewData.lastTime[existingIndex];

      item.lst_name = values.fName;
      item.lst_value = values.fValue;
      item.lst_validity = values.fValidity;
      item.lst_tags = values.fTags;
      item.lst_notes = values.fNotes;

      await this.services.lastTime.updateItem(item, {
        noHistory: true
      });

      item["isEdited"] = true; // flag to render as edited on UI
      this.viewData.lastTime[existingIndex] = item;
      this.model.id = null;
    } else {
      // new item
      this.services.lastTime
        .newItem(
          values.fName,
          values.fValue,
          values.fValidity,
          values.fTags,
          values.fNotes
        )
        .then(item => {
          this.viewData.lastTime = this.services.lastTime.list();
          const listItem = this.viewData.lastTime.find(
            elem => elem.lst_id === item.lst_id
          );
          listItem["isNew"] = true;
          this.calculateValidityForAll();
        });
    }
  }

  ageSentence(baseDate: Date) {
    let diff = DateUtils.age(baseDate);
    let str = "";
    if (diff > 1) {
      str = `(${diff} days left)`;
    }
    if (diff === 1) {
      str = "(tomorrow)";
    }
    if (diff === 0) {
      str = "(today)";
    }
    if (diff === -1) {
      str = "(yesterday)";
    }
    if (diff < -1) {
      str = `(${Math.abs(diff)} days ago)`;
    }
    return str;
  }

  ageClass(baseDate: Date) {
    let diff = DateUtils.age(baseDate);
    let str = "";
    if (diff >= 10) {
      str = "lasttime-age-10-left";
    }
    if (diff > 1 && diff < 10) {
      str = "lasttime-age-2-left";
    }
    if (diff === 1) {
      str = "lasttime-age-1-left";
    }
    if (diff === 0) {
      str = "lasttime-age-0";
    }
    if (diff === -1) {
      str = "lasttime-age-1-ago";
    }
    if (diff < -1 && diff > -10) {
      str = "lasttime-age-2-ago";
    }
    if (diff < -10) {
      str = "lasttime-age-10-ago";
    }

    return str;
  }

  editValue(item: LastTime, event: KeyboardEvent) {
    const newValue: string = event.target["textContent"];

    if (item.lst_value !== newValue) {
      item.lst_value = newValue;
      item.lst_date_mod = DateUtils.newDateUpToSeconds();
      item["isEdited"] = true;

      if (item.lst_tags.indexOf("edit-notes") !== -1) {
        const newNotes: string = prompt("Notes for this item", item.lst_notes);

        if (item.lst_notes !== newNotes) {
          item.lst_notes = newNotes;
        }
      }

      this.services.lastTime.updateItem(item).then(response => {
        this.calculateValidityForAll();
      });
    }
  }

  archiveRecord(item: LastTime) {
    item.lst_ctg_status = 3; // archived
    item.lst_date_mod = DateUtils.newDateUpToSeconds();
    item["isEdited"] = true;

    this.services.lastTime.updateItem(item).then(response => {
      this.calculateValidityForAll();
      // this.updateBackupItem(item);
    });
  }

  criteriaForFilter = (item: LastTime, query: string) =>
    item.lst_name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
    item.lst_tags.toLowerCase().indexOf(query.toLowerCase()) !== -1;

  filter(event: KeyboardEvent) {
    const query: string = event.target["value"];

    this.filterApplied = query;
    if (query) {
      this.viewData.lastTime = this.services.lastTime
        .list()
        .filter(i => this.criteriaForFilter(i, this.filterApplied));
    } else {
      this.viewData.lastTime = this.services.lastTime.list().sort(this.sort);
    }
  }

  editNotes(item: LastTime) {
    const currentValue: string = item.lst_notes;

    const newValue: string = window.prompt(
      `${item.lst_name} - Notes`,
      currentValue
    );
    if (currentValue !== newValue && newValue !== null) {
      item.lst_notes = newValue;
      item.lst_date_mod = DateUtils.newDateUpToSeconds();
      item["isEdited"] = true;

      this.services.lastTime.updateItem(item).then(response => {
        this.calculateValidityForAll();
      });
    }
  }

  viewHistory(item: LastTime) {
    this.viewData.historyMetadata = item;
    this.services.lastTimeHistory.getAll(item.lst_id).then(data => {
      this.viewData.historyList = data.sort((a, b) =>
        new Date(a.lth_date_mod).getTime() < new Date(b.lth_date_mod).getTime()
          ? 1
          : -1
      );
    });
  }

  hideHistory() {
    this.viewData.historyMetadata = null;
    this.viewData.historyList = [];
  }

  selectValue(event: Node) {
    window.getSelection().selectAllChildren(event["target"]);
  }

  reloadItems({ checked: includeArchived }) {
    this.services.lastTime.setIncludeArchived(includeArchived);
    this.services.lastTime.getAll().then(lastTimeList => {
      this.viewData.lastTime = lastTimeList;

      this.calculateValidityForAll();
    });
  }

  setModelDetails(model: LastTime, form: NgForm) {
    if (!this.viewData.showCreateForm) {
      this.viewData.showCreateForm = !this.viewData.showCreateForm;
    }

    this.model.id = model.lst_id; // to tell the form that this is an edition

    setTimeout(() => {
      form.controls["fName"].setValue(model.lst_name);
      form.controls["fValue"].setValue(model.lst_value);
      form.controls["fValidity"].setValue(model.lst_validity);
      form.controls["fTags"].setValue(model.lst_tags);
      form.controls["fNotes"].setValue(model.lst_notes);
    }, 0);
  }
}
