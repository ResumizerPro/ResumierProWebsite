var mongoose = require('mongoose');
var resume = mongoose.model('resume');

exports.findAllResume = function(req, res) {
    resume.find({}, function(err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};

exports.findOneResume = function(req, res) {
    resume.findById(req.params.id, function(err, resume_s) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume_s);
    });
};

exports.addResume = function(req, res) {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body); //Find out why body is undefined
    var document = new resume(req.query); //Change back to req.body after testing

    document.save(function(err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};

exports.removeResume = function(req, res) {
    resume.findByIdAndRemove(req.params.id, function(err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};
