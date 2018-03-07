'use strict';

import browserSync from 'browser-sync';
import config from '../config';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

gulp.task('img', () => {
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