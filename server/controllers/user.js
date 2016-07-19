var mongoose = require('mongoose');
var user = mongoose.model('user');

exports.signup = function(req, res, next) {
    if(!req.user) {
        console.log(req.body);
        var User = new user(req.body);
        var message = null;

        User.provider = 'local';

        User.save(function(err){
            if(err) {
                var message = getErrorMessage(err);

                req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(user, function(err){
                if (err) return next (err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

exports.createUser = function(req, res, next){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.listUsers = function(req, res, next) {
    user.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        } });
};

exports.read = function(req, res){
    var userId = req.params.userId;
    user.find({_id: userId}, function(err, user) {
        res.json(user);
    });
};

exports.update = function(req, res, next) {
    user.findByIdAndUpdate(req.params.userId, req.body, function(err, user) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next) {
    user.remove({_id: req.params.userId}, function(err, user) {
        res.json(user);
    });

};
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};
