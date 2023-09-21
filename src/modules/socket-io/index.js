const express = require('express');
const {createServer} = require('node:http');
const {join} = require('node:path');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

let cache = [];


io.on('connection', (socket) => {
    console.log(`${socket.id} connected to chat.`);
    for (let msg of cache) {
        io.to(socket.id).emit('chat message', msg);
    }

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', msg => {
        cache.push(msg);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});


server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});