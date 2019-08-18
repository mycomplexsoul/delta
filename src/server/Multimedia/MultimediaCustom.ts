import { ApiServer } from "../ApiServer";
import { Multimedia } from "../../crosscommon/entities/Multimedia";

export class MultimediaCustom {
  private api: ApiServer = new ApiServer(new Multimedia());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
