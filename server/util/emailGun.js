const EmailTemplate = require('./EmailTemplate');
const config = require('../config/env/index');
var API_KEY = config.emailGun.API_KEY;
var DOMAIN = config.emailGun.DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });
const sgMail = require('@sendgrid/mail');

class EmailGun{

    static sendEmail(content,to,subject){
        // hard coded temporarily
        sgMail.setApiKey('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');
        const msg = {
            to: to,
            from: 'surbhiairan@gmail.com',
            subject: subject,
            //text: 'and easy to do anywhere, even with Node.js',
            html: content,
        };
        // sgMail.send(msg);
        // res.send("All ok")
        // to = 'surbhiairan1@gmail.com';
        // const data = {
        //     from: config.emailGun.from,
        //     to: to,
        //     subject: subject,
        //     html: content
        // };
        return new Promise( (resolve,reject) => {
            // mailgun.messages().send(data, (err, body) => {                
            //    if(err){
            //     reject(err)
            //    }else{
            //     resolve(body)
            //    }
            // });
            sgMail.send(msg)
            .then(body => {
                resolve(body)
            })
            .catch(err => {
                reject(err)
            })
        });
        
    }
    static sendActivationLink(id,email){
        const subject = "Account Activation Link :: Elite";
        let template = EmailTemplate.getActivateLinkTemplete(id,email);
        return EmailGun.sendEmail(template,email,subject);
    }

    static sendPasswordResetLink(id,email){
        const subject = "Password Reset Link :: Post Curve";
        let template = EmailTemplate.getPasswordResetLinkTemplete(id,email);
        return EmailGun.sendEmail(template,email,subject);
    }

}

module.exports = EmailGun;