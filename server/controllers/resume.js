var mongoose = require('mongoose');
var resume = mongoose.model('resume');
var user = mongoose.model('user');

var path = require('path');

//Trying to chang to search resumes
exports.findAllResumes = function (req, res) {
    resume.find({
        //name: new RegExp(req.query.name, "i"),
        //resume_type: new RegExp(req.query.resume_type, "i"),
        isPublic: true
    }, function (err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};

exports.addResume = function (req, res) {
    console.log(req.user + ' is trying to make a resume');
    console.log(req.query.id + ' this is the template I want to use');
    user.findOne({username: new RegExp(req.user, "i")}, '_id', function (err, foundUser) {
        if (err) {
            throw new Error(err);
        }
        if (foundUser == null) {
            res.render('createresume', {message: "For some reason, you don't exist..."})
        }

        var document = new resume(req.body);
        console.log(document);
        if (document.isPublic == undefined) {
            console.log('but ' + req.user + ' did not provide \'isPublic\'. This attr is required');
        }


        document.save(function (err, resume) {
            if (err) {
                throw new Error(err);
            }

            user.findByIdAndUpdate(foundUser._id, {$push: {resumes: resume._id}}, function (err) {
                if (err) {
                    return next(err);
                } else {

                  var exec = require('child_process').exec;
                  var cmd = 'sudo ./../../templates/laton text.tex input.sty helvetica.sty res.cls';
                  var Pages = [
                    'contact_info',
                    'education',
                    'Skills',
                    'Projects',
                    'work_experience'
                  ]
                  for (var x in Pages){
                    console.log(Pages[x]);
                    console.log(resume.Skills);
                  }
                  /*var fs = require('fs');
                  fs.writeFile("/../../templates/input_1.sty",
                    var comd = "\newcommand";
                  , function(err) {
                    if(err) {
                      return console.log(err);
                    }
                    console.log("The file was saved!");
                  });
                  exec(cmd, function(error, stdout, stderr) {
                    // command output is in stdout
                  });*/
                    res.json(resume);
                }
            });
        });
    });
};

exports.updateResume = function (req, res, next) {
    user.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.findOneResume = function (req, res) {
    resume.findById(req.params.id, function (err, resume_s) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume_s);
    });
};


exports.removeResume = function (req, res) {
    resume.findByIdAndRemove(req.params.id, function (err, resume) {
        if (err) {
            throw new Error(err);
        }
        res.send(resume);
    });
};

exports.getTemplate = function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../../templates/text.pdf'));
};
