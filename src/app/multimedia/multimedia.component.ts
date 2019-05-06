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
  } = {
    multimediaList: [],
    multimediaDetList: [],
    multimediaViewList: [],
    mediaTypeList: [],
    platformList: [],
    showCreateForm: false,
    showCreateEpForm: false,
    showDetList: false
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
    this.services.multimediaDetService
      .getAllForUser(this.services.loginService.getUsername() || "anon")
      .then((data: MultimediaDet[]) => {
        this.viewData.multimediaDetList = data
          .sort((a, b) =>
            new Date(a.mmd_date_mod).getTime() >
            new Date(b.mmd_date_mod).getTime()
              ? -1
              : 1
          )
          .filter((item, index) => index < 20);
      });
    this.services.multimediaViewService
      .getAllForUser(this.services.loginService.getUsername() || "anon")
      .then((data: MultimediaView[]) => {
        this.viewData.multimediaViewList = data;
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

  showNewEpForm(id: string, epId: string, title: string) {
    this.viewData.showCreateEpForm = true;
    this.epModel.id = id;
    this.epModel.epId = epId;
    this.epModel.fTitle = title;
    this.epModel.fDateViewed = DateUtils.dateToStringDate(new Date());
    this.epModel.fTimeViewed = DateUtils.timeFromDateAsString(new Date());

    // see if we have data for this ep in order to populate form
    const detFound = this.services.multimediaDetService
      .list()
      .find(item => item.mmd_id === id && item.mmd_id_ep === epId);
    if (detFound) {
      this.epModel.fEpTitle = detFound.mmd_ep_title;
      this.epModel.fAltEpTitle = detFound.mmd_ep_alt_title;
      this.epModel.fYear = detFound.mmd_year;
      this.epModel.fUrl = detFound.mmd_url;
    }

    this.epModel.isViewed = false;
    const viewFound = this.services.multimediaViewService
      .list()
      .find(item => item.mmv_id === id && item.mmv_id_ep === epId);
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

    // set our guess on the next ep id so the user can verify or change it
    this.epModel.fNextEpId = this.calculateNextEp(epId);
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

      this.viewData.multimediaDetList.push(item);
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
      media.mma_current_ep = values.fNextEpId;
      media.mma_date_mod = new Date();
      queue.push(this.services.multimediaService.asUpdateSyncQueue(media));
    }

    this.services.syncService.multipleRequest(queue);
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

  showDetListing(id: string) {
    this.services.multimediaDetService.getAllForUser("anon").then(data => {
      this.viewData.showDetList = !!id;
      this.viewData.multimediaDetList = id
        ? data.filter(item => item.mmd_id === id)
        : data;
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
}
