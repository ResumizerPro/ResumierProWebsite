/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

Schema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', Schema);