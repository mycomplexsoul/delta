import { iEntity } from "./iEntity";
declare class Utility {
    pad(value: string | number, fillChar: string, length: number, dir?: number): string;
    hashId(prefix?: string, length?: number, baseDate?: Date): string;
    hashIdForEntity(entity: iEntity, fieldName: string): string;
    escapeRegExp(str: string): string;
    replaceAll(str: string, find: string, replace: string): string;
    parseSimpleQuoteForSQL(str: string): string;
    entityToRawTableFields(entity: iEntity): any;
    getPKFromEntity(entity: iEntity): any;
    removeMetadataFromEntity(entity: iEntity): any;
    buildFilter(fieldName: string, value: any, op?: string): {
        gc: string;
        cont: {
            f: string;
            op: string;
            val: any;
        }[];
    };
    buildFilterStringified(fieldName: string, value: any, op?: string): string;
    retryHelper(method: Function, condition: Function, limit?: number): any;
}
export declare let Utils: Utility;
export {};
//# sourceMappingURL=Utility.d.ts.map