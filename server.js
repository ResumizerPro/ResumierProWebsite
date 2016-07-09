/**
 * Created by Dominick Martelly on 7/6/2016.
 * process ID#6237
 */
var http = require('http');
var express = require('express');
//noinspection JSUnusedLocalSymbols
var mongoose = require('mongoose'); //To make sure mongoose is on the server
var fs = require('fs');
var config = require('./config/config');
var root = __dirname;

var app = express();


var modelsPath = root + '/server/models';

fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});

require('./config/db')(config);
require('./config/routes')(app);
require('./config/express')(app);

var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('App started on port ' + app.get('port'));
});