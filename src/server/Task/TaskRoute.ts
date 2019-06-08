import * as express from "express";
import { iNode } from "../iNode";
import { TaskCustom } from "./TaskCustom";

const router = express.Router();

router.get("/", (req, res) => {
  let server: TaskCustom = new TaskCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.list(node);
});

router.get("/list-open", (req, res) => {
  let server: TaskCustom = new TaskCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.listOpenTasks(node);
});

router.post("/batch", (req, res) => {
  let server: TaskCustom = new TaskCustom();
  let node: iNode = {
    request: req,
    response: res
  };
  server.batchRequestHandler(node);
});

export { router };
