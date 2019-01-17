//Promese é uma requisição assincrona?
//resolve aceita apenas um parametro

function falarDepoisDe(segundos, frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundos*1000)

        setTimeout(()=>{
            reject(frase)
        },segundos*5000)
    })
}

falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('!?!'))  //acessa o resultado obitido pela promisse
.then(outraFrase => console.log(outraFrase))
.catch(e=> console.log('Deu erro carai!',e)) //caso seja reject
