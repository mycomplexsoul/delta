import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class Activity implements iEntity {
  public act_id: string;
  public act_id_project: string;
  public act_name: string;
  public act_description: string;
  public act_tags: string;
  public act_close_comment: string;
  public act_id_user: string;
  public act_date_add: Date;
  public act_date_mod: Date;
  public act_ctg_status: number;

  public act_txt_status: string;

  public metadata: {
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
  } = {
    name: "Activity",
    namespace: "common",
    removeMeans: "CANCELATION",
    authNeeded: true,
    displayOnMenu: true,
    prefix: "act",
    permissionsTemplate: "permissions_all",
    tableName: "activity",
    viewName: "viactivity",
    permissions: [
      "access",
      "add",
      "edit",
      "remove",
      "report",
      "export",
      "import"
    ],
    specialFeatures: [
      "HEADERS(Activity,Activities)",
      "TABLE_NAME(ACTIVITY)",
      "VIEW_NAME(VIACTIVITY)"
    ],
    fields: [
      {
        templateId: "string",
        dbName: "act_id",
        dbType: "string",
        isTableField: true,
        isPK: true,
        size: 32,
        decimal: 0,
        minLength: 1,
        allowNull: false,
        default: "",
        dbComment: "Id for the activity",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "ActivityId",
        formControl: "Textbox",
        captureRequired: true,
        appearsByDefaultOnGrid: true,
        specialRules: ["DUPLICITY_ADD"],
        displayName: "Activity Id",
        tooltip: "",
        isRecordName: true,
        gridOrder: 0,
        orderOnNew: 0,
        orderOnDetails: 0,
        orderOnEdit: 0,
        orderOnImport: 0,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "string",
        dbName: "act_id_project",
        dbType: "string",
        isTableField: true,
        isPK: false,
        size: 32,
        decimal: 0,
        minLength: 1,
        allowNull: false,
        default: "",
        dbComment: "Project Id",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "ProjectId",
        formControl: "Textbox",
        captureRequired: true,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Project Id",
        tooltip: "",
        isRecordName: true,
        gridOrder: 1,
        orderOnNew: 1,
        orderOnDetails: 1,
        orderOnEdit: 1,
        orderOnImport: 1,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "string",
        dbName: "act_name",
        dbType: "string",
        isTableField: true,
        isPK: false,
        size: 500,
        decimal: 0,
        minLength: 1,
        allowNull: false,
        default: "",
        dbComment: "Activity name",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "Name",
        formControl: "Textbox",
        captureRequired: true,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Name",
        tooltip: "",
        isRecordName: true,
        gridOrder: 2,
        orderOnNew: 2,
        orderOnDetails: 2,
        orderOnEdit: 2,
        orderOnImport: 2,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "string",
        dbName: "act_description",
        dbType: "string",
        isTableField: true,
        isPK: false,
        size: 4000,
        decimal: 0,
        minLength: 0,
        allowNull: true,
        default: "",
        dbComment: "Details of the activity item",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "Description",
        formControl: "Textbox",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Description",
        tooltip: "",
        isRecordName: false,
        gridOrder: 3,
        orderOnNew: 3,
        orderOnDetails: 3,
        orderOnEdit: 3,
        orderOnImport: 3,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "string",
        dbName: "act_tags",
        dbType: "string",
        isTableField: true,
        isPK: false,
        size: 500,
        decimal: 0,
        minLength: 0,
        allowNull: true,
        default: "",
        dbComment: "Activity tags",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "Tags",
        formControl: "Textbox",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Tags",
        tooltip: "",
        isRecordName: false,
        gridOrder: 4,
        orderOnNew: 4,
        orderOnDetails: 4,
        orderOnEdit: 4,
        orderOnImport: 4,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "string",
        dbName: "act_close_comment",
        dbType: "string",
        isTableField: true,
        isPK: false,
        size: 4000,
        decimal: 0,
        minLength: 0,
        allowNull: true,
        default: "",
        dbComment: "Final comment once activity is done",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "CloseComment",
        formControl: "Textbox",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Close Comment",
        tooltip: "",
        isRecordName: false,
        gridOrder: 5,
        orderOnNew: 5,
        orderOnDetails: 5,
        orderOnEdit: 5,
        orderOnImport: 5,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "string",
        dbName: "act_id_user",
        dbType: "string",
        isTableField: true,
        isPK: false,
        size: 50,
        decimal: 0,
        minLength: 0,
        allowNull: false,
        default: "",
        dbComment: "User who this activity belongs to",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "User",
        formControl: "Textbox",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "User",
        tooltip: "",
        isRecordName: false,
        gridOrder: 6,
        orderOnNew: 6,
        orderOnDetails: 6,
        orderOnEdit: 6,
        orderOnImport: 6,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "creationDate",
        dbName: "act_date_add",
        dbType: "datetime",
        isTableField: true,
        isPK: false,
        size: 0,
        decimal: 0,
        minLength: 0,
        allowNull: false,
        default: "",
        dbComment: "Creation date of record in table",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "CreationDate",
        formControl: "Datetime",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: ["SAVE_DATE_AT_NEW"],
        displayName: "Creation Date",
        tooltip: "",
        isRecordName: false,
        gridOrder: 7,
        orderOnNew: 7,
        orderOnDetails: 7,
        orderOnEdit: 7,
        orderOnImport: 7,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "modificationDate",
        dbName: "act_date_mod",
        dbType: "datetime",
        isTableField: true,
        isPK: false,
        size: 0,
        decimal: 0,
        minLength: 0,
        allowNull: false,
        default: "",
        dbComment: "Last modification date of record in table",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "ModDate",
        formControl: "Datetime",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: ["SAVE_DATE_AT_NEW", "SAVE_DATE_AT_EDIT"],
        displayName: "Last Modification Date",
        tooltip: "",
        isRecordName: false,
        gridOrder: 8,
        orderOnNew: 8,
        orderOnDetails: 8,
        orderOnEdit: 8,
        orderOnImport: 8,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "status",
        dbName: "act_ctg_status",
        dbType: "integer",
        isTableField: true,
        isPK: false,
        size: 4,
        decimal: 0,
        minLength: 1,
        allowNull: false,
        default: "",
        dbComment: "Record status in table",
        catalogId: "RECORD_STATUS",
        originTable: "CATALOG",
        linkedField: "",
        entName: "Status",
        formControl: "Combobox",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Status",
        tooltip: "",
        isRecordName: false,
        gridOrder: 9,
        orderOnNew: 9,
        orderOnDetails: 9,
        orderOnEdit: 9,
        orderOnImport: 9,
        globalOrder: undefined,
        value: null
      },
      {
        templateId: "catalog",
        dbName: "act_txt_status",
        dbType: "string",
        isTableField: false,
        isPK: false,
        size: 250,
        decimal: 0,
        minLength: 0,
        allowNull: true,
        default: "",
        dbComment: "Record status in table",
        catalogId: "RECORD_STATUS",
        originTable: "CATALOG",
        linkedField: "act_ctg_status",
        entName: "TextStatus",
        formControl: "Textbox",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Status",
        tooltip: "",
        isRecordName: false,
        gridOrder: 10,
        orderOnNew: 10,
        orderOnDetails: 10,
        orderOnEdit: 10,
        orderOnImport: 10,
        globalOrder: 0,
        value: null
      }
    ],
    view: []
  };

  constructor(base?: any) {
    if (base !== undefined) {
      this.act_id = base.act_id;
      this.act_id_project = base.act_id_project;
      this.act_name = base.act_name;
      this.act_description = base.act_description;
      this.act_tags = base.act_tags;
      this.act_close_comment = base.act_close_comment;
      this.act_id_user = base.act_id_user;
      this.act_date_add =
        base.act_date_add !== null ? new Date(base.act_date_add) : null;
      this.act_date_mod =
        base.act_date_mod !== null ? new Date(base.act_date_mod) : null;
      this.act_ctg_status = base.act_ctg_status;

      this.act_txt_status = base.act_txt_status;
    }
  }

  recordName = () => {
    return this.metadata.fields
      .filter(f => f.isRecordName)
      .map(f => {
        return `${f.dbName} = ${this[f.dbName]}`;
      })
      .join(", ");
  };
}
