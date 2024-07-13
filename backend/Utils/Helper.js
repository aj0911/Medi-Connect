const nodemailer = require('nodemailer')

//function to send email. you can change the values from .env file
exports.sendEmail = async(to,subject,text) =>{
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    service:process.env.MAIL_SERVICE,
    secure:process.env.MAIL_PORT===465?true:false,
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.MAIL_USER, 
    to, 
    subject, 
    text
  });
}