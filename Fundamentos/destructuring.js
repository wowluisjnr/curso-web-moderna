// novo recurso do ES2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero:1000
    }
}

//destruturing
const {nome, idade} = pessoa //recebe nome e idade de pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const{ sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco:{logradouro, numero, cep}}= pessoa
console.log(logradouro, numero, cep)
