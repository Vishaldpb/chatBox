



var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var dataFile = require('./data/data.json')
// for automatically reloading the page
var reload = require('reload');
var io = require('socket.io')(server);

var friends = require('./routers/friends');
var index = require('./routers/index');
app.set('appData',dataFile);




app.set('view engine', "ejs");
app.set('views',__dirname+'/views');

app.use(express.static(__dirname+'/public'))
app.use('/friends',friends);
app.use('/',index)
app.use('/feedback',require('./routers/feedback'))
app.use('/api',require('./routers/api'))
app.use('/chat',require('./routers/chat'))

app.locals.siteTitle ="ChatBoot";
app.locals.allFriends = dataFile.friends;

io.on('connection',function(socket){
    console.log('user connected');

    io.on('disconnect',function(){
        console.log('user is disconnected');
    })

    socket.on('postMessage',function(data){
        io.sockets.emit('updateMessages',data)
    })
})

server.listen(3000, function(){
    console.log("server is listening at 3000");
})




reload(app);
