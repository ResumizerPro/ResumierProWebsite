/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var express = require('express');

var compression = require('compression');
var logger = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var multer = require('multer');

module.exports = function (app) {
    app.set('port', 80);
    app.use(compression());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride());
    app.use('/scripts_1/', express.static(__dirname + "/../../node_modules/bootstrap/dist/css"));
    app.use('/scripts_2/', express.static(__dirname + "/../../node_modules/font-awesome/css"));
    app.use('/scripts_3/', express.static(__dirname + "/../../node_modules/angular"));
    app.use('/scripts_4/', express.static(__dirname + "/../../node_modules/bootstrap/dist/js"));
    app.use('/fonts', express.static(__dirname + "/../../node_modules/font-awesome/fonts"));
    app.use('/', express.static(__dirname + "/../../client"));
};
