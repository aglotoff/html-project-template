'use strict';

import browserSync from 'browser-sync';
import config from '../config';
import gulp from 'gulp';

gulp.task('serve', ['build'], () => {
    browserSync.init(config.plugins.browserSync);

    gulp.watch(config.paths.css.all,    ['css']);
    gulp.watch(config.paths.html.all,   ['html']);
    gulp.watch(config.paths.img.all,    ['img']);
    gulp.watch(config.paths.jsLibs.all, ['js-libs']);
    gulp.watch(config.paths.js.all,     ['js']);
});