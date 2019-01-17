const peso1 = 1.0
const peso2 = Number('2.0')

const naoInteiro =1.1

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(naoInteiro))

const avaliacao1 = 9.8789526
const avaliacao2 = 8.9922468

const total = avaliacao1 * peso1 + avaliacao2*peso2
const media = total/(peso1+peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(typeof media.toString())