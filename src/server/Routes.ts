import * as express from "express";
import * as jwt from "jsonwebtoken";
import { secretForToken } from "./SecretForToken";

// From entities
import * as CategoryRoute from "./Category/CategoryRoute";
import * as BalanceRoute from "./Balance/BalanceRoute";
import * as MovementRoute from "./Movement/MovementRoute";
import * as MovementRouteExternal from "./Movement/MovementRouteExternal";
import * as EntryRoute from "./Entry/EntryRoute";
import * as AccountRoute from "./Account/AccountRoute";
import * as PlaceRoute from "./Place/PlaceRoute";
import * as PresetRoute from "./Preset/PresetRoute";
import * as TaskRoute from "./Task/TaskRoute";
import * as LastTimeRoute from "./LastTime/LastTimeRoute";
import * as LastTimeHistoryRoute from "./LastTimeHistory/LastTimeHistoryRoute";
import * as MultimediaRoute from "./Multimedia/MultimediaRoute";
import * as MultimediaDetRoute from "./MultimediaDet/MultimediaDetRoute";
import * as MultimediaViewRoute from "./MultimediaView/MultimediaViewRoute";
import * as LinkRoute from "./Link/LinkRoute";
import * as LinkRouteExternal from "./Link/LinkRouteExternal";
import * as SyncRoute from "./Sync/SyncRoute";

// Other pages
import * as LoginRoute from "./Login/LoginRoute";

// Internal
import * as TypeGenerator from "./TypeGenerator/TypeGeneratorRoute";
import * as Install from "./Install/InstallRoute";
import * as FileOrganizer from "./FileOrganizer/FileOrganizerRoute";

const router = express.Router();

// Entites that use authentication
const entitiesWithAuth = [
  { url: "/categories", handler: CategoryRoute.router },
  { url: "/balance", handler: BalanceRoute.router },
  { url: "/movements", handler: MovementRoute.router },
  { url: "/entries", handler: EntryRoute.router },
  { url: "/accounts", handler: AccountRoute.router },
  { url: "/places", handler: PlaceRoute.router },
  { url: "/presets", handler: PresetRoute.router },
  { url: "/tasks", handler: TaskRoute.router },
  { url: "/lasttime", handler: LastTimeRoute.router },
  { url: "/lasttimehistory", handler: LastTimeHistoryRoute.router },
  { url: "/multimedia", handler: MultimediaRoute.router },
  { url: "/multimediadet", handler: MultimediaDetRoute.router },
  { url: "/multimediaview", handler: MultimediaViewRoute.router },
  { url: "/links", handler: LinkRoute.router },

  { url: "/sync", handler: SyncRoute.router }
];

const authMiddleware = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    res.status(401).send({
      operationResult: false,
      message: "An authentication token is needed"
    });
    return false;
  }

  token = token.replace("Bearer ", "");

  jwt.verify(token, secretForToken, (err, user) => {
    if (err) {
      res.status(401).send({
        operationResult: false,
        message: "Invalid token"
      });
    } else {
      req.userData = user;
      next();
    }
  });
};

// Routing from entities
entitiesWithAuth.forEach(({ url, handler }) => {
  router.use(url, authMiddleware, handler);
});

// Routing for other pages
router.use("/login", LoginRoute.router);
router.use("/external/links", LinkRouteExternal.router);
router.use("/external/movement", MovementRouteExternal.router);

// Routing for internals
router.use("/type-generator", TypeGenerator.router);
router.use("/install", Install.router);
router.use("/file-organizer", FileOrganizer.router);

export { router };
