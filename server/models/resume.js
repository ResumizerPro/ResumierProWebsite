/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    isPublic: String,
    qualifications: String, //Collection of strings
});

mongoose.model('resume', Schema);