const cds = require('@sap/cds');
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { sendEmail } = require('./Utils/Utils');

const nodemailer = require('nodemailer');

// Define the service
module.exports = cds.service.impl(async function () {

  // Define the before and after events

  this.before('CREATE', 'Spacefarers', (req) => {
    function validateSpacefarerFields(req) {
      const { stardustCollection, Navskill } = req.data;

      // Validate stardustCollection and Navskill to avoid special characters
      if (hasSpecialCharacters(stardustCollection) || hasSpecialCharacters(Navskill)) {
        req.error(400, 'Special characters are not allowed in Stardust Collection and Wormhole Navigation Skill');
      }
    }

    validateSpacefarerFields(req);
  });

  this.after('CREATE', 'Spacefarers', (req) => {
    function postCreateSpacefarer(req) {
      // Add additional logic after creating a Spacefarer record
      sendEmailNotification(req.name, "rangachinthamreddy@gmail.com"); // Modify this line to provide necessary email-related data
    }

    postCreateSpacefarer(req);
  });
});

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
      user: 'rangachinthamreddy@gmail.com', // Replace with your Gmail address
      pass: 'zpiq vahx glkj oqbv' // Replace with your Gmail password or an app-specific password
    }
  });

  const mailOptions = {
    from: 'rangachinthamreddy@gmail.com',
    to: 'rangachinthamreddy@gmail.com',
    // spacefarerEmail
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
