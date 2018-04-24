const express = require('express')
const bodyParse = require('body-parser')
const consign = require('consign')
const expressValidator = require('express-validator')
//inicia o express
const app = express()
//seta as variaves view engine e views do express
app.set('view engine', 'ejs')
app.set('views','./app/views')
//configura o middleware express.static
app.use(express.static('./app/public'))
//configura o middleware body-parser
app.use(bodyParse.urlencoded({extended:true}))
//configura o middleware express-validator
app.use(expressValidator())
//efetua o autoload
consign().include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .into(app)
//exporta o modulo app
module.exports = app