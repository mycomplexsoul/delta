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

    const runSqlArraySerial = async (sqlArray: Array<string>): Promise<{
      operationResult: boolean,
      results: Array<{
        result: Boolean,
        sql: string,
        error: any
      }>
    }> => {
      let response = {
        operationResult: true,
        results: []
      };
      
      for (const sql of sqlArray) {
        const result = {
          success: true,
          sql,
          error: null
        };
  
        try {
          await runSql(sql);
          response.results.push(result);
        } catch(e) {
          result.success = false;
          result.error = e.message + ' => ' + JSON.stringify(e);
          response.results.push(result);
          response.operationResult = false;
        }
      }

      console.log('runSqlArraySerial end status', response);

      return Promise.resolve(response);
    };

    return {
      close,
      runSql,
      runSqlArray,
      runSqlArraySerial
    } as iConnection;
  };

  return {
    getConnection: getConnection
  };
})();
export default ConnectionService;
