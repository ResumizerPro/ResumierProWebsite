require('../models/user');
var dbURI = 'mongodb://localhost/testing',
    clearDB = require('mocha-mongoose')(dbURI),

    chai = require('chai'), //chai commands
    assert = chai.assert,

    mongoose = require('mongoose'), //setup mongoose
    user = mongoose.model('user'),
    userController = require('../controllers/user');

mongoose.connect(dbURI);

describe('RP_Login001_UT', function () {
    describe('RP_Login001_UT_001', function () {
        it('Sunny-day where BobbyCreak is already sighed in', function (done) {

            var expected = 'render:success_title:You are already signed in!_message:Welcome BobbyCreak';

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
    describe('RP_Login001_UT_002', function () {
        it('Sunny-day where \'!@#$^^&*\' is already sighed in', function (done) {

            var expected = 'render:success_title:You are already signed in!_message:Welcome !@#$^^&*';

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
    describe('RP_Login001_UT_003', function () {
        it('Rainy-day where \'\' (A blank string) is signed in', function (done) {

            var expected = 'flash:error_flash:info_render:login_title:Sign-in Form_message:undefined';

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
});
describe('RP_Success002_UT', function () {
    describe('RP_Success002_UT_004', function () {
        it('Sunny-day. Only one case since the method does not take any outside parameters', function (done) {

            var expected = 'render:success_title:Successful Login!_message:Please exit this menu.';

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
            userController.success(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});
describe('RP_Signup_render003_UT', function () {
    describe('RP_Signup_render003_UT_005', function () {
        it('Sunny-day. Only one case since the method does not take any outside parameters', function (done) {

            var expected = 'render:signup_title:Sign-up Form_message:';

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
            userController.signup_render(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});
describe('RP_Signout004_UT', function () {
    describe('RP_Signout004_UT_006', function () {
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
                    output = output + 'render:' + string + '_'
                        + 'title:' + msg.title + '_'
                        + 'message:' + msg.messages;
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
describe('RP_Signup005_UT', function () {
    beforeEach(function (done) {
        clearDB();

        new user({
            username: 'Apple',
            password: '1234',
            email: '123abc@gmail.com',
            provider: 'a'
        }).save(done);
    });
    describe('RP_Signup005_UT_007', function () {
        it('Sunny-day where a new user creates an account', function (done) {

            var expected = 'render:success_title:Successful Registration!_message:You are logged in. Please exit this menu.';

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
            req.body = {
                username: 'Dom',
                password: '12345678',
                email: 'hello@gmail.com',
                provider: 'idc'
            };
            userController.signup(req, res);
            setTimeout(function(){
                assert.equal(output, expected);
            }, 2000);

            done();
        });
    });
    describe('RP_Signup005_UT_008', function () {
        it('Sunny-day where a new user creates an account', function (done) {

            var expected = 'render:success_title:Successful Registration!_message:You are logged in. Please exit this menu.';

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
            req.body = {
                username: '_654987',
                password: '!@#$%^',
                email: 'isathare!@aol.com',
                provider: 'idk'
            };
            userController.signup(req, res);
            setTimeout(function(){
                assert.equal(output, expected);
            }, 2000);
            done();
        });
    });
    describe('RP_Signup005_UT009', function () {
        it('Rainy-day where a new user tries to create a new account but is already signed in', function (done) {

            var expected = 'render:success_title:You already registered silly!_message:GTFO';

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
            req.body = {
                username: 'Bob',
                password: 'homie',
                email: 'Saget@aol.com',
                provider: 'yep'
            };
            userController.signup(req, res);

            setTimeout(function(){
                assert.equal(output, expected);
            }, 2000);
            done();
        });
    });
});

