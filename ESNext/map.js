const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() {},  'Função'],
    [{},'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((v1, ch) => console.log(ch,v1))

console.log(chavesVariadas.has(123)) // o elemento esta ou não presente no map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//quantos elementos estão no map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)