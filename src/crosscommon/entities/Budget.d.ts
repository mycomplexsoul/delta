import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Budget implements iEntity {
    bud_year: number;
    bud_month: number;
    bud_id_category: number;
    bud_ctg_type: number;
    bud_expected_amount: number;
    bud_real_amount: number;
    bud_id_user: string;
    bud_date_add: Date;
    bud_date_mod: Date;
    bud_ctg_status: number;
    bud_txt_category: string;
    bud_txt_type: string;
    bud_txt_status: string;
    metadata: {
        name: string;
        namespace: string;
        removeMeans: string;
        authNeeded: boolean;
        displayOnMenu: boolean;
        prefix: string;
        permissionsTemplate: string;
        tableName: string;
        viewName: string;
        permissions: string[];
        specialFeatures: string[];
        fields: FieldDefinition[];
        view: ViewJoinDefinition[];
    };
    constructor(base?: any);
    recordName: () => string;
}
//# sourceMappingURL=Budget.d.ts.map