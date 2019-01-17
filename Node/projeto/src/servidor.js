const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//.urlencoded() retorna uma função meddleware que faz um parse no body da requisição
app.use( bodyParser.urlencoded({extended:true})) //como não foi add url

//só exemplo
app.get('/produtos', (req, res, next)=>{
    console.log('middleware 1... chamando get')
    next()  //se eu retirar esta função ele não chamara a proxima função
})

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos()) //função send que envia uma resposta em formato JSON
})

app.get('/produtos/:id',(req, res)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

//precisamos instalar o body-parser npm i --save body-parse
app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)    //JSON
})

//alterando produto
app.delete('/produtos/:id', (req, res)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)    //JSON
})

app.put('/produtos/:id', (req, res)=>{

})


app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})

// Inicie o nodemon no cmd com "npm start" pois esta configurado no package.json
// no postman(ou no navegador) digite o endereço http://localhost:3003/produtos
//
