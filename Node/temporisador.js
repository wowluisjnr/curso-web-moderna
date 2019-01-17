const schedule =require('node-schedule')

//qualquer minuto/5em5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 3', function(){
    console.log('Executanto trarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 10000)

//setImediate
//setInterval


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range(1,5)] // de segunda a sexta
regra.hour = 13
regra.second = 5

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executanto trarefa 2', new Date().getSeconds())
})
