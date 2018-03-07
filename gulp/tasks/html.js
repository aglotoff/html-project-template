'use strict';

import browserSync from 'browser-sync';
import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

gulp.task('html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(plumber())
        .pipe(pug(config.plugins.pug))
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});