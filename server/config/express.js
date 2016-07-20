var express = require('express');
var passport = require('passport');
var compression = require('compression');
var logger = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer = require('multer');
var flash = require('connect-flash');

module.exports = function () {
    var app = express();
    app.set('port', 80);
    app.use(compression());
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', __dirname + "/../../client");
    app.set('view engine', 'ejs');
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    require('./../routes/resume')(app);
    require('./../routes/user')(app);
    require('./../routes/index')(app);
    return app;
};
