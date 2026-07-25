import { iNode } from "../iNode";
export declare class ActivityServer {
    private api;
    listRequestHandler: (node: iNode) => void;
    list: (query: any) => Promise<any>;
    createRequestHandler: (node: iNode) => void;
    create: (body: any, hooks?: any) => Promise<any>;
    updateRequestHandler: (node: iNode) => void;
    update: (body: any, pk: any, hooks?: any) => Promise<any>;
    listWithMetadataRequestHandler: (node: iNode) => Promise<import("express").Response<any, Record<string, any>>>;
}
//# sourceMappingURL=ActivityServer.d.ts.map