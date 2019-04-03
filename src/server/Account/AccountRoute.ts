import * as express from "express";
import { iNode } from "../iNode";
import { AccountServer } from "./AccountServer";

const router = express.Router();

router.get("/", (req, res) => {
  let server: AccountServer = new AccountServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.list(node);
});

router.post("/", (req, res) => {
  let server: AccountServer = new AccountServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.createRequestHandler(node);
});

router.post("/:acc_id", (req, res) => {
  let server: AccountServer = new AccountServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.updateRequestHandler(node);
});

export { router };
