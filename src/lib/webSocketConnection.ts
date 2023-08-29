import ioClient from 'socket.io-client';
const ENDPOINT = 'http://192.168.2.11:3443';

const socket = ioClient(ENDPOINT, { transports: ["websocket", 'polling'] });

export const io = socket;