const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
service: 'your-email-service-provider',
auth: {
    user: 'your-email',
    pass: 'your-password',
},
});

const mailOptions = {
from: 'your-email',
to: 'recipient-email',
subject: 'Test Email',
text: 'Hello, this is a test email!',
};
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    console.log('Error occurred:', error.message);
} else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
}
});
