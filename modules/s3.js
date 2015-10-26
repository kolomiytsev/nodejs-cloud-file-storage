var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: process.env.AwsAccessKeyId, secretAccessKey: process.env.AwsSecretAccessKey});
var s3 = new AWS.S3();

var params = {
    Bucket: process.env.AwsBucket /* required */
    //Delimiter: 'STRING_VALUE',
    //EncodingType: 'url',
    //Marker: 'STRING_VALUE',
    //MaxKeys: 0,
    //Prefix: 'STRING_VALUE'
};
s3.listObjects(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
//s3.listBuckets(function(err, data) {
//    if (err) { console.log("Error:", err); }
//    else {
//        for (var index in data.Buckets) {
//            var bucket = data.Buckets[index];
//            console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
//        }
//    }
//});