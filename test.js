const http = require('http')

var server = http.createServer((req,res) => {
    console.log(req.url)
    // res.write("Hi, you are on " + req.url)

   res.writeHead(200,{"Content-Type" : "application/json"})

    if(req.url == '/users'){
        res.write('on /users')
        res.end("{'name': 'test ','abc':'pqr'}");
    }
    if(req.url == '/logout'){
        res.write('on /logout')
        res.end("{'id': '1711981227', 'sname' : 'Gupta'}");
    }

  res.end('hueheu')
})

server.listen(9000);