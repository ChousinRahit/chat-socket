import {io} from 'socket.io-client';
const socket = io.connect('https://socketserver-chousinrahit.vercel.app/');
export default socket;
