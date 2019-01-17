let num1 = 1
let num2 = 2

num1++
//++num1
console.log(num1)
--num1
console.log(num1)

//não complique o codigo- incremento dentro de uma comparação
console.log(++num1 === num2--) //++ executa antes do === e apos === executa --
console.log(num1 === num2)