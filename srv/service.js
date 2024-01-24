const cds = require('@sap/cds');
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const nodemailer = require('nodemailer');

// Define the service
module.exports = cds.service.impl(async function () {

  // Define the before events
  this.before('CREATE', 'Spacefarers', (req) => {
      const { stardustCollection, Navskill } = req.data;

      // Validate stardustCollection and Navskill to avoid special characters
      if (hasSpecialCharacters(stardustCollection) || hasSpecialCharacters(Navskill)) {
        req.error(400, 'Special characters are not allowed in Stardust Collection and Wormhole Navigation Skill');
      }
 
  });

// Define after events
  this.after('CREATE', 'Spacefarers', (req) => {

      // Send Email Notification after creating a Spacefarer record
      sendEmailNotification(req.name, req.Email); 
 
  });
});

//Functions
// Utility function to check for special characters
function hasSpecialCharacters(value) {
  // Implement your logic to check for special characters
  // For example, you can use a regular expression to match special characters
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
  return specialCharacterRegex.test(value);
}

// Function to send email notification
function sendEmailNotification(spacefarerName, spacefarerEmail) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EmailFrom,   // Mail address
      pass: process.env.Code        // app-specific pwd
    }
  });
// Prepare Email Content
  const mailOptions = {
    from: process.env.EmailFrom,
    to: spacefarerEmail,
   
    subject: 'Welcome to Space Travelers Club!',
    text: `Dear ${spacefarerName},\n\nThank you for joining the Space Travelers Club! We look forward to exploring the universe together.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
