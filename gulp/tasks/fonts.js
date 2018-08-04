const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');

const config = require('../config');

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Build: Fonts
// ----------------------------------------

gulp.task('build:fonts', () => {
    return gulp.src(config.paths.fonts.src)
        .pipe(gulp.dest(config.paths.fonts.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: Fonts
// ----------------------------------------

gulp.task('watch:fonts', () => {
    return plugins.watch(config.paths.fonts.watch)
        .pipe(gulp.dest(config.paths.fonts.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Clean: Fonts
// ----------------------------------------

gulp.task('clean:fonts', () => {
    return del(config.paths.fonts.clean);
});
