var control = require('../controllers/resume');
var resume = require('../models/resume');

module.exports = function (app) {
    // Find all resumes
    app.get('/resume', control.findAllResume);

    // Find one resume
    app.get('/resume/:id', control.findOneResume);

    // Add resume
    app.post('/resume', control.addResume);

    // Delete resume
    app.delete('/resume/:id', control.removeResume);
};