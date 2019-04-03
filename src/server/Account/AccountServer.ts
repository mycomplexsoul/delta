import { ApiModule } from "../ApiModule";
import { iNode } from "../iNode";
import { Account } from "../../crosscommon/entities/Account";
import { ApiServer } from "../ApiServer";

export class AccountServer {
  private api: ApiServer = new ApiServer(new Account());

  list = (node: iNode) => {
    let api: ApiModule = new ApiModule(new Account());

    api.list({ q: node.request.query["q"] }).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
