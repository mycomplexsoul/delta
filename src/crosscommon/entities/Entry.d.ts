import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Entry implements iEntity {
    ent_id: string;
    ent_sequential: number;
    ent_date: Date;
    ent_ctg_currency: number;
    ent_amount: number;
    ent_id_account: string;
    ent_ctg_type: number;
    ent_budget: string;
    ent_id_category: string;
    ent_id_place: string;
    ent_desc: string;
    ent_notes: string;
    ent_id_user: string;
    ent_date_add: Date;
    ent_date_mod: Date;
    ent_ctg_status: number;
    ent_txt_type: string;
    ent_txt_currency: string;
    ent_txt_account: string;
    ent_txt_category: string;
    ent_txt_place: string;
    ent_txt_status: string;
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
//# sourceMappingURL=Entry.d.ts.map