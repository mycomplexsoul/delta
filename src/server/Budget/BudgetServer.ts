import { Budget } from "../../crosscommon/entities/Budget";
import { ApiServer } from "../ApiServer";

export class BudgetServer {
  private api: ApiServer = new ApiServer(new Budget());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;

  deleteRequestHandler = this.api.deleteRequestHandler;
  delete = this.api.delete;
}
