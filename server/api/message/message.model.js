'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  author: String,
  title: String,
  text: String,
  postDate: Number,
  modifiedDate: Number,
  version: Number,
  tags: Array,
  category: String,
  active: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);