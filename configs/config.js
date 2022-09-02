module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://YaroslavKabay:YaroslavKabay@cluster0.7mmv4jz.mongodb.net/nodeEdu?retryWrites=true&w=majority',
  ACCESS_SECRET_WORD: process.env.MONGO_URL || 'ACCESS_SECRET_WORD',
  REFRESH_SECRET_WORD: process.env.MONGO_URL || 'REFRESH_SECRET_WORD',

  ACCESS_TOKEN_LIFETIME : process.env.ACCESS_TOKEN_LIFETIME || '5m',
  REFRESH_TOKEN_LIFETIME : process.env.REFRESH_TOKEN_LIFETIME || '5m',

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'example@email.com',
  NO_REPLY_PASSWORD: process.env.NO_REPLY_PASSWORD || 'email password',

};
