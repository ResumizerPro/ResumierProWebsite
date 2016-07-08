/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    User: String, //Object
    company: String,
    email: String
});

mongoose.model('employers', Schema);