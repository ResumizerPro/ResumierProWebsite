var request = require('request');
var mongoose = require('mongoose');
var resume = mongoose.model('resume');
var path = require('path');

exports.findAllResumes = function(req, res) {
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
    var user = req.body.user;
    request('user', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body)
        }
    });
    console.log(request);
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

exports.gettemplate = function(req, res) {
  res.sendfile(path.resolve(__dirname+ '/../../templates/bigfile.pdf'));
};
