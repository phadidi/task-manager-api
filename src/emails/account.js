const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hadidip@hotmail.com',
        subject: 'Welcome to our service',
        text: '${name}, thank you for joining.'
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hadidip@hotmail.com',
        subject: 'Thank you for all your time',
        text: '${name}, we\'re sorry to see you go. Could you please tell us why?'
    })
}

module.exports = {
    sendWelcomeEmail, sendFarewellEmail
}