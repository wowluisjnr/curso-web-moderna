function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3, 5.4))

console.log(soma(1, 3, "teste"))
console.log(soma('a', 3, 5, 'b'))


