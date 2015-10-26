var mongo = require('../../modules/db'),
    folderColl = mongo.collection('folders'),
    filesColl = mongo.collection('files');

//Folder scheme
//{
//"_id": UUIDv4, required
//"path": String, required
//"title": String, required
//"rules": String
//"parent_id": UUIDv4 or null
//"tags": Array, optional
//"metadata": Object, optional
//"created_at": Date
//"updated_at": Date
//"deleted_at": Date
//}
//File scheme
//{
//"_id": UUIDv4, required
//"path": String, required
//"size": Number, required
//"title": String, required
//"rules": String
//"parent_id": UUIDv4 or null
//"tags": Array, optional
//"metadata": Object, optional
//"created_at": Date
//"updated_at": Date
//"deleted_at": Date
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