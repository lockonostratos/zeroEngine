var gulp = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    es = require('event-stream'),
    browserSync = require('browser-sync');

gulp.task('launch', function() {
    var called = false;
    return nodemon({
        "script": ".zero/build/app.js",
        "ext": "js html jade",
        "env": { "NODE_ENV": "development" } ,
        "ignore": ["./build/**"],
        "nodeArgs": ["--harmony"]})
    .on('change', ['bundle'])
});

gulp.task('clean', function(){
    return gulp.src(['.zero/build/public/scripts/*.js', '.zero/build/public/bundle/**'], {read: false})
        .pipe(clean())
});

gulp.task('startup', function(){
    return gulp.src(['require.config.js', 'application/main.js'])
        .pipe(concat('startup.js'))
        .pipe(gulp.dest('./.zero/build/public/bundle'));

        //.pipe(replace(/app.use\(serve\((').*(')\)\);/g, "app.use(serve('./public'));"))
        //.pipe(rename('app.dev.js'))
    //return es.concat(requireConfig, mainScript)
    //    .pipe(gulp.dest('./.zero/build/public/scripts'))
});

gulp.task('bundle', ['startup'], function(){
    return gulp.src('application/**').pipe(gulp.dest('.zero/build/public/bundle'))
});

gulp.task('default', ['bundle', 'launch']);