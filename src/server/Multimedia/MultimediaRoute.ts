import * as express from "express";
import { iNode } from "../iNode";
import { MultimediaCustom } from "./MultimediaCustom";

const router = express.Router();

router.get("/", (req, res) => {
  let server: MultimediaCustom = new MultimediaCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.listRequestHandler(node);
});

router.post("/", (req, res) => {
  let server: MultimediaCustom = new MultimediaCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.createRequestHandler(node);
});

export { router };
