module.exports.index = function(appliction, req, res){
    let noticiasModel = new appliction.app.models.NoticiasModel(appliction)
    noticiasModel.getUltimasNoticias((error, result)=> res.render('home/index', { noticias : result})) 
}