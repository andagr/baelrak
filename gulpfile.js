'use strict';

var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gwatch = require('gulp-watch');

function getBrowserify(plugins, debug) {
    return browserify({
        entries: ['src/app/main.js'],
        cache: {},
        packageCache: {},
        plugin: plugins,
        debug: debug
    });
}

function buildStatic() {
    return gulp.src('src/app/**/!(*.js)')
        .pipe(gulp.dest('static'))
}

gulp.task('default', ['build']);

gulp.task('clean', () => {
    return del([
        'static/**/*'
    ]);
});

gulp.task('build', ['clean'], () => {
    getBrowserify([], false)
        .bundle()
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('static'));

    return buildStatic();
});

gulp.task('build-static', () => {
    return buildStatic();
});

gulp.task('watch', ['clean'], () => {
    buildStatic();
    
    gulp.watch('src/app/**/!(*.js)', ['build-static'])
        .on('change', (event) => { gutil.log(`File ${event.path} was ${event.type}.`); });

    var b = getBrowserify([watchify], true);
    b.on('update', bundle);
    b.on('log', gutil.log);
    bundle();
    function bundle() {
        b.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static'));
    }
});
