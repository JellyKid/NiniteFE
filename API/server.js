import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import session from './AD/Session';


export const app = express();

export const server = http.createServer(app);
export const io = socketio(server).attach(8090);
server.listen(3030, () => console.log('listening...'));
