import { EventEmitter } from "@angular/core";
import { MultimediaComponent } from "./multimedia.component";
import {
  MediaSearchResult,
  MultimediaSearchDialogComponent,
} from "./multimedia-search-dialog.component";

describe("MultimediaSearchDialogComponent Wikipedia search results", () => {
  it("keeps search results with unrecognized Wikidata media types", () => {
    const component = Object.create(
      MultimediaSearchDialogComponent.prototype
    ) as MultimediaSearchDialogComponent;
    const result = component["toWikidataMediaResult"]("Q123", {
      labels: { en: { value: "Sample title" } },
      claims: {
        P31: [
          {
            mainsnak: {
              datavalue: { value: { id: "Q999999" } },
            },
          },
        ],
      },
    });

    expect(result).not.toBeNull();
    expect(result.title).toBe("Sample title");
    expect(result.mediaType).toBe("Wikidata");
  });
});

describe("MultimediaSearchDialogComponent keyboard navigation", () => {
  let component: MultimediaSearchDialogComponent;

  beforeEach(() => {
    component = Object.create(
      MultimediaSearchDialogComponent.prototype
    ) as MultimediaSearchDialogComponent;
    component.focusedIndex = -1;
    component.resultSelected = new EventEmitter<MediaSearchResult>();
    component.results = ["1", "2"].map((id) => ({
      id,
      title: id,
      aliases: [],
      description: "",
      year: null,
      imageUrl: null,
      pageUrl: "",
      mediaType: "",
      source: "wikipedia" as const,
      wikipediaLanguage: null,
      wikipediaTitle: null,
    }));
  });

  it("moves through results and wraps in both directions", () => {
    const focusedElement = {
      focus: jasmine.createSpy("focus"),
      scrollIntoView: jasmine.createSpy("scrollIntoView"),
    };
    spyOn(document, "querySelector").and.returnValue(
      focusedElement as unknown as Element
    );
    const down = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      cancelable: true,
    });
    component.handleKeydown(down);
    expect(down.defaultPrevented).toBe(true);
    expect(component.focusedIndex).toBe(0);
    expect(focusedElement.focus).toHaveBeenCalled();
    expect(focusedElement.scrollIntoView).toHaveBeenCalledWith({
      block: "nearest",
    });

    component.handleKeydown(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    expect(component.focusedIndex).toBe(1);

    component.handleKeydown(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    expect(component.focusedIndex).toBe(0);

    component.handleKeydown(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    expect(component.focusedIndex).toBe(1);
  });

  it("runs a search when Enter is pressed in the query input", () => {
    const search = spyOn(component, "searchOpenDataCatalog").and.returnValue(
      Promise.resolve()
    );
    const enter = new KeyboardEvent("keydown", {
      key: "Enter",
      cancelable: true,
    });
    Object.defineProperty(enter, "target", {
      value: {
        id: "multimedia-search-query",
        closest: () => null,
      },
    });

    component.handleKeydown(enter);

    expect(enter.defaultPrevented).toBe(true);
    expect(search).toHaveBeenCalled();
  });

  it("emits the focused result when Enter is pressed on it", () => {
    component.focusedIndex = 1;
    const select = spyOn(component.resultSelected, "emit");
    const enter = new KeyboardEvent("keydown", {
      key: "Enter",
      cancelable: true,
    });
    const resultElement = {
      closest: (selector: string) =>
        selector === ".multimedia-search-result" ? resultElement : null,
    };
    Object.defineProperty(enter, "target", { value: resultElement });

    component.handleKeydown(enter);

    expect(enter.defaultPrevented).toBe(true);
    expect(select).toHaveBeenCalledWith(component.results[1]);
  });
});

describe("MultimediaSearchDialogComponent opening", () => {
  let component: MultimediaSearchDialogComponent;

  beforeEach(() => {
    component = Object.create(
      MultimediaSearchDialogComponent.prototype
    ) as MultimediaSearchDialogComponent;
    component.initialQuery = "Existing title";
    component.query = "";
  });

  it("searches a prefilled title and keeps it selected in the focused input", (done) => {
    const input = {
      value: "Existing title",
      focus: jasmine.createSpy("focus"),
      select: jasmine.createSpy("select"),
    };
    spyOn(document, "getElementById").and.returnValue(
      input as unknown as HTMLElement
    );
    const search = spyOn(component, "searchOpenDataCatalog").and.returnValue(
      Promise.resolve()
    );

    component.ngOnInit();

    setTimeout(() => {
      expect(component.query).toBe("Existing title");
      expect(input.focus).toHaveBeenCalled();
      expect(input.select).toHaveBeenCalled();
      expect(search).toHaveBeenCalled();
      done();
    }, 0);
  });

  it("does not search when the initial title is empty", (done) => {
    component.initialQuery = "";
    const input = {
      value: "",
      focus: jasmine.createSpy("focus"),
      select: jasmine.createSpy("select"),
    };
    spyOn(document, "getElementById").and.returnValue(
      input as unknown as HTMLElement
    );
    const search = spyOn(component, "searchOpenDataCatalog").and.returnValue(
      Promise.resolve()
    );

    component.ngOnInit();

    setTimeout(() => {
      expect(input.focus).toHaveBeenCalled();
      expect(input.select).not.toHaveBeenCalled();
      expect(search).not.toHaveBeenCalled();
      done();
    }, 0);
  });
});

describe("MultimediaComponent selecting a search result", () => {
  let component: MultimediaComponent;

  beforeEach(() => {
    component = Object.create(
      MultimediaComponent.prototype
    ) as MultimediaComponent;
    component.epModel = { fEpTitle: "Original title" } as any;
    component.mediaSearchDialogOpen = true;
  });

  it("closes the dialog and focuses the Date Viewed field", (done) => {
    const dateViewedInput = {
      focus: jasmine.createSpy("focus"),
    };
    spyOn(document, "getElementById").and.returnValue(
      dateViewedInput as unknown as HTMLElement
    );
    const result: MediaSearchResult = {
      id: "result",
      title: "Selected title",
      aliases: [],
      description: "",
      year: null,
      imageUrl: null,
      pageUrl: "",
      mediaType: "",
      source: "imdb",
      wikipediaLanguage: null,
      wikipediaTitle: null,
    };

    component.selectMediaSearchResult(result);

    expect(component.mediaSearchDialogOpen).toBe(false);
    expect(component.epModel.fEpTitle).toBe("Selected title");
    setTimeout(() => {
      expect(document.getElementById).toHaveBeenCalledWith(
        "fDateViewedTypeCurrent"
      );
      expect(dateViewedInput.focus).toHaveBeenCalled();
      done();
    }, 0);
  });

  it("does not move focus when the dialog is closed without selecting", () => {
    const getElementById = spyOn(document, "getElementById");

    component.closeMediaSearch();

    expect(component.mediaSearchDialogOpen).toBe(false);
    expect(getElementById).not.toHaveBeenCalled();
  });
});
