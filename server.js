const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });

app.use(express.static('view'))

app.get('/', (req, res) => {
    console.log('dfsa')
})

server.listen(3000, () => {
    console.log('server running...')
    console.log(server.connections)
})


io.on('connection', (socket) => {
    console.log("user connected: " + socket.id);
    socket.on('message', (data) => {
        io.emit('message', data)
    })
    io.emit("counter", socket.client.conn.server.clientsCount);

})




