/**
 * Created by Dominick Martelly on 7/6/2016.
 * process ID#6237
 */
var express = require('express');
//noinspection JSUnusedLocalSymbols
var mongoose = require('mongoose'); //To make sure mongoose is on the server
var fs = require('fs');
var http = require('http');
var config = require('./config/config');
var root = __dirname;
var app = express();

require('./config/db')(config);

var modelsPath = root + '/server/models';

fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file);
    }
});

require('./config/express')(app, config);
require('./config/routes')(app);

var server = http.createServer(app);
server.listen(config.webport);
console.log('App started on port ' + config.webport);
