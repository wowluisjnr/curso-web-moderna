const gulp = require('gulp')

gulp.task('default', ()=>{ //task do gulp, padrão, que executara ao iniciar gulp
    //console.log('ok!')
    gulp.start('copiar', 'fim')//chama a task copiar e fim
})
//Antes de executar a task copiar executa antes1 e antes2
gulp.task('copiar', ['antes1', 'antes2'],()=>{ 
    //gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    gulp.src(['pastaA/*.txt'])
        // .pipe(transformacao1())
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))    

    //console.log('Copiar!!!!')
})

gulp.task('antes1',()=>{
    console.log('Antes 1!!!')
})

gulp.task('antes2',()=>{
    console.log('Antes 2!!!')
})

gulp.task('fim',()=>{
    console.log('FIM!!!')
})


//gulp <task> <othertask>