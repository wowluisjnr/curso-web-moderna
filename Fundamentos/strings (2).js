const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))  //retorna vazio
console.log(escola.charCodeAt(3)) //codigo do caractere dentro da tabela ASC
console.log(escola.indexOf('3')) // existe 3

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))//concatenação de strig
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))//regex  \/w/g

console.log('Ana,Maria,Pedro'.split(','))