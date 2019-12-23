import { iNode } from "../iNode";
import iConnection from "../iConnection";
import { MoSQL } from "../MoSQL";
import ConnectionService from "../ConnectionService";
import { User } from "../../crosscommon/entities/User";
import * as jwt from "jsonwebtoken";
import { secretForToken } from "../SecretForToken";
import { DateUtils } from "../../crosscommon/DateUtility";
import { Crypto } from "../Crypto";

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
    const cypher: Crypto = new Crypto();
    const { hashPassword } = cypher.saltHashPassword(
      password,
      userDB.usr_pwd_salt
    );

    if (hashPassword !== userDB.usr_pwd) {
      return node.response.end(
        JSON.stringify({
          operationResult: false,
          message: "Authentication failed."
        })
      );
    }

    const tokenData = {
      username,
      email: userDB.usr_email
    };

    // calculates time until next monday 3am
    const currentTime: Date = new Date();
    const nextMonday: Date = DateUtils.addDays(
      currentTime,
      7 + 1 - currentTime.getDay()
    ); // 7 for a whole week, 1 to be monday
    nextMonday.setHours(0);
    nextMonday.setMinutes(0);
    nextMonday.setSeconds(0);

    console.log("token generated for next monday", nextMonday);
    const differential: number = DateUtils.elapsedTime(nextMonday, currentTime);
    console.log("differential, expiration seconds", differential);

    const token = jwt.sign(tokenData, secretForToken, {
      //expiresIn: 60 * 60 * 24 // expires in 24 hours
      expiresIn: differential // expires in 24 hours
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

    token = String(token).replace("Bearer ", "");

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

  register = (node: iNode) => {
    const {
      username,
      password,
      email,
      firstName,
      lastName
    } = node.request.body;

    const cypher: Crypto = new Crypto();
    const { salt, hashPassword } = cypher.saltHashPassword(password);

    const user: User = new User();
    user.usr_id = username;
    user.usr_pwd_salt = salt;
    user.usr_pwd = hashPassword;
    user.usr_first_name = firstName;
    user.usr_middle_name = "";
    user.usr_last_name = lastName;
    user.usr_ctg_user_type = 1;
    user.usr_email = email;
    user.usr_ctg_connected = 1;
    user.usr_login_attempts = 0;
    user.usr_date_last_login_attempt = null;
    user.usr_date_pwd_change = DateUtils.newDateUpToSeconds();
    user.usr_ctg_pwd_temporal = 1;
    user.usr_ctg_blocked = 1;
    user.usr_config = null;
    user.usr_date_add = DateUtils.newDateUpToSeconds();
    user.usr_date_mod = DateUtils.newDateUpToSeconds();
    user.usr_ctg_status = 1;

    const sqlMotor: MoSQL = new MoSQL(user);
    const connection: iConnection = ConnectionService.getConnection();
    connection
      .runSql(sqlMotor.toInsertSQL())
      .then(response => {
        node.response.end(
          JSON.stringify({
            operationResult: true,
            message: `Successfully created new user`
          })
        );
      })
      .catch(err => {
        node.response.end(
          JSON.stringify({
            operationResult: false,
            message: `Something wrong happened while creating user`
          })
        );
      });
  };
}
