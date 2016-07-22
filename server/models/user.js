var mongoose = require('mongoose');
var crypto = require('crypto');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: String,
    email: String, salt: {
        type: String
    },
    provider: {
      type: String,
      required: 'Provider is required'
    }
});

Schema.pre('save', function (next) {
    if (this.password) {
        this.salt = new
            Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});
Schema.methods.hashPassword = function (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000,
        64).toString('base64');
};
Schema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

Schema.set('toJSON', {
     getters: true,
     virtuals: true
   });
//This plugin is used for authentication for the password since it is encrypted
Schema.plugin(passportLocalMongoose);

mongoose.model('user', Schema);
