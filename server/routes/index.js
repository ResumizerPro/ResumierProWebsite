var express = require('express');
var control = require('../controllers/index');

module.exports = function (app) {
    app.use(express.static(__dirname + "/../../client"));
    //Routes
    app.get('/', control.renderIndex);
    app.get('*', control.directTo);
};
