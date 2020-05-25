import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class Timeline implements iEntity {
	public tim_id: string;
	public tim_id_record: string;
	public tim_date: Date;
	public tim_description: string;
	public tim_tags: string;
	public tim_id_user: string;
	public tim_date_add: Date;
	public tim_date_mod: Date;
	public tim_ctg_status: number;

	public tim_txt_status: string;

	public metadata: {
		name: string
		, namespace: string
		, removeMeans: string
		, authNeeded: boolean
		, displayOnMenu: boolean
		, prefix: string
		, permissionsTemplate: string
		, tableName: string
		, viewName: string
		, permissions: string[]
		, specialFeatures: string[]
		, fields: FieldDefinition[]
		, view: ViewJoinDefinition[]
	} = {
		name: 'Timeline'
		, namespace: 'common'
		, removeMeans: 'DELETION'
		, authNeeded: false
		, displayOnMenu: false
		, prefix: 'tim'
		, permissionsTemplate: 'permissions_all'
		, tableName: 'timeline'
		, viewName: 'vitimeline'
		, permissions: [
			'access'
			, 'add'
			, 'edit'
			, 'remove'
			, 'report'
			, 'export'
			, 'import'
		]
		, specialFeatures: [
			'HEADERS(Timeline,Timeline)'
			, 'TABLE_NAME(TIMELINE)'
			, 'VIEW_NAME(VITIMELINE)'
		]
		, fields: [
			{
				templateId: 'string'
				, dbName: 'tim_id'
				, dbType: 'string'
				, isTableField: true
				, isPK: true
				, size: 32
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Id for the timeline record'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Id'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Id'
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 0
				, orderOnNew: 0
				, orderOnDetails: 0
				, orderOnEdit: 0
				, orderOnImport: 0
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'string'
				, dbName: 'tim_id_record'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 250
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Id for the asociated record'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'RecordId'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Record Id'
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 1
				, orderOnNew: 1
				, orderOnDetails: 1
				, orderOnEdit: 1
				, orderOnImport: 1
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'datetime'
				, dbName: 'tim_date'
				, dbType: 'datetime'
				, isTableField: true
				, isPK: false
				, size: 16
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Date for the timeline record'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Date'
				, formControl: 'datetime'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Date'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 2
				, orderOnNew: 2
				, orderOnDetails: 2
				, orderOnEdit: 2
				, orderOnImport: 2
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'string'
				, dbName: 'tim_description'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 4000
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Description of the timeline event'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Description'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Description'
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 3
				, orderOnNew: 3
				, orderOnDetails: 3
				, orderOnEdit: 3
				, orderOnImport: 3
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'string'
				, dbName: 'tim_tags'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 1000
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Tags related to the timeline event'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Tags'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Tags'
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 4
				, orderOnNew: 4
				, orderOnDetails: 4
				, orderOnEdit: 4
				, orderOnImport: 4
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'string'
				, dbName: 'tim_id_user'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 50
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'User who created this timeline record'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'User'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'User'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 5
				, orderOnNew: 5
				, orderOnDetails: 5
				, orderOnEdit: 5
				, orderOnImport: 5
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'creationDate'
				, dbName: 'tim_date_add'
				, dbType: 'datetime'
				, isTableField: true
				, isPK: false
				, size: 0
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Creation date of record in table'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'CreationDate'
				, formControl: 'Datetime'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
					'SAVE_DATE_AT_NEW'
				]
				, displayName: 'Creation Date'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 6
				, orderOnNew: 6
				, orderOnDetails: 6
				, orderOnEdit: 6
				, orderOnImport: 6
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'modificationDate'
				, dbName: 'tim_date_mod'
				, dbType: 'datetime'
				, isTableField: true
				, isPK: false
				, size: 0
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Last modification date of record in table'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'ModDate'
				, formControl: 'Datetime'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
					'SAVE_DATE_AT_NEW'
					, 'SAVE_DATE_AT_EDIT'
				]
				, displayName: 'Last Modification Date'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 7
				, orderOnNew: 7
				, orderOnDetails: 7
				, orderOnEdit: 7
				, orderOnImport: 7
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'status'
				, dbName: 'tim_ctg_status'
				, dbType: 'integer'
				, isTableField: true
				, isPK: false
				, size: 4
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Record status in table'
				, catalogId: 'RECORD_STATUS'
				, originTable: 'CATALOG'
				, linkedField: ''
				, entName: 'Status'
				, formControl: 'Combobox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Status'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 8
				, orderOnNew: 8
				, orderOnDetails: 8
				, orderOnEdit: 8
				, orderOnImport: 8
				, globalOrder: undefined
				, value: null
			}, {
				templateId: 'catalog'
				, dbName: 'tim_txt_status'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 250
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Record status in table'
				, catalogId: 'RECORD_STATUS'
				, originTable: 'CATALOG'
				, linkedField: 'tim_ctg_status'
				, entName: 'TextStatus'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Status'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 9
				, orderOnNew: 9
				, orderOnDetails: 9
				, orderOnEdit: 9
				, orderOnImport: 9
				, globalOrder: 0
				, value: null
			}
		]
		, view: [
		]
	};

	constructor(base?: any){
		if (base !== undefined){
			this.tim_id = base.tim_id;
			this.tim_id_record = base.tim_id_record;
			this.tim_date = (base.tim_date !== null) ? new Date(base.tim_date) : null;
			this.tim_description = base.tim_description;
			this.tim_tags = base.tim_tags;
			this.tim_id_user = base.tim_id_user;
			this.tim_date_add = (base.tim_date_add !== null) ? new Date(base.tim_date_add) : null;
			this.tim_date_mod = (base.tim_date_mod !== null) ? new Date(base.tim_date_mod) : null;
			this.tim_ctg_status = base.tim_ctg_status;

			this.tim_txt_status = base.tim_txt_status;
		}
	}

	recordName = () => {
		return this.metadata.fields.filter(f => f.isRecordName).map(f => {
			return `${f.dbName} = ${this[f.dbName]}`;
		}).join(', ');
	};
}