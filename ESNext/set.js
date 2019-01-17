// não aceita repetição e não é indexado 
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintians')
times.add('Flamento')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.size)

const nomes = ['João', 'Pedro','Gloria', 'João']
const nomesSet = new Set(nomes)
console.log(nomesSet)