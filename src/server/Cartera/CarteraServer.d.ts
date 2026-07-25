import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { ApiModule } from "../ApiModule";
import { iNode } from "../iNode";
import { CarteraPayment } from "../../crosscommon/entities/CarteraPayment";
import { CarteraPayDet } from "../../crosscommon/entities/CarteraPayDet";
import iConnection from "../iConnection";
import { Movement } from "../../crosscommon/entities/Movement";
import { Timeline } from "../../crosscommon/entities/Timeline";
export declare class CarteraServer {
    generateAllProvisionsForMonthHandler(node: iNode): void;
    generateAllProvisionsForMonth(year: number, month: number, user: string, extraordinary: boolean, amount: number): Promise<CarteraProvision[]>;
    generateProvisions(year: number, month: number, units: string[] | number[], user: string, extraordinary: boolean, amount: number): Promise<CarteraProvision[]>;
    buildConcept(conceptPrefix: string, year: number, month: number, extra?: boolean): string;
    generateProvision(year: number, month: number, unitId: string, user: string, extraordinary: boolean, amount: number): Promise<CarteraProvision>;
    saveProvision(apiCarteraProvision: ApiModule, provision: CarteraProvision, model?: CarteraProvision): Promise<any>;
    registerBatchPaymentsHandler(node: iNode): void;
    transformBatchInfoToPayment(data: string[], user: string): CarteraPayment[];
    savePayments(paymentList: CarteraPayment[]): Promise<CarteraPayment[]>;
    savePayment(payment: CarteraPayment): Promise<CarteraPayment>;
    generatePenalizationProvisionForLatePayment(payment: CarteraPayment): void;
    matchPaymentsWithProvisions(paymentList: CarteraPayment[]): Promise<any[]>;
    initialProvisionBatchHandler(node: iNode): Promise<void>;
    transformBatchInfoToProvision(data: string[], user: string): CarteraProvision[];
    savePayDet(apiCarteraPayDet: ApiModule, payDet: CarteraPayDet, model?: CarteraPayDet): Promise<any>;
    updateProvision(apiCarteraProvision: ApiModule, provision: CarteraProvision, model?: CarteraProvision): Promise<any>;
    generatePenalizationForMissingPaymentHandler(node: iNode): void;
    generatePenalizationForMissingPayment(year: number, month: number, user: string): Promise<CarteraProvision[]>;
    findNextProvisionToPay(provisionList: CarteraProvision[], provision: CarteraProvision): CarteraProvision;
    applyRemainingPaymentToSubsequentProvisions(remainingAmount: number, payment: CarteraPayment, provision: CarteraProvision, provisionList: CarteraProvision[], paymentsApplied: any[]): Promise<any>;
    assignPaymentHandler(node: iNode): Promise<void>;
    getPaymentApplicationListing(year: number, month: number): Promise<{
        paymentList: {
            payment: any;
            provisionList: {
                paydet: any;
                provision: any;
            }[];
        }[];
    }>;
    getPaymentApplicationListingHandler(node: iNode): Promise<void>;
    generatePenalizationForUnitHandler(node: iNode): void;
    generatePenalizationForUnit(year: number, month: number, unit: string, user: string, extra?: boolean): Promise<CarteraProvision[]>;
    lastFolioAvailable(provisionList: CarteraProvision[], date: Date): number;
    rebuildPendingPaymentsForMonthHandler(node: iNode): void;
    rebuildPaymentsForMonth(year: number, month: number, unit: string | null, includeAllProvisionsForFuture: boolean, allProvisions: CarteraProvision[], allPayDet: CarteraPayDet[]): Promise<{
        pendingProvisionList: CarteraProvision[];
        futureProvisionList: CarteraProvision[];
        nonIdentifiedPaymentList: CarteraPayment[];
        pendingTotal: Number;
        futureTotal: Number;
    }>;
    rebuildPendingPaymentsForMonth(year: number, month: number, unit?: string | null, includeAllProvisionsForFuture?: boolean): Promise<{
        pendingProvisionList: CarteraProvision[];
        futureProvisionList: CarteraProvision[];
        nonIdentifiedPaymentList: CarteraPayment[];
        pendingTotal: Number;
        futureTotal: Number;
    }>;
    getNonIdentifiedPaymentsForMonth(year: number, month: number): Promise<CarteraPayment[]>;
    unitStatusForMonthHandler(node: iNode): void;
    unitStatusForMonth(year: number, month: number, unit: string): Promise<{
        provisionList: Array<{
            provision: CarteraProvision;
            payDetList: CarteraPayDet[];
        }>;
        paymentList: CarteraPayment[];
    }>;
    newCarteraProvision(date: Date, amount: number, unit: string | number, user: string, payed?: number): CarteraProvision;
    newCarteraPayment(date: Date, amount: number, unit: string | number, user: string): CarteraPayment;
    newCarteraPayDet(unit: string | number, amount: number, date: Date, provisionId: string, paymentId: string, user: string): CarteraPayDet;
    buildProvisions({ provisionAmount, unit, user, from, to, includePenalization, penalizationAmount, exclusions, penalizationExclusions, }: {
        provisionAmount?: number;
        unit: string | number;
        user: string;
        from: string;
        to: string;
        includePenalization?: boolean;
        penalizationAmount?: number;
        exclusions?: string[];
        penalizationExclusions?: string[];
    }): CarteraProvision[];
    buildPayments({ unit, user, paymentData, provisionList, paymentList, payDetList, }: {
        unit: string | number;
        user: string;
        paymentData: Array<{
            date: string;
            amount?: number;
            applyTo: Array<{
                dateReference?: string;
                amount?: number;
                type?: string;
            }>;
        }>;
        provisionList: CarteraProvision[];
        paymentList: CarteraPayment[];
        payDetList: CarteraPayDet[];
    }): {
        paymentList: CarteraPayment[];
        payDetList: CarteraPayDet[];
    };
    addSpecificProvisionsAndPayments402CurrentDBApplication(provisionList: CarteraProvision[], paymentList: CarteraPayment[], payDetList: CarteraPayDet[]): void;
    addSpecificProvisionsAndPayments402PropietaryDesiredApplication(provisionList: CarteraProvision[], paymentList: CarteraPayment[], payDetList: CarteraPayDet[]): void;
    addSpecificProvisionsAndPayments(provisionList: CarteraProvision[], paymentList: CarteraPayment[], payDetList: CarteraPayDet[]): void;
    /**
     * @deprecated This was used once, should delete
     */
    changeConceptToSpanishHandler(node: iNode): void;
    /**
     * @deprecated This was used once, should delete
     */
    changeConceptToSpanish(): Promise<boolean>;
    registerMonthlyIncomeHandler(node: iNode): void;
    registerMonthlyIncome(year: number, month: number, user: string): Promise<Movement[]>;
    getCodeFromProvisionCodeReference(code_reference: string): string;
    getYearMonthFromProvisionCodeReference(code_reference: string): {
        year: number;
        month: number;
    };
    resultsForMonthHandler(node: iNode): void;
    resultsForMonth(year: number, month: number): Promise<Array<{
        concept: string;
        amount: number;
        type: string;
    }>>;
    getInitialBalanceForMonth(year: number, month: number, account_id: string): Promise<number>;
    getTimeline(recordId: string, connectionInstance?: iConnection): Promise<Timeline[]>;
    savePaymentAndPayDetHandler(node: iNode): Promise<import("express").Response<any, Record<string, any>>>;
    buildMatchHint(date: Date | string, unit: string | number): string;
    savePaymentAndPayDet({ paymentType, date, amount, unit, description, user, paymentId }: {
        paymentType: any;
        date: any;
        amount: any;
        unit: any;
        description: any;
        user: any;
        paymentId: any;
    }, payDetList: any, payDetFolioList: any, registerMovement?: boolean): Promise<{
        payment: CarteraPayment;
        payDetList: CarteraPayDet[];
    }>;
    getProvisionPaymentListing(year: number, month: number, extraordinary: boolean): Promise<{
        provisionList: Array<{
            provision: CarteraProvision;
            previousPayDetList: CarteraPayDet[];
            paymentList: Array<{
                payment: CarteraPayment;
                payDetList: CarteraPayDet[];
            }>;
        }>;
        unitBalance: any;
    }>;
    getProvisionPaymentListingHandler(node: iNode): Promise<void>;
    getProvisionPayedReceiptList(year: number, month: number): Promise<{
        provisionList: {
            provision: CarteraProvision;
            hash: string;
            name: string;
            paymentDate: Date;
        }[];
    }>;
    getProvisionPayedReceiptByFolio(folio: string): Promise<{
        provisionList: {
            provision: CarteraProvision;
            hash: string;
            name: string;
            paymentDate: Date;
        }[];
    }>;
    getProvisionPayedReceiptListHandler(node: iNode): Promise<void>;
    generateReceiptHash(provision: CarteraProvision): {
        iv: string;
        encryptedData: string;
    };
    decryptReceiptHash(text: any): string;
    addSpecificProvisionsAndPayments504ExpectedApplication(provisionList: CarteraProvision[], paymentList: CarteraPayment[], payDetList: CarteraPayDet[]): void;
}
//# sourceMappingURL=CarteraServer.d.ts.map