const dotenv = require('dotenv')
dotenv.config();
const nodeMailer = require('nodemailer');


console.log(process.env.MAIL_PASSWORD)
module.exports = async (name, email, subject, msg) => {
    const transporter = await nodeMailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com', // gmail server
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PASSWORD
        }
    });

    const mailOption = {
        from: name,
        to: process.env.MAIL_EMAIL,
        subject: subject,
        html: `
            You got a message from <br /> 
            Email : ${email} <br />
            Name: ${name} <br />
            Message: ${msg}
        `,
    };

    try {
        await transporter.sendMail(mailOption);
        return "success"
    } catch (err) {
        console.log(err.message)
    }
}