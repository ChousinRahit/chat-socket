import {io} from 'socket.io-client';
const socket = io.connect('https://socser.onrender.com');
// const socket = io.connect('http://192.168.43.103:4000');
// const socket = io.connect('http://192.168.0.106:4000');

export default socket;
