var http = require('http');
var fs = require('fs');
//noinspection JSUnusedLocalSymbols
var mongoose = require('mongoose'); //To make sure mongoose is on the server

var root = __dirname;

//Config
var config = require('./server/config/config');
require('./server/config/db')(config);

//Passport
var passport = require('passport');
require('./server/config/passport')(passport);

//Express
var express = require('express');
var app = express();
require('./server/config/express')(app);

var modelsPath = root + '/server/models';
fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('App started on port ' + app.get('port'));
});