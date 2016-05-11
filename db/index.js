var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninitegui');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function(){
  console.log('Ninite DB successfully connected');
});

module.exports = db;
