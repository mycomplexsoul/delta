import * as express from "express";
import { KeyvalServer } from "./KeyvalServer";
import ApiRoute from "../ApiRoute";

const router = express.Router();
const server: KeyvalServer = new KeyvalServer();

ApiRoute.get(router, "/", server.listRequestHandler);
ApiRoute.post(router, "/", server.createRequestHandler);
ApiRoute.post(router, "/:key_id", server.updateRequestHandler);

export { router };
