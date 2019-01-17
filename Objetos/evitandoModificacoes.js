//Object.preventExtensions

const produto = Object.preventExtensions({
    nome:'Qualquer', preco:1.99, tag: 'promoção'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'  //altera valor
produto.descricao = 'Borracha escolar branca'  // não adiciona atributo
delete produto.tag    //exclui atributo
console.log(produto)  

//Object.seal
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome='Silva'  //não adiciona atributo
delete pessoa.nome        //não deleta atributo
pessoa.idade = 29         //Pode alterar valor
console.log(pessoa)

// Object.freeze = selado + valores constantes
