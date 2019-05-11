import * as express from "express";
import { iNode } from "../iNode";
import { MultimediaViewCustom } from "./MultimediaViewCustom";

const router = express.Router();

router.get("/", (req, res) => {
  let server: MultimediaViewCustom = new MultimediaViewCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.list(node);
});

router.post("/", (req, res) => {
  let server: MultimediaViewCustom = new MultimediaViewCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.create(node);
});

export { router };
