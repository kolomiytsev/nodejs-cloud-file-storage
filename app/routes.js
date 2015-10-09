module.exports = function(app) {
    var userController = require('./controllers/userController'),
        assetController = require('./controllers/assetController'),
        resourceController = require('./controllers/resourceController');

    // user routes ===========================================================
    app.get('/users', userController.getAll);
    app.post('/users', userController.createUser);

    app.get('/users/:id', userController.getUser);
    app.patch('/users/:id', userController.updateUser);
    app.delete('/users/:id', userController.deleteUser);


    //// asset routes ===========================================================
    app.get('/asset', assetController.getAll);
    app.post('/asset', assetController.createAsset);

    app.get('/asset/:id', assetController.getAsset);
    app.patch('/asset/:id', assetController.updateAsset);
    app.delete('/asset/:id', assetController.deleteAsset);


    // resource routes ===========================================================
    app.get('/resource', resourceController.getState);
    app.get('/resource/:id', resourceController.getQuota);
};