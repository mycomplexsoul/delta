import { iNode } from "../iNode";
export declare class CategoryServer {
    private api;
    listRequestHandler: (node: iNode) => void;
    list: (query: any) => Promise<any>;
    createRequestHandler: (node: iNode, hooks?: any) => void;
    create: (body: any, hooks?: any) => Promise<any>;
    updateRequestHandler: (node: iNode, hooks?: any) => void;
    update: (body: any, pk: any, hooks?: any) => Promise<any>;
    deleteRequestHandler: (node: iNode) => Promise<void>;
    deleteItem: (pk: any) => Promise<any>;
}
//# sourceMappingURL=CategoryServer.d.ts.map