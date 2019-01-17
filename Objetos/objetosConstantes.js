//quando uso const no obj eu altero  o valor mas não o endereço
const pessoa = {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// da erro
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end='Rua ABC'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome='Maria'
console.log(pessoaConstante)
