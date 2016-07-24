var mongoose = require('mongoose');
var user = mongoose.model('user');

var getErrorMessage = function (err) {
    var message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exist';
                break;
            default:
                message = "Something went wrong";

        }
    }
    else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    console.log(message);
    return message;
};

exports.success = function (req, res) {

    res.render('success', {
        title: 'Successful Login!',
        messages: "Please exit this menu."
    });

};

exports.script = function (req, res) {
    res.send(__dirname + "/../../node_modules/angular")
};

exports.login = function (req, res) {
    if (!req.user) {
        res.render('login', {
            title: 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        res.render('success', {
            title: 'WHY ARE U FUCKIN HERE MATE',
            messages: 'Welcome ' + req.user
        });
    }
};

exports.signup_render = function (req, res) {
    res.render('signup', {
        title: 'Sign-up Form',
        message: ""
    });
};


exports.createresume = function (req, res) {
    console.log(req.params);
    return res.render('create_template', {
        template: req.params[0];
    });
};

exports.signup = function (req, res, next) {
    if (req.user) { //If the user is already signed in
        console.log('c');
        res.render('success', {
            title: 'You already registered silly!',
            message: "GTFO"
        });
    } else {
        var User = new user(req.body);
        console.log(User);
        User.provider = 'local';
        User.save(function (err) {
            if (err) { //If the creation of the new user didn't work
                res.render('signup', {
                    title: 'Sign-up Form',
                    message: getErrorMessage(err)
                });
            }
            else {
                req.login(User, function (err) {
                    if (err) return next(err);
                    else {
                        res.render('success', {
                            title: 'Successful Registration!',
                            messages: "You are logged in. Please exit this menu."
                        });
                    }
                });
            }
        });
    }
};

exports.createUser = function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.listUsers = function (req, res, next) {
    user.find({}, 'username email id', function (err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.read = function (req, res) {
    var username = req.params.username;
    user.find({username: username}, function (err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.update = function (req, res, next) {
    user.findByIdAndUpdate(req.params.userId, req.body, function (err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.delete = function (req, res) {
    user.remove({_id: req.params.userId}, function (err, user) {
        res.json(user);
    });

};
exports.signout = function (req, res) {
    req.logout();
    res.redirect('/');
};
