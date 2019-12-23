import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class Keyval implements iEntity {
  public key_id: string;
  public key_name: string;
  public key_value: string;
  public key_date_add: Date;
  public key_date_mod: Date;
  public key_ctg_status: number;

  public key_txt_status: string;

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
    name: "Keyval",
    namespace: "common",
    removeMeans: "DELETION",
    authNeeded: false,
    displayOnMenu: false,
    prefix: "key",
    permissionsTemplate: "permissions_all",
    tableName: "keyval",
    viewName: "vikeyval",
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
      "HEADERS(Key value,Key values)",
      "TABLE_NAME(KEYVAL)",
      "VIEW_NAME(VIKEYVAL)"
    ],
    fields: [
      {
        templateId: "string",
        dbName: "key_id",
        dbType: "string",
        isTableField: true,
        isPK: true,
        size: 32,
        decimal: 0,
        minLength: 1,
        allowNull: false,
        default: "",
        dbComment: "Id for the key value pair",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "KeyId",
        formControl: "Textbox",
        captureRequired: true,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Key Id",
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
        dbName: "key_name",
        dbType: "string",
        isTableField: true,
        isPK: true,
        size: 100,
        decimal: 0,
        minLength: 1,
        allowNull: false,
        default: "",
        dbComment: "Key name",
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
        dbName: "key_value",
        dbType: "string",
        isTableField: true,
        isPK: false,
        size: 250,
        decimal: 0,
        minLength: 0,
        allowNull: true,
        default: "",
        dbComment: "Value for the key",
        catalogId: "",
        originTable: "",
        linkedField: "",
        entName: "Value",
        formControl: "Textbox",
        captureRequired: false,
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
        templateId: "creationDate",
        dbName: "key_date_add",
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
        gridOrder: 3,
        orderOnNew: 3,
        orderOnDetails: 3,
        orderOnEdit: 3,
        orderOnImport: 3,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "modificationDate",
        dbName: "key_date_mod",
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
        gridOrder: 4,
        orderOnNew: 4,
        orderOnDetails: 4,
        orderOnEdit: 4,
        orderOnImport: 4,
        globalOrder: 0,
        value: null
      },
      {
        templateId: "status",
        dbName: "key_ctg_status",
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
        gridOrder: 5,
        orderOnNew: 5,
        orderOnDetails: 5,
        orderOnEdit: 5,
        orderOnImport: 5,
        globalOrder: undefined,
        value: null
      },
      {
        templateId: "catalog",
        dbName: "key_txt_status",
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
        linkedField: "key_ctg_status",
        entName: "TextStatus",
        formControl: "Textbox",
        captureRequired: false,
        appearsByDefaultOnGrid: true,
        specialRules: [],
        displayName: "Status",
        tooltip: "",
        isRecordName: false,
        gridOrder: 6,
        orderOnNew: 6,
        orderOnDetails: 6,
        orderOnEdit: 6,
        orderOnImport: 6,
        globalOrder: 0,
        value: null
      }
    ],
    view: []
  };

  constructor(base?: any) {
    if (base !== undefined) {
      this.key_id = base.key_id;
      this.key_name = base.key_name;
      this.key_value = base.key_value;
      this.key_date_add =
        base.key_date_add !== null ? new Date(base.key_date_add) : null;
      this.key_date_mod =
        base.key_date_mod !== null ? new Date(base.key_date_mod) : null;
      this.key_ctg_status = base.key_ctg_status;

      this.key_txt_status = base.key_txt_status;
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
