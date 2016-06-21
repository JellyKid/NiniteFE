import {app, io} from './server';
import db from './db';
import bodyParser from 'body-parser';

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
 });

app.get('/test', (req,res) => {
  res.status(200).send('This worked!');
});

app.post('/settings', (req,res) => {
  console.log(req.body);
  res.status(200).send();
});

io.on('connection', (socket) => {
  socket.on('action', (action) => {
    console.log(action);
  });
});
