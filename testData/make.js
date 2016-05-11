var mongodb = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninitegui');

var db = mongoose.connection;
var schema = new mongoose.Schema({
  name: String,
  dn: String,
  status: String,
  checked: Date,
  apps: Array
});

var Computer = mongoose.model('Computer', schema);

function createData() {
  var testPC = new Computer({
    name: 'Test PC',
    dn: 'CN=TestPC,OU=Test,DC=jellykid,DC=org',
    status: 'OK',
    checked: Date.now(),
    apps: [
      {
        name: "CutePDF",
        status: "OK - 3.1"
      },
      {
        name: "Acrobat",
        status: "Not installed"
      }
    ]
  });

  testPC.save(function(err,pc){
    if(err){
      return console.error(err);
    }
    return console.log("saved");
  });
}

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function(){
  console.log('Ninite DB successfully connected');
  createData();
});
