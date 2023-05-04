import nodeMailer from 'nodemailer'

export default async function mailer(req, res) {
    if (req.method === 'POST') {
        console.log("POST", req.body.form)

        const transporter = await nodeMailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com', // gmail server
            port: 587,
            secure: false,
            auth: {
                user: "demaciahelper@gmail.com",
                pass: "xvpkynwgszgbtlsk"
            }
        });

        const mailOption = {
            from: req.body.form.yourname,
            to: 'demaciahelper@gmail.com',
            subject: req.body.form.yoursubject,
            html: `
            You got a message from <br /> 
            Email : ${req.body.form.youremail} <br />
            Name: ${req.body.form.yourname} <br />
            Message: ${req.body.form.yourmessage}
        `,
        };

        try {
            await transporter.sendMail(mailOption);
            return res.status(200).json({
                message: "post mail Success!",
                status: true
            })
        } catch (err) {
            return "false"
        }
    } else {
        console.log("GET ")
    }


}