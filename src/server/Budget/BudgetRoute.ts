import * as express from "express";
import { BudgetServer } from "./BudgetServer";
import ApiRoute from "../ApiRoute";

const router = express.Router();
const server: BudgetServer = new BudgetServer();

ApiRoute.get(router, "/", server.listRequestHandler);
ApiRoute.post(router, "/", server.createRequestHandler);
ApiRoute.post(router, "/batch", server.batchSaveRequestHandler);
ApiRoute.post(
  router,
  "/:bud_year/:bud_month/:bud_id_category",
  server.updateRequestHandler
);
ApiRoute.delete(
  router,
  "/:bud_year/:bud_month/:bud_id_category",
  server.deleteRequestHandler
);

export { router };
