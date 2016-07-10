/**
 * Created by Dominick Martelly on 7/6/2016.
 * process ID#6237
 */
var http = require('http');
var express = require('express');
//noinspection JSUnusedLocalSymbols
var mongoose = require('mongoose'); //To make sure mongoose is on the server

var config = require('./server/config/config');
require('./server/config/db')(config)

var fs = require('fs');
passport = require('./server/config/passport');

var root = __dirname;

var app = express();
var passport = passport();

var modelsPath = root + '/server/models';

fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});

require('./server/routes/resume')(app);
require('./server/routes/user')(app);

require('./server/config/express')(app);

var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('App started on port ' + app.get('port'));
});