let valor //não inicializada
console.log(valor)  //declarado e não inicializado
//console.log(valor2)  //nem declarado foi

valor = null // não tem valor nem um endereço de memoria, mas a variavel e definida
console.log(valor)
//console.log(valor.toString) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)

console.log(produto)
produto.preco=null //sem preço
console.log(!!produto.preco)
console.log(produto)

