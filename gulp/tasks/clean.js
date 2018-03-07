'use strict';

const gulp   = require('gulp'),
      config = require('../config'),
      del    = require('del');

gulp.task('clean', () => {
    return del(config.paths.dest);
});