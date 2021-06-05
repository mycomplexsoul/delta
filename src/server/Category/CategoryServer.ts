import { ApiServer } from "../ApiServer";
import { Category } from "../../crosscommon/entities/Category";
import { iNode } from "../iNode";
import ConnectionService from "../ConnectionService";
import { Movement } from "../../crosscommon/entities/Movement";
import { MoSQL } from "../MoSQL";

export class CategoryServer {
  private api: ApiServer = new ApiServer(new Category());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;

  deleteRequestHandler = async (node: iNode) => {
    const singleResultQuery = (sql: string) => {
      const connection = ConnectionService.getConnection();
      
      return connection.runSql(sql).then(({ rows }) => {
        const { result } = rows[0];
        console.log('-- query with single result returned: ', result);
        return result;
      });
    };
    // Verify there's no uses of the category before deletion
    const movement: Movement = new Movement();
    const categoryId: string = node.request.params['mct_id'];
    const sqlMotor: MoSQL = new MoSQL(movement);
    const sqlCriteria: string = sqlMotor.simpleCriteriaToSQL({
      "mov_id_category": categoryId
    }, movement);
    const sql: string = `select count(*) as result from ${movement.metadata.tableName} where ${sqlCriteria}`;
    const result = await singleResultQuery(sql);

    if (result === 0) {
      // No uses, delete
      this.deleteItem(node.request.params).then(response => {
        node.response.end(JSON.stringify(response));
      });
    } else {
      // Still used, return error
      node.response.end({
        success: false,
        message: "Can't delete because it's still used. Ensure it's not used and try again."
      });
    }
  };
  deleteItem = this.api.delete;
}
