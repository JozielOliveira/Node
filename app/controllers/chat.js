module.exports.iniciaChat = (application, req, res) => {
    
    let data = req.body

    req.assert('nome', 'O Nome ou Apelido é obrigatório').notEmpty()
    req.assert('nome','O Nome ou Apelido deve ter de 3 a 15 caracteres').len(3,15)

    let errors = req.validationErrors()
    
    if(errors){
        res.render('index', {validacao : errors}) 
        return   
    }
    application.get("io").emit("msgCliente",{
        "apelido" : data.nome,
        "msg" : "acabou de entrar"
    })
    res.render('chat', { usuario : data.nome})
}
