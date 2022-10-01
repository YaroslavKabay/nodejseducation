module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'production',

  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://YaroslavKabay:YaroslavKabay@cluster0.7mmv4jz.mongodb.net/nodeEdu?retryWrites=true&w=majority',
  ACCESS_SECRET_WORD: process.env.MONGO_URL || 'ACCESS_SECRET_WORD',
  REFRESH_SECRET_WORD: process.env.MONGO_URL || 'REFRESH_SECRET_WORD',

  ACCESS_TOKEN_LIFETIME : process.env.ACCESS_TOKEN_LIFETIME || '5m',
  REFRESH_TOKEN_LIFETIME : process.env.REFRESH_TOKEN_LIFETIME || '5m',

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'example@email.com',
  NO_REPLY_PASSWORD: process.env.NO_REPLY_PASSWORD || 'email password',

  FRONTEND_URL: process.env.FRONTEND_URL || 'example.com',

  ACTION_TOKEN_SECRET: process.env.ACTION_TOKEN_SECRET || 'A_T_S',

  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  S3_BUCKET_REGION: process.env.S3_BUCKET_REGION,
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
  S3_SECRET_KEY: process.env.S3_SECRET_KEY,
  S3_BUCKET_URL: process.env.S3_BUCKET_URL,


  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_SERVICE_SID: process.env.TWILIO_SERVICE_SID,

};
