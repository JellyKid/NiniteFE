import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/ninitegui');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function(){
  console.log('Ninite DB successfully connected');
});

export default db;
