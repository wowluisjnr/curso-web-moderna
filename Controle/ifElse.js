const imprimirResultado = function(nota){
    
    if(typeof nota === 'number')
    {
        if(nota>7){
            console.log('Aprovado')
        } 
        else
        {
            console.log('Reprovado')
        }
    } 
    else
    {
        console.log('Digite um numero...')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //teste para saber se é valor numerico