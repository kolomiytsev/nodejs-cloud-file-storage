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
