'use strict';

const gulp        = require('gulp'),
      config      = require('../config'),
      plumber     = require('gulp-plumber'),
      pug         = require('gulp-pug'),
      browserSync = require('browser-sync');

gulp.task('html', function() {
    return gulp.src(config.paths.html.src)
        .pipe(plumber())
        .pipe(pug(config.plugins.pug))
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});