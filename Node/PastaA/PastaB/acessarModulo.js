const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const http = require('http')//modulo interno do modulo
http.createServer((req, res) =>{ //requisição e resposta
    res.write('Bom dia!')
    res.end()
}).listen(8080)