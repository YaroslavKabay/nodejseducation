const S3 = require('aws-sdk/clients/s3');

const { S3_BUCKET_REGION, S3_ACCESS_KEY, S3_SECRET_KEY, S3_BUCKET_NAME } = require('../configs/config');

const S3Bucket = new S3({
    region: S3_BUCKET_REGION,
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY
});

const uploadPublicFile = (file = {}) => {
    console.log(S3_BUCKET_NAME);
    console.log(S3_SECRET_KEY);
    console.log(S3_BUCKET_REGION);
    return S3Bucket
        .upload({
            ContentType: file.mimetype,
            ACL: 'public-read',
            Bucket: S3_BUCKET_NAME,
            Key: file.name,
            Body: file.data
        })
        .promise();

};


module.exports = {
    uploadPublicFile
};


