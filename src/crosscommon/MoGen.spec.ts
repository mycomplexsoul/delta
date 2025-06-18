import { MoGen } from "./MoGen";

describe("MoGen", () => {
  describe("concat", () => {
    it("should concatenate if value is not empty", () => {
      expect(MoGen.concat("foo", "bar")).toBe("foobar");
    });
    it("should return empty string if value is empty", () => {
      expect(MoGen.concat("", "bar")).toBe("");
    });
    it("should concatenate with empty string_to_concatenate", () => {
      expect(MoGen.concat("foo", "")).toBe("foo");
    });
    it("should return empty string if both are empty", () => {
      expect(MoGen.concat("", "")).toBe("");
    });
  });

  describe("parseApostrophe", () => {
    it("should escape single apostrophe", () => {
      expect(MoGen.parseApostrophe("O'Reilly")).toBe("O\\'Reilly");
    });
    it("should not change string without apostrophe", () => {
      expect(MoGen.parseApostrophe("Hello")).toBe("Hello");
    });
    it("should escape only the first apostrophe", () => {
      expect(MoGen.parseApostrophe("a'b'c")).toBe("a\\'b'c");
    });
  });

  describe("parseApostropheForSQL", () => {
    it("should double single apostrophe for SQL", () => {
      expect(MoGen.parseApostropheForSQL("O'Reilly")).toBe("O''Reilly");
    });
    it("should not change string without apostrophe", () => {
      expect(MoGen.parseApostropheForSQL("Hello")).toBe("Hello");
    });
    it("should double only the first apostrophe", () => {
      expect(MoGen.parseApostropheForSQL("a'b'c")).toBe("a''b'c");
    });
  });
});
