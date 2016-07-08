/**
 * Created by Dominick Martelly on 7/7/2016.
 */
var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    User: String, //Object
    attributes: String, //List
    resume: String //List
});

mongoose.model('job_seeker', Schema);