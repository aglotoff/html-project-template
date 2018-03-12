'use strict';

import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import browserify from 'gulp-browserify';
import clean from 'gulp-clean';
import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

gulp.task('build:js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(plumber())
        .pipe(browserify(config.plugins.browserify))
        .pipe(babel(config.plugins.babel))
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('clean:js', () => {
    return gulp.src(config.paths.js.dest)
        .pipe(clean());
});

gulp.task('watch:js', ['build:js'], () => {
    return gulp.watch(config.paths.js.all, ['build:js']);
});