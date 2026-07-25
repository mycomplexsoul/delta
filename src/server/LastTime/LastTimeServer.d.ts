import { iNode } from "../iNode";
import { LastTime } from "../../crosscommon/entities/LastTime";
export declare class LastTimeServer {
    list: (node: iNode) => void;
    create: (node: iNode) => void;
    update: (node: iNode) => void;
    generateHistory(modelList: LastTime[]): Promise<{
        success: boolean;
        message: string;
    }>;
    initializeDataFromBackup(node: iNode): Promise<void>;
    backupLastTimeData(node: iNode): Promise<void>;
    cleanUpData(node: iNode): Promise<void>;
    /**
     * Copies initial data from backup to default db.
     * - Deletes all lasttime records from default.
     * - Inserts all lasttime records from backup into default.
     * Note: This is to initialize website from local db.
     */
    _initializeDataFromBackup(): Promise<any[]>;
    /**
     * Copies last time data from "default" to "backup" db.
     * - If lasttime record from default exists in backup, updates it.
     * - If lasttime record from default does not exists in backup, inserts it.
     * - Inserts all lasttimehistory from default into backup.
     * Note: run from laptop to PC, then from gear to PC. Clean up laptop, clean up gear.
     */
    _backupLastTimeData(): Promise<any[][]>;
    /**
     * Cleans up default db to continue using it.
     * - Deletes all lasttimehistory records from default.
     */
    _cleanUpData(): Promise<any>;
}
//# sourceMappingURL=LastTimeServer.d.ts.map