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
// autoprefixer         : Parse CSS and add vendor prefixes to CSS rules
// babel-core           : Babel compiler core
// babel-preset-env     : A Babel preset for each environment
// babel-preset-stage-0 : Babel preset for stage 0 plugins
// babelify             : Babel browserify transform
// browser-sync         : Keep multiple browsers & devices in sync
// browserify           : require('modules') in the browser
// cssnano              : A modular minifier, built on top of PostCSS
// del                  : Delete files and folders using globs
// gulp                 : The streaming build system
// gulp-concat          : Concatenates files
// gulp-eslint          : A gulp plugin for ESLint
// gulp-html-beautify   : A gulp plugin to beautify HTML files
// gulp-if              : Conditionally run a task
// gulp-imagemin        : Minify PNG, JPEG, GIF and SVG images with imagemin
// gulp-plumber         : Prevent pipe breaking caused by errors from plugins
// gulp-postcss         : PostCSS gulp plugin
// gulp-pug             : Gulp plugin for compiling Pug templates
// gulp-sass            : Sass plugin for Gulp
// gulp-sourcemaps      : Write inline source maps
// gulp-stylelint       : Run stylelint results through a list of reporters
// gulp-svg-sprite      : Create SVG sprites
// gulp-uglify          : Minify files with UglifyJS
// gulp-wait            : Insert a delay before calling the next function
// gulp-watch           : File watcher
// imagemin-mozjpeg     : Imagemin plugin for mozjpeg
// merge-stream         : Merge (interleave) a bunch of streams
// minimist             : Parse argument options
// require-dir          : Helper to require() directories
// stylelint            : A mighty, modern CSS linter
// stylelint-scss       : A collection of SCSS specific rules for stylelint
// vinyl-buffer         : Convert streaming vinyl files to use buffers
// vinyl-source-stream  : Text streams at the start of gulp or vinyl pipelines
//
// ----------------------------------------

const browserSync = require('browser-sync');
const gulp = require('gulp');
const requireDir = require('require-dir');

const config = require('./gulp/config');

requireDir('./gulp/tasks', {recurse: true});

// ----------------------------------------
//   Task: Build
// ----------------------------------------

gulp.task('build', [
    'build:css',
    'build:fonts',
    'build:html',
    'build:icons',
    'build:img',
    'build:js',
]);

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

gulp.task('serve', ['build'], () => {
    browserSync.init(config.plugins.browserSync);
});

// ----------------------------------------
//   Task: Default
// ----------------------------------------

gulp.task('default', ['serve', 'watch']);
