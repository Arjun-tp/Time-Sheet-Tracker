'use strict';

var mongoose = require('mongoose')
// Schema
var schema = new mongoose.Schema({
    leaveType: {type: String},
  });


// Model
var model = mongoose.model('leaves', schema);

// Public API
module.exports = model;