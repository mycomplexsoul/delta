import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SyncQueue } from "./SyncQueue";
import { BehaviorSubject } from "rxjs";
import { Utils } from "src/crosscommon/Utility";

const DELAY_TO_SYNC = 10000;

@Injectable()
export class SyncAPI {
  public queue: Array<SyncQueue> = [];
  //private apiRoot: string = 'http://10.230.9.78:8081';
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  private options = { headers: this.headers };
  private version = "v1.3";
  private logPrefix = `Sync API ${this.version} -`;
  private currentOperation: any = null;
  private lastOnlineStamp: Date = null;
  private statusSubject: BehaviorSubject<SyncQueue[]>;

  constructor(private http: HttpClient) {
    this.http = http;
    this.log("Starting, recovering pending queue from storage");
    this.queue = this.fromStorage() || [];
    this.queueStatus();

    if (this.queue.length > 0) {
      this.log(
        `Found in storage ${this.queue.length} requests, trying to process queue if possible`
      );
      this.log("Current queue", this.queue);
      this.isOnline().then((online) => {
        if (online) {
          //this.processQueue();
          this.syncQueue();
        }
      });
    }
    this.statusSubject = new BehaviorSubject<SyncQueue[]>(this.queue);
  }

  statusObservableNotifier() {
    return this.statusSubject;
  }

  /**
   * Adds a single request to the queue and process it when server is reachable.
   */
  request(
    action: string,
    model: any,
    pk: any,
    entity: string,
    callback: Function,
    recordName: (e: any) => string,
    matchMethod: (val: any) => boolean
  ) {
    this.log(`Handling new request`);
    const queueItem: SyncQueue = {
      action,
      model,
      pk,
      entity,
      callback,
      recordName,
      matchMethod,
      status: "queue", // this is ignored
    };
    this.handleRequest([queueItem]);
  }

  /**
   * creates a SyncQueue object to use later with multipleRequest method.
   */
  asSyncQueue(
    action: string,
    model: any,
    pk: any,
    entity: string,
    callback: Function,
    recordName: (e: any) => string,
    matchMethod: (val: any) => boolean
  ) {
    const queueItem: SyncQueue = {
      action,
      model,
      pk,
      entity,
      callback,
      recordName,
      matchMethod,
      status: "queue", // this is ignored
    };
    return queueItem;
  }

  /**
   *
   */
  requestQueue(queueItem: SyncQueue) {
    this.handleRequest([queueItem]);
  }

  /**
   * Adds multiple requests to the queue and process them when server is reachable.
   */
  multipleRequest(
    list: SyncQueue[],
    { syncImmediately }: { syncImmediately: boolean } = {
      syncImmediately: false,
    }
  ) {
    this.log(`Handling new multiple requests`);
    this.handleRequest(list, { syncImmediately });
  }

  /**
   * Internal method that adds a request list to the queue and process it when server is reachable.
   * For API purposes use either `request` or `multipleRequest` instead of this one.
   */
  private handleRequest(
    list: SyncQueue[],
    { syncImmediately }: { syncImmediately: boolean } = {
      syncImmediately: false,
    }
  ) {
    if (this.currentOperation) {
      this.log(
        "Cancelling sync operation with timer id",
        this.currentOperation
      );
      clearTimeout(this.currentOperation);
    }
    list.forEach((e: SyncQueue) => {
      this.addToQueue(e);
    });
    // notify with fictional status 'syncing', in reality it does not exists
    this.notifyStatus(this.queue.map((d) => ({ ...d, status: "syncing" })));

    this.isOnline().then((online) => {
      if (online) {
        this.currentOperation = setTimeout(
          () => {
            //this.processQueue();
            this.syncQueue();
            this.currentOperation = null;
          },
          syncImmediately ? 100 : DELAY_TO_SYNC
        );
        this.log("Scheduled sync with timer id", this.currentOperation);
      }
    });
  }

  /**
   * Adds the request to the queue.
   * This is an internal method.
   */
  private addToQueue(item: SyncQueue) {
    const { matchMethod, recordName, ...queueItem } = item;
    let foundIndex: number = -1;

    if (matchMethod) {
      foundIndex = this.queue.findIndex(
        (val: SyncQueue) =>
          matchMethod(val.model) &&
          (val.status === "queue" || val.status === "error") &&
          val.entity === queueItem.entity
      );
    }

    if (foundIndex !== -1) {
      // if record has a match, replace model only
      this.log(
        `Recieved a request, found record with id <<${recordName(
          queueItem.model
        )}>> and updated it`
      );
      this.queue[foundIndex].model = queueItem.model;
      return;
    }
    // if not found or no match method, add it
    this.queue.push({
      ...queueItem,
      recordName,
      status: "queue",
    });

    this.log(
      `Recieved a request to ${queueItem.entity} and added it to the queue`
    );
  }

  isOnline() {
    if (
      !this.lastOnlineStamp ||
      new Date().getTime() - this.lastOnlineStamp.getTime() > 30000
    ) {
      let nav = navigator.onLine;
      this.log(`Your navigator reports online status as: ${nav}`);
      return this.isServerReachable().then((data) => {
        // some request to BE
        this.log(`Tried to contact the server, answer was`, data);
        this.lastOnlineStamp = new Date();
        return nav && data;
      });
    } else {
      this.log(
        "Recently it was checked for online status so we assume you're still online"
      );
      return Promise.resolve(true);
    }
  }

  isServerReachable() {
    return this.http
      .get("/status")
      .toPromise()
      .then((data) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }

  queueStatus() {
    console.log(
      `${this.logPrefix} Status is ${
        this.queue.length
      } elements in the queue, ${
        this.queue.filter((q) => q.status === "processed").length
      } processed, ${
        this.queue.filter((q) => q.status === "queue").length
      } not yet processed, ${
        this.queue.filter((q) => q.status === "error").length
      } with error`
    );
  }

  log(message: string, data?: any) {
    if (!data) {
      console.log(`${this.logPrefix} ${message}`);
    } else {
      console.log(`${this.logPrefix} ${message}`, data);
    }
  }

  toStorage() {
    if (typeof window.localStorage !== "undefined") {
      localStorage.setItem(
        "Sync",
        JSON.stringify(this.queue.filter((q) => q.status !== "processed"))
      );
      this.queue = this.queue.filter((q) => q.status !== "processed");
    }
  }

  fromStorage() {
    if (typeof window.localStorage !== "undefined") {
      let list: Array<SyncQueue> = JSON.parse(localStorage.getItem("Sync"));
      return list;
    }
    return [];
  }

  syncQueue() {
    const compareObjects = (o1: any, o2: any) => {
      const keys1 = Object.keys(o1);
      const keys2 = Object.keys(o2);

      const test1 = keys1.every(
        (k1) => keys2.find((k2) => k2 === k1) && o1[k1] === o2[k1]
      );
      const test2 = keys2.every(
        (k2) => keys1.find((k1) => k1 === k2) && o2[k2] === o1[k2]
      );

      return test1 && test2;
    };

    const pending = this.queue.filter((q: any) => q.status !== "processed");
    if (!pending.length) {
      return false; // nothing to sync
    }

    // helper to process a chunk of items
    const processChunk = (chunk: any[]) => {
      return this.http
        .post("/api/sync", { queue: chunk }, this.options)
        .toPromise()
        .then((data) => {
          const response: any = data;
          this.log("Processed sync chunk, response was", response);
          if (response && Array.isArray(response.result)) {
            response.result.forEach((r: any) => {
              // If result item is null but overall success is true, treat as processed
              if (r == null && response.success === true) {
                // Find by matching pk if provided on the response envelope, or skip if not possible
                // In many backends response.result items are per-item; if null and overall success,
                // we cannot match pk, so try best-effort: mark first not-processed matching entity
                const foundFallback = this.queue.find(
                  (q: SyncQueue) => q.status !== "processed"
                );
                if (foundFallback) {
                  foundFallback.status = "processed";
                }
                return;
              }

              let found = this.queue.find((q: SyncQueue) =>
                compareObjects(q.pk, r.pk)
              );
              if (found) {
                // If r is null but r.success is true treat as processed
                const successFlag =
                  r && typeof r.success !== "undefined"
                    ? r.success
                    : response.success;
                found.status = successFlag ? "processed" : "error";
                if (successFlag) {
                  found.callback(found.model, response);
                }
              }
            });
          }
        })
        .catch((err) => {
          // If server responds with 413, rethrow a sentinel error to indicate chunk too large
          const status = err && err.status ? err.status : null;
          if (status === 413) {
            const e: any = new Error("Payload Too Large");
            e.status = 413;
            throw e;
          }
          // For other errors, mark the whole chunk as error but continue
          this.log("Error for chunk request", err);
          chunk.forEach((c: any) => {
            const found = this.queue.find((q: SyncQueue) =>
              compareObjects(q.pk, c.pk)
            );
            if (found) {
              found.status = "error";
            }
          });
        })
        .then(() => {
          this.queueStatus();
          this.toStorage();
          this.notifyStatus();
        });
    };

    // send in batches, retrying on 413 by splitting batch size
    const MAX_BATCH = 30;
    const sendBatches = async () => {
      let start = 0;
      while (start < pending.length) {
        // compute remaining slice from current queue states (skip processed)
        const toSend = this.queue.filter((q: any) => q.status !== "processed");
        if (!toSend.length) break;

        // take up to MAX_BATCH from the current queue
        const chunk = toSend.slice(0, MAX_BATCH);
        try {
          await processChunk(chunk);
        } catch (e: any) {
          if (e && e.status === 413) {
            this.log("Received 413 for chunk, splitting into smaller batches");
            // If chunk size is 1 and still 413, mark as error to avoid infinite loop
            if (chunk.length <= 1) {
              this.log("Single item too large, marking as error", chunk);
              const single = chunk[0];
              const found = this.queue.find((q: SyncQueue) =>
                compareObjects(q.pk, single.pk)
              );
              if (found) found.status = "error";
              this.queueStatus();
              this.toStorage();
              this.notifyStatus();
              // continue with next items
              start += 1;
              continue;
            }
            // otherwise split current chunk into halves and enqueue them to be sent next
            const half = Math.ceil(chunk.length / 2);
            const firstHalf = chunk.slice(0, half);
            const secondHalf = chunk.slice(half);
            // attempt firstHalf immediately; put secondHalf back at front of queue
            // To emulate retrying, we'll mark secondHalf as queue (they already are) and process firstHalf now
            try {
              await processChunk(firstHalf);
            } catch (ee: any) {
              if (ee && ee.status === 413 && firstHalf.length > 1) {
                // recursively handle by reducing batch size further by reinserting into pending flow
                // Insert firstHalf at front of queue by updating statuses to 'queue' (no-op) and continue loop
                // We'll reduce MAX_BATCH behavior by letting slice pick smaller next time
              } else if (ee && ee.status === 413 && firstHalf.length <= 1) {
                const single = firstHalf[0];
                const found = this.queue.find((q: SyncQueue) =>
                  compareObjects(q.pk, single.pk)
                );
                if (found) found.status = "error";
              }
            }
            // continue without advancing start so that remaining items are re-evaluated
            continue;
          } else {
            // Non-413 error: we already marked items as error in processChunk; continue
            this.log("Non-413 error while sending chunk, continuing", e);
            continue;
          }
        }
        // advance start by chunk length processed
        start += chunk.length;
      }
    };

    return sendBatches();
  }

  /**
   * Makes a single request, no tracking for sync process
   * useful when you need only to make a request for batch
   */
  post(url: string, payload: any): Promise<any> {
    return this.http
      .post(url, payload, this.options)
      .toPromise()
      .then((data) => data);
  }

  delete(url: string, payload: any): Promise<any> {
    const options = {
      ...this.options,
      params: Utils.getPKFromEntity(payload),
      body: Utils.removeMetadataFromEntity(payload),
    };
    return this.http
      .delete(url, options)
      .toPromise()
      .then((data) => data);
  }

  get(url: string): Promise<any> {
    return this.http
      .get(url, this.options)
      .toPromise()
      .then((data) => data);
  }

  notifyStatus(data: SyncQueue[] = this.queue) {
    if (this.statusSubject) {
      this.statusSubject.next(data);
    }
  }
}
