'use strict';

import browserSync from 'browser-sync';
import config from './gulp/config';
import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks', { recurse: true });

gulp.task('build', [
    'build:html',
    'build:css',
    'build:js',
    'build:img'
]);

gulp.task('watch', [
    'watch:html',
    'watch:css',
    'watch:js',
    'watch:img'
]);

gulp.task('clean', [
    'clean:html',
    'clean:css',
    'clean:js',
    'clean:img'
]);

gulp.task('default', ['watch'], () => {
    browserSync.init(config.plugins.browserSync);
});