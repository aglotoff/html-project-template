'use strict';

import browserSync from 'browser-sync';
import clean from 'gulp-clean';
import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

gulp.task('build:js-libs', () => {
    return gulp.src(config.paths.jsLibs.src)
        .pipe(plumber())
        .pipe(gulp.dest(config.paths.jsLibs.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:js-libs', ['build:js-libs'], () => {
    return gulp.watch(config.paths.jsLibs.all, ['build:js-libs']);
});