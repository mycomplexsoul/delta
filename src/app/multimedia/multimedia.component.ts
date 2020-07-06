import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
// types
import { Multimedia } from "../../crosscommon/entities/Multimedia";
import { MultimediaView } from "../../crosscommon/entities/MultimediaView";
import { MultimediaDet } from "../../crosscommon/entities/MultimediaDet";

// services
import { MultimediaService } from "./multimedia.service";
import { MultimediaDetService } from "./multimediadet.service";
import { MultimediaViewService } from "./multimediaview.service";
import { SyncAPI } from "../common/sync.api";
import { Catalog } from "../../crosscommon/entities/Catalog";
import { DateUtils } from "../../crosscommon/DateUtility";
import { SyncQueue } from "../common/SyncQueue";
import { CommonComponent } from "../common/common.component";

import { startSpeechRecognition } from "../common/speechRecognition";

@Component({
  selector: "multimedia",
  templateUrl: "./multimedia.template.html",
  styleUrls: ["./multimedia.css"],
  providers: [
    MultimediaService,
    MultimediaDetService,
    MultimediaViewService,
    SyncAPI
  ]
})
export class MultimediaComponent {
  public viewData: {
    multimediaList: Multimedia[];
    multimediaDetList: MultimediaDet[];
    multimediaViewList: MultimediaView[];
    mediaTypeList: Catalog[];
    platformList: Catalog[];
    showCreateForm: boolean;
    showCreateEpForm: boolean;
    showDetList: boolean;
    detListTitle: string;
    multimediaDetListWithGroups: any[];
  } = {
    multimediaList: [],
    multimediaDetList: [],
    multimediaViewList: [],
    mediaTypeList: [],
    platformList: [],
    showCreateForm: false,
    showCreateEpForm: false,
    showDetList: false,
    detListTitle: null,
    multimediaDetListWithGroups: []
  };

  public model: {
    id: string;
    fMediaType: number;
    fSeason: number;
    fYear: number;
    fCurrentEp: string;
  } = {
    id: null,
    fMediaType: 1,
    fSeason: 1,
    fYear: new Date().getFullYear(),
    fCurrentEp: "1"
  };
  public epModel: {
    id: string;
    epId: string;
    fTitle: string;
    fYear: number;
    fEpTitle: string;
    fAltEpTitle: string;
    fUrl: string;
    isViewed: boolean;
    fDateViewed: string;
    fTimeViewed: string;
    fSummary: string;
    fRating: number;
    fPlatform: number;
    fNotes: string;
    fNextEpId: string;
    mediaUrl: string;
    _DateViewedType: string;
  } = {
    id: null,
    epId: null,
    fTitle: null,
    fYear: null,
    fEpTitle: null,
    fAltEpTitle: null,
    fUrl: null,
    isViewed: false,
    fDateViewed: "",
    fTimeViewed: "",
    fSummary: null,
    fRating: 0,
    fPlatform: 0,
    fNotes: null,
    fNextEpId: null,
    mediaUrl: null,
    _DateViewedType: "current"
  };
  private MEDIA_AGE = {
    old: 10,
    normal: 3,
    recent: 1,
    today: 0
  };

  public common: CommonComponent<Multimedia> = null;

  constructor(
    private multimediaService: MultimediaService,
    private multimediaDetService: MultimediaDetService,
    private multimediaViewService: MultimediaViewService,
    private syncService: SyncAPI,
    private titleService: Title
  ) {
    this.titleService.setTitle("Multimedia");
    this.common = new CommonComponent<Multimedia>();
    this.multimediaService.getAll().then(data => {
      this.viewData.multimediaList = this.calculateAge(data);
    });
    const det = this.multimediaDetService.getAll();
    const view = this.multimediaViewService.getAll();

    Promise.all([det, view]).then(
      (values: [MultimediaDet[], MultimediaView[]]) => {
        this.viewData.multimediaViewList = values[1];
        this.renderDetListing(values[0], null);
      }
    );
    const mediaTypes: string = JSON.stringify({
      gc: "AND",
      cont: [
        {
          f: "ctg_id",
          op: "eq",
          val: "MULTIMEDIA_MEDIA_TYP" // TODO: fix database length for field ctg_name
        }
      ]
    });
    this.syncService
      .get(`/api/sync?entity=Catalog&q=${mediaTypes}`)
      .then(data => {
        this.viewData.mediaTypeList = data.list;
      });

    const platformQuery: string = JSON.stringify({
      gc: "AND",
      cont: [
        {
          f: "ctg_id",
          op: "eq",
          val: "MULTIMEDIA_PLATFORM" // TODO: fix database length for field ctg_name
        }
      ]
    });
    this.syncService
      .get(`/api/sync?entity=Catalog&q=${platformQuery}`)
      .then(data => {
        this.viewData.platformList = data.list;
      });
  }

  toggleShowItemForm() {
    if (this.viewData.showCreateForm) {
      this.model.id = null;
    }
    this.viewData.showCreateForm = !this.viewData.showCreateForm;
  }

  findById(item: Multimedia, id: string) {
    return item.mma_id === id;
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.multimediaList,
        onFindExpression: item => this.findById(item, this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Multimedia(item);

          newItem.mma_title = formValues.fTitle;
          newItem.mma_ctg_media_type = formValues.fMediaType;
          newItem.mma_season = formValues.fSeason;
          newItem.mma_year = formValues.fYear;
          newItem.mma_current_ep = formValues.fCurrentEp;
          newItem.mma_total_ep = formValues.fTotalEp;
          newItem.mma_url = formValues.fUrl;

          return newItem;
        },
        onUpdateItemService: item => this.multimediaService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        }
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.multimediaList,
        onFindExpression: (item, newItem) =>
          this.findById(item, newItem.mma_id),
        onAssignForCreate: formValues => {
          const newItem = new Multimedia({
            mma_title: formValues.fTitle,
            mma_ctg_media_type: formValues.fMediaType,
            mma_season: formValues.fSeason,
            mma_year: formValues.fYear,
            mma_current_ep: formValues.fCurrentEp,
            mma_total_ep: formValues.fTotalEp || 0,
            mma_url: formValues.fUrl,
            mma_ctg_status: formValues.fCtgStatus || 1
          });
          return newItem;
        },
        onNewItemService: item => {
          return this.multimediaService.newItem(item);
        },
        onFinalExecution: () => {
          this.viewData.showCreateForm = false;
          this.model.id = null;
        }
      });
    }

    this.common.resetForm(form, () => {
      this.resetForm(form);
    });
    this.viewData.showCreateForm = false;
  }

  resetForm(form: NgForm) {
    form.resetForm();

    this.model.id = null;
    this.model.fMediaType = 1;
    this.model.fSeason = 1;
    this.model.fYear = new Date().getFullYear();
    this.model.fCurrentEp = "1";
  }

  setModelDetails(id: string, form: NgForm) {
    let model: Multimedia;
    if (!this.viewData.showCreateForm) {
      this.viewData.showCreateForm = !this.viewData.showCreateForm;
    }

    model = this.viewData.multimediaList.find(item => this.findById(item, id));
    this.model.id = model.mma_id; // to tell the form that this is an edition

    setTimeout(() => {
      form.controls["fTitle"].setValue(model.mma_title);
      form.controls["fMediaType"].setValue(model.mma_ctg_media_type);
      form.controls["fSeason"].setValue(model.mma_season);
      form.controls["fYear"].setValue(model.mma_year);
      form.controls["fCurrentEp"].setValue(model.mma_current_ep);
      form.controls["fTotalEp"].setValue(model.mma_total_ep);
      form.controls["fUrl"].setValue(model.mma_url);
    }, 0);
  }

  showNewEpForm(item: Multimedia) {
    item["showOptions"] = false;
    this.viewData.showCreateEpForm = true;
    this.epModel.id = item.mma_id;
    this.epModel.epId = item.mma_current_ep;
    this.epModel.fTitle = item.mma_title;
    this.epModel.fYear = item.mma_year;
    this.epModel.fDateViewed = DateUtils.dateToStringDate(new Date());
    this.epModel.fTimeViewed = DateUtils.timeFromDateAsString(new Date());
    this.epModel.fRating = 3;
    this.epModel.fPlatform = this.viewData.platformList[0].ctg_sequential;
    this.epModel.isViewed = true;
    this.epModel.mediaUrl = item.mma_url;

    // see if we have data for this ep in order to populate form
    const detFound = this.multimediaDetService
      .list()
      .find(
        e => e.mmd_id === item.mma_id && e.mmd_id_ep === item.mma_current_ep
      );
    if (detFound) {
      this.epModel.fEpTitle = detFound.mmd_ep_title;
      this.epModel.fAltEpTitle = detFound.mmd_ep_alt_title;
      this.epModel.fYear = detFound.mmd_year;
      this.epModel.fUrl = detFound.mmd_url;
    }

    const viewFound = this.multimediaViewService
      .list()
      .find(
        e => e.mmv_id === item.mma_id && e.mmv_id_ep === item.mma_current_ep
      );
    if (viewFound) {
      this.epModel.isViewed = true;
      this.epModel.fSummary = viewFound.mmv_ep_summary;
      this.epModel.fDateViewed = DateUtils.dateToStringDate(
        viewFound.mmv_date_viewed
      );
      this.epModel.fTimeViewed = DateUtils.timeFromDateAsString(
        viewFound.mmv_date_viewed
      );
      this.epModel.fRating = viewFound.mmv_num_rating;
      this.epModel.fPlatform = viewFound.mmv_ctg_platform;
      this.epModel.fNotes = viewFound.mmv_notes;
    }

    // if year is not set, try to peek into previous ep and use that
    if (this.epModel.fYear === 0) {
      const previousEpisodes = this.multimediaDetService
        .list()
        .filter(e => e.mmd_id === item.mma_id)
        .sort((a, b) => (a.mmd_date_add < b.mmd_date_add ? 1 : -1));
      if (previousEpisodes.length > 0) {
        const previousEp: MultimediaDet = previousEpisodes[0];

        if (previousEp) {
          this.epModel.fYear = previousEp.mmd_year;
        }
      }
    }

    // set our guess on the next ep id so the user can verify or change it
    this.epModel.fNextEpId = this.calculateNextEp(item.mma_current_ep);
    // if next ep is beyond last ep, set it as the last ep
    const numericNextEpId: number = Number.parseFloat(this.epModel.fNextEpId);
    const numericLastEpId: number = Number.parseFloat(
      this.multimediaService.list().find(e => e.mma_id === item.mma_id)
        .mma_total_ep
    );
    if (numericLastEpId !== 0 && numericNextEpId > numericLastEpId) {
      this.epModel.fNextEpId = String(numericLastEpId);
    }

    // set focus
    setTimeout(() => document.querySelector("#fEpTitle")["focus"](), 100);
  }

  hideNewEpForm() {
    this.viewData.showCreateEpForm = false;
  }

  newEpItem(form: NgForm) {
    let values = form.value;

    const queue: SyncQueue[] = [];

    // Peek if this Det item is already created
    const detList = this.multimediaDetService.list();
    const existingDetItem = detList.find(
      e => e.mmd_id === this.epModel.id && e.mmd_id_ep === this.epModel.epId
    );

    if (existingDetItem) {
      // Update
      // Create Det Item / push to update as sync queue
      const item: MultimediaDet = this.multimediaDetService.newItem(
        this.epModel.id,
        this.epModel.epId,
        values.fEpTitle,
        values.fAltEpTitle,
        values.fYear,
        values.fUrl
      );

      // Update viewData
      const index = this.viewData.multimediaDetList.findIndex(
        e => e.mmd_id === this.epModel.id && e.mmd_id_ep === this.epModel.epId
      );
      if (index === -1) {
        this.viewData.multimediaDetList.push(item);
      } else {
        this.viewData.multimediaDetList[index] = item;
      }
      item.mmd_txt_title = this.epModel.fTitle;
      // Add it to sync queue for update
      queue.push(this.multimediaDetService.asUpdateSyncQueue(item));
    } else {
      // Create Det item
      const item: MultimediaDet = this.multimediaDetService.newItem(
        this.epModel.id,
        this.epModel.epId,
        values.fEpTitle,
        values.fAltEpTitle,
        values.fYear,
        values.fUrl
      );

      item.mmd_txt_title = this.epModel.fTitle;
      this.viewData.multimediaDetList.unshift(item);
      this.viewData.multimediaDetList = this.viewData.multimediaDetList.sort(
        this.sortMultimediaDet
      );
      queue.push(this.multimediaDetService.asSyncQueue(item));
    }

    if (values.fIsViewed) {
      // Create View item
      const item2: MultimediaView = this.multimediaViewService.newItem(
        this.epModel.id,
        this.epModel.epId,
        values.fSummary,
        this.epModel._DateViewedType === "current"
          ? new Date()
          : new Date(`${values.fDateViewed} ${values.fTimeViewed}`),
        values.fRating,
        values.fPlatform,
        values.fNotes
      );

      this.viewData.multimediaViewList.push(item2);
      queue.push(this.multimediaViewService.asSyncQueue(item2));

      // Updates Media item
      const media = this.viewData.multimediaList.find(
        item => item.mma_id === this.epModel.id
      );
      const isFinished: boolean = media.mma_current_ep === media.mma_total_ep;
      if (!isFinished) {
        media.mma_current_ep = values.fNextEpId;
      } else {
        media.mma_ctg_status = 2; // marks it as finished
      }
      media.mma_date_mod = new Date();
      this.viewData.multimediaList = this.calculateAge(
        this.viewData.multimediaList
      ).sort((a: Multimedia, b: Multimedia) => {
        return a.mma_date_mod.getTime() > b.mma_date_mod.getTime() ? 1 : -1;
      });
      queue.push(this.multimediaService.asUpdateSyncQueue(media));

      // if title or url were provided, we push a new ep to the queue
      if (values.fNextEpTitle || values.fNextEpUrl) {
        const itemNext: MultimediaDet = this.multimediaDetService.newItem(
          this.epModel.id,
          values.fNextEpId,
          values.fNextEpTitle || null,
          null,
          values.fYear,
          values.fNextEpUrl || null
        );

        itemNext.mmd_txt_title = this.epModel.fTitle;
        this.viewData.multimediaDetList.unshift(itemNext);
        this.viewData.multimediaDetList = this.viewData.multimediaDetList.sort(
          this.sortMultimediaDet
        );
        queue.push(this.multimediaDetService.asSyncQueue(itemNext));
      }
    }

    this.syncService.multipleRequest(queue);
    this.resetEpForm(form);
    this.viewData.showCreateEpForm = false;
    this.renderDetListing(this.viewData.multimediaDetList, null);
  }

  calculateNextEp(currentEp: string): string {
    if (DateUtils.isDate(currentEp)) {
      const asDate: Date = new Date(currentEp);
      return DateUtils.formatDate(DateUtils.addDays(asDate, 7));
    }

    const asInteger: number = Number.parseInt(currentEp);
    const asFloat: number = Number.parseFloat(currentEp);

    if (asInteger - asFloat < 0.1) {
      // as integer
      return String(asInteger + 1);
    } else {
      // as float
      return String(Math.ceil(asFloat));
    }
  }

  renderDetListing(list: MultimediaDet[], id: string) {
    this.viewData.showDetList = !!id;
    if (id) {
      this.viewData.detListTitle = this.viewData.multimediaList.find(
        item => item.mma_id === id
      ).mma_title;
    } else {
      this.viewData.detListTitle = null;
    }
    this.viewData.multimediaDetList = id
      ? list.filter(item => item.mmd_id === id)
      : list.sort(this.sortMultimediaDet);

    this.viewData.multimediaDetList = this.viewData.multimediaDetList.filter(
      item => {
        const ref: MultimediaDet = item;
        const found: MultimediaView = this.viewData.multimediaViewList.find(
          e => e.mmv_id === item.mmd_id && e.mmv_id_ep === item.mmd_id_ep
        );
        ref["viewedDate"] = found ? found.mmv_date_viewed : null;
        return !!found;
      }
    );

    if (!id) {
      this.viewData.multimediaDetList = this.viewData.multimediaDetList.filter(
        (item, index) => index < 40
      );
    }

    const multimediaDetListWithGroups = [];
    const diffDates: Date[] = [];
    this.viewData.multimediaDetList.forEach(d => {
      const dayViewed: Date = DateUtils.dateOnly(d["viewedDate"]);
      const found = diffDates.find(e => e.getTime() === dayViewed.getTime());
      if (!found) {
        diffDates.push(dayViewed);
        multimediaDetListWithGroups.push({
          date: dayViewed,
          items: this.viewData.multimediaDetList
            .filter(
              m =>
                DateUtils.dateOnly(m["viewedDate"]).getTime() ===
                dayViewed.getTime()
            )
            .map(d => {
              d["viewedInfo"] = this.viewData.multimediaViewList.find(
                v => v.mmv_id === d.mmd_id && v.mmv_id_ep === d.mmd_id_ep
              );
              return d;
            })
        });
      }
    });
    this.viewData.multimediaDetListWithGroups = multimediaDetListWithGroups;
  }

  showDetListing(id: string) {
    this.multimediaDetService.getAll().then(data => {
      this.renderDetListing(data, id);
    });
  }

  calculateAge(list: Multimedia[]): Multimedia[] {
    const ageInDays = (base: Date) => DateUtils.elapsedDays(new Date(), base);
    const classname = (age: number) => {
      const entry = Object.entries(this.MEDIA_AGE).find(
        entry => entry[1] <= age
      );
      return entry[0];
    };

    return list.map(item => {
      const t = item;
      t["age"] = ageInDays(t.mma_date_mod);
      t["ageClassname"] = `multimedia-${classname(t["age"])}`;
      return t;
    });
  }

  sortMultimediaDet(a: MultimediaDet, b: MultimediaDet) {
    return new Date(a.mmd_date_mod).getTime() >
      new Date(b.mmd_date_mod).getTime()
      ? -1
      : 1;
  }

  resetEpForm(form: NgForm) {
    this.epModel.id = null;
    this.epModel.epId = null;
    this.epModel.fTitle = null;
    this.epModel.fYear = null;
    this.epModel.fEpTitle = null;
    this.epModel.fAltEpTitle = null;
    this.epModel.fUrl = null;
    this.epModel.isViewed = false;
    this.epModel.fDateViewed = "";
    this.epModel.fTimeViewed = "";
    this.epModel.fSummary = null;
    this.epModel.fRating = 0;
    this.epModel.fPlatform = 0;
    this.epModel.fNotes = null;
    this.epModel.fNextEpId = null;

    form.resetForm();
    this.epModel._DateViewedType = "current";
  }

  splitEpInfo(info: string): void {
    if (info && info.includes("|")) {
      const splitted: string[] = info.split("|");

      this.epModel.fEpTitle = splitted[0];
      this.epModel.fAltEpTitle = splitted[1] || "";
      this.epModel.fYear = Number.parseInt(splitted[2]);
      this.epModel.fUrl = splitted[3].trim() || "";
      this.epModel.fSummary = splitted[4] || "";

      document.querySelector("#fRating")["focus"]();
    }
  }

  dictate() {
    startSpeechRecognition()
      .then(text => {
        this.epModel.fNotes = text;
      })
      .catch(console.log);
    return false;
  }
}
