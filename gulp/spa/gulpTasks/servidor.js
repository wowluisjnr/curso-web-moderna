const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', ()=>{
    //monitora os arquivos, e dispara a task ao modificar o arquivo
    watch('src/**/*.html', () => gulp.start('app.html')) 
    watch('src/**/*.css', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

//
gulp.task('servidor', ['monitorarMudancas'],()=>{
    return gulp.src('build').pipe(webserver({
        levereload: true, //fica dando reload na pagina
        port: 8080,
        open: true //ao startar o build abre uma pagina
    }))

})


