const http = require('http')  //podemos usar o axios. que já usamos em aulas anteriores

const getTurma =(letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=>{
        http.get(url, res =>{
            let resultado =''
            res.on('data', dados =>{  //'data' a medida que os dados vão chegando
                resultado +=dados
            })
    
            res.on('end',()=>{ //'end' quando os dados terminarem de chegar
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }

            })
        })
    })
}

//Recurso do ES*
//Objetivo de simplificar o uso de promises..
let obterAlunos = async()=>{
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc) //retorna um objeto AsyncFunction
}

obterAlunos()
    .then(alunos => alunos.map(a=>a.nome))
    .then(nomes => console.log(nomes))
