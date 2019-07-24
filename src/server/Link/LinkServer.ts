import { Link } from "../../crosscommon/entities/Link";
import { ApiServer } from "../ApiServer";

export class LinkServer {
  private api: ApiServer = new ApiServer(new Link());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
