import * as express from "express";
import { iNode } from "../iNode";
import { LastTimeHistoryServer } from "./LastTimeHistoryServer";

const router = express.Router();

router.get("/", (req, res) => {
  let server: LastTimeHistoryServer = new LastTimeHistoryServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.list(node);
});

export { router };
