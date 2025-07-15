const nodemailer=require('nodemailer');
const transport= nodemailer.createTransport({
    service: 'gmail',   
    auth: {
      user: `${process.env.GMAIL}`,
      pass: `${process.env.APP_PASSWORD}`
    }
}   );
 const mailoptions={
    from: `${process.env.GMAIL}`,
    to: `${process.env.GMAIL}`,
    subject: 'New Message from Scholarship Site',
    text: 'You have received a new message from the scholarship site.'

 }
  transport.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
  module.exports = transport;