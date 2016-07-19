/**
 * Created by Dominick Martelly on 7/6/2016.
 * process ID#6237
 */
var http = require('http');
var fs = require('fs');
var express = require('./server/config/express');
var passport = require('passport');
var mongoose = require('mongoose'); //To make sure mongoose is on the server

var root = __dirname;

//Config
var config = require('./server/config/config');
require('./server/config/db')(config);
//Express
var app = express();
//Passport
require('./server/config/passport')(passport);
require('./server/routes/resume')(app);
require('./server/routes/user')(app);
require('./server/routes/index')(app);
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