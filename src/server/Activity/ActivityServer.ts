import { Activity } from "../../crosscommon/entities/Activity";
import { ApiServer } from "../ApiServer";

export class ActivityServer {
  private api: ApiServer = new ApiServer(new Activity());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
