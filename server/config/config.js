//Setup for our mongoDB
var config = {
    port: 27017,
    db: 'mongodb://localhost/ResumizerPro',
    host: 'localhost'
};

//So other modules can use this db config module
module.exports = config;
