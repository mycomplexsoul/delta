import * as express from "express";
import { iNode } from "../iNode";
import { MultimediaDetCustom } from "./MultimediaDetCustom";

const router = express.Router();

router.get("/", (req, res) => {
  let server: MultimediaDetCustom = new MultimediaDetCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.listRequestHandler(node);
});

router.post("/", (req, res) => {
  let server: MultimediaDetCustom = new MultimediaDetCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.createRequestHandler(node);
});

export { router };
