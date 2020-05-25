import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class CarteraPayment implements iEntity {
	public cpy_id: string;
	public cpy_ctg_type: number;
	public cpy_date: Date;
	public cpy_amount: number;
	public cpy_description: string;
	public cpy_match_hint: string;
	public cpy_ctg_non_identified: number;
	public cpy_date_identification: Date;
	public cpy_id_user: string;
	public cpy_date_add: Date;
	public cpy_date_mod: Date;
	public cpy_ctg_status: number;

	public cpy_txt_status: string;
	public cpy_txt_type: string;
	public cpy_txt_non_identified: string;

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
		name: 'CarteraPayment'
		, namespace: 'common'
		, removeMeans: 'DELETION'
		, authNeeded: false
		, displayOnMenu: true
		, prefix: 'cpy'
		, permissionsTemplate: 'permissions_all'
		, tableName: 'carterapayment'
		, viewName: 'vicarterapayment'
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
			'HEADERS(Payment,Payments)'
			, 'TABLE_NAME(CARTERAPAYMENT)'
			, 'VIEW_NAME(VICARTERAPAYMENT)'
		]
		, fields: [
			{
				templateId: 'string'
				, dbName: 'cpy_id'
				, dbType: 'string'
				, isTableField: true
				, isPK: true
				, size: 32
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Id for the Payment'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'PaymentId'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Payment Id'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 0
				, orderOnNew: 0
				, orderOnDetails: 0
				, orderOnEdit: 0
				, orderOnImport: 0
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'integer'
				, dbName: 'cpy_ctg_type'
				, dbType: 'integer'
				, isTableField: true
				, isPK: false
				, size: 4
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Indicates if this is a payment or a condonation'
				, catalogId: 'CARTERA_PAY_TYPE'
				, originTable: ''
				, linkedField: ''
				, entName: 'Payment Type'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Payment Type'
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
				templateId: 'datetime'
				, dbName: 'cpy_date'
				, dbType: 'datetime'
				, isTableField: true
				, isPK: false
				, size: 16
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Payment Date'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'PaymentDate'
				, formControl: 'datetime'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Payment Date'
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
				templateId: 'double'
				, dbName: 'cpy_amount'
				, dbType: 'double'
				, isTableField: true
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Amount of the Payment'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Amount'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Amount'
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
				, dbName: 'cpy_description'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 2000
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Description of the Payment'
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
				, dbName: 'cpy_match_hint'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 200
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Reference used to identify the Payment in a programatic way and possible matches'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'MatchHint'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Match Hint'
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 5
				, orderOnNew: 5
				, orderOnDetails: 5
				, orderOnEdit: 5
				, orderOnImport: 5
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'integer'
				, dbName: 'cpy_ctg_non_identified'
				, dbType: 'integer'
				, isTableField: true
				, isPK: false
				, size: 4
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Indicates if this was originally a non identified payment'
				, catalogId: 'BOOLEAN'
				, originTable: ''
				, linkedField: ''
				, entName: 'NonIdentifiedPayment'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Non Identified Payment'
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
				templateId: 'datetime'
				, dbName: 'cpy_date_identification'
				, dbType: 'datetime'
				, isTableField: true
				, isPK: false
				, size: 16
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Identification Date'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'IdentificationDate'
				, formControl: 'datetime'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Identification Date'
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
				templateId: 'string'
				, dbName: 'cpy_id_user'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 50
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'User who created this payment'
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
				, gridOrder: 8
				, orderOnNew: 8
				, orderOnDetails: 8
				, orderOnEdit: 8
				, orderOnImport: 8
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'creationDate'
				, dbName: 'cpy_date_add'
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
				, gridOrder: 9
				, orderOnNew: 9
				, orderOnDetails: 9
				, orderOnEdit: 9
				, orderOnImport: 9
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'modificationDate'
				, dbName: 'cpy_date_mod'
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
				, gridOrder: 10
				, orderOnNew: 10
				, orderOnDetails: 10
				, orderOnEdit: 10
				, orderOnImport: 10
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'status'
				, dbName: 'cpy_ctg_status'
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
				, gridOrder: 11
				, orderOnNew: 11
				, orderOnDetails: 11
				, orderOnEdit: 11
				, orderOnImport: 11
				, globalOrder: undefined
				, value: null
			}, {
				templateId: 'catalog'
				, dbName: 'cpy_txt_status'
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
				, linkedField: 'cpy_ctg_status'
				, entName: 'TextStatus'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Status'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 12
				, orderOnNew: 12
				, orderOnDetails: 12
				, orderOnEdit: 12
				, orderOnImport: 12
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'catalog'
				, dbName: 'cpy_txt_type'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 250
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Indicates if this is a payment or a condonation'
				, catalogId: 'CARTERA_PAY_TYPE'
				, originTable: 'CATALOG'
				, linkedField: 'cpy_ctg_type'
				, entName: 'TextPayment Type'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Payment Type'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 13
				, orderOnNew: 13
				, orderOnDetails: 13
				, orderOnEdit: 13
				, orderOnImport: 13
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'catalog'
				, dbName: 'cpy_txt_non_identified'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 250
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Indicates if this was originally a non identified payment'
				, catalogId: 'BOOLEAN'
				, originTable: 'CATALOG'
				, linkedField: 'cpy_ctg_non_identified'
				, entName: 'TextNonIdentifiedPayment'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Non Identified Payment'
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 14
				, orderOnNew: 14
				, orderOnDetails: 14
				, orderOnEdit: 14
				, orderOnImport: 14
				, globalOrder: 0
				, value: null
			}
		]
		, view: [
		]
	};

	constructor(base?: any){
		if (base !== undefined){
			this.cpy_id = base.cpy_id;
			this.cpy_ctg_type = base.cpy_ctg_type;
			this.cpy_date = (base.cpy_date !== null) ? new Date(base.cpy_date) : null;
			this.cpy_amount = base.cpy_amount;
			this.cpy_description = base.cpy_description;
			this.cpy_match_hint = base.cpy_match_hint;
			this.cpy_ctg_non_identified = base.cpy_ctg_non_identified;
			this.cpy_date_identification = (base.cpy_date_identification !== null) ? new Date(base.cpy_date_identification) : null;
			this.cpy_id_user = base.cpy_id_user;
			this.cpy_date_add = (base.cpy_date_add !== null) ? new Date(base.cpy_date_add) : null;
			this.cpy_date_mod = (base.cpy_date_mod !== null) ? new Date(base.cpy_date_mod) : null;
			this.cpy_ctg_status = base.cpy_ctg_status;

			this.cpy_txt_status = base.cpy_txt_status;
			this.cpy_txt_type = base.cpy_txt_type;
			this.cpy_txt_non_identified = base.cpy_txt_non_identified;
		}
	}

	recordName = () => {
		return this.metadata.fields.filter(f => f.isRecordName).map(f => {
			return `${f.dbName} = ${this[f.dbName]}`;
		}).join(', ');
	};
}