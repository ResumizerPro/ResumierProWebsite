var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    isPublic: Boolean, //is visible to the public
    resume_type: String, //functional, targeted, combinational
    qualifications: [String], //

    name: String,
    email: String,
    phone_number: String,
    work_experence: [String], //
    address: {
        house_number: String,
        street_name: String,
        state: String,
        zip: Number,
    },
    education: String
});

mongoose.model('resume', Schema);