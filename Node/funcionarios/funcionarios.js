const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = func => func.pais == 'China'
const genero = func => func.genero == 'F'
const menorSalario = (func, funcAtual) => {
    //if(func < funcAtual){
    //    return func
    //}else{
    //    return funcAtual
    //}
    return func.salario < funcAtual.salario ? func:funcAtual
}


axios.get(url).then(response =>{
    const funcionarios = response.data
    

    console.log(funcionarios
        .filter(chineses)
        .filter(genero)
        .reduce(menorSalario))
})




//obter a mulher chinesa com o menor salario