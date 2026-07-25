import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";
export declare class Multimedia implements iEntity {
    mma_id: string;
    mma_title: string;
    mma_ctg_media_type: number;
    mma_season: number;
    mma_year: number;
    mma_current_ep: string;
    mma_total_ep: string;
    mma_url: string;
    mma_id_user: string;
    mma_date_add: Date;
    mma_date_mod: Date;
    mma_ctg_status: number;
    mma_txt_media_type: string;
    mma_txt_status: string;
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
//# sourceMappingURL=Multimedia.d.ts.map