import { iEntity } from "../crosscommon/iEntity";
import { FieldDefinition } from "../crosscommon/FieldDefinition";
export declare class MoSQL {
    model: iEntity | null;
    constants: any;
    OPERATORS: any;
    constructor(model?: iEntity);
    decideModel(model: iEntity | null): iEntity;
    concatAnd(sql: string, str: string): string;
    concatOr(sql: string, str: string): string;
    concatSemicolon(sql: string, str: string): string;
    getPK(model: iEntity): FieldDefinition[];
    formatValueForSQL(dbType: string, value: string | number | Date | null, dbName?: string, operator?: string): string;
    isValidFieldName(model: iEntity, dbName: string, tableFieldsOnly: boolean): boolean;
    datesAreEqual(date1: string | Date, date2: string | Date): boolean;
    toInsertSQL(model?: iEntity): string;
    toChangesObject(model: iEntity, changes: iEntity | Array<any>): any[];
    logChanges(changesArray: any): void;
    toUpdateSQL(changes: iEntity | Array<any>, model?: iEntity): string;
    toDeleteSQL(model?: iEntity): string;
    toSelectPKSQL: (model?: iEntity) => string;
    toSelectPKPlaceholderSQL: (model?: iEntity) => string;
    toSelectSQL: (criteria?: any, model?: iEntity) => string;
    parseSQLCriteria: (criteria: any) => string;
    /**
     * Structure of criteria object:
     * {
     *    gc: "AND",
     *    cont: [{
     *      cont: [{
     *        f: "fieldName",
     *        op: "operator",
     *        val: "value"
     *      }]
     *    }],
     *    f: "fieldName",
     *    op: "operator",
     *    val: "value"
     * }
     *
     * @param criteria
     * @param model
     * @returns
     */
    criteriaToSQL: (criteria: any, model: iEntity) => string;
    /**
     * Simpler form to build sql statements.
     * Structure of the criteria object:
     * {
     *    "fieldName|operator": "value",
     *    "fieldName|operator": "value"
     * }
     *
     * @param criteria
     * @param model
     * @returns
     */
    simpleCriteriaToSQL: (criteria: any, model: iEntity, groupConcat?: string) => string;
    /**
     * Simpler form to build sql statements.
     * Structure of the criteria object:
     *  [
     *    {
     *      "group": "AND",
     *      "fieldName|operator": "value",
     *      "fieldName|operator": "value"
     *    },
     *    {
     *      "group": "OR",
     *      "fieldName|operator": "value",
     *      "fieldName|operator": "value",
     *      "subgroup": { // TODO: Add support for subgroups
     *         "group": "AND",
     *        "fieldName|operator": "value",
     *        "fieldName|operator": "value",
     *      }
     *    },
     *  ]
     *
     * @param criteria
     * @param model
     * @returns
     */
    simpleCriteriaWithGroupsToSQL: (criteria: any[], model: iEntity, groupConcat?: string) => string;
}
//# sourceMappingURL=MoSQL.d.ts.map