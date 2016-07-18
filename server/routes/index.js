var express = require('express');

module.exports = function (app) {
    app.use('/scripts_1/', express.static(__dirname + "/../../node_modules/bootstrap/dist/css"));
    app.use('/scripts_2/', express.static(__dirname + "/../../node_modules/font-awesome/css"));
    app.use('/scripts_3/', express.static(__dirname + "/../../node_modules/angular"));
    app.use('/scripts_4/', express.static(__dirname + "/../../node_modules/bootstrap/dist/js"));
    app.use('/fonts', express.static(__dirname + "/../../node_modules/font-awesome/fonts"));
    app.use('/', express.static(__dirname + "/../../client"));
};