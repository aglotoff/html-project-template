const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const named = require('vinyl-named');
const webpack = require('webpack-stream');

const config = require('../config');

// ----------------------------------------
//   Task: Build: JavaScript
// ----------------------------------------

gulp.task('build:js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(plumber())
        .pipe(named())
        .pipe(webpack(config.plugins.webpack))
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(browserSync.reload({stream: true}));
});

// ----------------------------------------
//   Task: Watch: JavaScript
// ----------------------------------------

gulp.task('watch:js', () => {
    return watch(config.paths.js.watch, () => {
        gulp.start('build:js');
    });
});

// ----------------------------------------
//   Task: Clean: JavaScript
// ----------------------------------------

gulp.task('clean:js', () => {
    return del(config.paths.js.clean);
});
