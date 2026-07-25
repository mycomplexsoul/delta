import { iNode } from "../iNode";
export declare class TypeGeneratorServer {
    entities: string[];
    config: (node: iNode) => void;
    create: (node: iNode) => void;
    check: (node: iNode) => void;
    checkDatabase: (node: iNode) => Promise<void>;
}
//# sourceMappingURL=TypeGeneratorServer.d.ts.map