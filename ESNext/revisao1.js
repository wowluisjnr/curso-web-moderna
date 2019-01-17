// let e const
{
    var a = 2 //não tem escopo de bloco
    let b = 3 //tem escopo de bloco
    console.log(b)
}
console.log(a)
//console.log(b)//não é possivel acionar variavel let fora do bloco. var sim

//Template String `aqui ${variavel}`
const produto ='iPad'
console.log(`${produto} 
é caro!`)

// Operador Destruturing
const [l, e, ...tras] = "Cod3r"  //String
console.log(l,e,tras)

const [x, ,y] = [1,2,3] //Array
console.log(x,y)

const {idade: i, nome} = {nome:'Ana', idade: 9} //Objeto
console.log(i, nome)