var gulp = require('gulp');
var del = require('del');

gulp.task('default', ['build']);

gulp.task('clean', () => {
    return del([
        'static/**/*'
    ]);
});

gulp.task('build', ['clean'], () => {
    gulp.src('app/**/*')
        .pipe(gulp.dest('static'))
})
