var mongo = require('../../modules/db'),
    userColl = mongo.collection('users'),
    lodash = require('lodash');

//user mongo scheme
//{
//"_id": UUIDv4, required
//"name": {
//"first": String, required
//"last": String, required
//},
//"email": String, required
//"metadata": Object, optional
//}


exports.getAllUsers = function(callback) {
    userColl.find().limit(100).toArray(function(err, result) {
        if (err) {
            callback(err);
        }

        callback(null, toClient(result));
    });

};

exports.createUser = function(userObj, callback) {
    userColl.insert(userObj, function (err, result) {
        if (err) {
            callback(err);
        }

        callback(err, toClient(result.ops));
    });
};

exports.getAllUserById = function(userId, callback) {
    userColl.find({_id: userId}).toArray(function (err, result) {
        if (err) {
            callback(err);
        }

        callback(null, toClient(result));
    });
};

exports.updateUser = function(userId, userObj, callback) {
    userColl.update({_id:userId}, userObj, function (err, result){
        if(err) {
            callback(err);
        }

        callback(null, result);
    });
};

exports.deleteUser = function(userId, callback) {
    userColl.remove({_id:userId}, function (err, result) {
        if (err) {
            callback(err);
        }

        callback(null, result);
    });
};

function toClient(data) {
    var result = lodash.forEach(data, function(item){
        item.id = item._id;
        delete item._id;
        return item;
    });
    return result;
}