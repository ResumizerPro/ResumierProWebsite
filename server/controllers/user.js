/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');
var user = mongoose.model('user');

exports.renderSignin = function (req, res, next) {

    if(!req.user) {
        res.render ('/login', {
            title: 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else{
        return res.redirect('/');
    }
};

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
}