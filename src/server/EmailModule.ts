import * as nodemailer from 'nodemailer';
import { configModule } from './ConfigModule';

function getMailConfig(serviceName: string) {
    let config = configModule.getConfigValue('mail')[serviceName];
    if (!config && serviceName !== 'default') {
        // Provided serviceName does not exists, use default
        config = configModule.getConfigValue('mail.default');
    }
    if (!config) {
        // default config does not exist
        const message = 'email default config does not exist, can not send email';
        console.log(message);
        throw new Error(message);
    }
    return config;
}

function setupTransporter(config: any){
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

function sendEmail(subject: string, body: string, to: string, serviceName: string = 'default'){
    const config = getMailConfig(serviceName);
    const transporter = setupTransporter(config);

    const mailOptions = {
        from: config.from,
        to,
        subject,
        text: body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log(`Email sent using ${serviceName} service`, mailOptions);
        }
    });
};

function sendHTMLEmail({subject, html, to, cc = null, cco = null, attachments = null, fromOverride = null, serviceName = 'default'}){
    const config = getMailConfig(serviceName);
    const transporter = setupTransporter(config);

    const mailOptions = {
        from: fromOverride || config.from,
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
            console.log(`Email sent using ${serviceName} service`, mailOptions);
        }
    });
}

export default { sendEmail, sendHTMLEmail };
