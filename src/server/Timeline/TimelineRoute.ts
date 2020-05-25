import * as express from "express";
import { TimelineServer } from "./TimelineServer";
import ApiRoute from "../ApiRoute";

const router = express.Router();
const server: TimelineServer = new TimelineServer();

ApiRoute.get(router, "/", server.listRequestHandler);
ApiRoute.post(router, "/", server.createRequestHandler);
ApiRoute.post(router, "/:tim_id", server.updateRequestHandler);

export { router };
