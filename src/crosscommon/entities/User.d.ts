import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class User implements iEntity {
    usr_id: string;
    usr_pwd_salt: string;
    usr_pwd: string;
    usr_first_name: string;
    usr_middle_name: string;
    usr_last_name: string;
    usr_ctg_user_type: number;
    usr_email: string;
    usr_ctg_connected: number;
    usr_login_attempts: number;
    usr_date_last_login_attempt: Date;
    usr_date_pwd_change: Date;
    usr_ctg_pwd_temporal: number;
    usr_ctg_blocked: number;
    usr_config: string;
    usr_date_add: Date;
    usr_date_mod: Date;
    usr_ctg_status: number;
    usr_txt_user_type: string;
    usr_txt_connected: string;
    usr_txt_pwd_temporal: string;
    usr_txt_blocked: string;
    usr_txt_status: string;
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
//# sourceMappingURL=User.d.ts.map