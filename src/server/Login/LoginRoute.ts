import * as express from "express";
import { iNode } from "../iNode";
import { LoginServer } from "./LoginServer";

const router = express.Router();

router.post("/authenticate", async (req, res) => {
  let server: LoginServer = new LoginServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.login(node);
});

/**
 * Validates token
 */
router.get("/validate", async (req, res) => {
  let server: LoginServer = new LoginServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.validateToken(node);
});

export { router };
