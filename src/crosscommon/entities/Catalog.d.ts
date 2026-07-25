import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Catalog implements iEntity {
    ctg_id: string;
    ctg_sequential: number;
    ctg_name: string;
    ctg_description: string;
    ctg_meta1: string;
    ctg_meta2: string;
    ctg_ctg_permissions: number;
    ctg_date_add: Date;
    ctg_date_mod: Date;
    ctg_ctg_status: number;
    ctg_txt_permissions: string;
    ctg_txt_status: string;
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
//# sourceMappingURL=Catalog.d.ts.map