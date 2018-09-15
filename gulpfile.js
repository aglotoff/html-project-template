// ****************************************
//
//   Gulpfile
//
// ****************************************
//
// Available tasks:
//   `gulp`
//   `gulp serve`
//   `gulp build`
//   `gulp build:css`
//   `gulp build:fonts`
//   `gulp build:html`
//   `gulp build:icons`
//   `gulp build:img`
//   `gulp build:js`
//   `gulp lint`
//   `gulp lint:css`
//   `gulp lint:js`
//   `gulp watch`
//   `gulp watch:css`
//   `gulp watch:fonts`
//   `gulp watch:html`
//   `gulp watch:icons`
//   `gulp watch:img`
//   `gulp watch:js`
//   `gulp clean`
//   `gulp clean:css`
//   `gulp clean:fonts`
//   `gulp clean:html`
//   `gulp clean:icons`
//   `gulp clean:img`
//   `gulp clean:js`
//
// ****************************************

// ----------------------------------------
//   Modules
// ----------------------------------------
//
// @babel/core        : Babel compiler core
// @babel/preset-env  : A Babel preset for each environment
// autoprefixer       : Parse CSS and add vendor prefixes to CSS rules
// babel-loader       : transpiling JavaScript files using Babel and webpack
// browser-sync       : Keep multiple browsers & devices in sync
// cssnano            : A modular minifier, built on top of PostCSS
// del                : Delete files and folders using globs
// gulp               : The streaming build system
// gulp-changed       : Only pass through changed files
// gulp-data          : Generate a data object for other plugins to consume
// gulp-eslint        : A gulp plugin for ESLint
// gulp-html-beautify : A gulp plugin to beautify HTML files
// gulp-imagemin      : Minify PNG, JPEG, GIF and SVG images with imagemin
// gulp-plumber       : Prevent pipe breaking caused by errors from plugins
// gulp-postcss       : PostCSS gulp plugin
// gulp-pug           : Gulp plugin for compiling Pug templates
// gulp-sass          : Sass plugin for Gulp
// gulp-sourcemaps    : Write inline source maps
// gulp-stylelint     : Run stylelint results through a list of reporters
// gulp-svg-sprite    : Create SVG sprites
// gulp-wait          : Insert a delay before calling the next function
// gulp-watch         : File watcher
// imagemin-mozjpeg   : Imagemin plugin for mozjpeg
// minimist           : Parse argument options
// require-dir        : Helper to require() directories
// run-sequence       : Runs a sequence of gulp tasks in the specified order
// stylelint          : A mighty, modern CSS linter
// stylelint-scss     : A collection of SCSS specific rules for stylelint
// webpack            : A module bundler
// webpack-stream     : Run webpack as a stream
//
// ----------------------------------------

const browserSync = require('browser-sync');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const requireDir = require('require-dir');

const config = require('./gulp/config');

requireDir('./gulp/tasks', {recurse: true});

// ----------------------------------------
//   Task: Build
// ----------------------------------------

gulp.task('build', (callback) => {
    runSequence(
        'build:icons',
        ['build:css', 'build:fonts', 'build:html', 'build:img', 'build:js'],
        callback
    );
});

// ----------------------------------------
//   Task: Lint
// ----------------------------------------

gulp.task('lint', [
    'lint:css',
    'lint:js'
]);

// ----------------------------------------
//   Task: Watch
// ----------------------------------------

gulp.task('watch', [
    'watch:css',
    'watch:fonts',
    'watch:html',
    'watch:icons',
    'watch:img',
    'watch:js',
]);

// ----------------------------------------
//   Task: Clean
// ----------------------------------------

gulp.task('clean', [
    'clean:css',
    'clean:fonts',
    'clean:html',
    'clean:icons',
    'clean:img',
    'clean:js',
]);

// ----------------------------------------
//   Task: Serve
// ----------------------------------------

gulp.task('serve', () => {
    browserSync.init(config.plugins.browserSync);
});

// ----------------------------------------
//   Task: Default
// ----------------------------------------

gulp.task('default', (callback) => {
    runSequence(
        'build',
        ['serve', 'watch'],
        callback
    );
});
