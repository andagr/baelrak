var gulp = require('gulp');
var del = require('del');

gulp.task('default', ['clean', 'build']);

gulp.task('clean', () => {
    return del([
        'static/**/*'
    ]);
});

gulp.task('build', () => {
    gulp.src('app/**/*')
        .pipe(gulp.dest('static'))
})
