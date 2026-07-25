import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Balance implements iEntity {
    bal_year: number;
    bal_month: number;
    bal_ctg_currency: number;
    bal_id_account: string;
    bal_initial: number;
    bal_charges: number;
    bal_withdrawals: number;
    bal_final: number;
    bal_id_user: string;
    bal_date_add: Date;
    bal_date_mod: Date;
    bal_ctg_status: number;
    bal_txt_account: string;
    bal_ctg_account_type: number;
    bal_txt_account_type: string;
    bal_txt_currency: string;
    bal_txt_status: string;
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
//# sourceMappingURL=Balance.d.ts.map