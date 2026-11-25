import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
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
import { autogrowSetup } from "../common/autogrow";
import { NotificationService } from "../common/notification.service";

interface WikidataSearchHit {
  id: string;
}

interface WikidataClaimValue {
  mainsnak?: {
    datavalue?: {
      value?: string | { id?: string; time?: string };
    };
  };
}

interface WikidataEntity {
  labels?: { [language: string]: { value?: string } };
  descriptions?: { [language: string]: { value?: string } };
  aliases?: { [language: string]: Array<{ value?: string }> };
  claims?: { [property: string]: WikidataClaimValue[] };
  sitelinks?: { [site: string]: { title?: string } };
}

interface ImdbSuggestionHit {
  id: string;
  l: string;
  q?: string;
  y?: number;
  yr?: string;
  s?: string;
  i?: { imageUrl?: string };
}

interface MediaSearchResult {
  id: string;
  title: string;
  aliases: string[];
  description: string;
  year: number;
  imageUrl: string;
  pageUrl: string;
  mediaType: string;
  cast?: string;
  source: "wikipedia" | "imdb";
  wikipediaLanguage: string | null;
  wikipediaTitle: string | null;
}

interface WikipediaPage {
  title?: string;
  extract?: string;
  fullurl?: string;
  thumbnail?: { source?: string };
}

@Component({
  selector: "multimedia",
  templateUrl: "./multimedia.template.html",
  styleUrls: ["./multimedia.css"],
  providers: [
    MultimediaService,
    MultimediaDetService,
    MultimediaViewService,
    SyncAPI,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MultimediaComponent {
  public mediaSearchDialogOpen = false;
  public mediaSearchSource: "wikipedia" | "imdb" = "imdb";
  public mediaSearchQuery = "";
  public mediaSearchResults: MediaSearchResult[] = [];
  public mediaSearchLoading = false;
  public mediaSearchError: string = null;
  public mediaSearchCompleted = false;

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
    latestViewedDate: Date;
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
    multimediaDetListWithGroups: [],
    latestViewedDate: null,
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
    fCurrentEp: "1",
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
    fNextEpTitle: string;
    fNextEpUrl: string;
    mediaUrl: string;
    _DateViewedType: string;
    isEditingView: boolean;
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
    fNextEpTitle: null,
    fNextEpUrl: null,
    mediaUrl: null,
    _DateViewedType: "current",
    isEditingView: false,
  };
  private MEDIA_AGE = {
    oldest: 30,
    old: 15,
    normal: 7,
    recent: 1,
    today: 0,
  };

  public common: CommonComponent<Multimedia> = null;

  constructor(
    private multimediaService: MultimediaService,
    private multimediaDetService: MultimediaDetService,
    private multimediaViewService: MultimediaViewService,
    private syncService: SyncAPI,
    private titleService: Title,
    private notificationService: NotificationService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.titleService.setTitle("Multimedia");
    this.common = new CommonComponent<Multimedia>();
    this.multimediaService.getAll().then((data) => {
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
          val: "MULTIMEDIA_MEDIA_TYP", // TODO: fix database length for field ctg_name
        },
      ],
    });
    this.syncService
      .get(`/api/sync?entity=Catalog&q=${mediaTypes}`)
      .then((data) => {
        this.viewData.mediaTypeList = data.list;
      });

    const platformQuery: string = JSON.stringify({
      gc: "AND",
      cont: [
        {
          f: "ctg_id",
          op: "eq",
          val: "MULTIMEDIA_PLATFORM", // TODO: fix database length for field ctg_name
        },
      ],
    });
    this.syncService
      .get(`/api/sync?entity=Catalog&q=${platformQuery}`)
      .then((data) => {
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
        onFindExpression: (item) => this.findById(item, this.model.id),
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
        onUpdateItemService: (item) => this.multimediaService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        },
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.multimediaList,
        onFindExpression: (item, newItem) =>
          this.findById(item, newItem.mma_id),
        onAssignForCreate: (formValues) => {
          const newItem = new Multimedia({
            mma_title: formValues.fTitle,
            mma_ctg_media_type: formValues.fMediaType,
            mma_season: formValues.fSeason,
            mma_year: formValues.fYear,
            mma_current_ep: formValues.fCurrentEp,
            mma_total_ep: formValues.fTotalEp || 0,
            mma_url: formValues.fUrl,
            mma_ctg_status: formValues.fCtgStatus || 1,
          });
          return newItem;
        },
        onNewItemService: (item) => {
          return this.multimediaService.newItem(item);
        },
        onFinalExecution: () => {
          this.viewData.showCreateForm = false;
          this.model.id = null;
        },
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

    model = this.viewData.multimediaList.find((item) =>
      this.findById(item, id)
    );
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
    this.resetEpModel();
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

    // autogrow textarea
    autogrowSetup();

    // Peek into previous ep and use that if it's posterior to media year
    const previousEpisodes = this.multimediaDetService
      .list()
      .filter((e) => e.mmd_id === item.mma_id)
      .sort((a, b) => (a.mmd_date_add < b.mmd_date_add ? 1 : -1));
    if (previousEpisodes.length > 0) {
      const previousEp: MultimediaDet = previousEpisodes[0];

      if (previousEp && previousEp.mmd_year > this.epModel.fYear) {
        this.epModel.fYear = previousEp.mmd_year;
      }
    }

    // see if we have data for this ep in order to populate form
    const detFound = this.multimediaDetService
      .list()
      .find(
        (e) => e.mmd_id === item.mma_id && e.mmd_id_ep === item.mma_current_ep
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
        (e) => e.mmv_id === item.mma_id && e.mmv_id_ep === item.mma_current_ep
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

    // set our guess on the next ep id so the user can verify or change it
    this.epModel.fNextEpId = this.calculateNextEp(item.mma_current_ep);
    // if next ep is beyond last ep, set it as the last ep
    const numericNextEpId: number = Number.parseFloat(this.epModel.fNextEpId);
    const numericLastEpId: number = Number.parseFloat(
      this.multimediaService.list().find((e) => e.mma_id === item.mma_id)
        .mma_total_ep
    );
    if (numericLastEpId !== 0 && numericNextEpId > numericLastEpId) {
      this.epModel.fNextEpId = String(numericLastEpId);
    }

    // set focus
    setTimeout(() => document.querySelector("#fEpTitle")["focus"](), 100);
  }

  showEditViewForm(item: MultimediaDet) {
    const media = this.viewData.multimediaList.find(
      (entry) => entry.mma_id === item.mmd_id
    );
    const viewed = this.multimediaViewService
      .list()
      .find(
        (entry) =>
          entry.mmv_id === item.mmd_id && entry.mmv_id_ep === item.mmd_id_ep
      );
    if (!media || !viewed) {
      this.notificationService.notify("Error loading multimedia item");
      return;
    }

    this.showNewEpForm(media);
    this.epModel.isEditingView = true;
    this.epModel.epId = item.mmd_id_ep;

    const det = this.multimediaDetService
      .list()
      .find(
        (entry) =>
          entry.mmd_id === item.mmd_id && entry.mmd_id_ep === item.mmd_id_ep
      );
    if (det) {
      this.epModel.fEpTitle = det.mmd_ep_title;
      this.epModel.fAltEpTitle = det.mmd_ep_alt_title;
      this.epModel.fYear = det.mmd_year;
      this.epModel.fUrl = det.mmd_url;
    }

    this.epModel.isViewed = true;
    this.epModel.fSummary = viewed.mmv_ep_summary;
    this.epModel.fDateViewed = DateUtils.dateToStringDate(
      viewed.mmv_date_viewed
    );
    this.epModel.fTimeViewed = DateUtils.timeFromDateAsString(
      viewed.mmv_date_viewed
    );
    this.epModel._DateViewedType = "custom";
    this.epModel.fRating = viewed.mmv_num_rating;
    this.epModel.fPlatform = viewed.mmv_ctg_platform;
    this.epModel.fNotes = viewed.mmv_notes;
  }

  hideNewEpForm() {
    this.viewData.showCreateEpForm = false;
  }

  openMediaSearch() {
    this.mediaSearchDialogOpen = true;
    this.mediaSearchQuery = this.epModel.fEpTitle || "";
    this.mediaSearchResults = [];
    this.mediaSearchError = null;
    this.mediaSearchCompleted = false;
  }

  closeMediaSearch() {
    this.mediaSearchDialogOpen = false;
  }

  async searchOpenDataCatalog() {
    const query = this.mediaSearchQuery.trim();
    if (!query || this.mediaSearchLoading) {
      return;
    }

    this.mediaSearchLoading = true;
    this.mediaSearchError = null;
    this.mediaSearchCompleted = false;
    this.mediaSearchResults = [];

    try {
      if (this.mediaSearchSource === "imdb") {
        await this.searchImdbSource(query);
      } else {
        await this.searchWikipediaSource(query);
      }
    } catch {
      this.mediaSearchError = `No fue posible consultar ${
        this.mediaSearchSource === "imdb" ? "IMDb" : "Wikipedia"
      }. Intenta de nuevo.`;
    } finally {
      this.mediaSearchLoading = false;
      this.mediaSearchCompleted = true;
      this.changeDetector.markForCheck();
    }
  }

  private async searchWikipediaSource(query: string) {
    const searchResults = await Promise.all(
      ["es", "en"].map(async (language) => {
        const params = new URLSearchParams({
          action: "wbsearchentities",
          search: query,
          language,
          uselang: "es",
          type: "item",
          limit: "8",
          format: "json",
          origin: "*",
        });
        const response = await fetch(
          `https://www.wikidata.org/w/api.php?${params.toString()}`
        );
        if (!response.ok) {
          throw new Error("Wikidata search request failed");
        }
        const data: { search?: WikidataSearchHit[] } = await response.json();
        return data.search || [];
      })
    );
    const ids = Array.from(
      new Set(
        searchResults
          .reduce(
            (all: WikidataSearchHit[], results) => all.concat(results),
            []
          )
          .map((result) => result.id)
      )
    ).slice(0, 12);

    if (ids.length === 0) {
      return;
    }

    const params = new URLSearchParams({
      action: "wbgetentities",
      ids: ids.join("|"),
      props: "labels|descriptions|aliases|claims|sitelinks",
      languages: "es|en",
      sitefilter: "eswiki|enwiki",
      format: "json",
      origin: "*",
    });
    const response = await fetch(
      `https://www.wikidata.org/w/api.php?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error("Wikidata entity request failed");
    }
    const data: { entities?: { [id: string]: WikidataEntity } } =
      await response.json();
    const entities = data.entities || {};
    this.mediaSearchResults = ids
      .map((id) => this.toWikidataMediaResult(id, entities[id]))
      .filter((result): result is MediaSearchResult => result !== null);
    this.changeDetector.markForCheck();
    try {
      await this.enrichMediaResultsFromWikipedia(this.mediaSearchResults);
    } catch {
      this.mediaSearchError =
        "No fue posible cargar información adicional de Wikipedia.";
    }
  }

  private async searchImdbSource(query: string) {
    const data: { d?: ImdbSuggestionHit[] } = await this.syncService.get(
      `/api/multimedia/imdb-search?q=${encodeURIComponent(query)}`
    );
    this.mediaSearchResults = (data.d || [])
      .map((item) => this.toImdbMediaResult(item))
      .filter((result): result is MediaSearchResult => result !== null)
      .slice(0, 12);
    this.changeDetector.markForCheck();
    try {
      await this.enrichMediaResultsFromWikipedia(this.mediaSearchResults);
    } catch {
      this.mediaSearchError =
        "No fue posible cargar los resúmenes de Wikipedia.";
    }
  }

  selectMediaSearchResult(result: MediaSearchResult) {
    this.epModel.fEpTitle = result.title;
    this.epModel.fAltEpTitle = result.aliases.join(", ") || null;
    this.epModel.fYear = result.year || this.epModel.fYear;
    this.epModel.fUrl = result.pageUrl;
    this.epModel.fSummary = result.description
      ? result.description.substring(0, 4000)
      : null;
    this.closeMediaSearch();
  }

  private async enrichMediaResultsFromWikipedia(results: MediaSearchResult[]) {
    await Promise.all(
      ["es", "en"].map(async (language) => {
        const languageResults = results.filter(
          (result) =>
            result.wikipediaLanguage === language && result.wikipediaTitle
        );
        if (languageResults.length === 0) {
          return;
        }

        const params = new URLSearchParams({
          action: "query",
          titles: languageResults
            .map((result) => result.wikipediaTitle)
            .join("|"),
          prop: "extracts|pageimages|info",
          exintro: "1",
          explaintext: "1",
          exchars: "4000",
          piprop: "thumbnail",
          pithumbsize: "240",
          inprop: "url",
          format: "json",
          origin: "*",
        });
        const response = await fetch(
          `https://${language}.wikipedia.org/w/api.php?${params.toString()}`
        );
        if (!response.ok) {
          throw new Error("Wikipedia page request failed");
        }
        const data: {
          query?: { pages?: { [id: string]: WikipediaPage } };
        } = await response.json();
        const pagesById = (data.query && data.query.pages) || {};
        const pages = Object.keys(pagesById).map((id) => pagesById[id]);

        languageResults.forEach((result) => {
          const page = pages.find(
            (entry) =>
              entry.title &&
              entry.title.toLocaleLowerCase() ===
                result.wikipediaTitle.toLocaleLowerCase()
          );
          if (!page) {
            return;
          }
          if (page.extract) {
            result.description = page.extract;
          }
          if (
            page.thumbnail &&
            page.thumbnail.source &&
            (result.source === "wikipedia" || !result.imageUrl)
          ) {
            result.imageUrl = page.thumbnail.source;
          }
          if (page.fullurl && result.source === "wikipedia") {
            result.pageUrl = page.fullurl;
          }
        });
      })
    );
  }

  private toImdbMediaResult(item: ImdbSuggestionHit): MediaSearchResult {
    const mediaTypes = {
      feature: "Película",
      short: "Cortometraje",
      "tv series": "Serie de televisión",
      "tv mini series": "Miniserie",
      "tv movie": "Película para televisión",
      "tv short": "Cortometraje",
      "tv special": "Especial de televisión",
      "video movie": "Película",
      "video series": "Serie web",
    };
    const mediaType = item.q && mediaTypes[item.q.toLocaleLowerCase()];
    if (!item.id || !item.l || !mediaType) {
      return null;
    }

    const yearMatch = item.yr && item.yr.match(/\d{4}/);
    const imageUrl =
      item.i && item.i.imageUrl
        ? item.i.imageUrl.replace(/\._V1_.*\.jpg$/, "._V1_UX240_.jpg")
        : null;

    return {
      id: item.id,
      title: item.l,
      aliases: [],
      description: "",
      year: item.y || (yearMatch ? Number(yearMatch[0]) : null),
      imageUrl,
      pageUrl: `https://www.imdb.com/title/${item.id}/`,
      mediaType,
      cast: item.s || null,
      source: "imdb",
      wikipediaLanguage: "en",
      wikipediaTitle: item.l,
    };
  }

  private toWikidataMediaResult(
    id: string,
    entity: WikidataEntity
  ): MediaSearchResult {
    if (!entity) {
      return null;
    }

    const title =
      (entity.labels && entity.labels.es && entity.labels.es.value) ||
      (entity.labels && entity.labels.en && entity.labels.en.value);
    if (!title) {
      return null;
    }

    const description =
      (entity.descriptions &&
        entity.descriptions.es &&
        entity.descriptions.es.value) ||
      (entity.descriptions &&
        entity.descriptions.en &&
        entity.descriptions.en.value) ||
      "";
    const aliases = ((entity.aliases && entity.aliases.es) || [])
      .concat((entity.aliases && entity.aliases.en) || [])
      .map((alias) => alias.value)
      .filter((alias) => !!alias && alias !== title)
      .slice(0, 4);
    const publicationDate =
      this.getWikidataClaimValue(entity, "P577") ||
      this.getWikidataClaimValue(entity, "P580") ||
      this.getWikidataClaimValue(entity, "P571");
    const dateValue =
      publicationDate && typeof publicationDate === "object"
        ? publicationDate.time
        : null;
    const yearMatch = dateValue && dateValue.match(/(\d{4})/);
    const image = this.getWikidataClaimValue(entity, "P18");
    const imageUrl =
      typeof image === "string"
        ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
            image
          )}?width=240`
        : null;
    const mediaType = this.getWikidataMediaType(entity);
    const spanishArticle =
      entity.sitelinks &&
      entity.sitelinks.eswiki &&
      entity.sitelinks.eswiki.title;
    const englishArticle =
      entity.sitelinks &&
      entity.sitelinks.enwiki &&
      entity.sitelinks.enwiki.title;
    const pageUrl =
      (spanishArticle &&
        `https://es.wikipedia.org/wiki/${encodeURIComponent(
          spanishArticle.replace(/ /g, "_")
        )}`) ||
      (englishArticle &&
        `https://en.wikipedia.org/wiki/${encodeURIComponent(
          englishArticle.replace(/ /g, "_")
        )}`) ||
      `https://www.wikidata.org/wiki/${id}`;
    const wikipediaLanguage = spanishArticle
      ? "es"
      : englishArticle
      ? "en"
      : null;

    return {
      id,
      title,
      aliases,
      description,
      year: yearMatch ? Number(yearMatch[1]) : null,
      imageUrl,
      pageUrl,
      mediaType,
      source: "wikipedia",
      wikipediaLanguage,
      wikipediaTitle: spanishArticle || englishArticle,
    };
  }

  private getWikidataClaimValue(
    entity: WikidataEntity,
    property: string
  ): string | { id?: string; time?: string } {
    const value =
      entity.claims &&
      entity.claims[property] &&
      entity.claims[property][0] &&
      entity.claims[property][0].mainsnak &&
      entity.claims[property][0].mainsnak.datavalue &&
      entity.claims[property][0].mainsnak.datavalue.value;
    return value || null;
  }

  private getWikidataMediaType(entity: WikidataEntity): string {
    const typeLabels = {
      Q11424: "Película",
      Q24862: "Cortometraje",
      Q24869: "Largometraje",
      Q506240: "Película para televisión",
      Q5398426: "Serie de televisión",
      Q581714: "Serie animada",
      Q21191270: "Episodio de televisión",
      Q3464665: "Miniserie",
      Q1259759: "Programa de televisión",
      Q230390: "Especial de televisión",
    };
    const types = ((entity.claims && entity.claims.P31) || [])
      .map((claim) => claim.mainsnak && claim.mainsnak.datavalue)
      .map((dataValue) => dataValue && dataValue.value)
      .map((value) => (typeof value === "object" && value ? value.id : null));
    const knownType = types.find((type) => !!typeLabels[type]);
    return knownType ? typeLabels[knownType] : "Wikidata";
  }

  newEpItem(form: NgForm) {
    let values = form.value;

    const queue: SyncQueue[] = [];

    if (!this.epModel.isEditingView) {
      // Peek if this Det item is already created
      const detList = this.multimediaDetService.list();
      const existingDetItem = detList.find(
        (e) => e.mmd_id === this.epModel.id && e.mmd_id_ep === this.epModel.epId
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
          (e) =>
            e.mmd_id === this.epModel.id && e.mmd_id_ep === this.epModel.epId
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
    }

    if (this.epModel.isEditingView || values.fIsViewed) {
      // Create or update the viewed episode.
      let item2: MultimediaView;
      if (this.epModel.isEditingView) {
        item2 = this.multimediaViewService
          .list()
          .find(
            (item) =>
              item.mmv_id === this.epModel.id &&
              item.mmv_id_ep === this.epModel.epId
          );
        if (!item2) {
          this.notificationService.notify("Error updating multimedia item");
          return;
        }
        item2.mmv_ep_summary = values.fSummary;
        item2.mmv_date_viewed = new Date(
          `${values.fDateViewed} ${values.fTimeViewed}`
        );
        item2.mmv_num_rating = values.fRating;
        item2.mmv_ctg_platform = values.fPlatform;
        item2.mmv_notes = values.fNotes;
        item2.mmv_date_mod = new Date();
        queue.push(this.multimediaViewService.asUpdateSyncQueue(item2));
      } else {
        item2 = this.multimediaViewService.newItem(
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
      }

      if (!this.epModel.isEditingView) {
        // Updates Media item
        const media = this.viewData.multimediaList.find(
          (item) => item.mma_id === this.epModel.id
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
          this.viewData.multimediaDetList =
            this.viewData.multimediaDetList.sort(this.sortMultimediaDet);
          queue.push(this.multimediaDetService.asSyncQueue(itemNext));
        }
      }
    }

    if (queue.length > 0) {
      const lastQueueItem = queue[queue.length - 1];
      const onSyncCompleted = lastQueueItem.callback;
      lastQueueItem.callback = (model: any, response: any) => {
        onSyncCompleted(model, response);
        if (response.success) {
          this.notificationService.notify(
            "Multimedia item updated successfully"
          );
        } else {
          this.notificationService.notify("Error updating multimedia item");
        }
      };
    }
    this.syncService.multipleRequest(queue, { syncImmediately: true });
    this.resetEpForm(form);
    this.viewData.showCreateEpForm = false;
    this.renderDetListing(this.viewData.multimediaDetList, null);
    document.querySelector(".multimedia-listing-section").scrollIntoView();
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
        (item) => item.mma_id === id
      ).mma_title;
    } else {
      this.viewData.detListTitle = null;
    }
    this.viewData.multimediaDetList = id
      ? list.filter((item) => item.mmd_id === id)
      : list.sort(this.sortMultimediaDet);

    this.viewData.multimediaDetList = this.viewData.multimediaDetList.filter(
      (item) => {
        const ref: MultimediaDet = item;
        const found: MultimediaView = this.viewData.multimediaViewList.find(
          (e) => e.mmv_id === item.mmd_id && e.mmv_id_ep === item.mmd_id_ep
        );
        ref["viewedDate"] = found ? found.mmv_date_viewed : null;
        return !!found;
      }
    );

    if (!id) {
      this.viewData.multimediaDetList = this.viewData.multimediaDetList.filter(
        (item, index) => index < 50
      );
    }

    const multimediaDetListWithGroups = [];
    const diffDates: Date[] = [];
    this.viewData.multimediaDetList.forEach((d) => {
      const dayViewed: Date = DateUtils.dateOnly(d["viewedDate"]);
      const found = diffDates.find((e) => e.getTime() === dayViewed.getTime());
      if (!found) {
        diffDates.push(dayViewed);
        multimediaDetListWithGroups.push({
          date: dayViewed,
          items: this.viewData.multimediaDetList
            .filter(
              (m) =>
                DateUtils.dateOnly(m["viewedDate"]).getTime() ===
                dayViewed.getTime()
            )
            .map((d) => {
              d["viewedInfo"] = this.viewData.multimediaViewList.find(
                (v) => v.mmv_id === d.mmd_id && v.mmv_id_ep === d.mmd_id_ep
              );
              return d;
            }),
        });
      }
    });
    this.viewData.multimediaDetListWithGroups = multimediaDetListWithGroups;
    // latest viewed item is the first one of the first listing always because of ordering
    this.viewData.latestViewedDate =
      multimediaDetListWithGroups[0].items[0].viewedDate;
  }

  showDetListing(id: string) {
    this.multimediaDetService.getAll().then((data) => {
      this.renderDetListing(data, id);
    });
  }

  calculateAge(list: Multimedia[]): Multimedia[] {
    const ageInDays = (base: Date) => DateUtils.elapsedDays(new Date(), base);
    const classname = (age: number) => {
      const entry = Object.entries(this.MEDIA_AGE).find(
        (entry) => entry[1] <= age
      );
      return entry[0];
    };

    return list.map((item) => {
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
    this.resetEpModel();
    form.resetForm();
  }

  resetEpModel() {
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
    this.epModel.fNextEpTitle = null;
    this.epModel.fNextEpUrl = null;
    this.epModel.mediaUrl = null;
    this.epModel.isEditingView = false;
    this.epModel._DateViewedType = "current";
  }

  splitEpInfo(info: string): void {
    if (info && info.includes("|")) {
      const splitted: string[] = info.split("|");

      if (splitted.length === 5) {
        // from imdb
        this.epModel.fEpTitle = splitted[0];
        this.epModel.fAltEpTitle = splitted[1] || "";
        this.epModel.fYear = Number.parseInt(splitted[2]);
        this.epModel.fUrl = splitted[3].trim() || "";
        this.epModel.fSummary = splitted[4] || "";
      }

      if (splitted.length === 3) {
        // from netflix
        this.epModel.fEpTitle = splitted[0];
        this.epModel.fSummary = splitted[1] || "";
        this.epModel.fPlatform = Number.parseInt(splitted[2]) || 1;
      }

      document.querySelector("#fRating")["focus"]();
    }
  }

  dictate() {
    startSpeechRecognition()
      .then((text) => {
        this.epModel.fNotes = text;
      })
      .catch(console.log);
    return false;
  }

  setDateViewedInModel(date: Date, event: Event) {
    const btn = document.getElementById("fDateViewedTypeCustom");
    if (btn && this.epModel._DateViewedType !== "custom") {
      btn.click();
    }
    this.epModel.fDateViewed = DateUtils.dateToStringDate(date);
    // Use current date but with the hours digits +1hr from the argument
    // so that new time is ahead of the latest viewed item for at least 0min and at most 1hr
    const tempDate = new Date();
    tempDate.setHours(date.getHours() + 1);
    this.epModel.fTimeViewed = DateUtils.timeFromDateAsString(tempDate);
    event.preventDefault();
  }

  submitOnEnter(event: KeyboardEvent, newEpForm: NgForm) {
    if (event.key === "Enter") {
      const mediaItem = this.viewData.multimediaList.find(
        (m) => m.mma_id === this.epModel.id
      );
      this.newEpItem(newEpForm);

      if (event.key === "Enter" && event.shiftKey) {
        setTimeout(() => {
          this.showNewEpForm(mediaItem);
        }, 200);
      }
      event.preventDefault();
      return false;
    }
    return true;
  }
}
