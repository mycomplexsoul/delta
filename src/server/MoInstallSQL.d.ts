import { iEntity } from "../crosscommon/iEntity";
export declare class MoInstallSQL {
    createTableSQL: (model: iEntity) => string;
    createPKSQL: (model: iEntity) => string;
    createViewSQL: (model: iEntity) => string;
    createViewSQLNoSubQuery: (model: iEntity) => string;
}
//# sourceMappingURL=MoInstallSQL.d.ts.map