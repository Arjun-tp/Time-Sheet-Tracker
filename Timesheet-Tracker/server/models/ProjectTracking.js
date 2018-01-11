'use strict';

var mongoose = require('mongoose')
// Schema
var schema = new mongoose.Schema({
    projectTrackingName: {type: String},
  });


// Model
var model = mongoose.model('projectTracking', schema);

// Public API
module.exports = model;