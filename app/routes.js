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
    app.get('/asset/folder/:id?', assetController.getFolder);
    app.post('/asset/folder/:id?', assetController.createFolder);
    app.patch('/asset/folder/:id', assetController.updateFolder);
    app.delete('/asset/folder/:id', assetController.deleteFolder);

    app.get('/asset/file/:id', assetController.getFile);
    app.post('/asset/file/:folderId', assetController.createFile);
    app.patch('/asset/file/:id', assetController.updateFile);
    app.delete('/asset/file/:id', assetController.deleteFile);


    // resource routes ===========================================================
    app.get('/resource', resourceController.getState);
    app.get('/resource/:id', resourceController.getQuota);
};