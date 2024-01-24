const cds = require('@sap/cds');

/**
 * Description - Email notification 
 * @param {Object} emailObjects - Email Parameters
 */
async function sendEmail(emailObjects) {
    const responsecode = await sgMail
        .send(emailObjects)
        .then((response) => {
            return response[0][0].statusCode;
        })
        .catch((error) => {
            return error;
        });

    return responsecode;
}

module.exports = { sendEmail }