/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var control = require('../controllers/resume');
var resume = require('../models/resume');

module.exports = function (app) {
    // find all songs route
    app.get('/resume', control.findAllResume);

    // find one song route
    app.get('/resume/:id', control.findOneResume);

    // Add song route
    app.post('/resume', control.addResume);

    // Delete song route
    app.delete('/resume/:id', control.removeResume);
};

