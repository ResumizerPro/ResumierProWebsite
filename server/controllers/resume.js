/**
 * Created by Dominick Martelly on 7/7/2016.
 */
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
    var document = new resume(req.body);
    console.log(req.body);
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
