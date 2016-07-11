var passport = require('passport');

var control = require('../controllers/user');

module.exports = function (app) {

    app.route('/signup')
        .post(control.signup);

    app.route('/users/:userId')
        .get(control.read)
        .put(control.update)
        .delete(control.delete);

    app.post('/login', function (req, res) {
        res.status('login').send({user: req.user});
    });

    app.route('/signin')
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    app.get('/signout', control.signout);

};