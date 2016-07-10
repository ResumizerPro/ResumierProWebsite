/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,salt: {
        type: String
    }
});
Schema.pre('save', function(next) {
    if (this.password) {
        this.salt = new
            Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next(); });
Schema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000,
        64).toString('base64');
};
Schema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

Schema.plugin(passportLocalMongoose);

mongoose.model('user', Schema);