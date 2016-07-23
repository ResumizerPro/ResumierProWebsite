var control = require('../controllers/resume');
var resume = require('../models/resume');

module.exports = function (app) {
    app.route('/resume')
        .get(control.findAllResumes)
        .post(control.addResume);

    app.route('/resume/:id')
        .get(control.findOneResume)
        .put(control.updateResume)
        .delete(control.removeResume);

    app.route('/template')
        .get(control.getTemplate);
};
