import * as express from "express";
import { BudgetServer } from "./BudgetServer";
import ApiRoute from "../ApiRoute";

const router = express.Router();
const server: BudgetServer = new BudgetServer();

ApiRoute.get(router, "/", server.listRequestHandler);
ApiRoute.post(router, "/", server.createRequestHandler);
ApiRoute.post(router, "/:bud_id", server.updateRequestHandler);
ApiRoute.post(router, "/:bud_id", server.deleteRequestHandler);

export { router };
