import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["https://mern-chat-app-sdag.onrender.com/"],
        methods: ["GET", "POST"]
    }
});

const userSocketMap = {}; // { userId: socketId }

export const getRecieverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

io.on('connection', (socket) => {
    console.log("A user connected: ", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId !== "undefined") userSocketMap[userId] = socket.id;

    // Emit the current online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // Listen for disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected: ", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };
