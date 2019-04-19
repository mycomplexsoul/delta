import * as express from "express";
import { iNode } from "../iNode";
import { PlaceServer } from "./PlaceServer";

const router = express.Router();

router.get("/", (req, res) => {
  let server: PlaceServer = new PlaceServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.listRequestHandler(node);
});

router.post("/", (req, res) => {
  let server: PlaceServer = new PlaceServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.createRequestHandler(node);
});

router.post("/:mpl_id", (req, res) => {
  let server: PlaceServer = new PlaceServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.updateRequestHandler(node);
});

export { router };
