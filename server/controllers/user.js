var mongoose = require('mongoose');
passport = require('passport');
var user = mongoose.model('user');

//noinspection JSUnusedLocalSymbols
var getErrorMessage = function(err) {
    var message = '';

    if(err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exist';
                break;
            default:
                message = "Something went wrong";

        }
    }
    else{
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }
    return message;
};

exports.login = function (req, res, next) {
  if(!req.user) {
    res.render ('login', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info')
    });
  }else{
    res.redirect('/');
  }
};


exports.signup = function (req, res, next) {
    if (!req.user) {
        var User = new user(req.body);
        console.log(User);

        User.provider = 'local';

        console.log('test');
        User.save(function (err) {
            if (err) {
                console.log('b');
                //var message = getErrorMessage(err);
                //req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(User, function (err) {
                console.log('a');
                if (err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        console.log('c');
        return res.redirect('/');
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
    user.find({}, function (err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};

exports.read = function (req, res) {
    var userId = req.params.userId;
    user.find({_id: userId}, function (err, user) {
        res.json(user);
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
