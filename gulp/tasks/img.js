'use strict';

import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import rename from 'gulp-rename';

const plugins = loadPlugins();

gulp.task('build:img', () => {
    return gulp.src(config.paths.img.src)
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin())
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(config.paths.img.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:img', ['build:img'], () => {
    return gulp.watch(config.paths.img.watch, ['build:img']);
});

gulp.task('clean:img', () => {
    return del(config.paths.img.clean);
});