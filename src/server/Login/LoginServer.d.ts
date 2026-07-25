import { iNode } from "../iNode";
export declare class LoginServer {
    login: (node: iNode) => Promise<true | import("express").Response<any, Record<string, any>>>;
    validateToken(node: iNode): boolean;
    register: (node: iNode) => void;
}
//# sourceMappingURL=LoginServer.d.ts.map