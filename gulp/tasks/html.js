'use strict';

import browserSync from 'browser-sync';
import clean from 'gulp-clean';
import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

gulp.task('build:html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(plumber())
        .pipe(pug(config.plugins.pug))
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:html', ['build:html'], () => {
    return gulp.watch(config.paths.html.all, ['build:html']);
});

gulp.task('clean:html', () => {
    return gulp.src(config.paths.html.dest)
        .pipe(clean());
});
