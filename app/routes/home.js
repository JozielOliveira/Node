module.exports = (appliction) => {
    appliction.get('/', function(req,res){
        appliction.app.controllers.homeController.index(appliction, req, res);
    });

}