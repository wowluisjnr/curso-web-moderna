console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
String.prototype.reverse = function(){
    return this.split('').reverse().join('') //split transforma string em array. reverse reverte a ordem do array, joim junta o array e transforma em string
}

console.log( 'Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4,5].first())
console.log(['a','b','c','d'].first())
