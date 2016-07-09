/**
 * Created by Dominick Martelly on 7/6/2016.
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


    // find all songs route
    app.get('/resume', rest.findAllResume);

    // find one song route
    app.get('/resume/:id', rest.findOneResume);

    // Add song route
    app.post('/resume', rest.addResume);

    // Delete song route
    app.delete('/resume/:id', rest.removeResume);

    //Registration
    app.get('/register', function (req, res) {
        res.render('register', {});
    });

    app.post('/register', function (req, res) {
        User.register(new User({username: req.body.username}), req.body.password, function (err, account) {
            if (err) {
                return res.render('register', {account: account});
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    });

    app.get('/login', function (req, res) {
        res.send('login', {user: req.user});
    });

    app.post('/login', passport.authenticate('local'), function (req, res) {
        res.redirect('/');
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/ping', function (req, res) {
        res.status(200).send("pong!");
    });
};

