import { ApiServer } from "../ApiServer";
import { Category } from "../../crosscommon/entities/Category";

export class CategoryServer {
  private api: ApiServer = new ApiServer(new Category());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
