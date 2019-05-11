import { ApiModule } from "../ApiModule";
import { iNode } from "../iNode";
import { MultimediaView } from "../../crosscommon/entities/MultimediaView";
import { ApiServer } from "../ApiServer";

export class MultimediaViewCustom {
  private api: ApiServer = new ApiServer(new MultimediaView());

  list = (node: iNode) => {
    let api: ApiModule = new ApiModule(new MultimediaView());

    api.list({ q: node.request.query["q"] }).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
