let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourEmail@gmail.com',
      pass: '**'
    }
  });
  
  let mailOptions = {
    from: 'yourEmail@gmail.com',
    to: 'yourEmail@gamil.com',
    subject: 'work shop node js : Sending Email ',
    text: 'the message that you want send '
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });