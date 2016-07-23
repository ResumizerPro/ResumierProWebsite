var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    isPublic: {
        type: Boolean,
        required: true
    },
    masterTemp: String,
    qualifications: [String], //
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    rating: Number,

    name: String,
    email: String,
    phone_number: String,
    address: {
        house_number: String,
        street_name: String,
        state: String,
        zip: Number
    },
    education: [{
        degree: String,
        institution: String,
        city: String,
        gpa: Number,
        from: Date,
        to: Date,
        description: [String]
    }],

    work_experence: [{
        title: String,
        employer: String,
        city: String,
        from: Date,
        to: Date,
        description: [String]
    }] //
});

mongoose.model('resume', Schema);