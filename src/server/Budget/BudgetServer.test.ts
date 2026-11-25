/// <reference types="mocha" />
import { strictEqual } from "assert";
import { Budget } from "../../crosscommon/entities/Budget";
import { MoSQL } from "../MoSQL";
const { BudgetServer } = require("./BudgetServer.ts");

describe("BudgetServer batch save", () => {
  it("updates existing records and creates missing ones in one batch", async () => {
    const server = new BudgetServer();
    const creationDate = new Date(2026, 0, 5);
    const calls: Array<{ action: string; item: Budget; pk?: any }> = [];
    (server as any).api = {
      list: async () => [
        new Budget({
          bud_year: 2026,
          bud_month: 5,
          bud_id_category: "existing-category",
          bud_date_add: creationDate,
        }),
      ],
      update: async (item: Budget, pk: any) => {
        calls.push({ action: "update", item, pk });
        return { success: true };
      },
      create: async (item: Budget) => {
        calls.push({ action: "create", item });
        return { success: true };
      },
    };

    const response = createResponse();
    await server.batchSaveRequestHandler(
      createNode(
        [
          {
            bud_year: 2026,
            bud_month: 5,
            bud_id_category: "existing-category",
            bud_expected_amount: -25,
          },
          {
            bud_year: 2026,
            bud_month: 5,
            bud_id_category: "new-category",
            bud_expected_amount: 80,
          },
        ],
        response
      ) as any
    );

    strictEqual(response.payload.success, true);
    strictEqual(response.payload.saved, 2);
    strictEqual(calls[0].action, "update");
    strictEqual(calls[0].item.bud_id_user, "authenticated-user");
    strictEqual(calls[0].item.bud_id_category, "existing-category");
    strictEqual(calls[0].pk.bud_id_category, "existing-category");
    strictEqual(calls[0].item.bud_ctg_type, 1);
    strictEqual(calls[0].item.bud_date_add.getTime(), creationDate.getTime());
    strictEqual(calls[1].action, "create");
    strictEqual(calls[1].item.bud_id_user, "authenticated-user");
    strictEqual(calls[1].item.bud_id_category, "new-category");
    strictEqual(calls[1].item.bud_ctg_type, 2);
    strictEqual(
      new MoSQL(calls[1].item).toInsertSQL().includes("'new-category'"),
      true
    );
    strictEqual(response.payload.created, 1);
    strictEqual(response.payload.updated, 1);
    strictEqual(
      response.payload.savedCategories.join(","),
      "existing-category,new-category"
    );
  });

  it("counts failed writes and continues saving the rest of the batch", async () => {
    const server = new BudgetServer();
    const attempted: string[] = [];
    (server as any).api = {
      list: async () => [],
      create: async (item: Budget) => {
        attempted.push(item.bud_id_category);
        if (item.bud_id_category === "failed-category") {
          throw new Error("database write failed");
        }
        return { success: true };
      },
    };

    const response = createResponse();
    await server.batchSaveRequestHandler(
      createNode(
        ["failed-category", "saved-category"].map((category) => ({
          bud_year: 2026,
          bud_month: 5,
          bud_id_category: category,
          bud_expected_amount: 0,
        })),
        response
      ) as any
    );

    strictEqual(attempted.join(","), "failed-category,saved-category");
    strictEqual(response.payload.saved, 1);
    strictEqual(response.payload.created, 1);
    strictEqual(response.payload.updated, 0);
    strictEqual(response.payload.failures.length, 1);
    strictEqual(response.payload.failures[0].category, "failed-category");
    strictEqual(response.payload.failures[0].message, "database write failed");
  });

  it("rejects duplicate categories in the same batch", async () => {
    const server = new BudgetServer();
    let listCalled = false;
    (server as any).api = {
      list: async () => {
        listCalled = true;
        return [];
      },
    };

    const response = createResponse();
    const item = {
      bud_year: 2026,
      bud_month: 5,
      bud_id_category: "same-category",
      bud_expected_amount: 0,
    };
    await server.batchSaveRequestHandler(
      createNode([item, item], response) as any
    );

    strictEqual(response.statusCode, 400);
    strictEqual(response.payload.success, false);
    strictEqual(listCalled, false);
  });
});

function createResponse() {
  return {
    statusCode: 200,
    payload: null as any,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: any) {
      this.payload = payload;
      return this;
    },
  };
}

function createNode(body: any, response: ReturnType<typeof createResponse>) {
  return {
    request: {
      body,
      userData: { username: "authenticated-user" },
    },
    response,
  };
}
