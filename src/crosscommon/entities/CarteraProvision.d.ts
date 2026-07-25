import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class CarteraProvision implements iEntity {
    cpr_id: string;
    cpr_id_unit: string;
    cpr_date: Date;
    cpr_concept: string;
    cpr_code_reference: string;
    cpr_amount: number;
    cpr_condoned: number;
    cpr_payed: number;
    cpr_remaining: number;
    cpr_id_user: string;
    cpr_folio: string;
    cpr_type: string;
    cpr_year: number;
    cpr_month: number;
    cpr_date_add: Date;
    cpr_date_mod: Date;
    cpr_ctg_status: number;
    cpr_txt_status: string;
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
//# sourceMappingURL=CarteraProvision.d.ts.map