const nodemailer = require ('nodemailer');
const EmailTemplates = require ('email-templates');

const {NO_REPLY_EMAIL, NO_REPLY_PASSWORD} = require('../configs/config');
const emailTemplatesObj = require('../email-templates/');

const sendEmail = async (userMail, emailAction) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NO_REPLY_EMAIL,
            pass: NO_REPLY_PASSWORD
        }

    });

    const templateParser = new EmailTemplates({
        views: {
            root: path.join(process.cwd(), 'email-templates')
        }
    });

    const emailInfo = emailTemplatesObj[emailAction];

   
    const html = await templateParser.render('adsdad', {});


    return transporter.sendMail({
        from: 'No reply test mail',
        to: userMail,
        subject: emailInfo.subject,
        html
    });
};

module.exports = {
    sendEmail
};
