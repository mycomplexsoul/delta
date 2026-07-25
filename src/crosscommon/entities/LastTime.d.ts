import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class LastTime implements iEntity {
    lst_id: string;
    lst_name: string;
    lst_value: string;
    lst_validity: number;
    lst_tags: string;
    lst_notes: string;
    lst_id_user: string;
    lst_date_add: Date;
    lst_date_mod: Date;
    lst_ctg_status: number;
    lst_txt_status: string;
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
//# sourceMappingURL=LastTime.d.ts.map