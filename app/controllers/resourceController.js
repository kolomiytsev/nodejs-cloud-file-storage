var Resource = require('../models/resource'),
    ObjectValidator = require('../../modules/validator');


ObjectValidator.registerModel("resourceId", {
    _id: {type: "uuid", required: true}
});

exports.getState = function(req, res, next) {
    var result = Resource.getCurrentState(function(err, result){
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};

exports.getQuota = function (req, res, next) {
    var resourceId = req.params.id,
        validation = ObjectValidator.validate('resourceId', {_id: resourceId});

    if (!validation) {
        res.status(500);
        return next(new Error("Validation Error: invalid uuid."));
    }

    var result = Resource.getQuotaById(resourceId, function (err, result) {
        if (err) {
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};