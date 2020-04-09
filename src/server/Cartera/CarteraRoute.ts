import * as express from "express";
import { iNode } from "../iNode";
import { CarteraServer } from "./CarteraServer";

const router = express.Router();

/**
 * Generates provisions for the specified month
 */
router.post("/generate-provisions", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.generateAllProvisionsForMonthHandler(node);
});

/**
 * Allows to register multiple payments in batch mode
 */
router.post("/batch-payment", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.registerBatchPaymentsHandler(node);
});

/**
 * Used to load initial/existing provisions in batch
 * @deprecated Single use
 */
router.post("/initial-provision-batch", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.initialProvisionBatchHandler(node);
});

/**
 * Generates penalization provisions for specified month if
 * there's no payment for normal provision
 */
router.post("/generate-penalization-missing-payment", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.generatePenalizationForMissingPaymentHandler(node);
});

/**
 * Generates a single penalization for a single unit for a single month
 */
router.post("/generate-penalization-unit", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.generatePenalizationForUnitHandler(node);
});

/**
 * Assign a provided amount of a payment to a provision
 */
router.post("/assign-payment", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.assignPaymentHandler(node);
});

/**
 * List of payments having each payment their respective payed provisions
 */
router.get("/payment-listing", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.getPaymentApplicationListingHandler(node);
});

/**
 * Rebuilds status for a given month by reseting payments on provisions
 * and then applying payments until the required month.
 *
 * Final outcome is the listing of the provisions with remaining amount
 * to be payed.
 *
 * Also this endpoint returns future payments using the same outcome and
 * a listing of payments not identified up until the given month.
 */
router.get("/rebuild-pending-payments-month", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.rebuildPendingPaymentsForMonthHandler(node);
});

/**
 * Obtains provisions and payments for a single unit
 * to reflect the status of the unit debts until the given month
 */
router.get("/unit-status-for-month", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.unitStatusForMonthHandler(node);
});

/**
 * Changes all of the provisions' text concept to use spanish
 * naming for months and a specific format
 * @deprecated This was used once, should delete
 */
router.post("/change-concept-to-spanish", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.changeConceptToSpanishHandler(node);
});

/**
 * Creates movements from payment details
 * to reflect all income into the account's balance
 * for a given month
 */
router.post("/register-monthly-income", (req, res) => {
  let server: CarteraServer = new CarteraServer();
  let node: iNode = {
    request: req,
    response: res
  };
  server.registerMonthlyIncomeHandler(node);
});

export { router };
