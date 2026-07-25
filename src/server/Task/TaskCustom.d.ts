import { Task } from "../../crosscommon/entities/Task";
import { iNode } from "../iNode";
export declare class TaskCustom {
    /**
     * @deprecated for now, not in use
     */
    list: (node: iNode) => void;
    listOpenTasks: (node: iNode) => void;
    createRequestHandler: (node: iNode) => void;
    create: (body: any) => Promise<any>;
    insertTimeTracking: (taskList: Task[]) => Promise<any>;
    updateRequestHandler: (node: iNode) => void;
    update: (body: any, pk: any) => Promise<any>;
    batchRequestHandler: (node: iNode) => void;
    batch: (body: any) => Promise<any>;
}
//# sourceMappingURL=TaskCustom.d.ts.map