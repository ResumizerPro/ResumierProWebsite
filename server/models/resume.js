var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    isPublic: Boolean,
    qualifications: [String] //List of strings
});

mongoose.model('myStub', Schema);