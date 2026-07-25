import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Movement implements iEntity {
    mov_id: string;
    mov_date: Date;
    mov_ctg_currency: number;
    mov_amount: number;
    mov_id_account: string;
    mov_id_account_to: string;
    mov_ctg_type: number;
    mov_budget: string;
    mov_id_category: string;
    mov_id_place: string;
    mov_desc: string;
    mov_notes: string;
    mov_id_user: string;
    mov_date_add: Date;
    mov_date_mod: Date;
    mov_ctg_status: number;
    mov_txt_type: string;
    mov_txt_currency: string;
    mov_txt_account: string;
    mov_txt_account_to: string;
    mov_txt_category: string;
    mov_txt_place: string;
    mov_txt_status: string;
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
//# sourceMappingURL=Movement.d.ts.map