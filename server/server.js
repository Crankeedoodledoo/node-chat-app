const path = require('path'); //built-in node module
const http = require('http'); //built-in node module
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();

//http.createServer is the same method used by app.listen to create a server
//it takes a function that is called with a request and response arguments but
//since this method is integrated in express we can pass app as the argument
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
