'use strict';

import browserSync from 'browser-sync';
import clean from 'gulp-clean';
import config from '../config';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

gulp.task('build:img', () => {
    return gulp.src(config.paths.img.src)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(config.paths.img.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:img', ['build:img'], () => {
    return gulp.watch(config.paths.img.watch, ['build:img']);
});

gulp.task('clean:img', () => {
    return gulp.src(config.paths.img.clean)
        .pipe(clean());
});