import * as express from "express";
import { iNode } from "../iNode";
import { LinkServer } from "./LinkServer";

const router = express.Router();

router.get("/", (req, res) => {
  let server: LinkServer = new LinkServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.listRequestHandler(node);
});

router.post("/", (req, res) => {
  let server: LinkServer = new LinkServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.createRequestHandler(node);
});

router.post("/:lnk_id", (req, res) => {
  let server: LinkServer = new LinkServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.updateRequestHandler(node);
});

export { router };
