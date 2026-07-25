import { Entry } from "../crosscommon/entities/Entry";
import { Balance } from "../crosscommon/entities/Balance";
export declare class BalanceModule {
    getAllForMonth(balanceList: Balance[], year: number, month: number): Balance[];
    rebuild(year: number, month: number, user: string): Promise<any>;
    transfer(year: number, month: number, user: string): Promise<any>;
    rebuildAndTransfer(year: number, month: number, user: string): void;
    rebuildAndTransferRange(yearInitial: number, monthInitial: number, yearFinal: number, monthFinal: number, user: string): Promise<void>;
    getNextMonth(year: number, month: number): {
        year: number;
        month: number;
        iterable: number;
    };
    rebuildWithSQL(year: number, month: number, user: string): void;
    applyEntriesToBalance(entryList: Entry[], user: string): Promise<any>;
}
//# sourceMappingURL=BalanceModule.d.ts.map