/**
 * Created by Dominick Martelly on 7/6/2016.
 */
var env = process.env.NODE_ENV || 'development';

//Setup for our monngoDB
var config = {
    port: 27018,
    db: 'mongodb://localhost/ResumizerPro',
    host: 'localhost',
    webport: 80
};

//So other modules can use this config module
module.exports = config;
