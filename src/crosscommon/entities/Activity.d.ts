import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Activity implements iEntity {
    act_id: string;
    act_id_project: string;
    act_name: string;
    act_description: string;
    act_tags: string;
    act_tasks_tag: string;
    act_close_comment: string;
    act_id_user: string;
    act_date_add: Date;
    act_date_mod: Date;
    act_ctg_status: number;
    act_txt_status: string;
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
    constructor(base?: any, { includeAdditional }?: {
        includeAdditional?: boolean;
    });
    recordName: () => string;
    additional: any;
}
//# sourceMappingURL=Activity.d.ts.map