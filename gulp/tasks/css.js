'use strict';

const gulp         = require('gulp'),
      config       = require('../config'),
      plumber      = require('gulp-plumber'),
      wait         = require('gulp-wait'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync  = require('browser-sync');

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