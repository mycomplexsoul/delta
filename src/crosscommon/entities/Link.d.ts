import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Link implements iEntity {
    lnk_id: string;
    lnk_url: string;
    lnk_title: string;
    lnk_tags: string;
    lnk_comment: string;
    lnk_id_user: string;
    lnk_date_add: Date;
    lnk_date_mod: Date;
    lnk_ctg_status: number;
    lnk_txt_status: string;
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
//# sourceMappingURL=Link.d.ts.map