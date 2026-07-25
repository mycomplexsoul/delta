import { iNode } from "../iNode";
export declare class AccountServer {
    private api;
    list: (node: iNode) => void;
    createRequestHandler: (node: iNode, hooks?: any) => void;
    create: (body: any, hooks?: any) => Promise<any>;
    updateRequestHandler: (node: iNode, hooks?: any) => void;
    update: (body: any, pk: any, hooks?: any) => Promise<any>;
}
//# sourceMappingURL=AccountServer.d.ts.map