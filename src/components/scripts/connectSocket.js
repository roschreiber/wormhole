import { io } from "socket.io-client";
import { getUserInfo } from './scripts/getUserInfo.js';
import { getDeviceId } from './scripts/idUtils';

import { url } from './server/signaling.js'

const socket = io(url,
    {
        transports: ['websocket'],
    }
);

socket.on("connect", () => {
    console.log("Connected to signaling server:", socket.id);
  
    const deviceId = localStorage.getItem("deviceId");
    socket.emit("register", { deviceId });
  });
  
  socket.on("disconnect", () => {
    console.log("Disconnected from signaling server");
  });
  
  socket.on("available-peers", (peers) => {
    console.log("Peers online:", peers);
  });