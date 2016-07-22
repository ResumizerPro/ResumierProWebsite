var mongoose = require('mongoose');
var myStub = sinon.stub(mongoose.Model, METHODNAME);
var myStub = mongoose.model('../models/backend_stub.js');

exports.findAllResume = function(req, res) {
    myStub.find({}, function(err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};

exports.findOneResume = function(req, res) {
    myStub.findById(req.params.id, function(err, resume_s) {
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
    var document = new myStub(req.query); //Change back to req.body after testing

    document.save(function(err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};

exports.removeResume = function(req, res) {
    myStub.findByIdAndRemove(req.params.id, function(err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};
