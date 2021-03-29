import iConnection from "./iConnection";
import * as mysql from "mysql";
import { configModule } from "./ConfigModule";

let pool = null;
      
let ConnectionService = (function() {
  const getConnection = (label = "default"): iConnection => {
    const config = configModule
      .getConfigValue("db")
      .find((item: any) => item.label === label);

    if (!pool) {
      pool = mysql.createPool({
        connectionLimit : 10,
        ...config
      });
    }

    const close = () => {
      console.log('-- no need to call close on the sql connection');
    };

    const runSql = (sql: string): Promise<any> => {
      return new Promise<any>((resolve, reject) => {
        pool.getConnection((err, connection: mysql.Connection) => {
          if (err) {
            reject(err);
            return null;
          }

          return connection.query(sql, (err: any, rows: any, fields: any[]) => {
            if (err) {
              console.log(
                "There was an error with this sql: " +
                  sql +
                  ", the error is: " +
                  err
              );
              reject(err);
              return false;
            }
            if (!fields && rows.message) {
              console.log(
                "Message returned after running the sql: " + rows.message
              );
            }
            console.log("[async execution ok for query] ", sql);
            connection.release();
            resolve({ sql, err, rows, fields });
          });
        });
      });
    };

    const runSqlArray = (sqlArray: Array<string>): Array<Promise<any>> => {
      const responseArray = sqlArray.map((sql: string) => runSql(sql));
      return responseArray;
    };

    return {
      close,
      runSql,
      runSqlArray
    } as iConnection;
  };

  return {
    getConnection: getConnection
  };
})();
export default ConnectionService;
