const cron = require ('node-cron');

const removeOldAuthTokens = require('./removeOldAuthTokens');
const removeOldPasswords = require('./removeOldPassword');


module.exports = () => {
    cron.schedule('0 4 * * *', removeOldAuthTokens);
    cron.schedule('0 5 * * *', removeOldPasswords);
};


