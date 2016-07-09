/**
 * Created by Dominick Martelly on 7/9/2016.
 */
var passport = require('passport');

var control = require('../controllers/user');
var user = require('../models/user');

module.exports = function (app) {
    /*
    app.route('/users')
        .post(control.createUser)
        .get(control.list);

    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(control.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));
    app.get('/signout', users.signout);

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
    */
};