declare function sendEmail(subject: string, body: string, to: string, serviceName?: string): void;
declare function sendHTMLEmail({ subject, html, to, cc, cco, attachments, fromOverride, serviceName }: {
    subject: any;
    html: any;
    to: any;
    cc?: any;
    cco?: any;
    attachments?: any;
    fromOverride?: any;
    serviceName?: string;
}): void;
declare const _default: {
    sendEmail: typeof sendEmail;
    sendHTMLEmail: typeof sendHTMLEmail;
};
export default _default;
//# sourceMappingURL=EmailModule.d.ts.map