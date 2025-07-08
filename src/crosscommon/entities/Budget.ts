import { iEntity } from "../iEntity";
import { FieldDefinition } from "../FieldDefinition";
import { ViewJoinDefinition } from "../ViewJoinDefinition";

export class Budget implements iEntity {
	public bud_year: number;
	public bud_month: number;
	public bud_id_category: number;
	public bud_ctg_type: number;
	public bud_expected_amount: number;
	public bud_real_amount: number;
	public bud_id_user: string;
	public bud_date_add: Date;
	public bud_date_mod: Date;
	public bud_ctg_status: number;

	public bud_txt_category: string;
	public bud_txt_type: string;
	public bud_txt_status: string;

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
		name: 'Budget'
		, namespace: 'Money'
		, removeMeans: 'DELETION'
		, authNeeded: true
		, displayOnMenu: true
		, prefix: 'bud'
		, permissionsTemplate: 'permissions_all'
		, tableName: 'budget'
		, viewName: 'vibudget'
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
			'HEADERS(Budget,Budget)'
			, 'TABLE_NAME(BUDGET)'
			, 'VIEW_NAME(VIBUDGET)'
		]
		, fields: [
			{
				templateId: 'integer'
				, dbName: 'bud_year'
				, dbType: 'integer'
				, isTableField: true
				, isPK: true
				, size: 4
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Year of the budget record where the budget was defined'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Year'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Year'
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
				templateId: 'integer'
				, dbName: 'bud_month'
				, dbType: 'integer'
				, isTableField: true
				, isPK: true
				, size: 4
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Month of the budget record where the budget was defined'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'Month'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Month'
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
				templateId: 'integer'
				, dbName: 'bud_id_category'
				, dbType: 'integer'
				, isTableField: true
				, isPK: true
				, size: 4
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Category identifier for the budget record, matches with category id'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'BudgetCategory'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Budget Category'
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
				templateId: 'integer'
				, dbName: 'bud_ctg_type'
				, dbType: 'integer'
				, isTableField: true
				, isPK: false
				, size: 4
				, decimal: 0
				, minLength: 1
				, allowNull: false
				, default: ''
				, dbComment: 'Type of Budget (Expense, Income)'
				, catalogId: 'BUDGET_TYPE'
				, originTable: ''
				, linkedField: ''
				, entName: 'BudgetType'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Budget Type'
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
				templateId: 'double'
				, dbName: 'bud_expected_amount'
				, dbType: 'double'
				, isTableField: true
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Expected Amount of the budget'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'ExpectedAmount'
				, formControl: 'Textbox'
				, captureRequired: true
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Expected Amount'
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
				templateId: 'double'
				, dbName: 'bud_real_amount'
				, dbType: 'double'
				, isTableField: true
				, isPK: false
				, size: 19
				, decimal: 2
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'Real Amount of the budget'
				, catalogId: ''
				, originTable: ''
				, linkedField: ''
				, entName: 'RealAmount'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Real Amount'
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
				templateId: 'string'
				, dbName: 'bud_id_user'
				, dbType: 'string'
				, isTableField: true
				, isPK: false
				, size: 50
				, decimal: 0
				, minLength: 0
				, allowNull: false
				, default: ''
				, dbComment: 'User who this budget belongs to'
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
				, gridOrder: 6
				, orderOnNew: 6
				, orderOnDetails: 6
				, orderOnEdit: 6
				, orderOnImport: 6
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'creationDate'
				, dbName: 'bud_date_add'
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
				, gridOrder: 7
				, orderOnNew: 7
				, orderOnDetails: 7
				, orderOnEdit: 7
				, orderOnImport: 7
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'modificationDate'
				, dbName: 'bud_date_mod'
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
				, gridOrder: 8
				, orderOnNew: 8
				, orderOnDetails: 8
				, orderOnEdit: 8
				, orderOnImport: 8
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'status'
				, dbName: 'bud_ctg_status'
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
				, gridOrder: 9
				, orderOnNew: 9
				, orderOnDetails: 9
				, orderOnEdit: 9
				, orderOnImport: 9
				, globalOrder: undefined
				, value: null
			}, {
				templateId: 'table'
				, dbName: 'bud_txt_category'
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
				, originTable: 'CATEGORY'
				, linkedField: 'mct_name'
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
				templateId: 'catalog'
				, dbName: 'bud_txt_type'
				, dbType: 'string'
				, isTableField: false
				, isPK: false
				, size: 250
				, decimal: 0
				, minLength: 0
				, allowNull: true
				, default: ''
				, dbComment: 'Type of Budget (Expense, Income)'
				, catalogId: 'BUDGET_TYPE'
				, originTable: 'CATALOG'
				, linkedField: 'bud_ctg_type'
				, entName: 'TextBudgetType'
				, formControl: 'Textbox'
				, captureRequired: false
				, appearsByDefaultOnGrid: true
				, specialRules: [
				]
				, displayName: 'Budget Type'
				, tooltip: ''
				, isRecordName: true
				, gridOrder: 11
				, orderOnNew: 11
				, orderOnDetails: 11
				, orderOnEdit: 11
				, orderOnImport: 11
				, globalOrder: 0
				, value: null
			}, {
				templateId: 'catalog'
				, dbName: 'bud_txt_status'
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
				, linkedField: 'bud_ctg_status'
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
			}
		]
		, view: [
			{
				joinType: 'LEFT'
				, joinTable: 'CATEGORY'
				, joinStatement: 'bud_id_category = mct_id and bud_id_user = mct_id_user'
			}
		]
	};

	constructor(base?: any){
		if (base !== undefined){
			this.bud_year = base.bud_year;
			this.bud_month = base.bud_month;
			this.bud_id_category = base.bud_id_category;
			this.bud_ctg_type = base.bud_ctg_type;
			this.bud_expected_amount = base.bud_expected_amount;
			this.bud_real_amount = base.bud_real_amount;
			this.bud_id_user = base.bud_id_user;
			this.bud_date_add = (base.bud_date_add !== null) ? new Date(base.bud_date_add) : null;
			this.bud_date_mod = (base.bud_date_mod !== null) ? new Date(base.bud_date_mod) : null;
			this.bud_ctg_status = base.bud_ctg_status;

			this.bud_txt_category = base.bud_txt_category;
			this.bud_txt_type = base.bud_txt_type;
			this.bud_txt_status = base.bud_txt_status;
		}
	}

	recordName = () => {
		return this.metadata.fields.filter(f => f.isRecordName).map(f => {
			return `${f.dbName} = ${this[f.dbName]}`;
		}).join(', ');
	};
}