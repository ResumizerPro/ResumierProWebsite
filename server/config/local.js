var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('user');

module.exports = function() {
    passport.use(new LocalStrategy(function(email, password, done){
      console.log(email);
        User.findOne({email: email}, function(err,user){
            if(err){
                return done(err);
            }
            if(!user){
                return done(null, false, {
                    message: 'Unknown User'
                });
            }
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
            return done(null, user);
        });
    }));
};
