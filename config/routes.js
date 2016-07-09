/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var express = require('express');
var passport = require('passport');
var rest = require('../server/controllers/rest');
var User = require('../server/models/user.js');
var router = express.Router();


module.exports = function(app){

  // find all songs route
  app.get('/resume', rest.findAllResume);

  // find one song route
  app.get('/resume/:id', rest.findOneResume);

  // Add song route
  app.post('/resume', rest.addResume);

  // Delete song route
  app.delete('/resume/:id', rest.removeResume);

  router.post('/register', function(req, res) {
    User.register(new User({ username: req.body.username }),
        req.body.password, function(err, account) {
          if (err) {
            return res.status(500).json({
              err: err
            });
          }
          passport.authenticate('local')(req, res, function () {
            return res.status(200).json({
              status: 'Registration successful!'
            });
          });
        });
  });
};

