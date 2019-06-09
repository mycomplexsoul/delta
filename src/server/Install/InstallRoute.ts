import * as express from "express";
import { iNode } from "../iNode";
import { InstallServer } from "./InstallServer";

const router = express.Router();
router.get("/", (req, res) => {
  let server: InstallServer = new InstallServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.install(node);
});

export { router };
