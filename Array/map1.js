// mapeia os elementos de um array pra outro
const nums= [1,2,3,4,5]

//For com propósito
let resultado = nums.map(function(e){
    return e*2
})

console.log(nums, '*2',resultado)

//map não transforma o array atual, ele gera um novo array

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)