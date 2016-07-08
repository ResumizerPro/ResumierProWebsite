/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var rest = require('../server/controllers/rest');

module.exports = function(app){

  // find all songs route
  app.get('/resume', rest.findAllResume);

  // find one song route
  app.get('/resume/:id', rest.findOneResume);

  // Add song route
  app.post('/resume', rest.addResume);

  // Delete song route
  app.del('/resume/:id', rest.removeResume);
};

