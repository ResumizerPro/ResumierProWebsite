var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    isPublic: String,
    qualifications: [String] //List of strings
});

mongoose.model('resume', Schema);