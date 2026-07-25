import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Preset implements iEntity {
    pre_id: string;
    pre_name: string;
    pre_date: Date;
    pre_ctg_currency: number;
    pre_amount: number;
    pre_id_account: string;
    pre_id_account_to: string;
    pre_ctg_type: number;
    pre_budget: string;
    pre_id_category: string;
    pre_id_place: string;
    pre_desc: string;
    pre_notes: string;
    pre_id_user: string;
    pre_date_add: Date;
    pre_date_mod: Date;
    pre_ctg_status: number;
    pre_txt_type: string;
    pre_txt_currency: string;
    pre_txt_account: string;
    pre_txt_account_to: string;
    pre_txt_category: string;
    pre_txt_place: string;
    pre_txt_status: string;
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
//# sourceMappingURL=Preset.d.ts.map