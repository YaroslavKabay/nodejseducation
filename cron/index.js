const cron = require ('node-cron');

const removeOldAuthTokens = require('./removeOltAuthTokens');


module.exports = () => {
    cron.schedule('0 4 * * *', removeOldAuthTokens);
};


