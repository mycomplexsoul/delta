import { Place } from "../../crosscommon/entities/Place";
import { ApiServer } from "../ApiServer";

export class PlaceServer {
  private api: ApiServer = new ApiServer(new Place());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
