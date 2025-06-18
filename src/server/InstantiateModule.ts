import { iEntity } from "../crosscommon/iEntity";

import { Utils } from "../crosscommon/Utility";

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
import { CarteraUnit } from "../crosscommon/entities/CarteraUnit";
import { Timeline } from "../crosscommon/entities/Timeline";
import { Budget } from "../crosscommon/entities/Budget";

const entityNameModelMap = {
  Catalog: (d: any) => new Catalog(d),
  User: (d: any) => new User(d),
  Logger: (d: any) => new Logger(d),
  // Tasks
  Task: (d: any) => new Task(d),
  TaskTimeTracking: (d: any) => new TaskTimeTracking(d),
  TaskSchedule: (d: any) => new TaskSchedule(d),
  // Money
  Account: (d: any) => new Account(d),
  Category: (d: any) => new Category(d),
  Place: (d: any) => new Place(d),
  Movement: (d: any) => new Movement(d),
  Entry: (d: any) => new Entry(d),
  Balance: (d: any) => new Balance(d),
  Preset: (d: any) => new Preset(d),
  Budget: (d: any) => new Budget(d),
  // LastTime
  LastTime: (d: any) => new LastTime(d),
  LastTimeHistory: (d: any) => new LastTimeHistory(d),
  // Multimedia
  Multimedia: (d: any) => new Multimedia(d),
  MultimediaDet: (d: any) => new MultimediaDet(d),
  MultimediaView: (d: any) => new MultimediaView(d),
  // Links
  Link: (d: any) => new Link(d),
  // Activities
  Activity: (d: any) => new Activity(d),
  Keyval: (d: any) => new Keyval(d),
  // Cartera
  CarteraProvision: (d: any) => new CarteraProvision(d),
  CarteraPayment: (d: any) => new CarteraPayment(d),
  CarteraPayDet: (d: any) => new CarteraPayDet(d),
  CarteraUnit: (d: any) => new CarteraUnit(d),
  // Timeline
  Timeline: (d: any) => new Timeline(d),
};

const instantiateFromString = (
  entityName: string,
  data: any = undefined,
  withNoMetadata: boolean = false
): iEntity => {
  const populatedEntity: iEntity = entityNameModelMap[entityName](data);
  if (withNoMetadata) {
    return Utils.removeMetadataFromEntity(populatedEntity);
  }
  return populatedEntity;
};

const parseIntoObjectTree = (
  rows: Array<any>,
  tree: { main: string; additional?: any }
) => {
  const items: Array<iEntity> = [];
  const control: Array<string> = []; // will hold ids
  // rows is the output of a sql query
  // tree is a collection of entities that need to be parsed from the output
  // return value is a transform the output into an object tree respecting the entities
  return rows.map((row) => {
    /**
     * tree example: { "main": "Activity", "additional": { "timeline": "Timeline", "tasks": "Task", "custom": { "count": "Number", "total": "Number" } } }
     */
    const rawItem: iEntity = instantiateFromString(tree.main, row);

    let item: iEntity;
    // need to determine if item already exists or not
    const foundIndex = control.findIndex((c) => c === rawItem.recordName());
    if (foundIndex !== -1) {
      // item is already in list, use it to add more data
      item = items[foundIndex];
    } else {
      // item is not in list, add it to control and at end push it to items
      control.push(rawItem.recordName());
      item = Utils.removeMetadataFromEntity(rawItem);
      item["additional"] = {};
    }

    Object.entries(tree.additional || {}).forEach(
      ([name, entityDefinition]) => {
        if (name === "custom") {
          // TODO: Add logic for custom fields
        } else {
          if (!item["additional"][name]) {
            item["additional"][name] = [];
          }
          item["additional"][name].push(
            instantiateFromString(String(entityDefinition), row, true)
          );
        }
      }
    );

    if (foundIndex === -1) {
      items.push(item);
    }
  });
};

export default {
  entityNameModelMap,
  instantiateFromString,
  parseIntoObjectTree,
};
