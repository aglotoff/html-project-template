'use strict';

const gulp        = require('gulp'),
      config      = require('../config'),
      plumber     = require('gulp-plumber'),
      imagemin    = require('gulp-imagemin'),
      rename      = require('gulp-rename'),
      browserSync = require('browser-sync');

gulp.task('img', () => {
    return gulp.src(config.paths.img.src)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(rename({
            dirname: config.paths.img.rename
        }))
        .pipe(gulp.dest(config.paths.img.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});