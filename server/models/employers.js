var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    User: String, //Holds the Object Id of the User object
    company: String,
    email: String
});

mongoose.model('employers', Schema);