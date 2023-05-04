const express = require('express');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const mailer = require('./mailer.js');
dotenv.config();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
const port = 9999;


app.get('/', (req, res) => {
    res.send('hi api server!')
})

app.post('/mail', (req, res) => {
    const { yourname, youremail, yoursubject, yourmessage } = req.body.data;

    mailer(yourname, youremail, yoursubject, yourmessage)
        .then((response) => {
            console.log(response)
            if (response === "success") {
                return res.status(200).json({
                    status: 'Success',
                    code: 200,
                    message: 'Message Sent Successfully!',
                })
            } else {
                return res.json({
                    status: 'Fail',
                    code: response.code
                })
            }
        })

})

app.listen(port, () => {
    console.log(`backend server listening on port ${port}!`)
})