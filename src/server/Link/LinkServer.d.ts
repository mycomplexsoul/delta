import { iNode } from "../iNode";
export declare class LinkServer {
    private api;
    listRequestHandler: (node: iNode) => void;
    list: (query: any) => Promise<any>;
    createRequestHandler: (node: iNode, hooks?: any) => void;
    create: (body: any, hooks?: any) => Promise<any>;
    updateRequestHandler: (node: iNode, hooks?: any) => void;
    update: (body: any, pk: any, hooks?: any) => Promise<any>;
    externalCreateRequestHandler: (node: iNode) => void;
    externalCreate: (body: any) => Promise<any>;
    importFromJSON: () => void;
    getRequestHandler: (node: iNode) => void;
    get: (query: any) => Promise<any>;
    externalUpdateRequestHandler: (node: iNode) => void;
    externalUpdate: (body: any, pk: any) => Promise<any>;
    batchAddLinks(req: any, res: any): Promise<void>;
}
//# sourceMappingURL=LinkServer.d.ts.map