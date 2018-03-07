'use strict';

import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import wait from 'gulp-wait';

gulp.task('css', () => {
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