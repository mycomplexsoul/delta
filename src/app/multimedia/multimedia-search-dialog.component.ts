import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { SyncAPI } from "../common/sync.api";

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

export type MediaSearchSource = "wikipedia" | "imdb";

export interface MediaSearchResult {
  id: string;
  title: string;
  aliases: string[];
  description: string;
  year: number;
  imageUrl: string;
  pageUrl: string;
  mediaType: string;
  cast?: string;
  source: MediaSearchSource;
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
  selector: "multimedia-search-dialog",
  templateUrl: "./multimedia-search-dialog.template.html",
  styleUrls: ["./multimedia-search-dialog.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MultimediaSearchDialogComponent implements OnInit {
  @Input() public initialQuery = "";
  @Input() public source: MediaSearchSource = "imdb";
  @Output() public sourceChange = new EventEmitter<MediaSearchSource>();
  @Output() public closed = new EventEmitter<void>();
  @Output() public resultSelected = new EventEmitter<MediaSearchResult>();

  public query = "";
  public results: MediaSearchResult[] = [];
  public focusedIndex = -1;
  public loading = false;
  public error: string = null;
  public completed = false;

  constructor(
    private syncService: SyncAPI,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.query = this.initialQuery || "";
    setTimeout(() => {
      const input = document.getElementById(
        "multimedia-search-query"
      ) as HTMLInputElement;
      if (input) {
        input.focus();
        if (input.value) {
          input.select();
        }
      }
      if (this.query.trim()) {
        this.searchOpenDataCatalog();
      }
    }, 0);
  }

  onSourceChange(source: MediaSearchSource) {
    this.source = source;
    this.sourceChange.emit(source);
  }

  close() {
    this.closed.emit();
  }

  async searchOpenDataCatalog() {
    const query = this.query.trim();
    if (!query || this.loading) {
      return;
    }

    this.loading = true;
    this.error = null;
    this.completed = false;
    this.results = [];
    this.focusedIndex = -1;

    try {
      if (this.source === "imdb") {
        await this.searchImdbSource(query);
      } else {
        await this.searchWikipediaSource(query);
      }
    } catch {
      this.error = `No fue posible consultar ${
        this.source === "imdb" ? "IMDb" : "Wikipedia"
      }. Intenta de nuevo.`;
    } finally {
      this.loading = false;
      this.completed = true;
      this.changeDetector.markForCheck();
    }
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const target = event.target as HTMLElement;
      if (target && target.id === "multimedia-search-query") {
        event.preventDefault();
        this.searchOpenDataCatalog();
        return;
      }

      const resultElement =
        target && target.closest(".multimedia-search-result");
      if (!resultElement) {
        return;
      }
      if (target.closest("a, button, input, select, textarea")) {
        return;
      }

      event.preventDefault();
      if (this.focusedIndex >= 0) {
        const result = this.results[this.focusedIndex];
        if (result) {
          this.resultSelected.emit(result);
        }
      } else {
        this.searchOpenDataCatalog();
      }
      return;
    }

    if (
      (event.key !== "ArrowDown" && event.key !== "ArrowUp") ||
      this.results.length === 0
    ) {
      return;
    }

    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const currentIndex =
      this.focusedIndex === -1 ? (direction === 1 ? -1 : 0) : this.focusedIndex;
    this.focusedIndex =
      (currentIndex + direction + this.results.length) % this.results.length;

    const focusedResult = document.querySelector(
      `[data-media-search-result-index="${this.focusedIndex}"]`
    );
    if (focusedResult) {
      focusedResult.scrollIntoView({ block: "nearest" });
      (focusedResult as HTMLElement).focus();
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
    this.results = ids
      .map((id) => this.toWikidataMediaResult(id, entities[id]))
      .filter((result): result is MediaSearchResult => result !== null);
    this.changeDetector.markForCheck();
    try {
      await this.enrichMediaResultsFromWikipedia(this.results);
    } catch {
      this.error = "No fue posible cargar información adicional de Wikipedia.";
    }
  }

  private async searchImdbSource(query: string) {
    const data: { d?: ImdbSuggestionHit[] } = await this.syncService.get(
      `/api/multimedia/imdb-search?q=${encodeURIComponent(query)}`
    );
    this.results = (data.d || [])
      .map((item) => this.toImdbMediaResult(item))
      .filter((result): result is MediaSearchResult => result !== null)
      .slice(0, 12);
    this.changeDetector.markForCheck();
    try {
      await this.enrichMediaResultsFromWikipedia(this.results);
    } catch {
      this.error = "No fue posible cargar los resúmenes de Wikipedia.";
    }
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
}
