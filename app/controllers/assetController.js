var asset = require('../models/asset'),
    ObjectValidator = require('../../modules/validator'),
    uuid = require('node-uuid');

ObjectValidator.registerModel("assetObj", {
    firstName: {type:"string", required: true},
    lastName: {type:"string", required: true},
    email: {type: "email", required: true},
    metadata: {type: "object"}
});
ObjectValidator.registerModel("assetId", {
    _id: {type: "uuid", required: true}
});

exports.getAll = function(req, res, next) {
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

exports.createAsset = function (req, res, next) {
    var assetObj,
        ufirstName   = req.body.firstName,
        ulastName    = req.body.lastName,
        assetEmail    = req.body.email,
        assetMeta     = req.body.metadata || undefined,
        validation   = ObjectValidator.validate('assetObj', {firstName: ufirstName, lastName: ulastName, email: assetEmail, metadata: assetMeta});

    if (!validation) return next(new Error("Validation Error: check your data."));

    assetObj = {
        _id: uuid.v4(),
        name: {
            first: ufirstName,
            last: ulastName
        },
        email: assetEmail,
        metadata: assetMeta
    };

    var result = asset.createAsset(assetObj, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send('Inserted %d documents into the "assets" collection. The documents inserted with "_id" are:', result.length, result);
        } else {
            res.send('No output for that operation');
        }
    });
};

exports.getAsset = function (req, res, next) {
    var assetId = req.params.id,
        validation = ObjectValidator.validate('assetId', {_id: assetId});

    if (!validation) return next(new Error("Validation Error: invalid uuid."));

    var result = asset.getAllAssetById(assetId, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};

exports.updateAsset = function (req, res, next) {
    var assetId = req.params.id,
        validation = ObjectValidator.validate('assetId', {_id: assetId}),
        assetObj,
        ufirstName   = req.body.firstName,
        ulastName    = req.body.lastName,
        assetEmail    = req.body.email,
        assetMeta     = req.body.metadata || undefined,
        objValidation   = ObjectValidator.validate('assetObj', {firstName: ufirstName, lastName: ulastName, email: assetEmail, metadata: assetMeta});

    if (!validation) return next(new Error("Validation Error: invalid uuid."));
    if (!objValidation) return next(new Error("Validation Error: invalid uuid."));

    assetObj = {
        _id: assetId,
        name: {
            first: ufirstName,
            last: ulastName
        },
        email: assetEmail,
        metadata: assetMeta
    };

    var result = asset.updateAsset(assetId, assetObj, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No output for that operation');
        }
    });
};

exports.deleteAsset = function (req, res, next) {
    var assetId = req.params.id,
        validation = ObjectValidator.validate('assetId', {_id: assetId});

    if (!validation) return next(new Error("Validation Error: invalid uuid."));

    var result = asset.deleteAsset(assetId, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send('Deleted %d documents in the "assets" collection. Deleted document with "_id":', result.length, assetId);
        } else {
            res.send('No output for that operation');
        }
    });
};