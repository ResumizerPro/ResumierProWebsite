/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    username: String,
    company: String,
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

mongoose.model('employers', Schema);