import { ApiServer } from "../ApiServer";
import { MultimediaView } from "../../crosscommon/entities/MultimediaView";

export class MultimediaViewCustom {
  private api: ApiServer = new ApiServer(new MultimediaView());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
