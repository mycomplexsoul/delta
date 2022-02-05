import * as express from "express";
import { iNode } from "../iNode";
import { LinkServer } from "./LinkServer";

const router = express.Router();

router.get("/verify", (req, res) => {
  let server: LinkServer = new LinkServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.getRequestHandler(node);
});

router.post("/", (req, res) => {
  let server: LinkServer = new LinkServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.externalCreateRequestHandler(node);
});

router.post("/:lnk_id", (req, res) => {
  let server: LinkServer = new LinkServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.externalUpdateRequestHandler(node);
});

export { router };
