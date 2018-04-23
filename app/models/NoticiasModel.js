function NoticiasModel(application){
    this._connection = application.config.dbConnection();
}

NoticiasModel.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias', callback);
}

NoticiasModel.prototype.getNoticia = function(id_noticia,callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = '+id_noticia.id_noticia, callback);
}

NoticiasModel.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasModel.prototype.getUltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias order by data_criacao desc limit 5', callback)
}
module.exports = function(){
    return NoticiasModel;
}