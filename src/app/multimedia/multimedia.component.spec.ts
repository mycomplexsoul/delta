import { MultimediaComponent } from "./multimedia.component";

describe("MultimediaComponent Wikipedia search results", () => {
  it("keeps search results with unrecognized Wikidata media types", () => {
    const component = Object.create(
      MultimediaComponent.prototype
    ) as MultimediaComponent;
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
