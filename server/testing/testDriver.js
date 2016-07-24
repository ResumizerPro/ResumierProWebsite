require('../models/user');
var dbURI = 'mongodb://localhost/testing',

    chai = require('chai'), //chai commands
    should = chai.should,
    assert = chai.assert,

    mongoose = require('mongoose'), //setup mongoose
    user = mongoose.model('user'),
    userController = require('../controllers/user'),
    clearDB = require('mocha-mongoose')(dbURI);

mongoose.connect(dbURI);

describe('Testing User Controller Class Method Login', function () {
    describe('Test_Login_1', function () {
        it('Sunny-day where BobbyCreak is already sighed in', function (done) {

            var expected = 'render:success_message:Welcome BobbyCreak';

            var output = '';
            var req = {
                user: 'BobbyCreak',
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
    describe('Test_Login_2', function () {
        it('Sunny-day where \'!@#$^^&*\' is already sighed in', function (done) {

            var expected = 'render:success_message:Welcome !@#$^^&*';

            var output = '';
            var req = {
                user: '!@#$^^&*',
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
    describe('Test_Login_3', function () {
        it('Rainy-day where \'\' (A blank string) is signed in', function (done) {

            var expected = 'flash:error_flash:info_render:login_message:undefined';

            var output = '';
            var req = {
                user: '',
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});
describe('Testing User Controller Class Method Success', function () {
    describe('Test_Success_1', function () {
        it('Sunny-day. Only one case since the method does not take any outside parameters', function (done) {

            var expected = 'render:success_message:Please exit this menu.';

            var output = '';
            var req = {
                user: undefined,
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.success(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});
describe('Testing User Controller Class Method Signup_render', function () {
    describe('Test_Success_1', function () {
        it('Sunny-day. Only one case since the method does not take any outside parameters', function (done) {

            var expected = 'render:signup_message:';

            var output = '';
            var req = {
                user: undefined,
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.signup_render(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});
describe('Testing User Controller Class Method signout', function () {
    describe('Test_Signout_1', function () {
        it('Sunny-day. Only one case since the method does not take any outside parameters', function (done) {

            var expected = 'redirect:/';

            var output = '';
            var req = {
                user: undefined,
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.signout(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});
describe('Testing User Controller Class Method Login', function () {
    beforeEach(function (done) {
        new user({
            username: 'Apple',
            password: '1234',
            email: '123abc@gmail.com',
            provider: 'a'
        }).save(done);
    });
    describe('Test_Signup_1', function () {
        it('Sunny-day where a new user creates an account', function (done) {

            var expected = 'render:success_message:You are logged in. Please exit this menu.';

            var output = '';
            var req = {
                user: undefined,
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_'
                        + 'title:' + msg.title + '_'
                        + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
    describe('Test_Signup_2', function () {
        it('Sunny-day where a new user creates an account', function (done) {

            var expected = 'render:success_message:Welcome !@#$^^&*';

            var output = '';
            var req = {
                user: '!@#$^^&*',
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
    describe('Test_Signup_3', function () {
        it('Rainy-day where \'\' (A blank string) is signed in', function (done) {

            var expected = 'flash:error_flash:info_render:login_message:undefined';

            var output = '';
            var req = {
                user: '',
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                },
                logout: function() {}
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + 'message:' + msg.messages;
                },
                redirect: function (string) {
                    output = output + 'redirect:' + string;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});

