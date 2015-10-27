var asset = require('../models/asset'),
    ObjectValidator = require('../../modules/validator'),
    uuid = require('node-uuid');

ObjectValidator.registerModel("assetObj", {
    type: {type:"string", required: true},
    title: {type:"string", required: true},
    //tag: {type: "array"},
    metadata: {type: "object"}
});
ObjectValidator.registerModel("assetId", {
    _id: {type: "uuid", required: true}
});

exports.getAll = function (req, res, next) {
    var result = asset.getAllAssets(function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};


exports.getState = function (req, res, next) {

};

exports.getQuota = function (req, res, next) {
    var result = asset.getQuota(resourceId, function (err, result) {
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};

exports.getQuotaById = function (req, res, next) {
    var resourceId = req.params.id,
        validation = ObjectValidator.validate('resourceId', {_id: resourceId});

    if (!validation) {
        res.status(500);
        return next(new Error("Validation Error: invalid uuid."));
    }

    var result = asset.getQuotaById(resourceId, function (err, result) {
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};