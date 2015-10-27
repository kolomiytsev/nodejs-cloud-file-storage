var mongo = require('../../modules/db'),
    assetsColl = mongo.collection('assets'),
    aws = require('../../modules/s3'),
    lodash = require('lodash');

//Assets scheme
//{
//"_id": UUIDv4, required
//"path": String, required
//"title": String, required
//"type": String, required
//"rules": String
//"parent_id": UUIDv4 or null
//"tags": Array, optional
//"metadata": Object, optional
//"created_at": Date
//"updated_at": Date
//"deleted_at": Date
//}

var params = {
    Bucket: 'lkolomiytsev'
};

exports.getAllAssets = function(callback) {
    aws.s3.listObjects(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } // an error occurred
        else {
            callback(null, data);
        }               // successful response
    });

};

exports.getCurrentState = function (callback) {


};

exports.getQuota() = function (callback) {


};

exports.getQuotaById = function (callback) {


};
function toClient(data) {
    var result = lodash.forEach(data, function(item){
        item.id = item._id;
        delete item._id;
        return item;
    });
    return result;
}