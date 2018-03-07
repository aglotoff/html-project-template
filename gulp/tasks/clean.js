'use strict';

import config from '../config';
import del from 'del';
import gulp from 'gulp';

gulp.task('clean', () => {
    return del(config.paths.dest);
});