/**
 * Created by Dominick Martelly on 7/9/2016.
 */
var express = require('express');
var passport = require('passport');
var rest = require('../controllers/resume');
var resume = require('../models/resume');

module.exports = function (app) {
    app.route('/users')
        .post(rest.create)
        .get(rest.list);

    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(rest.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));
    app.get('/signout', users.signout);
};