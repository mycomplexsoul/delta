import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class LastTimeHistory implements iEntity {
    lth_id: string;
    lth_num_sequential: number;
    lth_name: string;
    lth_value: string;
    lth_validity: number;
    lth_tags: string;
    lth_notes: string;
    lth_id_user: string;
    lth_date_add: Date;
    lth_date_mod: Date;
    lth_ctg_status: number;
    lth_txt_status: string;
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
//# sourceMappingURL=LastTimeHistory.d.ts.map