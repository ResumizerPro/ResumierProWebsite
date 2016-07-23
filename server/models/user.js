var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Need a Username'],
        unique: [true, 'Username already exists'],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Need a password']
    },
    role: String,
    email: {
        type: String,
        unique: [true, 'E-mail already exists'],
        required: [true, 'Need an Email'],
        lowercase: true,
        trim: true
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: [true, 'Provider is required']
    },
    resumes: [{type: mongoose.Schema.Types.ObjectId, ref: 'resume'}]
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


mongoose.model('user', Schema);
