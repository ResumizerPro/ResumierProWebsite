/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');
var resume = mongoose.model('resume');

exports.findAllResume = function(req, res) {
    resume.find({}, function(err, songs) {
        if (err) {
            throw new Error(err);
        }
        res.send(songs);
    });
};

exports.findOneResume = function(req, res) {
    resume.findById(req.params.id, function(err, song) {
        if (err) {
            throw new Error(err);
        }
        res.send(song);
    });
};

exports.addResume = function(req, res) {
    var document = new resume(req.body);
    document.save(function(err, song) {
        if (err) {
            throw new Error(err);
        }
        res.send(song);
    });
};

exports.removeResume = function(req, res) {
    resume.findByIdAndRemove(req.params.id, function(err, song) {
        if (err) {
            throw new Error(err);
        }
        res.send(song);
    });
};