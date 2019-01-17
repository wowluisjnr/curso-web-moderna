//http://files.cod3r.com.br/curso-js/turmaA.json
//turmas A, B e C.
//Obter o conteudo dos 3 arquivos e extrair os nomes.
const http = require('http')  //podemos usar o axios. que já usamos em aulas anteriores

const getTurma =(letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res =>{
        let resultado =''
        res.on('data', dados =>{  //'data' a medida que os dados vão chegando
            resultado +=dados
        })

        res.on('end',()=>{ //'end' quando os dados terminarem de chegar
            callback(JSON.parse(resultado))
        })
    })
}

let nomes =[]
getTurma('A', alunos=>{
    nomes = nomes.concat(alunos.map(a=>`A: ${a.nome}`))
    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(a=>`B: ${a.nome}`))
        getTurma('C', alunos =>{
            nomes = nomes.concat(alunos.map(a=>`C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
