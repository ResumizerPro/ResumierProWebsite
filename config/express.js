/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var express = require('express');

module.exports = function(app, config) {

    app.configure(function () {
        app.use(express.compress());
        app.set('port', config.webport);
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use('/scripts_1/', express.static(__dirname + "/../node_modules/bootstrap/dist/css"));
        app.use('/scripts_2/', express.static(__dirname + "/../node_modules/font-awesome/css"));
        app.use('/scripts_3/', express.static(__dirname + "/../node_modules/angular"));
        app.use('/scripts_4/', express.static(__dirname + "/../node_modules/lodash"));
        app.use('/scripts_5/', express.static(__dirname + "/../node_modules/underscore.string/dist"));
        app.use('/api', app.router);
        app.use('/', express.static(__dirname + "/../client"));
        app.use('/app', express.static(__dirname + "/../app"))
    });
};
