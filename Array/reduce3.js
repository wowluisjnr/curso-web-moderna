Array.prototype.reduce2 = function(callback, valorInicial){
    
    const indiceInicial = valorInicial ? 0:1
    let acumulador = valorInicial || this[0]
    for(let i=indiceInicial;i<this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total+valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma,10))



const alunos =[
    {nome:'Joao', nota:7.3, bolsista:false},
    {nome:'Maria', nota:9.2, bolsista:true},
    {nome:'Pedro', nota:9.8, bolsista:false},
    {nome:'Ana', nota:8.7, bolsista:true}
]

//Desafio 1: Todos os alunos são bolsistas? true ou false
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const desafio1 = alunos.map(a=>a.bolsista).reduce2(todosBolsistas)
console.log('Todos os alunos são bolsistas?',desafio1)


//Desafio2: Algum aluno é bolsista? 
const desafio2 = alunos.map(a=>a.bolsista).reduce2(function(acumulador, atual){
    return acumulador || atual     
 }) 
 console.log('Algum aluno é bolsista?',desafio2)