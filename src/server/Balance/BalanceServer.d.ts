import { iNode } from "../iNode";
export declare class BalanceServer {
    private api;
    listRequestHandler: (node: iNode) => void;
    list: (query: any) => Promise<any>;
    rebuild: (req: any, res: any) => Promise<void>;
    transfer: (req: any, res: any) => Promise<void>;
    rebuildAndTransfer: (req: any, res: any) => Promise<void>;
    rebuildAndTransferRange: (req: any, res: any) => Promise<void>;
}
//# sourceMappingURL=BalanceServer.d.ts.map