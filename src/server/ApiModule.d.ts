import { iEntity } from "../crosscommon/iEntity";
import iConnection from "./iConnection";
export declare class ApiModule {
    model: iEntity;
    constructor(model: iEntity);
    list: (data: any, model?: iEntity) => Promise<iEntity[]>;
    /**
     * Method to run a SQL query to get entity listing, but providing
     * filter arguments as an object
     * @param filter Array An Array of objects that can be converted into SQL with #MoSQL.simpleCriteriaToSQL() method
     * @param model iEntity Data object
     * @returns Listing
     */
    listServer: (filter: Array<any>, model?: iEntity) => Promise<iEntity[]>;
    create: (data: any, hooks: any, model?: iEntity) => Promise<any>;
    update: (data: any, hooks: any, model?: iEntity, connectionInstance?: iConnection) => Promise<any>;
    delete: (data: any, hooks: any, model?: iEntity) => Promise<any>;
    listWithSQL: (data: any, model?: iEntity) => Promise<iEntity[]>;
    multipleListWithSQL: (data: any) => Promise<any>;
    batch: (data: any, hooks: any, model?: iEntity) => Promise<any>;
}
//# sourceMappingURL=ApiModule.d.ts.map