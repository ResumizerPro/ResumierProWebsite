/**
 * Created by Dominick Martelly on 7/9/2016.
 */

var mongoose = require('mongoose');

module.exports = function(passport) {
    var User = mongoose.model('user');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }, '-password -salt', function(err, user) {
            done(err, user);
        });
    });

    require('./local.js')();
};