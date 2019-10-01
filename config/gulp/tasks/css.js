const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync');
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postCss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const stylelint = require('gulp-stylelint');
const wait = require('gulp-wait');

const config = require('../config');

// ----------------------------------------
//   Task: Lint: CSS
// ----------------------------------------

gulp.task('lint:css', () => {
    return gulp.src(config.paths.css.lint)
        .pipe(stylelint(config.plugins.stylelint));
});

// ----------------------------------------
//   Task: Build: CSS
// ----------------------------------------

gulp.task('build:css', () => {
    return gulp.src(config.paths.css.src)
        .pipe(plumber())
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass.sync(config.plugins.sass))
        .pipe(postCss(config.run.css.cssnano
            ? [autoprefixer, cssnano]
            : [autoprefixer]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: CSS
// ----------------------------------------

gulp.task('watch:css', () => {
    return gulp.watch(config.paths.css.watch, gulp.series(
        'lint:css',
        'build:css'
    ));
});

// ----------------------------------------
//   Task: Clean: CSS
// ----------------------------------------

gulp.task('clean:css', () => {
    return del(config.paths.css.clean);
});
