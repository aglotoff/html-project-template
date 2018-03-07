'use strict';

import browserSync from 'browser-sync';
import config from '../config';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

gulp.task('js-libs', () => {
    return gulp.src(config.paths.jsLibs.src)
        .pipe(plumber())
        .pipe(gulp.dest(config.paths.jsLibs.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});