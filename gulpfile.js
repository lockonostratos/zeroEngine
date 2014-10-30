var gulp = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync');

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('logger', function(){
    gutil.log('stuff happened', 'Really it did', gutil.colors.red('123'));
});

gulp.task('launch', function() {
    var called = false;
    return nodemon({
        "script": "app.js",
        "ext": "js html jade",
        "env": { "NODE_ENV": "development" } ,
        "ignore": ["./build/**"],
        "nodeArgs": ["--harmony"]})
    .on('change', ['logger'])
    .on('restart', function() {
        gutil.log(gutil.colors.blue('zeroEngine is restarting..'));
        setTimeout(function reload() {
            browserSync.reload({
                stream: false   //
            });
        }, BROWSER_SYNC_RELOAD_DELAY);
    })
});

//
//gulp.task('launch', ['nodemon'], function () {
//    browserSync.init({
//    files: ['public/**/*.*'],
//        proxy: 'http://localhost:3000',
//        port: 4000,
//        browser: ['google chrome']
//    });
//});

gulp.task('default', ['launch']);