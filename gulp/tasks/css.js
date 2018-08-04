const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');

const config = require('../config');

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Lint: CSS
// ----------------------------------------

gulp.task('lint:css', () => {
    return gulp.src(config.paths.css.lint)
        .pipe(plugins.stylelint(config.plugins.stylelint));
});

// ----------------------------------------
//   Task: Build: CSS
// ----------------------------------------

gulp.task('build:css', ['lint:css'], () => {
    return gulp.src(config.paths.css.src)
        .pipe(plugins.plumber())
        .pipe(plugins.wait(500))
        .pipe(plugins.sass.sync(config.plugins.sass))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(config.paths.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: CSS
// ----------------------------------------

gulp.task('watch:css', () => {
    return plugins.watch(config.paths.css.watch, () => {
        gulp.start('build:css');
    });
});

// ----------------------------------------
//   Task: Clean: CSS
// ----------------------------------------

gulp.task('clean:css', () => {
    return del(config.paths.css.clean);
});