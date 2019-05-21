import * as express from "express";
import { iNode } from "../iNode";
import { FileOrganizerServer } from "./FileOrganizerServer";

const router = express.Router();

router.get("/files", async (req, res) => {
  let server: FileOrganizerServer = new FileOrganizerServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.listTest(node);
});

router.get("/backup", async (req, res) => {
  let server: FileOrganizerServer = new FileOrganizerServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.backup(node);
});

export { router };
