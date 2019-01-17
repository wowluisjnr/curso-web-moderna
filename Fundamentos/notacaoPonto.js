console.log(Math.ceil(6.1)) //aredonda pra cima
const obj1 ={}
obj1.nome='Bola'
//obj1['nome']= 'Bola2'   //notação não ponto, não recomendada
console.log(obj1.nome)

function Obj(nome){
    this.nome= nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

obj3.exec()
console.log(obj2.nome)
console.log(obj3.nome)