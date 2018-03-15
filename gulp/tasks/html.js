'use strict';

import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

gulp.task('build:html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(plugins.plumber())
        .pipe(plugins.pug(config.plugins.pug))
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:html', ['build:html'], () => {
    return gulp.watch(config.paths.html.watch, ['build:html']);
});

gulp.task('clean:html', () => {
    return del(config.paths.html.clean);
});
