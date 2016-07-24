var express = require('express');
var control = require('../controllers/index');

module.exports = function (app) {
    app.use(express.static(__dirname + "/../../client"));
    app.get('/', control.renderIndex);
    app.get('/resumizerpro.me.html', control.sendHtml);
    app.get('*', control.directTo);
};
