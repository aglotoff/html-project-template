'use strict';

import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Build: JavaScript
// ----------------------------------------

gulp.task('build:js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(plugins.plumber())
        .pipe(plugins.browserify(config.plugins.browserify))
        .pipe(plugins.babel(config.plugins.babel))
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: JavaScript
// ----------------------------------------

gulp.task('watch:js', ['build:js'], () => {
    return gulp.watch(config.paths.js.watch, ['build:js']);
});

// ----------------------------------------
//   Task: Clean: JavaScript
// ----------------------------------------

gulp.task('clean:js', () => {
    return del(config.paths.js.clean);
});