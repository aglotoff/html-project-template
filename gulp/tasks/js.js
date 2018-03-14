'use strict';

import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import browserify from 'gulp-browserify';
import config from '../config';
import del from 'del';
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

gulp.task('watch:js', ['build:js'], () => {
    return gulp.watch(config.paths.js.watch, ['build:js']);
});

gulp.task('clean:js', () => {
    return del(config.paths.js.clean);
});