var express = require('express');

var compression = require('compression');
var logger = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var multer = require('multer');
var flash = require('connect-flash');
var passport = require('passport');

module.exports = function (app) {
    app.set('port', 80);
    app.use(passport.initialize());
    app.use(passport.session);
    app.use(compression());
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(flash());
};
