const gulp = require('gulp')
const util = require('gulp-util')

const sequence = require('run-sequence')//só funciona se tiver o return em cada um dos metodos
//executa em sequencia
//no gulp 4 já existe uma funcionalidade que permite a execução de tarefas em sequencia

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default',()=>{
    //só executa se tiver uma flag chamada production gulp --production
    if(util.env.production){ 
        sequence('deps','app')
        // gulp.start('deps', 'app')
    }else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})