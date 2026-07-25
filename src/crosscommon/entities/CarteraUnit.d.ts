import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class CarteraUnit implements iEntity {
    uni_id: string;
    uni_first_name: string;
    uni_middle_name: string;
    uni_last_name: string;
    uni_email: string;
    uni_tel: string;
    uni_date_add: Date;
    uni_date_mod: Date;
    uni_ctg_status: number;
    uni_txt_status: string;
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
//# sourceMappingURL=CarteraUnit.d.ts.map