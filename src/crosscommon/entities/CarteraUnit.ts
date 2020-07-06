import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class CarteraUnit implements iEntity {
	public uni_id: string;
	public uni_first_name: string;
	public uni_middle_name: string;
	public uni_last_name: string;
	public uni_email: string;
	public uni_tel: string;
	public uni_date_add: Date;
	public uni_date_mod: Date;
	public uni_ctg_status: number;

	public uni_txt_status: string;

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
		name: 'CarteraUnit'
		, namespace: 'common'
		, removeMeans: 'DELETION'
		, authNeeded: false
		, displayOnMenu: false
		, prefix: 'uni'
		, permissionsTemplate: 'permissions_all'
		, tableName: 'carteraunit'
		, viewName: 'vicarteraunit'
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
			'AUTONUMERIC'
			, 'HEADERS(Unit,Units)'
			, 'TABLE_NAME(CARTERAUNIT)'
			, 'VIEW_NAME(VICARTERAUNIT)'
		]
		, fields: [
			{
				templateId: 'string'
				, dbName: 'uni_id'
				, dbType: 'string'
				, isTableField: true
				, isPK: true
				, size: 32
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Id for the unit'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'UnitId'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
					'DUPLICITY_ADD'
				]
				, displayName: 'Unit Id'
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
				, dbName: 'uni_first_name'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 100
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'First name of the owner'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'FirstName'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'First Name'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 1
				, orderOnNew: 1
				, orderOnDetails: 1
				, orderOnEdit: 1
				, orderOnImport: 1
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'string'
				, dbName: 'uni_middle_name'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 100
				, decimal: 0
				, minLength: 1
				, allowNull: true
				, default: ''
				, dbComment: 'Middle name of the owner'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'MiddleName'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Middle Name'
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
				, dbName: 'uni_last_name'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 100
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Last name of the owner'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'LastName'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Last Name'
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
				templateId: 'string'
				, dbName: 'uni_email'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 500
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Email of the owner'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Email'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Email'
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
				templateId: 'string'
				, dbName: 'uni_tel'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 100
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Phone number of the owner'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'PhoneNumber'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Phone Number'
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
				, dbName: 'uni_date_add'
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
				, dbName: 'uni_date_mod'
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
				, dbName: 'uni_ctg_status'
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
				, dbName: 'uni_txt_status'
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
				, linkedField: 'uni_ctg_status'
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
			this.uni_id = base.uni_id;
			this.uni_first_name = base.uni_first_name;
			this.uni_middle_name = base.uni_middle_name;
			this.uni_last_name = base.uni_last_name;
			this.uni_email = base.uni_email;
			this.uni_tel = base.uni_tel;
			this.uni_date_add = (base.uni_date_add !== null) ? new Date(base.uni_date_add) : null;
			this.uni_date_mod = (base.uni_date_mod !== null) ? new Date(base.uni_date_mod) : null;
			this.uni_ctg_status = base.uni_ctg_status;

			this.uni_txt_status = base.uni_txt_status;
		}
	}

	recordName = () => {
		return this.metadata.fields.filter(f => f.isRecordName).map(f => {
			return `${f.dbName} = ${this[f.dbName]}`;
		}).join(', ');
	};
}