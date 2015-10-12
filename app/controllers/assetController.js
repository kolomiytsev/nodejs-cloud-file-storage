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

exports.getFolder = function (req, res, next) {
    if (req.params.id) {
        var result = asset.getRootFolder(function(err, result){
            if (err) {
                return next(err);
            } else if (result.length) {
                res.send(result);
            } else {
                res.send('No document(s) found with defined criteria!');
            }
        });
    } else {
        var assetId = req.params.id,
            validation = ObjectValidator.validate('assetId', {_id: assetId});

        if (!validation) {
            res.status(404);
            return next(new Error("Validation Error: invalid uuid."));
        }

        var result = asset.getFolderById(assetId, function(err, result){
            if (err) {
                return next(err);
            } else if (result.length) {
                res.send(result);
            } else {
                res.send('No document(s) found with defined criteria!');
            }
        });
    }
};

exports.getFile = function (req, res, next) {
    var assetId = req.params.id,
        validation = ObjectValidator.validate('assetId', {_id: assetId});

    if (!validation) {
        res.status(404);
        return next(new Error("Validation Error: invalid uuid."));
    }

    var result = asset.getFileById(assetId, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};

exports.createFolder = function (req, res, next) {
    //todo object validation
    //var assetObj,
    //    ufirstName   = req.body.firstName,
    //    ulastName    = req.body.lastName,
    //    assetEmail    = req.body.email,
    //    assetMeta     = req.body.metadata || undefined,
    //    validation   = ObjectValidator.validate('assetObj', {firstName: ufirstName, lastName: ulastName, email: assetEmail, metadata: assetMeta});
    //
    //if (!validation) return next(new Error("Validation Error: check your data."));
    //
    //assetObj = {
    //    _id: uuid.v4(),
    //    name: {
    //        first: ufirstName,
    //        last: ulastName
    //    },
    //    email: assetEmail,
    //    metadata: assetMeta
    //};
    //
    var result = asset.createFolder(assetObj, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send('Inserted %d documents into the "assets" collection. The documents inserted with "_id" are:', result.length, result);
        } else {
            res.send('No output for that operation');
        }
    });
};

exports.createFile = function (req, res, next) {
    //todo object validation
    //var assetObj,
    //    ufirstName   = req.body.firstName,
    //    ulastName    = req.body.lastName,
    //    assetEmail    = req.body.email,
    //    assetMeta     = req.body.metadata || undefined,
    //    validation   = ObjectValidator.validate('assetObj', {firstName: ufirstName, lastName: ulastName, email: assetEmail, metadata: assetMeta});
    //
    //if (!validation) return next(new Error("Validation Error: check your data."));
    //
    //assetObj = {
    //    _id: uuid.v4(),
    //    name: {
    //        first: ufirstName,
    //        last: ulastName
    //    },
    //    email: assetEmail,
    //    metadata: assetMeta
    //};
    //
    var result = asset.createFile(assetObj, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send('Inserted %d documents into the "assets" collection. The documents inserted with "_id" are:', result.length, result);
        } else {
            res.send('No output for that operation');
        }
    });
};

exports.updateFolder = function (req, res, next) {
    //todo object validation
    //var assetId = req.params.id,
    //    validation = ObjectValidator.validate('assetId', {_id: assetId}),
    //    assetObj,
    //    ufirstName   = req.body.firstName,
    //    ulastName    = req.body.lastName,
    //    assetEmail    = req.body.email,
    //    assetMeta     = req.body.metadata || undefined,
    //    objValidation   = ObjectValidator.validate('assetObj', {firstName: ufirstName, lastName: ulastName, email: assetEmail, metadata: assetMeta});
    //
    //if (!validation) return next(new Error("Validation Error: invalid uuid."));
    //if (!objValidation) return next(new Error("Validation Error: invalid uuid."));
    //
    //assetObj = {
    //    _id: assetId,
    //    name: {
    //        first: ufirstName,
    //        last: ulastName
    //    },
    //    email: assetEmail,
    //    metadata: assetMeta
    //};
    //
    var result = asset.updateFolder(assetId, assetObj, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No output for that operation');
        }
    });
};

exports.updateFile = function (req, res, next) {
    //todo object validation
    //var assetId = req.params.id,
    //    validation = ObjectValidator.validate('assetId', {_id: assetId}),
    //    assetObj,
    //    ufirstName   = req.body.firstName,
    //    ulastName    = req.body.lastName,
    //    assetEmail    = req.body.email,
    //    assetMeta     = req.body.metadata || undefined,
    //    objValidation   = ObjectValidator.validate('assetObj', {firstName: ufirstName, lastName: ulastName, email: assetEmail, metadata: assetMeta});
    //
    //if (!validation) return next(new Error("Validation Error: invalid uuid."));
    //if (!objValidation) return next(new Error("Validation Error: invalid uuid."));
    //
    //assetObj = {
    //    _id: assetId,
    //    name: {
    //        first: ufirstName,
    //        last: ulastName
    //    },
    //    email: assetEmail,
    //    metadata: assetMeta
    //};
    //
    var result = asset.updateFile(assetId, assetObj, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No output for that operation');
        }
    });
};

exports.deleteFolder = function (req, res, next) {
    var assetId = req.params.id,
        validation = ObjectValidator.validate('assetId', {_id: assetId});

    if (!validation) {
        res.status(500);
        return next(new Error("Validation Error: invalid uuid."));
    }

    //todo check if folder has documents

    var result = asset.deleteFolder(assetId, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send('Deleted %d documents in the "assets" collection. Deleted document with "_id":', result.length, assetId);
        } else {
            res.send('No output for that operation');
        }
    });
};

exports.deleteFile = function (req, res, next) {
    var assetId = req.params.id,
        validation = ObjectValidator.validate('assetId', {_id: assetId});

    if (!validation) {
        res.status(500);
        return next(new Error("Validation Error: invalid uuid."));
    }

    var result = asset.deleteFile(assetId, function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send('Deleted %d documents in the "assets" collection. Deleted document with "_id":', result.length, assetId);
        } else {
            res.send('No output for that operation');
        }
    });
};