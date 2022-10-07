import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";
import { Timeline } from "../../crosscommon/entities/Timeline";
import { Utils } from "src/crosscommon/Utility";

@Injectable()
export class TimelineService {
  private data: {
    timeline: Timeline[];
  } = {
    timeline: [],
  };
  private config = {
    api: {
      list: "/api/timeline/",
      create: "/api/timeline/",
    },
  };

  constructor(private sync: SyncAPI) {}

  async getTimeline(recordId: string): Promise<{ timeline: Timeline[] }> {
    const defaultData: {
      timeline: Timeline[];
    } = {
      timeline: [],
    };

    const q = Utils.buildFilterStringified("tim_id_record", recordId);

    return this.sync
      .get(`${this.config.api.list}?q=${q}`)
      .then((data) => {
        this.data.timeline = data; // TODO: Fix this in server, should return an internal item name
        return this.data;
      })
      .catch((err) => {
        return defaultData;
      });
  }

  async getTimelineForRecord(
    recordName: string
  ): Promise<{ timeline: Timeline[] }> {
    const defaultData: {
      timeline: Timeline[];
    } = {
      timeline: [],
    };

    const q = Utils.buildFilterStringified(
      "tim_id_record",
      encodeURIComponent(`${recordName}%25`), // TODO: currently escaping twice % <=> %25 <=> %2525
      "lk"
    );

    return this.sync
      .get(`${this.config.api.list}?q=${q}`)
      .then((data) => {
        this.data.timeline = data; // TODO: Fix this in server, should return an internal item name
        return this.data;
      })
      .catch((err) => {
        return defaultData;
      });
  }

  create(timeline: Timeline): Promise<Timeline> {
    return this.sync
      .post(`${this.config.api.create}`, Utils.entityToRawTableFields(timeline))
      .then((data) => {
        return new Timeline(data);
      })
      .catch((err) => {
        console.log(err);
        return new Timeline();
      });
  }
}
