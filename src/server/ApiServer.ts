import { iNode } from "./iNode";
import { ApiModule } from "./ApiModule";
import { iEntity } from "../crosscommon/iEntity";

export class ApiServer {
  private model: iEntity = null;

  constructor(model: iEntity) {
    this.model = model;
  }

  listRequestHandler = (node: iNode) => {
    const { username } = node.request["userData"];
    this.list({
      q: node.request.query["q"],
      username
    }).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };

  list = (query: any): Promise<any> => {
    const api: ApiModule = new ApiModule(this.model);

    return api.list(query);
  };

  createRequestHandler = (node: iNode, hooks: any = {}) => {
    this.create(node.request.body, hooks).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };

  create = (body: any, hooks: any = {}): Promise<any> => {
    const api: ApiModule = new ApiModule(this.model);

    return api.create({ body }, hooks);
  };

  updateRequestHandler = (node: iNode) => {
    this.update(node.request.body, node.request.params).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };

  update = (body: any, pk: any): Promise<any> => {
    const api: ApiModule = new ApiModule(this.model);

    return api.update({ body, pk }, {});
  };
}
