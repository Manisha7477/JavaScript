const http = require('http');

var server = http.createServer(function(req, res){
    res.end("server chal rha h")
})

server.listen(3000)