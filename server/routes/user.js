var passport = require('passport');
var control = require('../controllers/user');

module.exports = function (app) {

    app.route('/signup')
        .post(control.signup);

    app.route('/users/:userId')
        .get(control.read)
        .put(control.update)
        .delete(control.delete);

    app.route('/users')
        .get(control.listUsers);

    app.post('/login', function (req, res) {
        console.log(req.user);
        res.status('login').send({user: req.user});
    });

    app.route('/signin')
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            successFlash: 'Welcome!',
            failureFlash: 'Failure...'
        }));

    app.route('/signout')
        .get(control.signout);
};