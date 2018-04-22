const http = require('http');

let server = http.createServer((req,res)=>{
    let require = req.url
    if( require == "/tecnologia" )
        res.end("<html><body>Hellow Tecnologia!!</body></html>")
    else if( require == "/moda")
        res.end("<html><body>Hellow Moda!!</body></html>")
    else
        res.end("<html><body>Hellow Word!!</body></html>")
})

server.listen(3000)