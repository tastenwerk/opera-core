/**
 * a user model
 * implemented with mongoose
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  salt: String,
  confirmation_key: String,
  api_key: String,
  confirmed: { type: Boolean, default: false },
  suspended: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;