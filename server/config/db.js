/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    require('../models/user');
    db.on('error', function() {
        throw new Error('Unable to connect to database at ' + config.db);
    });
};