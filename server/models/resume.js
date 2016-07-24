var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    isPublic: { //is the resume visible to the public
        type: Boolean,
        required: true
    },
    canContact: { //show name, address, email, and phonenumber if true
        type: Boolean,
        required: true
    },

    resume_type: {
        type: String,
        enum: ['Functional', 'Targeted', 'Combinational', 'Chronological']
    },

    //attributes of the resume

    full_name: String,
    email: String,
    phone_number: String,
    gitHub: String,
    linkedIn: String,
    address: {
        house_number: String,
        street_name: String,
        state: String,
        zip: Number
    },
    education: [
        degree: String,
        school: String,
        city: String,
        gpa: Number,
        from: Date,
        to: Date,
        description: [String]
    }],
    work_experence: [{
        job_title: String,
        employer: String,
        city: String,
        gpa: Number,
        from: Date,
        to: Date,
        summary_line: String,
        achievements: [String],
        description: [String]
    }],
    Skills: [{
      programming_languages: [String],
      iDEs: [String],
      technologies: [String],
      databases: [String]
    }],
    Projects: [{
      project_name: String,
      project_link: String,
      description: [String],
      technologies: [String],
      implementation: [String]
    }]
});

mongoose.model('resume', Schema);
