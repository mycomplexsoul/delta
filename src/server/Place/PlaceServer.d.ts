export declare class PlaceServer {
    private api;
    listRequestHandler: (node: import("../iNode").iNode) => void;
    list: (query: any) => Promise<any>;
    createRequestHandler: (node: import("../iNode").iNode, hooks?: any) => void;
    create: (body: any, hooks?: any) => Promise<any>;
    updateRequestHandler: (node: import("../iNode").iNode, hooks?: any) => void;
    update: (body: any, pk: any, hooks?: any) => Promise<any>;
}
//# sourceMappingURL=PlaceServer.d.ts.map