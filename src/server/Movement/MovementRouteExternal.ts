import * as express from "express";
import { MovementCustom } from "./MovementCustom";

const router = express.Router();

/**
 * Send account movements for a specified account/year/month in an email.
 * Example: /api/external/movement/email-account-movements?account=11&year=2018&month=11
 */
router.get("/email-account-movements", (req, res) => {
  const server: MovementCustom = new MovementCustom();

  server.emailAccountMovements(req, res);
});

export { router };
