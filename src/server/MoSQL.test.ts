import { MoSQL } from "./MoSQL";
import { equal, strictEqual } from "assert";
const instance = new MoSQL();

describe("MoSQL", () => {
  describe("decideModel", () => {
    it("should return the provided model if one is provided", () => {
      const test: any = {
        metadata: {},
        recordName: () => {},
      };
      equal(instance.decideModel(test), test);
    });

    it("should return the internal initial model if none is provided", () => {
      const test: any = {
        metadata: {},
        recordName: () => {},
      };
      const instance2 = new MoSQL(test);
      equal(instance2.decideModel(null), test);
    });
  });

  describe("formatValueForSQL", () => {
    it("should format integer values", () => {
      const result = instance.formatValueForSQL("integer", 42, "age");
      strictEqual(result, "age = 42");
    });
    it("should format string values", () => {
      const result = instance.formatValueForSQL("string", "foo", "name");
      strictEqual(result, "name = 'foo'");
    });
    it("should format null values", () => {
      const result = instance.formatValueForSQL("string", null, "name");
      strictEqual(result, "name = null");
    });
    it("should format date values", () => {
      const date = new Date(2020, 0, 2); // 2020-01-02
      const result = instance.formatValueForSQL("date", date, "created");
      // El formato depende de la implementación de DateUtils.formatDate
      // Solo comprobamos que contiene la fecha y el campo
      strictEqual(result.includes("created ="), true);
      strictEqual(result.includes("2020"), true);
    });
    it("should format with operator IN", () => {
      const result = instance.formatValueForSQL("integer", "1,2,3", "id", "in");
      strictEqual(result, "id in (1,2,3)");
    });
  });
  describe("toInsertSQL", () => {
    it("should generate a valid insert SQL", () => {
      const fakeModel: any = {
        metadata: {
          tableName: "test_table",
          fields: [
            { dbName: "id", dbType: "integer", isTableField: true },
            { dbName: "name", dbType: "string", isTableField: true },
          ],
          prefix: "",
        },
        id: 1,
        name: "foo",
        recordName: () => "test",
      };
      const sql = instance.toInsertSQL(fakeModel);
      strictEqual(sql.includes("insert into test_table"), true);
      strictEqual(sql.includes("1"), true);
      strictEqual(sql.includes("'foo'"), true);
    });
  });
  describe("toDeleteSQL", () => {
    it("should generate a valid delete SQL", () => {
      const fakeModel: any = {
        metadata: {
          tableName: "test_table",
          fields: [
            { dbName: "id", dbType: "integer", isPK: true },
            { dbName: "name", dbType: "string", isPK: false },
          ],
          prefix: "",
        },
        id: 1,
        name: "foo",
        recordName: () => "test",
      };
      const sql = instance.toDeleteSQL(fakeModel);
      strictEqual(sql.startsWith("delete from test_table"), true);
      strictEqual(sql.includes("id = 1"), true);
    });
  });
  describe("toSelectPKSQL", () => {
    it("should generate a valid select by PK SQL", () => {
      const fakeModel: any = {
        metadata: {
          viewName: "test_view",
          fields: [
            { dbName: "id", dbType: "integer", isPK: true },
            { dbName: "name", dbType: "string", isPK: false },
          ],
          prefix: "",
        },
        id: 1,
        name: "foo",
        recordName: () => "test",
      };
      const sql = instance.toSelectPKSQL(fakeModel);
      strictEqual(sql.startsWith("select * from test_view"), true);
      strictEqual(sql.includes("id = 1"), true);
    });
  });
  describe("simpleCriteriaToSQL", () => {
    it("should generate SQL for simple criteria", () => {
      const fakeModel: any = {
        metadata: {
          fields: [
            { dbName: "id", dbType: "integer", isTableField: true },
            { dbName: "name", dbType: "string", isTableField: true },
            { dbName: "foo", dbType: "string", isTableField: false },
          ],
          prefix: "",
        },
        recordName: () => "test",
      };
      const sql = instance.simpleCriteriaToSQL(
        { "id|eq": 1, "name|lk": "bar" },
        fakeModel
      );
      strictEqual(sql.includes("id = 1"), true);
      strictEqual(sql.includes("name like 'bar'"), true);
    });
    it("should skip fields not in model", () => {
      const fakeModel: any = {
        metadata: {
          fields: [{ dbName: "id", dbType: "integer", isTableField: true }],
          prefix: "",
        },
        recordName: () => "test",
      };
      const sql = instance.simpleCriteriaToSQL({ "notfound|eq": 1 }, fakeModel);
      strictEqual(sql, "");
    });
  });
  describe("edge cases", () => {
    it("should throw if decideModel is called with no model", () => {
      const empty = new MoSQL();
      let threw = false;
      try {
        empty.decideModel(null);
      } catch (e) {
        threw = true;
      }
      strictEqual(threw, true);
    });
  });
  describe("toUpdateSQL", () => {
    it("should generate a valid update SQL", () => {
      const fakeModel: any = {
        metadata: {
          tableName: "test_table",
          fields: [
            { dbName: "id", dbType: "integer", isPK: true, isTableField: true },
            {
              dbName: "name",
              dbType: "string",
              isPK: false,
              isTableField: true,
            },
          ],
          prefix: "",
        },
        id: 1,
        name: "foo",
        recordName: () => "test",
      };
      const changes = [{ dbName: "name", value: "bar" }];
      const sql = instance.toUpdateSQL(changes, fakeModel);
      strictEqual(sql.startsWith("update test_table set"), true);
      strictEqual(sql.includes("name = 'bar'"), true);
      strictEqual(sql.includes("id = 1"), true);
    });
  });
  describe("toChangesObject", () => {
    it("should detect changes between model and changes array", () => {
      const fakeModel: any = {
        metadata: {
          fields: [
            { dbName: "id", dbType: "integer", isPK: true, isTableField: true },
            {
              dbName: "name",
              dbType: "string",
              isPK: false,
              isTableField: true,
            },
          ],
          prefix: "",
        },
        id: 1,
        name: "foo",
        recordName: () => "test",
      };
      const changes = [{ dbName: "name", value: "bar" }];
      const result = instance.toChangesObject(fakeModel, changes);
      strictEqual(Array.isArray(result), true);
      strictEqual(result.length, 1);
      strictEqual(result[0].dbName, "name");
      strictEqual(result[0].value, "bar");
    });
  });
  describe("logChanges", () => {
    it("should log changes without error", () => {
      const changesArray = [
        {
          dbName: "name",
          previousValue: "foo",
          value: "bar",
          recordName: "test",
        },
      ];
      instance.logChanges(changesArray); // Solo debe ejecutarse sin lanzar error
    });
  });
  describe("toSelectSQL", () => {
    it("should generate a select SQL with string criteria", () => {
      const fakeModel: any = {
        metadata: {
          viewName: "test_view",
          fields: [
            { dbName: "id", dbType: "integer", isPK: true, isTableField: true },
            {
              dbName: "name",
              dbType: "string",
              isPK: false,
              isTableField: true,
            },
          ],
          prefix: "",
        },
        id: 1,
        name: "foo",
        recordName: () => "test",
      };
      const criteria = encodeURIComponent(
        JSON.stringify({ gc: "AND", cont: [{ f: "id", op: "eq", val: 1 }] })
      );
      const sql = instance.toSelectSQL(criteria, fakeModel);
      strictEqual(sql.startsWith("select * from test_view"), true);
      strictEqual(sql.includes("id = 1"), true);
    });
  });
  describe("simpleCriteriaWithGroupsToSQL", () => {
    it("should generate SQL for grouped criteria", () => {
      const fakeModel: any = {
        metadata: {
          fields: [
            { dbName: "id", dbType: "integer", isTableField: true },
            { dbName: "name", dbType: "string", isTableField: true },
          ],
          prefix: "",
        },
        recordName: () => "test",
      };
      const criteria = [
        { group: "AND", "id|eq": 1 },
        { group: "OR", "name|lk": "bar" },
      ];
      const sql = instance.simpleCriteriaWithGroupsToSQL(criteria, fakeModel);
      strictEqual(sql.includes("id = 1"), true);
      strictEqual(sql.includes("name like 'bar'"), true);
    });
  });
  describe("parseSQLCriteria", () => {
    it("should parse encoded JSON criteria", () => {
      const obj = { gc: "AND", cont: [{ f: "id", op: "eq", val: 1 }] };
      const encoded = encodeURIComponent(JSON.stringify(obj));
      const parsed: any = instance.parseSQLCriteria(encoded);
      strictEqual(parsed.gc, "AND");
      strictEqual(parsed.cont[0].f, "id");
    });
  });
  describe("toSelectPKPlaceholderSQL", () => {
    it("should generate a select SQL with placeholders", () => {
      const fakeModel: any = {
        metadata: {
          fields: [
            { dbName: "id", dbType: "integer", isPK: true },
            { dbName: "name", dbType: "string", isPK: false },
          ],
          prefix: "",
        },
        id: 1,
        name: "foo",
        recordName: () => "test",
      };
      const sql = instance.toSelectPKPlaceholderSQL(fakeModel);
      strictEqual(sql.includes("{id}"), true);
    });
  });
  describe("toChangesObject date coverage", () => {
    it("should detect changes for date fields", () => {
      const fakeModel: any = {
        metadata: {
          fields: [
            {
              dbName: "created",
              dbType: "date",
              isPK: false,
              isTableField: true,
            },
          ],
          prefix: "",
        },
        created: new Date("2020-01-01"),
        recordName: () => "test",
      };
      const changes = [{ dbName: "created", value: new Date("2020-01-02") }];
      const result = instance.toChangesObject(fakeModel, changes);
      strictEqual(result.length, 1);
      strictEqual(result[0].dbName, "created");
    });
    it("should not detect changes if dates are equal", () => {
      const fakeModel: any = {
        metadata: {
          fields: [
            {
              dbName: "created",
              dbType: "date",
              isPK: false,
              isTableField: true,
            },
          ],
          prefix: "",
        },
        created: new Date("2020-01-01"),
        recordName: () => "test",
      };
      const changes = [{ dbName: "created", value: new Date("2020-01-01") }];
      const result = instance.toChangesObject(fakeModel, changes);
      strictEqual(result.length, 0);
    });
  });
  describe("simpleCriteriaToSQL OR and null/undefined", () => {
    it("should handle groupConcat OR", () => {
      const fakeModel: any = {
        metadata: {
          fields: [
            { dbName: "id", dbType: "integer", isTableField: true },
            { dbName: "name", dbType: "string", isTableField: true },
          ],
          prefix: "",
        },
        recordName: () => "test",
      };
      const sql = instance.simpleCriteriaToSQL(
        { "id|eq": 1, "name|lk": "bar" },
        fakeModel,
        "OR"
      );
      strictEqual(sql.includes("id = 1 or name like"), true);
    });
    it("should skip undefined/null values", () => {
      const fakeModel: any = {
        metadata: {
          fields: [{ dbName: "id", dbType: "integer", isTableField: true }],
          prefix: "",
        },
        recordName: () => "test",
      };
      const sql = instance.simpleCriteriaToSQL(
        { "id|eq": undefined, "id|ne": null },
        fakeModel
      );
      // Debe generar SQL válido solo para null
      strictEqual(sql.includes("id != null"), true);
    });
  });
});
