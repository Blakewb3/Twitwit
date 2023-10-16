const io = require('socket.io')(3000)
const users = {}

io.on('connection', socket => {
    // socket.emit('chat-message',  'hello world')
    socket.on('new-user', myName => {
        users[socket.id] = myName
        socket.broadcast.emit('user-connected', myName)

    })
    socket.on('send-chat-message', message => {
       socket.broadcast.emit('chat-message', {message: message, name: users[socket.id] })
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id] 
        
    })
})