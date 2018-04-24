const application = require('./config/server')

let server = application.listen(80, ()=>{
    console.log("Servidor Online")
})

let io = require('socket.io').listen(server)
application.set('io',io)
io.on('connection', (socket)=>{
    console.log("Usuário conectou")
    socket.on('disconnect', ()=>{
        console.log("Usuário desconectou")
    })
    
    socket.on("msgServidor", (obj) => {
        //Conversas
        socket.emit(
            "msgCliente",
            {apelido: obj.apelido , msg : obj.msg} 
        )
    
        socket.broadcast.emit(
            "msgCliente",
            {apelido: obj.apelido , msg : obj.msg} 
        )
        //Participantes
        if(obj.usuarioCadastrado == 0){
            socket.emit(
                "msgParticipante",
                {apelido: obj.apelido, msg: obj.msg} 
            )
        
            socket.broadcast.emit(
                "msgParticipante",
                {apelido: obj.apelido, msg: obj.msg} 
            )
        }
    })
})