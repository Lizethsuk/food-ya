require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const foodyaEmail = process.env.SENDGRID_EMAIL
const isDev = true

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {sgMail, foodyaEmail, isDev}