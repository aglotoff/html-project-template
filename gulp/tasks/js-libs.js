'use strict';

let gulp        = require('gulp'),
    config      = require('../config'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('js-libs', function() {
    return gulp.src(config.paths.jsLibs.src)
        .pipe(plumber())
        .pipe(gulp.dest(config.paths.jsLibs.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});