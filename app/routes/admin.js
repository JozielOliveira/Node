module.exports = (application) => {
   
    application.post('/salvar', (req, res) => {
        application.app.controllers.adminController.noticias_salvar(application, req, res)
    })
}