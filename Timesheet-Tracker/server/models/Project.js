'use strict';

var mongoose = require('mongoose')
// Schema
var schema = new mongoose.Schema({
    projectName: {type: String},
  });


// Model
var model = mongoose.model('projects', schema);

// Public API
module.exports = model;