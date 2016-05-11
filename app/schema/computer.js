var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: String,
  dn: String,
  status: String,
  checked: Date,
  apps: Array
});

module.exports = mongoose.model('Computer', schema);
