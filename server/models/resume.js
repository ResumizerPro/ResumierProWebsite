var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    created: {
         type: Date,
         default: Date.now
    },
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
    contact_info: [{
        full_name: String,
        email: String,
        phone_number: String,
        gitHub: String,
        linkedIn: String
    }],
    address: {
        house_number: String,
        street_name: String,
        state: String,
        zip: Number
    },
    education: [{
      university: String,
      start_Month: String,
      end_Month: String,
      start_Year: String,
      end_Year: String,
      degree: String,
      city: String
    }],
    work_experence: [{
      job_title: String,
      employer: String,
      city: String,
      start_month: String,
      start_year: String,
      end_month: String,
      end_year: String,
      job_description: [String]
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
      project_description: [String],
      project_technologies: [String],
      project_implementation: [String]
    }]
});

mongoose.model('resume', Schema);
