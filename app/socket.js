import io from 'socket.io-client';
const socket = io('http://127.0.0.1:8090');
import {dispatch} from './store';

socket.on('action', (action,payload) =>
  {dispatch({
    type: action,
    payload: payload
  });}
);

export default socket;
