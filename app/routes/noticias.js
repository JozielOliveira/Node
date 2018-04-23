module.exports = (application)=>{
    application.get('/noticia', (req, res)=>{
        application.app.controllers.noticiaController.noticia(application, req, res)
    })
    application.get('/noticias', (req, res)=>{
        application.app.controllers.noticiaController.noticias(application, req, res)
    })
    application.get('/form_noticia', (req, res) => {
        application.app.controllers.adminController.formulario_inclusao_noticia(application, req, res)
    })
}

