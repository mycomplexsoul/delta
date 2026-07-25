import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Timeline implements iEntity {
    tim_id: string;
    tim_id_record: string;
    tim_date: Date;
    tim_description: string;
    tim_tags: string;
    tim_id_user: string;
    tim_date_add: Date;
    tim_date_mod: Date;
    tim_ctg_status: number;
    tim_txt_status: string;
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
//# sourceMappingURL=Timeline.d.ts.map