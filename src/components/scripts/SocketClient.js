import { io } from "socket.io-client";
import { getUserInfo } from './scripts/getUserInfo.js';
import { getDeviceId } from './scripts/idUtils';

import { url } from './server/signaling.js'

const socket = io(url);

io.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
  
  // client-side
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
  
  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });