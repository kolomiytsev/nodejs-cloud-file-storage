var mongo = require('./db'),
    folderColl = mongo.collection('folders'),
    filesColl = mongo.collection('files'),
    relationsColl = mongo.collection('relations');

//Folder scheme
//{
//"_id": UUIDv4, required
//"type": String, required
//"title": String, required
//"tag": Array, optional
//"metadata": Object, optional
//}
//File scheme
//{
//"_id": UUIDv4, required
//"type": String, required
//"title": String, required
//"tag": Array, optional
//"metadata": Object, optional
//}
//Relation scheme
//{
//"sourceId": UUIDv4, required
//"targetId": UUIDv4, required
//}

exports.getRootFolder = function(callback) {


    callback(null, {"_id": "1212","type": "folder", "title": "rootFolder"});
};

exports.getFolderById = function(callback) {
    //assetColl.find().toArray(function(err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};

exports.getFileById = function(callback) {
    //assetColl.find().toArray(function(err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};

exports.createFolder = function(assetObj, callback) {
    //assetColl.insertOne(assetObj, function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(err, result);
    //    }
    //});

    callback(null, {});
};

exports.createFile = function(assetObj, callback) {
    //assetColl.insertOne(assetObj, function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(err, result);
    //    }
    //});

    callback(null, {});
};

exports.updateFolder = function(assetId, assetObj, callback) {
    //assetColl.update({_id:assetId}, assetObj).toArray(function (err, result){
    //    if(err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};

exports.updateFile = function(assetId, assetObj, callback) {
    //assetColl.update({_id:assetId}, assetObj).toArray(function (err, result){
    //    if(err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};

exports.deleteFolder = function(assetId, callback) {
    //assetColl.deleteOne({_id:assetId}).toArray(function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};

exports.deleteFile = function(assetId, callback) {
    //assetColl.deleteOne({_id:assetId}).toArray(function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};