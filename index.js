const express = require('express')
const app = express()
const port = 3000

// Este metodo diz para o express, que renderização fica por conta do EJS 
app.set('view engine', 'ejs')
/*
    Este metodo diz para o express, que quando houver uma requisição 'GET' na raiz do site, ele vai
    executar a função callback
*/
app.get('/', (req, res)=>{
    // Este metodo diz qual arquivo vai ser renderizado e enviado como resposta da requisição
    res.render("home/index")
})
/*
    Este metodo diz para o express, que quando houver uma requisição 'GET' na raiz noticias , ele vai
    executar a função callback
*/
app.get('/noticias', (req, res)=>{
    // Este metodo diz qual arquivo vai ser renderizado e enviado como resposta da requisição
    res.render("noticias/noticias")
})
/*
    Este metodo diz para o express, que quando houver uma requisição 'GET' na raiz form_noticia, ele vai
    executar a função callback
*/
app.get('/form_noticia', (req, res)=>{
    // Este metodo diz qual arquivo vai ser renderizado e enviado como resposta da requisição
    res.render("admin/form_add_noticia")
})
app.listen(port, ()=>{
    console.log("Servidor rodando na porta 3000")
})