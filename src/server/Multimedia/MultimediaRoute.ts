import * as express from "express";
import { MultimediaCustom } from "./MultimediaCustom";
import ApiRoute from "../ApiRoute";

const router = express.Router();
const server: MultimediaCustom = new MultimediaCustom();

ApiRoute.get(router, "/", server.listRequestHandler);
ApiRoute.post(router, "/", server.createRequestHandler);
ApiRoute.post(router, "/:mma_id", server.updateRequestHandler);

export { router };
