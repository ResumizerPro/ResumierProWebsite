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
    beforeEach(function (done) {

        new user({
            username: 'Apple',
            password: '1234',
            email: '123abc@gmail.com',
            provider: 'a'
        }).save(done);
    });
    describe('Test_Login_1', function () {
        it('Sunny-day where BobbyCreak is already sighed in', function (done) {

            var expected = 'render:success.Welcome BobbyCreak';

            var output = '';
            var req = {
                user: 'BobbyCreak',
                flash: function (string) {
                    output = output + 'flash:' + string + '.';
                }
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '.' + msg.messages;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
    describe('Test_Login_2', function () {
        it('Sunny-day where MJ is already sighed in', function (done) {

            var expected = 'render:success.Welcome MJ';

            var output = '';
            var req = {
                user: 'MJ',
                flash: function (string) {
                    output = output + 'flash:' + string + '.';
                }
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '.' + msg.messages;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
    describe('Test_Login_3', function () {
        it('Rainy-day where No one is signed in', function (done) {

            var expected = 'flash:error_flash:info_render:login_undefined';

            var output = '';
            var req = {
                user: undefined,
                flash: function (string) {
                    output = output + 'flash:' + string + '_';
                }
            };
            var res = {
                render: function (string, msg) {
                    output = output + 'render:' + string + '_' + msg.messages;
                }
            };
            userController.login(req, res);
            assert.equal(output, expected);
            done();
        });
    });
});

