import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class CarteraPayment implements iEntity {
    cpy_id: string;
    cpy_ctg_type: number;
    cpy_date: Date;
    cpy_amount: number;
    cpy_description: string;
    cpy_match_hint: string;
    cpy_ctg_non_identified: number;
    cpy_date_identification: Date;
    cpy_id_user: string;
    cpy_date_add: Date;
    cpy_date_mod: Date;
    cpy_ctg_status: number;
    cpy_txt_status: string;
    cpy_txt_type: string;
    cpy_txt_non_identified: string;
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
//# sourceMappingURL=CarteraPayment.d.ts.map