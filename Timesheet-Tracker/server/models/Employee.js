'use strict';

var mongoose = require('mongoose')
// Schema
var schema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    dob: {type: Date},
    department: {type: String},
    role : {type: String},
  });


// Model
var model = mongoose.model('employees', schema);

// Public API
module.exports = model;