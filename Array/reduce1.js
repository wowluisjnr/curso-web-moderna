const alunos =[
    {nome:'Joao', nota:7.3, bolsista:false},
    {nome:'Maria', nota:9.2, bolsista:true},
    {nome:'Pedro', nota:9.8, bolsista:false},
    {nome:'Ana', nota:8.7, bolsista:true}
]

console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador +atual
})

console.log('Resultado 1 =',resultado)

const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador +atual
}, 10)

console.log('Resultado 2 =',resultado2)