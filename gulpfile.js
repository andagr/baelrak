var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

function createBrowserify(plugins) {
    return browserify({
        entries: ['src/app/main.js'],
        cache: {},
        packageCache: {},
        plugin: plugins
    });
}

gulp.task('default', ['build']);

gulp.task('clean', () => {
    return del([
        'static/**/*'
    ]);
});

gulp.task('build', ['clean'], () => {
    createBrowserify([])
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('static'));

    return gulp.src('src/app/**/!(*.js)')
        .pipe(gulp.dest('static'))
});

gulp.task('watch', ['build'], () => {
    var b = createBrowserify([watchify]);
    b.on('update', bundle);
    bundle();
    function bundle() {
        b.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('static'));
    }
});
