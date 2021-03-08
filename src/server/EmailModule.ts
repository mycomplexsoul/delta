import * as nodemailer from 'nodemailer';
import { configModule } from './ConfigModule';

function setupTransporter(){
    const config: any = configModule.getConfigValue('mail');

    if (config.service) {
        return nodemailer.createTransport({
            service: config.service,
            auth: {
              user: config.user,
              pass: config.pass
            }
        });
    }
    return nodemailer.createTransport({
        host: config.host,
        secure: config.secure,
        auth: {
            user: config.user,
            pass: config.pass
        }
    });
}

function sendEmail(subject: string, body: string, to: string){
    const from: string = configModule.getConfigValue('mail.from');
    const transporter = setupTransporter();

    const mailOptions = {
        from,
        to,
        subject,
        text: body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log("Email sent", mailOptions);
        }
    });
};

function sendHTMLEmail({subject, html, to, cc = null, cco = null, attachments = null, fromOverride = null}){
    const from: string = fromOverride || configModule.getConfigValue('mail.from');
    const transporter = setupTransporter();

    const mailOptions = {
        from,
        to,
        cc,
        cco,
        subject,
        html,
        attachments
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log("Email sent", mailOptions);
        }
    });
}

export default { sendEmail, sendHTMLEmail };
