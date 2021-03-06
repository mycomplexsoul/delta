import { Movement } from "../../crosscommon/entities/Movement";
import { StorageService } from "../common/storage.service";
import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Utils } from "../../crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";

@Injectable()
export class MovementService {
  private data: Array<Movement> = [];
  private storage: StorageService = null;
  private sync: SyncAPI = null;
  private config = {
    storageKey: "movements",
    api: {
      list: "/api/movements",
      create: "/api/movements",
      update: "/api/movements/:id",
      delete: "/api/movements/:id",
      batch: "/movement/batch" // not supported in NodeTS
    }
  };
  private usage: string = "ALWAYS_ON_LINE";
  // ALWAYS_ON_LINE = means no local storage layer, always fetch from server and always push to server, just save to storage when an error ocurrs
  // LOCAL_FIRST = means use local storage layer, fetch from server to local storage then push to server

  constructor(
    storage: StorageService,
    sync: SyncAPI,
    private authenticationService: AuthenticationService
  ) {
    this.storage = storage;
    this.sync = sync;
    // get api root
    const options = storage.getObject("Options");
  }

  list(): Array<Movement> {
    return this.data;
  }

  /**
   * Guidance for this method objective:
   * - Read sync data from storage
   * - Read from storage to memory
   * - If server is available
   *   - Push sync data to server, server decides changes to keep, returns sync results (merge if needed)
   *   - Fetch from server to memory, then save to local
   * - Return data
   *
   * When new data comes (new, update, delete):
   * - Create sync data in memory and push it to local (to be available if push to server fails)
   * - Update local with changes
   * - If server is available
   *   - Push sync data to server, server decides changes to keep, returns sync results (straightforward in this case)
   */
  getAll() {
    /*let fromStorage = this.storage.get(this.config.storageKey);
        if (fromStorage){
            this.data = JSON.parse(fromStorage);
        } else {
            this.data = this.initialData();
        }*/
    // sort data
    return this.sync.get(`${this.config.api.list}`).then(data => {
      this.data = data.map((d: any): Movement => new Movement(d));
      this.data = this.data.sort(this.sort);
      return this.data;
    });
  }

  sort(a: Movement, b: Movement) {
    if (new Date(a.mov_date).getTime() < new Date(b.mov_date).getTime()) {
      return -1;
    } else if (
      new Date(a.mov_date).getTime() > new Date(b.mov_date).getTime()
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  saveToStorage() {
    //this.storage.set(this.config.storageKey,JSON.stringify(this.data));
  }

  newId(date: Date) {
    return Utils.hashId("mov", 32, date);
  }

  newItem(movement: Movement, callback: Function): Movement {
    const newId: string = this.newId(new Date(movement.mov_date));
    //const newId: string = Utils.hashId('mov', 32, new Date(movement.mov_date));
    movement.mov_id = newId;
    movement.mov_ctg_currency = 1;
    movement.mov_id_user = this.authenticationService.currentUserValue.username;
    movement.mov_date_add = new Date();
    movement.mov_date_mod = new Date();
    const newItem = new Movement(movement);
    //this.data.push(newItem);
    //this.saveToStorage();
    this.sync
      .post(this.config.api.create, newItem)
      .then(response => {
        if (response.success) {
          callback();
        } else {
          newItem["sync"] = false;
        }
        this.data.push(newItem);
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        newItem["sync"] = false;
        this.data.push(newItem);
      });

    return newItem;
  }

  newBatch(movements: Array<Movement>) {
    movements.forEach((m: Movement) => {
      m.mov_id = this.newId(m.mov_date);
      this.data.push(new Movement(m));
    });
    this.sendBatchToServer(movements);
    this.saveToStorage();
    return movements;
  }

  sendBatchToServer(list: Array<Movement>) {
    this.sync.post(`${this.config.api.batch}`, list).then((response: any) => {
      // response: { success: true, details: {  } }
      console.log("response movements batch", response);
    });
  }

  edit(movement: Movement, callback: Function): Movement {
    movement.mov_ctg_currency = 1;
    movement.mov_date_mod = new Date();
    movement.mov_id_user = this.authenticationService.currentUserValue.username;
    const item: Movement = new Movement(movement);

    this.sync
      .post(this.config.api.update.replace(":id", movement.mov_id), item)
      .then(response => {
        const index = this.data.findIndex(d => d.mov_id === item.mov_id);
        if (response.success) {
          callback();
        } else {
          item["sync"] = false;
        }
        this.data[index] = item;
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        const index = this.data.findIndex(d => d.mov_id === item.mov_id);
        item["sync"] = false;
        this.data[index] = item;
      });

    return item;
  }

  delete(movement: Movement, callback: Function): Movement {
    this.sync
      .delete(this.config.api.delete.replace(":id", movement.mov_id), movement)
      .then(response => {
        const index = this.data.findIndex(d => d.mov_id === movement.mov_id);
        if (response.success) {
          callback();
        } else {
          movement["sync"] = false;
        }
        this.data.splice(index, 1);
      })
      .catch(err => {
        // Append it to the listing but flag it as non-synced yet
        const index = this.data.findIndex(d => d.mov_id === movement.mov_id);
        movement["sync"] = false;
        this.data.splice(index, 1);
      });

    return movement;
  }

  async getMovementList(filter: string): Promise<{ movementList: Movement[] }> {
    const defaultData: {
      movementList: Movement[];
    } = {
      movementList: []
    };

    return this.sync
      .get(`${this.config.api.list}?q=${filter}`)
      .then(data => {
        return {
          movementList: data
            .map((d: any): Movement => new Movement(d))
            .sort(this.sort)
        };
      })
      .catch(err => {
        return defaultData;
      });
  }
}
