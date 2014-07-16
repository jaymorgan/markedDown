'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model');

var MessageSchema = new Schema({
  author: { type: String, ref: 'User' },
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