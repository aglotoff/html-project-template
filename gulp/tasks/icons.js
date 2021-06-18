import browserSync from 'browser-sync';
import del from 'del';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgSprite from 'gulp-svg-sprite';

import config from '../config';

export const icons = () =>
  gulp
    .src(config.paths.icons.src)
    .pipe(plumber())
    .pipe(svgSprite(config.plugins.svgSprite))
    .pipe(gulp.dest(config.paths.icons.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );

export const watchIcons = () => gulp.watch(config.paths.icons.watch, icons);

export const cleanIcons = () => del(config.paths.icons.clean);
