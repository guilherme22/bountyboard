'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReplieSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Replie', ReplieSchema);