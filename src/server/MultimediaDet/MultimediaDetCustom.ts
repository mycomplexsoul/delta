import { ApiServer } from "../ApiServer";
import { MultimediaDet } from "../../crosscommon/entities/MultimediaDet";

export class MultimediaDetCustom {
  private api: ApiServer = new ApiServer(new MultimediaDet());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
