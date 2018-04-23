const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const app = express()

//Este metodo diz onde fica os arquivos estáticos
app.use(express.static('./app/public'))
// Este metodo diz para o express, que renderização fica por conta do EJS 
app.set('view engine', 'ejs')
app.set('views', './app/views')
// Este metodo diz que o body de um requisa é convertida em json, pela biblioteca body-parser
app.use(bodyParser.urlencoded({extended : true}))
// Este metodo diz que nossa aplicação pode usar a biblioteca express-validator para validar formulários
app.use(expressValidator())

consign().include('app/routes')
    .then('config/dbConnection.js')//Este metodo diz que neste arquivo fica a configuração do banco de dados
    .then('app/models')//Este metodo diz que nesta pasta fica a camada Model da minha aplicação
    .then('app/controllers')//Este metodo diz que nesta pasta fica a camada Controller da minha aplicação
    .into(app)
module.exports = app

