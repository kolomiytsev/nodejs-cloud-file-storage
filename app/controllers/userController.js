var User = require('../models/user'),
    ObjectValidator = require('../../modules/validator'),
    uuid = require('node-uuid'),
    logger = require('../../modules/logger'),
    util = require('util');

ObjectValidator.registerModel("userObj", {
    firstName: {type:"string", required: true},
    lastName: {type:"string", required: true},
    email: {type: "email", required: true},
    metadata: {type: "object"}
});
ObjectValidator.registerModel("userId", {
    _id: {type: "uuid", required: true}
});

exports.getAll = function(req, res, next) {
    logger.info({model: 'User'},'Get all users from '+ req.url);
    var result = User.getAllUsers(function(err, result){
        if (err) {
            logger.error({model: 'User'}, 'DB error' + req.url + err);
            res.status(500);
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};

exports.createUser = function (req, res, next) {
    logger.info({model: 'User'},'Create user '+ req.url);
    var userObj,
        ufirstName   = req.body.firstName,
        ulastName    = req.body.lastName,
        userEmail    = req.body.email,
        userMeta     = req.body.metadata || undefined,
        validation   = ObjectValidator.validate('userObj', {firstName: ufirstName, lastName: ulastName, email: userEmail, metadata: userMeta});

    if (!validation) {
        logger.warn({model: 'User'}, 'Validation error' + req.url + req.body);
        res.status(400);
        return next(new Error("Validation Error: check your data."));
    }

    userObj = {
        _id: uuid.v4(),
        firstName: ufirstName,
        lastName: ulastName,
        email: userEmail,
        metadata: userMeta
    };

    var result = User.createUser(userObj, function(err, result){
        if (err) {
            logger.error({model: 'User'}, 'DB error' + req.url + err);
            res.status(500);
            return next(err);
        }

        res.status(201);
        res.location(util.format("users/%s", result[0].id));
        res.send(result);
    });
};

exports.getUser = function (req, res, next) {
    logger.info({model: 'User'},'Get user by id '+ req.url);
    var userId = req.params.id,
        validation = ObjectValidator.validate('userId', {_id: userId});

    if (!validation) {
        logger.warn({model: 'User'}, 'Validation error' + req.url + req.params.id);
        res.status(400);
        return next(new Error("Validation Error: invalid uuid."));
    }

    var result = User.getAllUserById(userId, function(err, result){
        if (err) {
            logger.error({model: 'User'}, 'DB error' + req.url + err);
            res.status(500);
            return next(err);
        } else if (result.length) {
            res.send(result);
        } else {
            res.send('No document(s) found with defined criteria!');
        }
    });
};

exports.updateUser = function (req, res, next) {
    logger.info({model: 'User'},'Update user by id '+ req.url);
    var userId = req.params.id,
        validation = ObjectValidator.validate('userId', {_id: userId}),
        userObj,
        ufirstName   = req.body.firstName,
        ulastName    = req.body.lastName,
        userEmail    = req.body.email,
        userMeta     = req.body.metadata || undefined,
        objValidation   = ObjectValidator.validate('userObj', {firstName: ufirstName, lastName: ulastName, email: userEmail, metadata: userMeta});

    if (!validation) {
        logger.warn({model: 'User'}, 'Validation error' + req.url + req.params.id);
        res.status(400);
        return next(new Error("Validation Error: invalid uuid."));
    }
    if (!objValidation) {
        logger.warn({model: 'User'}, 'Validation error' + req.url + req.body);
        res.status(400);
        return next(new Error("Validation Error: check your data."));
    }

    userObj = {
        _id: userId,
        firstName: ufirstName,
        lastName: ulastName,
        email: userEmail,
        metadata: userMeta
    };

    var result = User.updateUser(userId, userObj, function(err, result){
        if (err) {
            logger.error({model: 'User'}, 'DB error' + req.url + err);
            res.status(500);
            return next(err);
        }

        res.status(204);
        res.send('No output for that operation');
    });
};

exports.deleteUser = function (req, res, next) {
    logger.info({model: 'User'},'Delete user by id '+ req.url + req.params.id);
    var userId = req.params.id,
        validation = ObjectValidator.validate('userId', {_id: userId});

    if (!validation) {
        logger.warn({model: 'User'}, 'Validation error' + req.url);
        res.status(400);
        return next(new Error("Validation Error: invalid uuid."));
    }

    var result = User.deleteUser(userId, function(err, result){
        if (err) {
            logger.error({model: 'User'}, 'DB error' + req.url + err);
            res.status(500);
            return next(err);
        }

        res.status(204);
        res.send('No output for that operation');
    });
};