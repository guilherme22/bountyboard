'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  category: String,
  active: Boolean,
  reward: String,
  user: String,
  dateCreated: {
      type: Date,
      deafault: new Date()
  },
  dateUpdated: {
      type: Date,
      default: new Date()
  },
  views: {
      type: Number,
      default: 0
  },
  expire: Date,
  tags:[]
});

module.exports = mongoose.model('Task', TaskSchema);