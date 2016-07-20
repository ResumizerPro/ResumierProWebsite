var express = require('express');
var control = require('../controllers/index');

module.exports = function (app) {
    app.use('/scripts_1/', express.static(__dirname + "/../../node_modules/bootstrap/dist/css"));
    app.use('/scripts_2/', express.static(__dirname + "/../../node_modules/font-awesome/css"));
    app.use('/scripts_3/', express.static(__dirname + "/../../node_modules/angular"));
    app.use('/scripts_4/', express.static(__dirname + "/../../node_modules/bootstrap/dist/js"));
    app.use('/scripts_5/', express.static(__dirname + "/../../node_modules/jquery/dist"))
    app.use('/fonts', express.static(__dirname + "/../../node_modules/font-awesome/fonts"));
    app.use(express.static(__dirname + "/../../client"));
    app.get('/', control.render);
    app.get('*', control.directTo);
};
