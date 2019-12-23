import { Injectable } from "@angular/core";
import { SyncAPI } from "../common/sync.api";

@Injectable()
export class TypeGeneratorService {
  private data: any = {};
  private sync: SyncAPI = null;
  private config = {
    storageKey: "type-generator",
    defaultUser: "anon",
    api: {
      config: "/api/type-generator/config",
      create: "/api/type-generator/create",
      check: "/api/type-generator/check",
      checkDatabase: "/api/type-generator/check-database"
    }
  };

  constructor(sync: SyncAPI) {
    this.sync = sync;
  }

  getAll(): Promise<any> {
    return this.sync.get(`${this.config.api.config}`).then(data => {
      this.data = data;
      return this.data;
    });
  }

  create(item: any): Promise<any> {
    return this.sync.post(`${this.config.api.create}`, item);
  }

  check(item: any): Promise<any> {
    return this.sync.post(`${this.config.api.check}`, item);
  }

  checkDatabase(item: any): Promise<any> {
    return this.sync.post(`${this.config.api.checkDatabase}`, item);
  }
}
