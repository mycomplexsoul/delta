import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class TaskTimeTracking implements iEntity {
    tsh_id: string;
    tsh_num_secuential: number;
    tsh_name: string;
    tsh_date_start: Date;
    tsh_date_end: Date;
    tsh_time_spent: number;
    tsh_id_user: string;
    tsh_date_add: Date;
    tsh_date_mod: Date;
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
//# sourceMappingURL=TaskTimeTracking.d.ts.map