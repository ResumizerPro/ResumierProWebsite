var passport = require('passport');
var control = require('../controllers/user');

module.exports = function (app) {

    app.route('/signup')
        .get(control.signup_render)
        .post(control.signup);

    app.route('/users/:userId')
        .get(control.read)
        .put(control.update)
        .delete(control.delete);

    app.route('/login')
        .get(control.login);

    app.post('/login', function (req, res) {
        console.log(req.user);
        res.status('login').send({user: req.user});
    });

    app.route('/users')
        .get(control.listUsers);

    app.route('/signin')
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.route('/signout')
        .get(control.signout);
};
