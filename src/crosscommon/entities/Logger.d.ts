import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Logger implements iEntity {
    log_id: number;
    log_id_screen: number;
    log_id_feature: number;
    log_text: string;
    log_date: Date;
    log_id_user: string;
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
//# sourceMappingURL=Logger.d.ts.map