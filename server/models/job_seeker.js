var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    User: String,  //Holds the Object Id of the User object
    attributes: [String], //List of Strings
    resume: [String] //List of Strings
});

mongoose.model('job_seeker', Schema);