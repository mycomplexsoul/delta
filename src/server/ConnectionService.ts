import iConnection from "./iConnection";
import * as mysql from "mysql";
import { configModule } from "./ConfigModule";

let pool = null;

let ConnectionService = (function () {
  const getConnection = (label = "default"): iConnection => {
    const config = configModule
      .getConfigValue("db")
      .find((item: any) => item.label === label);

    if (!pool) {
      pool = mysql.createPool({
        connectionLimit: 100,
        ...config,
      });
    }

    const close = () => {
      console.log("-- no need to call close on the sql connection");
    };

    const runSql = (sql: string): Promise<any> => {
      return new Promise<any>((resolve, reject) => {
        console.log(
          "-- [ConnectionService.runSql] grab new DB connection from pool"
        );
        pool.getConnection((err, connection: mysql.Connection) => {
          console.log(
            "-- [ConnectionService.runSql] obtained new DB connection from pool"
          );
          if (err) {
            console.error("error getting a DB connection from the pool", {
              err,
            });
            return reject(err);
          }

          return connection.query(sql, (err: any, rows: any, fields: any[]) => {
            const status: any = {
              success: false,
              timestamp: new Date(),
              sql,
            };
            if (err) {
              status.message = "Error running sql";
              status.error = err;
              console.log(status);
              return reject(err);
            }
            status.success = true;

            if (!fields && rows.message) {
              status.message = rows.message;
            }
            console.log(status);

            connection.release();
            return resolve({ sql, err, rows, fields });
          });
        });
      });
    };

    const runSqlArray = (sqlArray: Array<string>): Array<Promise<any>> => {
      const responseArray = sqlArray.map((sql: string) => runSql(sql));
      return responseArray;
    };

    const runSqlArraySerial = async (
      sqlArray: Array<string>
    ): Promise<{
      operationResult: boolean;
      results: Array<{
        result: Boolean;
        sql: string;
        error: any;
      }>;
    }> => {
      let response = {
        operationResult: true,
        results: [],
      };

      for (const sql of sqlArray) {
        const result = {
          success: true,
          sql,
          error: null,
        };

        try {
          await runSql(sql);
          response.results.push(result);
        } catch (e) {
          result.success = false;
          result.error = e.message + " => " + JSON.stringify(e);
          response.results.push(result);
          response.operationResult = false;
        }
      }

      console.log("runSqlArraySerial end status", response);

      return Promise.resolve(response);
    };

    return {
      close,
      runSql,
      runSqlArray,
      runSqlArraySerial,
    } as iConnection;
  };

  return {
    getConnection: getConnection,
  };
})();
export default ConnectionService;
