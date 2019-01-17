//Arrow Function
//Funções Arrow são funções anonimas. O que são funções anonimas?
const soma = (a, b) => a + b
console.log(soma(2,3))

//
const lexico1 = () => console.log(this === exports)

//parametro defalt
function log(texto ='Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

//operador rest ou spread
function total(...numeros){ //rest é ...  transforma os dados recebidos em um array
    let total = 0
    numeros.forEach(n=> total+= n)
    return total
}
console.log(total(2,3,4,5))
