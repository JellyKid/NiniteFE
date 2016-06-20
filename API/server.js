import Server from 'socket.io';
import session from './AD/Session';

const config = {
  url: 'ldap://bpr620.bpsb.local',
  baseDN: 'dc=bpsb,dc=local',
  username: 'jpublic@bpsb.local',
  password: 'Password1'
};

export default function startServer() {
  const io = new Server().attach(8090);
  // console.log('IO Server up on port 8090');

  const ad = new session(config);
  // console.log('AD session created');

  io.on('connection', (socket) => {
    socket.on('findADComputers', () => {
      ad.getComputers().then((computers) => {
        socket.emit('found', computers);
      });
    });
  });
}
