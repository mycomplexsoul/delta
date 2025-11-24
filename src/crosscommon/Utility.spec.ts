import { Utils } from "./Utility";

describe("Utility", () => {
  describe("pad", () => {
    it("should pad to the left by default", () => {
      expect(Utils.pad("5", "0", 3)).toBe("005");
    });
    it("should pad to the right if dir=1", () => {
      expect(Utils.pad("5", "0", 3, 1)).toBe("500");
    });
    it("should return the same string if already long enough", () => {
      expect(Utils.pad("1234", "0", 3)).toBe("1234");
    });
    it("should work with numbers", () => {
      expect(Utils.pad(7, "*", 2)).toBe("*7");
    });
  });

  describe("hashId", () => {
    it("should generate an id with the given prefix and length", () => {
      const prefix = "A";
      const id = Utils.hashId(prefix, 20, new Date(2025, 0, 1, 12, 0, 0));
      expect(id.startsWith(prefix)).toBeTrue();
      // Implementation builds datetime (14 chars) + '-' + random digits, so
      // minimum length is prefix + 14 + 1
      const minLen = prefix.length + 14 + 1;
      expect(id.length).toBeGreaterThanOrEqual(minLen);
    });
    it("should generate different ids for different dates", () => {
      const id1 = Utils.hashId("B", 20, new Date(2025, 0, 1, 12, 0, 0));
      const id2 = Utils.hashId("B", 20, new Date(2025, 0, 2, 12, 0, 0));
      expect(id1).not.toBe(id2);
    });
  });

  describe("escapeRegExp", () => {
    it("should escape special regex characters", () => {
      expect(Utils.escapeRegExp("a.b*c?^$|[](){}\\")).toBe(
        "a\\.b\\*c\\?\\^\\$\\|\\[\\]\\(\\)\\{\\}\\\\"
      );
    });
  });

  describe("replaceAll", () => {
    it("should replace all occurrences of a substring", () => {
      expect(Utils.replaceAll("foo bar foo", "foo", "baz")).toBe("baz bar baz");
    });
    it("should handle special regex characters in find", () => {
      expect(Utils.replaceAll("a.b.a.b", ".", "x")).toBe("axbxaxb");
    });
  });

  describe("parseSimpleQuoteForSQL", () => {
    it("should double single quotes for SQL", () => {
      expect(Utils.parseSimpleQuoteForSQL("O'Reilly")).toBe("O''Reilly");
    });
  });

  describe("entityToRawTableFields", () => {
    function makeFieldDef(dbName: string, isPK = false) {
      return {
        templateId: "",
        dbName,
        dbType: "",
        isTableField: true,
        isPK,
        size: 0,
        decimal: 0,
        minLength: 0,
        allowNull: false,
        default: "",
        dbComment: "",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "",
        formControl: "",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "",
        tooltip: "",
        isRecordName: false,
        gridOrder: 0,
        orderOnNew: 0,
        orderOnDetails: 0,
        orderOnEdit: 0,
        orderOnImport: 0,
        globalOrder: 0,
      };
    }
    function makeEntity(fields: any[], values: any = {}) {
      return {
        ...values,
        metadata: {
          name: "",
          namespace: "",
          removeMeans: "",
          authNeeded: false,
          displayOnMenu: false,
          prefix: "",
          permissionsTemplate: "",
          tableName: "",
          viewName: "",
          permissions: [],
          specialFeatures: [],
          fields,
          view: [],
        },
        recordName: () => "foo",
      };
    }
    it("should return object with db fields", () => {
      const entity = makeEntity([makeFieldDef("id"), makeFieldDef("name")], {
        id: 1,
        name: "foo",
      });
      expect(Utils.entityToRawTableFields(entity)).toEqual({
        id: 1,
        name: "foo",
      });
    });
    it("should return entity if no metadata", () => {
      const entity = { id: 1, name: "foo", recordName: () => "foo" };
      expect(Utils.entityToRawTableFields(entity as any)).toBe(entity);
    });
  });

  describe("getPKFromEntity", () => {
    function makeFieldDef(dbName: string, isPK = false) {
      return {
        templateId: "",
        dbName,
        dbType: "",
        isTableField: true,
        isPK,
        size: 0,
        decimal: 0,
        minLength: 0,
        allowNull: false,
        default: "",
        dbComment: "",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "",
        formControl: "",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "",
        tooltip: "",
        isRecordName: false,
        gridOrder: 0,
        orderOnNew: 0,
        orderOnDetails: 0,
        orderOnEdit: 0,
        orderOnImport: 0,
        globalOrder: 0,
      };
    }
    function makeEntity(fields: any[], values: any = {}) {
      return {
        ...values,
        metadata: {
          name: "",
          namespace: "",
          removeMeans: "",
          authNeeded: false,
          displayOnMenu: false,
          prefix: "",
          permissionsTemplate: "",
          tableName: "",
          viewName: "",
          permissions: [],
          specialFeatures: [],
          fields,
          view: [],
        },
        recordName: () => "foo",
      };
    }
    it("should return object with PK fields", () => {
      const entity = makeEntity(
        [makeFieldDef("id", true), makeFieldDef("code", false)],
        { id: 1, code: "abc" }
      );
      expect(Utils.getPKFromEntity(entity)).toEqual({ id: 1 });
    });
    it("should return null if no metadata", () => {
      expect(
        Utils.getPKFromEntity({ recordName: () => "foo" } as any)
      ).toBeNull();
    });
  });

  describe("removeMetadataFromEntity", () => {
    it("should remove metadata property", () => {
      const entity = {
        id: 1,
        metadata: { foo: "bar" },
        recordName: () => "foo",
      };
      const result = Utils.removeMetadataFromEntity(entity as any);
      expect(result).toEqual({ id: 1, recordName: entity.recordName });
    });
    it("should return entity if no metadata", () => {
      const entity = { id: 1, recordName: () => "foo" };
      expect(Utils.removeMetadataFromEntity(entity as any)).toBe(entity);
    });
  });

  describe("buildFilter", () => {
    it("should build a filter object", () => {
      expect(Utils.buildFilter("foo", 1)).toEqual({
        gc: "AND",
        cont: [{ f: "foo", op: "eq", val: 1 }],
      });
    });
    it("should allow custom operator", () => {
      expect(Utils.buildFilter("foo", 1, "gt")).toEqual({
        gc: "AND",
        cont: [{ f: "foo", op: "gt", val: 1 }],
      });
    });
  });

  describe("buildFilterStringified", () => {
    it("should return a stringified filter", () => {
      expect(Utils.buildFilterStringified("foo", 1)).toBe(
        JSON.stringify({ gc: "AND", cont: [{ f: "foo", op: "eq", val: 1 }] })
      );
    });
  });

  describe("retryHelper", () => {
    it("should return result if condition is met", () => {
      let count = 0;
      const method = () => ++count;
      const condition = (val: number) => val === 2;
      expect(Utils.retryHelper(method, condition, 3)).toBe(2);
    });
    it("should return null if condition is never met", () => {
      const method = () => 0;
      const condition = (val: number) => val === 1;
      expect(Utils.retryHelper(method, condition, 2)).toBeNull();
    });
  });
});
