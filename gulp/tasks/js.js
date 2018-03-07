'use strict';

const gulp        = require('gulp'),
      config      = require('../config'),
      plumber     = require('gulp-plumber'),
      browserify  = require('gulp-browserify'),
      babel       = require('gulp-babel'),
      browserSync = require('browser-sync');

gulp.task('js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(plumber())
        .pipe(browserify(config.plugins.browserify))
        .pipe(babel(config.plugins.babel))
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});