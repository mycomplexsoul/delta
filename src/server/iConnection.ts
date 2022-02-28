interface iConnection {
    close: () => void
    , runSql: (sql: string) => Promise<any>
    , runSqlArray: (sqlArray: Array<string>) => Array<Promise<any>>
    , runSqlArraySerial: (sqlArray: Array<string>) => Promise<{
        operationResult: boolean,
        results: Array<{
          result: Boolean,
          sql: string,
          error: any
        }>
      }>
}
export default iConnection;