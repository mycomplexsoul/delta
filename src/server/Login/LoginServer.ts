import { iNode } from "../iNode";
import iConnection from "../iConnection";
import { MoSQL } from "../MoSQL";
import ConnectionService from "../ConnectionService";
import { User } from "../../crosscommon/entities/User";
import * as jwt from "jsonwebtoken";
import { secretForToken } from "../SecretForToken";

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

    const tokenData = {
      username,
      email: userDB.usr_email
    };

    const token = jwt.sign(tokenData, secretForToken, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

    node.response.end(
      JSON.stringify({
        operationResult: true,
        message: "Authentication ok.",
        identity: {
          token,
          username,
          email: userDB.usr_email
        }
      })
    );
    return true;
  };

  validateToken(node: iNode) {
    let token = node.request.headers["authorization"];

    if (!token) {
      node.response.status(401).send({
        error: "An authentication token is needed"
      });
      return false;
    }

    token = token.replace("Bearer ", "");

    jwt.verify(token, secretForToken, (err, user) => {
      if (err) {
        node.response.status(401).send({
          operationResult: false,
          message: "Invalid token"
        });
      } else {
        node.response.send({
          operationResult: true,
          message: "Valid token"
        });
      }
    });
  }
}
