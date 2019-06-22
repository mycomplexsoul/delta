import * as express from "express";
import { iNode } from "../iNode";
import { PresetServer } from "./PresetServer";

const router = express.Router();

router.get("/", (req, res) => {
  let server: PresetServer = new PresetServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.listRequestHandler(node);
});

router.post("/", (req, res) => {
  let mov: PresetServer = new PresetServer();
  let node: iNode = {
    request: req,
    response: res
  };
  mov.createRequestHandler(node);
});

router.post("/:pre_id", (req, res) => {
  let mov: PresetServer = new PresetServer();
  let node: iNode = {
    request: req,
    response: res
  };
  mov.updateRequestHandler(node);
});

export { router };
