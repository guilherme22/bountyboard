'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  category: String,
  context: String,
  active: Boolean,
  reward: String,
  user: String,
  replies:[],
  dateCreated: {
      type: Date,
      default: new Date()
  },
  dateUpdated: {
      type: Date,
      default: new Date()
  },
  views: {
      type: Number,
      default: 0
  },
  tags:[]
});

module.exports = mongoose.model('Task', TaskSchema);