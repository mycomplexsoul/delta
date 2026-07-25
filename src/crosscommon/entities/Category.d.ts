import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Category implements iEntity {
    mct_id: string;
    mct_name: string;
    mct_id_user: string;
    mct_date_add: Date;
    mct_date_mod: Date;
    mct_ctg_status: number;
    mct_txt_status: string;
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
//# sourceMappingURL=Category.d.ts.map