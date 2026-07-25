import { iNode } from "../iNode";
declare const sendReceiptEmail: (year: number, month: number, unit?: string) => Promise<{
    total: number;
    skipped: number;
    sent: number;
    items: any[];
}>;
declare function postSendReceiptsEmailHandler(node: iNode): Promise<void>;
export { sendReceiptEmail, postSendReceiptsEmailHandler };
//# sourceMappingURL=SendReceiptEmail.d.ts.map