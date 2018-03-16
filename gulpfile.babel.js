// ****************************************
//
//   Gulpfile
//
// ****************************************
//
// Available tasks:
//   `gulp`
//   `gulp build`
//   `gulp build:css`
//   `gulp build:html`
//   `gulp build:img`
//   `gulp build:js`
//   `gulp watch`
//   `gulp watch:css`
//   `gulp watch:html`
//   `gulp watch:img`
//   `gulp watch:js`
//   `gulp clean`
//   `gulp clean:css`
//   `gulp clean:html`
//   `gulp clean:img`
//   `gulp clean:js`
//
// ****************************************

// ----------------------------------------
//   Modules
// ----------------------------------------
//
// browser-sync        : Keep multiple browsers & devices in sync
// browserify          : require('modules') in the browser
// del                 : Delete files and folders using globs
// gulp                : The streaming build system
// gulp-babel          : Use next generation JavaScript, today, with Babel
// gulp-imagemin       : Minify PNG, JPEG, GIF and SVG images with imagemin
// gulp-load-plugins   : Loads gulp plugins and attaches them to an object
// gulp-plumber        : Prevent pipe breaking caused by errors from plugins
// gulp-pug            : Gulp plugin for compiling Pug templates
// gulp-rename         : A gulp plugin to rename files easily
// gulp-sass           : Sass plugin for Gulp
// gulp-wait           : Insert a delay before calling the next function
// minimist            : Parse argument options
// require-dir         : Helper to require() directories
// vinyl-buffer        : Convert streaming vinyl files to use buffers
// vinyl-source-stream : Text streams at the start of gulp or vinyl pipelines
//
// ----------------------------------------

'use strict';

import browserSync from 'browser-sync';
import config from './gulp/config';
import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks', { recurse: true });

// ----------------------------------------
//   Task: Build
// ----------------------------------------

gulp.task('build', [
    'build:html',
    'build:css',
    'build:js',
    'build:img'
]);

// ----------------------------------------
//   Task: Watch
// ----------------------------------------

gulp.task('watch', [
    'watch:html',
    'watch:css',
    'watch:js',
    'watch:img'
]);

// ----------------------------------------
//   Task: Clean
// ----------------------------------------

gulp.task('clean', [
    'clean:html',
    'clean:css',
    'clean:js',
    'clean:img'
]);

// ----------------------------------------
//   Task: Default
// ----------------------------------------

gulp.task('default', ['watch'], () => {
    browserSync.init(config.plugins.browserSync);
});