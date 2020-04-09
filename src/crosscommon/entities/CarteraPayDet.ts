import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class CarteraPayDet implements iEntity {
	public cpd_id: string;
	public cpd_id_provision: string;
	public cpd_id_payment: string;
	public cpd_amount: number;
	public cpd_id_user: string;
	public cpd_date_add: Date;
	public cpd_date_mod: Date;
	public cpd_ctg_status: number;

	public cpd_txt_status: string;
	public cpd_id_unit: string;
	public cpd_date: Date;
	public cpd_concept: string;
	public cpd_code_reference: string;
	public cpd_amount_provision: number;
	public cpd_total_payed_provision: number;
	public cpd_remaining_provision: number;
	public cpd_date_payment: Date;
	public cpd_amount_payment: number;
	public cpd_description: string;
	public cpd_match_hint: string;

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
		name: 'CarteraPayDet'
		, namespace: 'common'
		, removeMeans: 'DELETION'
		, authNeeded: false
		, displayOnMenu: false
		, prefix: 'cpd'
		, permissionsTemplate: 'permissions_all'
		, tableName: 'carterapaydet'
		, viewName: 'vicarterapaydet'
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
			'HEADERS(Payment Detail,Details of Payments)'
			, 'TABLE_NAME(CARTERAPAYDET)'
			, 'VIEW_NAME(VICARTERAPAYDET)'
		]
		, fields: [
			{
				templateId: 'string'
				, dbName: 'cpd_id'
				, dbType: 'string'
				, isTableField: true
				, isPK: true
				, size: 32
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Id for the Payment Detail match'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'MatchId'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Match Id'
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
				, dbName: 'cpd_id_provision'
				, dbType: 'string'
				, isTableField: true
				, isPK: true
				, size: 32
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Id for the Provision'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'ProvisionId'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Provision Id'
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
				, dbName: 'cpd_id_payment'
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
				, dbName: 'cpd_amount'
				, dbType: 'double'
				, isTableField: true
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Amount of the Payment for this Provision'
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
				, dbName: 'cpd_id_user'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 50
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'User who matched this Payment to this Provision'
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
				, gridOrder: 4
				, orderOnNew: 4
				, orderOnDetails: 4
				, orderOnEdit: 4
				, orderOnImport: 4
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'creationDate'
				, dbName: 'cpd_date_add'
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
				, gridOrder: 5
				, orderOnNew: 5
				, orderOnDetails: 5
				, orderOnEdit: 5
				, orderOnImport: 5
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'modificationDate'
				, dbName: 'cpd_date_mod'
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
				, gridOrder: 6
				, orderOnNew: 6
				, orderOnDetails: 6
				, orderOnEdit: 6
				, orderOnImport: 6
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'status'
				, dbName: 'cpd_ctg_status'
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
				, gridOrder: 7
				, orderOnNew: 7
				, orderOnDetails: 7
				, orderOnEdit: 7
				, orderOnImport: 7
				, globalOrder: undefined
				, value: null
			}, {
				templateId: 'catalog'
				, dbName: 'cpd_txt_status'
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
				, linkedField: 'cpd_ctg_status'
				, entName: 'TextStatus'
				, formControl: 'Textbox'
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
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_id_unit'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 3
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPROVISION'
				, linkedField: 'cpr_id_unit'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
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
				templateId: 'table'
				, dbName: 'cpd_date'
				, dbType: 'datetime'
				, isTableField: false
				, isPK: false
				, size: 250
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPROVISION'
				, linkedField: 'cpr_date'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
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
				templateId: 'table'
				, dbName: 'cpd_concept'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 500
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPROVISION'
				, linkedField: 'cpr_concept'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 11
				, orderOnNew: 11
				, orderOnDetails: 11
				, orderOnEdit: 11
				, orderOnImport: 11
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_code_reference'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 100
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPROVISION'
				, linkedField: 'cpr_code_reference'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 12
				, orderOnNew: 12
				, orderOnDetails: 12
				, orderOnEdit: 12
				, orderOnImport: 12
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_amount_provision'
				, dbType: 'double'
				, isTableField: false
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPROVISION'
				, linkedField: 'cpr_amount'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
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
				templateId: 'table'
				, dbName: 'cpd_total_payed_provision'
				, dbType: 'double'
				, isTableField: false
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPROVISION'
				, linkedField: 'cpr_payed'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 14
				, orderOnNew: 14
				, orderOnDetails: 14
				, orderOnEdit: 14
				, orderOnImport: 14
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_remaining_provision'
				, dbType: 'double'
				, isTableField: false
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPROVISION'
				, linkedField: 'cpr_remaining'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 15
				, orderOnNew: 15
				, orderOnDetails: 15
				, orderOnEdit: 15
				, orderOnImport: 15
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_date_payment'
				, dbType: 'datetime'
				, isTableField: false
				, isPK: false
				, size: 250
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPAYMENT'
				, linkedField: 'cpy_date'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 16
				, orderOnNew: 16
				, orderOnDetails: 16
				, orderOnEdit: 16
				, orderOnImport: 16
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_amount_payment'
				, dbType: 'double'
				, isTableField: false
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPAYMENT'
				, linkedField: 'cpy_amount'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 17
				, orderOnNew: 17
				, orderOnDetails: 17
				, orderOnEdit: 17
				, orderOnImport: 17
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_description'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 2000
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPAYMENT'
				, linkedField: 'cpy_description'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 18
				, orderOnNew: 18
				, orderOnDetails: 18
				, orderOnEdit: 18
				, orderOnImport: 18
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'cpd_match_hint'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 200
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: ''
				, catalogId: ''
				, originTable: 'CARTERAPAYMENT'
				, linkedField: 'cpy_match_hint'
				, entName: ''
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: ''
				, tooltip: ''
				, isRecordName: false
				, gridOrder: 19
				, orderOnNew: 19
				, orderOnDetails: 19
				, orderOnEdit: 19
				, orderOnImport: 19
				, globalOrder: 0
				, value: null
			}
		]
		, view: [
			{
				joinType: 'INNER'
				, joinTable: 'CARTERAPROVISION'
				, joinStatement: 'cpd_id_provision = cpr_id'
			}, {
				joinType: 'INNER'
				, joinTable: 'CARTERAPAYMENT'
				, joinStatement: 'cpd_id_payment = cpy_id'
			}
		]
	};

	constructor(base?: any){
		if (base !== undefined){
			this.cpd_id = base.cpd_id;
			this.cpd_id_provision = base.cpd_id_provision;
			this.cpd_id_payment = base.cpd_id_payment;
			this.cpd_amount = base.cpd_amount;
			this.cpd_id_user = base.cpd_id_user;
			this.cpd_date_add = (base.cpd_date_add !== null) ? new Date(base.cpd_date_add) : null;
			this.cpd_date_mod = (base.cpd_date_mod !== null) ? new Date(base.cpd_date_mod) : null;
			this.cpd_ctg_status = base.cpd_ctg_status;

			this.cpd_txt_status = base.cpd_txt_status;
			this.cpd_id_unit = base.cpd_id_unit;
			this.cpd_date = (base.cpd_date !== null) ? new Date(base.cpd_date) : null;
			this.cpd_concept = base.cpd_concept;
			this.cpd_code_reference = base.cpd_code_reference;
			this.cpd_amount_provision = base.cpd_amount_provision;
			this.cpd_total_payed_provision = base.cpd_total_payed_provision;
			this.cpd_remaining_provision = base.cpd_remaining_provision;
			this.cpd_date_payment = (base.cpd_date_payment !== null) ? new Date(base.cpd_date_payment) : null;
			this.cpd_amount_payment = base.cpd_amount_payment;
			this.cpd_description = base.cpd_description;
			this.cpd_match_hint = base.cpd_match_hint;
		}
	}

	recordName = () => {
		return this.metadata.fields.filter(f => f.isRecordName).map(f => {
			return `${f.dbName} = ${this[f.dbName]}`;
		}).join(', ');
	};
}