import * as express from "express";
import { iNode } from "../iNode";
import { LinkServer } from "./LinkServer";

const router = express.Router();

router.post("/", (req, res) => {
  let server: LinkServer = new LinkServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.externalCreateRequestHandler(node);
});

export { router };
