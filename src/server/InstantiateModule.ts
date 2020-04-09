import { iEntity } from "../crosscommon/iEntity";

import { Catalog } from "../crosscommon/entities/Catalog";
import { User } from "../crosscommon/entities/User";
import { Logger } from "../crosscommon/entities/Logger";
import { Task } from "../crosscommon/entities/Task";
import { TaskTimeTracking } from "../crosscommon/entities/TaskTimeTracking";
import { TaskSchedule } from "../crosscommon/entities/TaskSchedule";
import { Account } from "../crosscommon/entities/Account";
import { Category } from "../crosscommon/entities/Category";
import { Place } from "../crosscommon/entities/Place";
import { Movement } from "../crosscommon/entities/Movement";
import { Entry } from "../crosscommon/entities/Entry";
import { Balance } from "../crosscommon/entities/Balance";
import { Preset } from "../crosscommon/entities/Preset";
import { LastTime } from "../crosscommon/entities/LastTime";
import { LastTimeHistory } from "../crosscommon/entities/LastTimeHistory";
import { Multimedia } from "../crosscommon/entities/Multimedia";
import { MultimediaDet } from "../crosscommon/entities/MultimediaDet";
import { MultimediaView } from "../crosscommon/entities/MultimediaView";
import { Link } from "../crosscommon/entities/Link";
import { Activity } from "../crosscommon/entities/Activity";
import { Keyval } from "../crosscommon/entities/Keyval";
import { CarteraProvision } from "../crosscommon/entities/CarteraProvision";
import { CarteraPayment } from "../crosscommon/entities/CarteraPayment";
import { CarteraPayDet } from "../crosscommon/entities/CarteraPayDet";

const entityNameModelMap = {
  Catalog: () => new Catalog(),
  User: () => new User(),
  Logger: () => new Logger(),
  // Tasks
  Task: () => new Task(),
  TaskTimeTracking: () => new TaskTimeTracking(),
  TaskSchedule: () => new TaskSchedule(),
  // Money
  Account: () => new Account(),
  Category: () => new Category(),
  Place: () => new Place(),
  Movement: () => new Movement(),
  Entry: () => new Entry(),
  Balance: () => new Balance(),
  Preset: () => new Preset(),
  // LastTime
  LastTime: () => new LastTime(),
  LastTimeHistory: () => new LastTimeHistory(),
  // Multimedia
  Multimedia: () => new Multimedia(),
  MultimediaDet: () => new MultimediaDet(),
  MultimediaView: () => new MultimediaView(),
  // Links
  Link: () => new Link(),
  // Activities
  Activity: () => new Activity(),
  Keyval: () => new Keyval(),
  // Cartera
  CarteraProvision: () => new CarteraProvision(),
  CarteraPayment: () => new CarteraPayment(),
  CarteraPayDet: () => new CarteraPayDet()
};

const instantiateFromString = (entityName: string): iEntity =>
  entityNameModelMap[entityName]();

export default {
  entityNameModelMap,
  instantiateFromString
};
