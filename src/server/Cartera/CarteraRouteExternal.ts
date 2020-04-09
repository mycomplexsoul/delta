import * as express from "express";
import { iNode } from "../iNode";
import { CarteraServer } from "./CarteraServer";

const router = express.Router();

router.get("/rebuild-pending-payments-month", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.rebuildPendingPaymentsForMonthHandler(node);
});

export { router };
