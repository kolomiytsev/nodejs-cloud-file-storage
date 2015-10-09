var mongo = require('./db'),
    assetColl = mongo.collection('assets');

//Asset scheme
//{
//“_id”: UUIDv4, required
//“type”: String, required
//“title”: String, required
//“tag”: Array, optional
//“metadata”: Object, optional
//“assetId”: UUIDv4, optional
//}


exports.getAllAssets = function(callback) {
    //assetColl.find().toArray(function(err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, result);

};

exports.createAsset = function(assetObj, callback) {
    //assetColl.insertOne(assetObj, function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(err, result);
    //    }
    //});

    callback(null, result);
};

exports.getAllAssetById = function(assetId, callback) {
    //assetColl.find({_id: assetId}).toArray(function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, result);
};

exports.updateAsset = function(assetId, assetObj, callback) {
    //assetColl.update({_id:assetId}, assetObj).toArray(function (err, result){
    //    if(err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, result);
};

exports.deleteAsset = function(assetId, callback) {
    //assetColl.deleteOne({_id:assetId}).toArray(function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, result);
};

