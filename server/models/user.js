/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: String,
    pass: String,
    email: String
}, {
    versionKey: false,
    toJSON: {
        virtuals: true,
    },

    toObject: {
        virtuals: false
    }
});

mongoose.model('user', User);