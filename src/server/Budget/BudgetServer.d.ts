import { iNode } from "../iNode";
export declare class BudgetServer {
    private api;
    listRequestHandler: (node: iNode) => void;
    list: (query: any) => Promise<any>;
    createRequestHandler: (node: iNode, hooks?: any) => void;
    create: (body: any, hooks?: any) => Promise<any>;
    updateRequestHandler: (node: iNode, hooks?: any) => void;
    update: (body: any, pk: any, hooks?: any) => Promise<any>;
    deleteRequestHandler: (node: iNode) => Promise<void>;
    delete: (pk: any) => Promise<any>;
    batchSaveRequestHandler: ({ request, response }: iNode) => Promise<void>;
}
//# sourceMappingURL=BudgetServer.d.ts.map