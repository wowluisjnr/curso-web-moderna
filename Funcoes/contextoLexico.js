const valor ='Global'

function minhaFuncao(){
    console.log(valor)
}
minhaFuncao()

function exec(){
    const valor ='Local'
    minhaFuncao()
}

exec() //por conta do contexto a qual a função foi escrita, ira imprimir global
