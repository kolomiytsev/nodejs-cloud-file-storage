var mongo = require('../../modules/db'),
    userColl = mongo.collection('users');

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

        callback(null, result);
    });

};

exports.createUser = function(userObj, callback) {
    userColl.insert(userObj, function (err, result) {
        if (err) {
            callback(err);
        }

        callback(err, result);
    });
};

exports.getAllUserById = function(userId, callback) {
    userColl.find({_id: userId}).toArray(function (err, result) {
        if (err) {
            callback(err);
        }

        callback(null, result);
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
