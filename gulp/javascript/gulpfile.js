const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default',()=>{
    return gulp.src('src/**/*.js')
        //torna o codigo mais compativel com qlr browser
        .pipe(babel({ 
            minified:true, //tambem minifica o codigo
            comments: false,
            presets:["env"]
        }))
        //.pipe(uglify())//minifica o codigo
        //O uglify() não entende algumas novas funcionalidades do javascript
        // .on('error', function (err){console.log(err)})
        .pipe(concat('codigo.min.js'))//coloca tudo dentro do arquivo codigo.min.js
        .pipe(gulp.dest('build'))//diretorio destino
})