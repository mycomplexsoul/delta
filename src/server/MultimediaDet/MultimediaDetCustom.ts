import { ApiModule } from "../ApiModule";
import { iNode } from "../iNode";
import { MultimediaDet } from "../../crosscommon/entities/MultimediaDet";
import { ApiServer } from "../ApiServer";

export class MultimediaDetCustom {
  private api: ApiServer = new ApiServer(new MultimediaDet());

  list = (node: iNode) => {
    let api: ApiModule = new ApiModule(new MultimediaDet());

    api.list({ q: node.request.query["q"] }).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
