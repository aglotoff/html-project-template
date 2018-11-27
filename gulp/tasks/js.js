const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const lazypipe = require('lazypipe');
const named = require('vinyl-named');
const webpack = require('webpack-stream');

const config = require('../config');

let watching = false;

const jsTasks = lazypipe()
    .pipe(plumber)
    .pipe(named)
    .pipe(() => webpack({
        ...config.plugins.webpack,
        watch: watching,
    }))
    .pipe(gulp.dest, config.paths.js.dest);

// ----------------------------------------
//   Task: Build: JavaScript
// ----------------------------------------

gulp.task('build:js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(jsTasks());
});

// ----------------------------------------
//   Task: Watch: JavaScript
// ----------------------------------------

gulp.task('watch:js', () => {
    watching = true;
    return gulp.src(config.paths.js.src)
        .pipe(jsTasks())
        .pipe(browserSync.reload({stream: true}));
});

// ----------------------------------------
//   Task: Clean: JavaScript
// ----------------------------------------

gulp.task('clean:js', () => {
    return del(config.paths.js.clean);
});
