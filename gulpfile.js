const gulp = require ('gulp');
const autoprefixer = require ('gulp-autoprefixer');
const sass = require ('gulp-sass');


function css(){
    return gulp
    .src('scss/app.scss')
    .pipe(autoprefixer({
        overrideBrowserslist : ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass({
        outputStyle:'expanded', //nested, compact, compressed
    }))
    .pipe(gulp.dest('css'));
}

function watchFiles(){
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
}

gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));