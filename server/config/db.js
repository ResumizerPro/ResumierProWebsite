var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.connect(config.db);

    require('../models/user');
    require('../models/resume');

    mongoose.connection.on('error', function () {
        throw new Error('Unable to connect to database at ' + config.db);
    });
};