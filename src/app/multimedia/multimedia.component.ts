import { Component, OnInit, Renderer } from "@angular/core";
import { NgForm } from "@angular/forms";
// types
import { Multimedia } from "../../crosscommon/entities/Multimedia";

// services
import { MultimediaService } from "./multimedia.service";
import { MultimediaDetService } from "./multimediadet.service";
import { MultimediaViewService } from "./multimediaview.service";
import { LoginService } from "../common/login.service";
import { SyncAPI } from "../common/sync.api";
import { Catalog } from "../../crosscommon/entities/Catalog";
import { MultimediaView } from "../../crosscommon/entities/MultimediaView";
import { MultimediaDet } from "../../crosscommon/entities/MultimediaDet";
import { DateUtils } from "../../crosscommon/DateUtility";
import { SyncQueue } from "../common/SyncQueue";

@Component({
  selector: "multimedia",
  templateUrl: "./multimedia.template.html",
  styleUrls: ["./multimedia.css"],
  providers: [
    MultimediaService,
    MultimediaDetService,
    MultimediaViewService,
    LoginService,
    SyncAPI
  ]
})
export class MultimediaComponent implements OnInit {
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
  } = {
    multimediaList: [],
    multimediaDetList: [],
    multimediaViewList: [],
    mediaTypeList: [],
    platformList: [],
    showCreateForm: false,
    showCreateEpForm: false,
    showDetList: false,
    detListTitle: null
  };
  public services: {
    multimediaService: MultimediaService;
    multimediaDetService: MultimediaDetService;
    multimediaViewService: MultimediaViewService;
    loginService: LoginService;
    syncService: SyncAPI;
  } = {
    multimediaService: null,
    multimediaDetService: null,
    multimediaViewService: null,
    loginService: null,
    syncService: null
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
    fNextEpId: null
  };
  private MEDIA_AGE = {
    old: 10,
    normal: 3,
    recent: 1,
    today: 0
  };

  constructor(
    multimediaService: MultimediaService,
    multimediaDetService: MultimediaDetService,
    multimediaViewService: MultimediaViewService,
    loginService: LoginService,
    syncService: SyncAPI
  ) {
    this.services.multimediaService = multimediaService;
    this.services.multimediaDetService = multimediaDetService;
    this.services.multimediaViewService = multimediaViewService;
    this.services.loginService = loginService;
    this.services.syncService = syncService;

    this.services.multimediaService
      .getAllForUser(this.services.loginService.getUsername() || "anon")
      .then(data => {
        this.viewData.multimediaList = this.calculateAge(data);
      });
    const det = this.services.multimediaDetService.getAllForUser(
      this.services.loginService.getUsername() || "anon"
    );
    const view = this.services.multimediaViewService.getAllForUser(
      this.services.loginService.getUsername() || "anon"
    );

    Promise.all([det, view]).then(values => {
      this.viewData.multimediaViewList = values[1];
      this.renderDetListing(values[0], null);
    });
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
    this.services.syncService
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
    this.services.syncService
      .get(`/api/sync?entity=Catalog&q=${platformQuery}`)
      .then(data => {
        this.viewData.platformList = data.list;
      });
  }

  ngOnInit() {
    if (!this.services.loginService.isLoggedIn()) {
      console.log("User is not logged in");
    }
  }

  handleNewItem() {
    this.viewData.showCreateForm = !this.viewData.showCreateForm;
  }

  newItem(form: NgForm) {
    let values = form.value;

    const item: Multimedia = this.services.multimediaService.newItem(
      values.fTitle,
      values.fMediaType,
      values.fSeason,
      values.fYear,
      values.fCurrentEp,
      values.fTotalEp,
      values.fUrl,
      this.services.loginService.getUsername() || "anon"
    );

    this.viewData.multimediaList.push(item);
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

    // see if we have data for this ep in order to populate form
    const detFound = this.services.multimediaDetService
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

    const viewFound = this.services.multimediaViewService
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
      const previousEpisodes = this.services.multimediaDetService
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
      this.services.multimediaService.list().find(e => e.mma_id === item.mma_id)
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
    const detList = this.services.multimediaDetService.list();
    const existingDetItem = detList.find(
      e => e.mmd_id === this.epModel.id && e.mmd_id_ep === this.epModel.epId
    );

    if (existingDetItem) {
      // Update
      // Create Det Item / push to update as sync queue
      const item: MultimediaDet = this.services.multimediaDetService.newItem(
        this.epModel.id,
        this.epModel.epId,
        values.fEpTitle,
        values.fAltEpTitle,
        values.fYear,
        values.fUrl,
        this.services.loginService.getUsername() || "anon",
        DateUtils.newDateUpToSeconds()
      );

      // Update viewData
      this.viewData.multimediaDetList[
        this.viewData.multimediaDetList.findIndex(
          e => e.mmd_id === this.epModel.id && e.mmd_id_ep === this.epModel.epId
        )
      ] = item;
      // Add it to sync queue for update
      queue.push(this.services.multimediaDetService.asUpdateSyncQueue(item));
    } else {
      // Create Det item
      const item: MultimediaDet = this.services.multimediaDetService.newItem(
        this.epModel.id,
        this.epModel.epId,
        values.fEpTitle,
        values.fAltEpTitle,
        values.fYear,
        values.fUrl,
        this.services.loginService.getUsername() || "anon",
        DateUtils.newDateUpToSeconds(),
        DateUtils.newDateUpToSeconds()
      );

      item.mmd_txt_title = this.epModel.fTitle;
      this.viewData.multimediaDetList.push(item);
      this.viewData.multimediaDetList = this.viewData.multimediaDetList.sort(
        this.sortMultimediaDet
      );
      queue.push(this.services.multimediaDetService.asSyncQueue(item));
    }

    if (values.fIsViewed) {
      // Create View item
      const item2: MultimediaView = this.services.multimediaViewService.newItem(
        this.epModel.id,
        this.epModel.epId,
        values.fSummary,
        new Date(`${values.fDateViewed} ${values.fTimeViewed}`),
        values.fRating,
        values.fPlatform,
        values.fNotes,
        this.services.loginService.getUsername() || "anon"
      );

      this.viewData.multimediaViewList.push(item2);
      queue.push(this.services.multimediaViewService.asSyncQueue(item2));

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
      queue.push(this.services.multimediaService.asUpdateSyncQueue(media));
    }

    this.services.syncService.multipleRequest(queue);
    this.clearEpForm(form);
    this.viewData.showCreateEpForm = false;
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
        ref["viewedDate"] = found ? found.mmv_date_mod : null;
        return !!found;
      }
    );

    if (!id) {
      this.viewData.multimediaDetList = this.viewData.multimediaDetList.filter(
        (item, index) => index < 20
      );
    }
  }

  showDetListing(id: string) {
    this.services.multimediaDetService.getAllForUser("anon").then(data => {
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

  clearEpForm(form: NgForm) {
    form.resetForm();
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
}
