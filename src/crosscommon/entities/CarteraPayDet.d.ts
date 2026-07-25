import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class CarteraPayDet implements iEntity {
    cpd_id: string;
    cpd_id_provision: string;
    cpd_id_payment: string;
    cpd_amount: number;
    cpd_id_user: string;
    cpd_date_add: Date;
    cpd_date_mod: Date;
    cpd_ctg_status: number;
    cpd_txt_status: string;
    cpd_id_unit: string;
    cpd_date: Date;
    cpd_concept: string;
    cpd_code_reference: string;
    cpd_amount_provision: number;
    cpd_total_payed_provision: number;
    cpd_remaining_provision: number;
    cpd_date_payment: Date;
    cpd_ctg_type: number;
    cpd_txt_type: string;
    cpd_amount_payment: number;
    cpd_description: string;
    cpd_match_hint: string;
    cpd_ctg_non_identified: number;
    cpd_txt_non_identified: string;
    cpd_date_identification: Date;
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
//# sourceMappingURL=CarteraPayDet.d.ts.map