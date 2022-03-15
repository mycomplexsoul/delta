import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class Permission implements iEntity {
	public per_id: string;
	public per_page: string;
	public per_feature: string;
	public per_date_add: Date;
	public per_date_mod: Date;
	public per_ctg_status: number;

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
		name: 'Permission'
		, namespace: 'common'
		, removeMeans: 'DELETION'
		, authNeeded: true
		, displayOnMenu: false
		, prefix: 'per'
		, permissionsTemplate: 'permissions_all'
		, tableName: 'permission'
		, viewName: 'vipermission'
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
			'HEADERS(Permission,Permissions)'
			, 'TABLE_NAME(PERMISSION)'
			, 'VIEW_NAME(VIPERMISSION)'
		]
		, fields: [
			{
				templateId: 'string'
				, dbName: 'per_id'
				, dbType: 'string'
				, isTableField: true
				, isPK: true
				, size: 20
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Id for the profile'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'ProfileId'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
					'DUPLICITY_ADD(PER_ID,PER_PAGE,PER_FEATURE)'
					, 'DUPLICITY_EDIT(PER_ID,PER_PAGE,PER_FEATURE)'
				]
				, displayName: 'Profile Id'
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
				, dbName: 'per_page'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 100
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Identifier name of the page'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Page'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
					'DUPLICITY_ADD(PER_ID,PER_PAGE,PER_FEATURE)'
					, 'DUPLICITY_EDIT(PER_ID,PER_PAGE,PER_FEATURE)'
				]
				, displayName: 'Page'
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
				templateId: 'string'
				, dbName: 'per_feature'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 200
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Identifier name of the feature'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Feature'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
					'DUPLICITY_ADD(PER_ID,PER_PAGE,PER_FEATURE)'
					, 'DUPLICITY_EDIT(PER_ID,PER_PAGE,PER_FEATURE)'
				]
				, displayName: 'Feature'
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 2
				, orderOnNew: 2
				, orderOnDetails: 2
				, orderOnEdit: 2
				, orderOnImport: 2
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'creationDate'
				, dbName: 'per_date_add'
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
				, gridOrder: 3
				, orderOnNew: 3
				, orderOnDetails: 3
				, orderOnEdit: 3
				, orderOnImport: 3
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'modificationDate'
				, dbName: 'per_date_mod'
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
				, gridOrder: 4
				, orderOnNew: 4
				, orderOnDetails: 4
				, orderOnEdit: 4
				, orderOnImport: 4
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'status'
				, dbName: 'per_ctg_status'
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
				, gridOrder: 5
				, orderOnNew: 5
				, orderOnDetails: 5
				, orderOnEdit: 5
				, orderOnImport: 5
				, globalOrder: undefined
				, value: null
			}
		]
		, view: [
		]
	};

	constructor(base?: any){
		if (base !== undefined){
			this.per_id = base.per_id;
			this.per_page = base.per_page;
			this.per_feature = base.per_feature;
			this.per_date_add = (base.per_date_add !== null) ? new Date(base.per_date_add) : null;
			this.per_date_mod = (base.per_date_mod !== null) ? new Date(base.per_date_mod) : null;
			this.per_ctg_status = base.per_ctg_status;
		}
	}

	recordName = () => {
		return this.metadata.fields.filter(f => f.isRecordName).map(f => {
			return `${f.dbName} = ${this[f.dbName]}`;
		}).join(', ');
	};
}