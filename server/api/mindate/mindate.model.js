'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MindateSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Mindate', MindateSchema);
