import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Account implements iEntity {
    acc_id: string;
    acc_name: string;
    acc_ctg_type: number;
    acc_comment: string;
    acc_check_day: number;
    acc_average_min_balance: number;
    acc_payment_day: number;
    acc_id_user: string;
    acc_date_add: Date;
    acc_date_mod: Date;
    acc_ctg_status: number;
    acc_txt_type: string;
    acc_txt_status: string;
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
//# sourceMappingURL=Account.d.ts.map