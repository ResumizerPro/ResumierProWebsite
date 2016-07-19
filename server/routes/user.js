var passport = require('passport');
var control = require('../controllers/user');

module.exports = function (app) {

    app.route('/users')
        .get(control.listUsers);
        //.post(control.create);

    app.route('/users/:userId')
        .get(control.listUser)
        .put(control.updateUser)
        .delete(control.deleteUser);

    app.route('/signup')
        .post(control.signup);

    app.route('/login')
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    app.route('/signout')
        .get(control.signout);
};
