console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0],aprovados[1],aprovados[2], aprovados[3])
aprovados[3]='Paulo'
aprovados.push('Abia')  //Mais recomendado para adicionar elementos no array
console.log(aprovados.length)

aprovados[9]='Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined, aprovados[8]=== null)
aprovados.sort()  //Ordena os itens em ordem alfabetica. Alterando o array original
console.log(aprovados)

delete aprovados[1]
console.log('----',aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//(indice, qts elementos deletar a partir do indice, elementos a adiocionar)
aprovados.splice(3, 0, 'Elemento1', 'Elemento2')
console.log('----', aprovados)