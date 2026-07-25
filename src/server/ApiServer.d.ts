import { iNode } from "./iNode";
import { iEntity } from "../crosscommon/iEntity";
export declare class ApiServer {
    private model;
    constructor(model: iEntity);
    listRequestHandler: (node: iNode) => void;
    list: (query: any) => Promise<any>;
    listServer: (filter: Array<any>) => Promise<any>;
    createRequestHandler: (node: iNode, hooks?: any) => void;
    create: (body: any, hooks?: any) => Promise<any>;
    updateRequestHandler: (node: iNode, hooks?: any) => void;
    update: (body: any, pk: any, hooks?: any) => Promise<any>;
    deleteRequestHandler: (node: iNode) => Promise<void>;
    delete: (pk: any) => Promise<any>;
}
//# sourceMappingURL=ApiServer.d.ts.map