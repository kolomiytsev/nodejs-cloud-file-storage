var mongo = require('./db'),
    resourceColl = mongo.collection('resources');

exports.getCurrentState = function(callback) {
    //resourceColl.find().toArray(function(err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};

exports.getQuotaById = function(resourceId, callback) {
    //resourceColl.find({_id: resourceId}).toArray(function (err, result) {
    //    if (err) {
    //        callback(err);
    //    } else {
    //        callback(null, result);
    //    }
    //});

    callback(null, {});
};


