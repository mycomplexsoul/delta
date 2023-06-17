import * as express from "express";
import { ActivityServer } from "./ActivityServer";
import ApiRoute from "../ApiRoute";

const router = express.Router();
const server: ActivityServer = new ActivityServer();

ApiRoute.get(router, "/", server.listRequestHandler);
ApiRoute.post(router, "/", server.createRequestHandler);
ApiRoute.post(router, "/:act_id", server.updateRequestHandler);

ApiRoute.get(router, "/list", server.listWithMetadataRequestHandler);

export { router };
