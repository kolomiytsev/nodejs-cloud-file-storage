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


    // asset routes ===========================================================
    app.get('/assets/folders/:id?', assetController.getFolder);
    app.post('/assets/folders/:id?', assetController.createFolder);
    app.patch('/assets/folders/:id', assetController.updateFolder);
    app.delete('/assets/folders/:id', assetController.deleteFolder);

    app.get('/assets/files/:id', assetController.getFile);
    app.post('/assets/files/:folderId', assetController.createFile);
    app.patch('/assets/files/:id', assetController.updateFile);
    app.delete('/assets/files/:id', assetController.deleteFile);


    // resource routes ===========================================================
    app.get('/resources', resourceController.getState);
    app.get('/resources/:id', resourceController.getQuota);
};