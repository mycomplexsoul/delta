import { Keyval } from "../../crosscommon/entities/Keyval";
import { ApiServer } from "../ApiServer";

export class KeyvalServer {
  private api: ApiServer = new ApiServer(new Keyval());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
