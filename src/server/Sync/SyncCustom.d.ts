import { iNode } from "../iNode";
import { iEntity } from "../../crosscommon/iEntity";
export declare class SyncCustom {
    /**
     * Sync multiple entity data.
     * Payload schema: {
     *  queue: [
     *      {
     *          action: 'create|update|delete',
     *          model: { tsk_id: ... },
     *          pk: { tsk_id: ... }, // only for update and delete
     *          callback: function({success, message, data}),
     *          status: 'queue|processed|error', // TODO: this may not be needed for contract, only for response
     *          entity: 'Task'
     *          // TODO: add 'transaction' as boolean for use cases where we need all to success, also add rollback actions on server
     *      }
     *  ]
     * }
     *
     * Response schema: {
     *  success: boolean,
     *  message: string,
     *  result: [
     *      {
     *          success: boolean,
     *          message: string,
     *          recordName: string,
     *          data: { tsk_id: ... } // TODO: rename to 'model'
     *          pk: { tsk_id: ... }
     *          // TODO: add statusCode: 'SUCCESS|ERROR'
     *          // entity: string,
     *      }
     *  ]
     * }
     */
    syncAll: (node: iNode) => void;
    _list: (node: iNode) => Promise<any>;
    list: (node: iNode) => void;
    parseEntity(entity: string): {
        construct: (b: any) => iEntity;
        server: any;
    };
}
//# sourceMappingURL=SyncCustom.d.ts.map