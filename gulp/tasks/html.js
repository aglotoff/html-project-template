const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');

const config = require('../config');

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Build: HTML
// ----------------------------------------

gulp.task('build:html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(plugins.plumber())
        .pipe(plugins.pug(config.plugins.pug))
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: HTML
// ----------------------------------------

gulp.task('watch:html', () => {
    return plugins.watch(config.paths.html.watch, () => {
        gulp.start('build:html');
    });
});

// ----------------------------------------
//   Task: Clean: HTML
// ----------------------------------------

gulp.task('clean:html', () => {
    return del(config.paths.html.clean);
});
