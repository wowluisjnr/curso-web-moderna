//pega o parametro a partir da chamada no terminal
const anonimo = process.argv.indexOf('-a') !== -1 
//console.log(anonimo)
if(anonimo){
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome\n')
    process.stdin.on('data', data=>{
        const nome =data.toString().replace('\n','')

        process.stdout.write(` Fala ${nome} `)
        process.exit()
    })
}