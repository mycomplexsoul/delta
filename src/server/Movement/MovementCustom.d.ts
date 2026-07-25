import { Account } from "../../crosscommon/entities/Account";
import { Movement } from "../../crosscommon/entities/Movement";
import { Entry } from "../../crosscommon/entities/Entry";
import { iNode } from "../iNode";
export declare class MovementCustom {
    private api;
    listRequestHandler: (node: iNode) => void;
    list: (query: any) => Promise<any>;
    findIn: <T>(arr: T[], findCriteria: (e: T) => boolean, returnField: string) => any;
    stringDateToDate: (date: string) => Date;
    import: (node: iNode) => boolean;
    generateEntries: (movementList: Movement[]) => Promise<any>;
    _generateEntries: (node: iNode) => void;
    generateBalance: (entryList: Entry[]) => Promise<any>;
    _generateBalance: (node: iNode) => void;
    rebuildAndTransfer(): Promise<any>;
    create: ({ body }: {
        body: any;
    }) => Promise<any>;
    createHandler: (node: iNode) => void;
    update: (node: iNode) => void;
    delete: (node: iNode) => void;
    updateEntries: (movementList: Movement[]) => Promise<any>;
    deleteEntries: (movementList: Movement[]) => Promise<any>;
    accountsWithBalance: (node: iNode) => void;
    averageBalance: (node: iNode) => void;
    averageBalancePerAccount: (idAccount: string, useCheckDay: boolean, year: number, month: number) => Promise<{
        success: boolean;
        averageBalance: number;
        message: string;
        checkDay: number;
        initialBalance: number;
        startingDate: Date;
        finalDate: Date;
        averageMinBalance: number;
        dailyBalance: number[];
    }>;
    emailAccountMovements: (req: any, res: any) => void;
    _emailAccountMovements: (account: string, year: number, month: number) => Promise<any>;
    /**
     * Copies initial data from backup to default db.
     * [accounts, place, category, preset, movement, entry, balance]
     * - Deletes all table records from default.
     * - Inserts all table records from backup into default.
     */
    initializeDataFromBackup(): Promise<any[]>;
    getCapitalAccount(user: string): Promise<Account>;
    /**
     * Replace category in specific movements with another category
     * @param oldCategoryId
     * @param newCategoryId
     * @returns
     */
    replaceCategory(oldCategoryId: string, newCategoryId: string): Promise<{
        success: boolean;
        message: string;
        error?: Object;
    }>;
}
//# sourceMappingURL=MovementCustom.d.ts.map