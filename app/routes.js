module.exports = function(app) {
    var userController = require('./controllers/userController'),
        assetController = require('./controllers/assetController'),
        resourceController = require('./controllers/resourceController');

    // user routes ===========================================================
    app.get('/users', userController.getAll);
    app.post('/users', userController.createUser);

    app.get('/users/:id', userController.getUser);
    app.put('/users/:id', userController.updateUser);
    app.delete('/users/:id', userController.deleteUser);


    // asset routes ===========================================================
    app.get('/assets', assetController.getAll);

    // resource routes ===========================================================
    app.get('/resources', resourceController.getState);
    app.get('/resources/:id', resourceController.getQuota);
};