module.exports.noticias = function(application, req, res){
    
    let noticiasModel = new application.app.models.NoticiasModel(application)

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias', { noticias : result })
    })
}

module.exports.noticia = function(application, req, res){
    
    let noticiasModel = new application.app.models.NoticiasModel(application)
    let id_noticia = req.query
    console.log(id_noticia)
    noticiasModel.getNoticia(id_noticia,function(error, result){
        console.log(result)
        res.render('noticias/noticia', { noticia : result })
    })
}