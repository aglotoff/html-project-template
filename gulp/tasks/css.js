'use strict';

import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import clean from 'gulp-clean';
import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import wait from 'gulp-wait';

gulp.task('build:css', () => {
    return gulp.src(config.paths.css.src)
        .pipe(plumber())
        .pipe(wait(500))
        .pipe(sass.sync(config.plugins.sass))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.paths.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:css', ['build:css'], () => {
    return gulp.watch(config.paths.css.all, ['build:css']);
});


gulp.task('clean:css', () => {
    return gulp.src(config.paths.css.dest)
        .pipe(clean());
});