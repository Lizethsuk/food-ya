require('dotenv').config();
const nodemailer = require("nodemailer")
const isDev = false

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.NODEMAILER_USER, 
        pass: process.env.NODEMAILER_KEY, 
    },
    logger: true,
    transactionLog: true
});

const NODE_MAILER_EMAIL = process.env.NODEMAILER_USER

module.exports = {transporter, NODE_MAILER_EMAIL, isDev}