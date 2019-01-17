
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  //Remove ultimo elemento do array
console.log('pop',pilotos)

pilotos.push('Verstappen')
console.log('push', pilotos)

pilotos.shift()  //remove primeiro elemento da lista
console.log('shift', pilotos)

pilotos.unshift('Hammilton')
console.log('unshift', pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log('splice', pilotos)

//remover
pilotos.splice(3, 1)
console.log('splice', pilotos)

const algunsPilotos1 = pilotos.slice(2)  //parte do array
const algunsPilotos2 = pilotos.slice(1,4) //vai até o 4 mas não inclue o 4
console.log('slice', algunsPilotos1)
console.log('slice',algunsPilotos2)
