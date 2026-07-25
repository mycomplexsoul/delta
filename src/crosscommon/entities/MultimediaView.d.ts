import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class MultimediaView implements iEntity {
    mmv_id: string;
    mmv_id_ep: string;
    mmv_ep_summary: string;
    mmv_date_viewed: Date;
    mmv_num_rating: number;
    mmv_ctg_platform: number;
    mmv_notes: string;
    mmv_id_user: string;
    mmv_date_add: Date;
    mmv_date_mod: Date;
    mmv_ctg_status: number;
    mmv_txt_media_title: string;
    mmv_txt_ep_title: string;
    mmv_txt_platform: string;
    mmv_txt_status: string;
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
//# sourceMappingURL=MultimediaView.d.ts.map