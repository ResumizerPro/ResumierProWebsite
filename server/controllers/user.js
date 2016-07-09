/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');
var user = mongoose.model('user');

exports.createUser = function(req, res) {
    user.find({}, function(err, resume) {

    });
};