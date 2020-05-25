import { Timeline } from "../../crosscommon/entities/Timeline";
import { ApiServer } from "../ApiServer";

export class TimelineServer {
  private api: ApiServer = new ApiServer(new Timeline());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
