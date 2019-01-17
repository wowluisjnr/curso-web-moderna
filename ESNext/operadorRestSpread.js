// usar spread com objeto
const funcionario ={nome:'Maria', salario:12345.45}
const clone = {ativo:true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro','Gloria']
const grupoFinal =['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)