import browserSync from 'browser-sync';
import del from 'del';
import gulp from 'gulp';

import config from '../config';

export const staticAssets = () =>
  gulp
    .src(config.paths.static.src)
    .pipe(gulp.dest(config.paths.static.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );

export const watchStatic = () =>
  gulp.watch(config.paths.static.watch, staticAssets);

export const cleanStatic = () => del(config.paths.static.clean);
