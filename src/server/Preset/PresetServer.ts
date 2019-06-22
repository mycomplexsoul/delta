import { ApiServer } from "../ApiServer";
import { Preset } from "src/crosscommon/entities/Preset";

export class PresetServer {
  private api: ApiServer = new ApiServer(new Preset());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
