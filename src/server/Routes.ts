import * as express from 'express';
// From entities
import * as LastTimeRoute from './LastTime/LastTimeRoute';

// Internal

const router = express.Router();

// Routing from entities
router.use('/lasttime', LastTimeRoute.router);

// Routing for internals

export { router };