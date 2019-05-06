var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000
var path = require('path');

var emoji = require('node-emoji')

//to post json form body
app.use(express.json());

// for static files
app.use(express.static(path.join(__dirname, 'views')));

//server will listen to this port
http.listen(port, function(){
    console.log('listening on *:' + port);
});

var chatHome = require('./controllers/web/chat-controller');
app.use('/',chatHome)

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', emoji.emojify(msg));
      });
});
