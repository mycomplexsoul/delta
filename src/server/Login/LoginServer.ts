import { iNode } from "../iNode";
import iConnection from "../iConnection";
import { MoSQL } from "../MoSQL";
import ConnectionService from "../ConnectionService";
import { User } from "../../crosscommon/entities/User";

export class LoginServer {
  login = async (node: iNode) => {
    const { username, password } = node.request.body;

    const sqlMotor: MoSQL = new MoSQL(new User());
    const sql = sqlMotor.toSelectSQL(
      encodeURIComponent(
        JSON.stringify({
          gc: "AND",
          cont: [
            {
              f: "usr_id",
              op: "eq",
              val: username
            }
          ]
        })
      )
    );

    const connection: iConnection = ConnectionService.getConnection();
    const { rows: UserList } = await connection.runSql(sql);

    if (!UserList.length) {
      node.response.end(
        JSON.stringify({
          operationResult: false,
          message: "Authentication failed."
        })
      );
      return;
    }

    const userDB: User = new User(UserList[0]);

    // validate password
    // TODO: needs crypto methods to cypher passwords

    node.response.end(
      JSON.stringify({
        operationResult: true,
        message: "Authentication ok.",
        identity: {
          token: "T123456",
          username: username,
          email: userDB.usr_email
        }
      })
    );
    return true;
  };
}
