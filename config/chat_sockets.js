
module.exports.chatSockets = function(socketServer){
    let io = require('socket.io')(socketServer, {
        cors: {
                origin: "http://localhost:8000",
                // allowedHeaders: ["my-custom-header"],
                methods: ["GET", "POST"],
                transports: ['websocket', 'polling'],
                credentials: true
            },
            allowEIO3: true

    });

    io.sockets.on('connection', function(socket){
        console.log('new connection received', socket.id);
        
        socket.on('disconnect', function(){
            console.log('socket disconnected!');
     });

});

}

