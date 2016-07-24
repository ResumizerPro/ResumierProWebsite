var http = require('http');
var fs = require('fs');
var https = require('https');
//noinspection JSUnusedLocalSymbols
var mongoose = require('mongoose'); //To make sure mongoose is on the server

var root = __dirname;

var options = {
   key  : fs.readFileSync('server.key'),
   cert : fs.readFileSync('server.crt')
};
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

https.createServer(options, app).listen(443, function () {
   console.log('Started!');
});

var server = http.createServer(options, app)

server.listen(app.get('port'), function () {
    console.log('App started on port ' + app.get('port'));
});
