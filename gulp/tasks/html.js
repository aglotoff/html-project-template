const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const htmlBeautify = require('gulp-html-beautify');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const watch = require('gulp-watch');

const config = require('../config');

// ----------------------------------------
//   Task: Build: HTML
// ----------------------------------------

gulp.task('build:html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(plumber())
        .pipe(pug(config.plugins.pug))
        .pipe(htmlBeautify())
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: HTML
// ----------------------------------------

gulp.task('watch:html', () => {
    return watch(config.paths.html.watch, () => {
        gulp.start('build:html');
    });
});

// ----------------------------------------
//   Task: Clean: HTML
// ----------------------------------------

gulp.task('clean:html', () => {
    return del(config.paths.html.clean);
});
