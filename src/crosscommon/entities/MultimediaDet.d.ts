import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class MultimediaDet implements iEntity {
    mmd_id: string;
    mmd_id_ep: string;
    mmd_ep_title: string;
    mmd_ep_alt_title: string;
    mmd_year: number;
    mmd_url: string;
    mmd_id_user: string;
    mmd_date_add: Date;
    mmd_date_mod: Date;
    mmd_ctg_status: number;
    mmd_txt_status: string;
    mmd_txt_title: string;
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
//# sourceMappingURL=MultimediaDet.d.ts.map