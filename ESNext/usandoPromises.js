//http://files.cod3r.com.br/curso-js/turmaA.json
//com promise
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

let nomes =[]
/*
getTurma('A')
.then(alunos=>{
    nomes = nomes.concat(alunos.map(a=>`A: ${a.nome}`))
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(a=>`B: ${a.nome}`))
        getTurma('C').then(alunos =>{
            nomes = nomes.concat(alunos.map(a=>`C: ${a.nome}`))
            console.log(nomes)
        })
    })
})*/

Promise.all([getTurma('A'), getTurma('B'),getTurma('C')])
    .then(turmas =>[].concat(...turmas))
    .then(alunos => alunos.map(aluno=>aluno.nome))
    .then(nomes=>console.log(nomes))
    .catch(e=>console.log(e.message))    

getTurma('D').catch(e=>console.log(e.message))