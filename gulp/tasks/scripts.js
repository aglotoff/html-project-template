import browserSync from 'browser-sync';
import del from 'del';
import gulp from 'gulp';
import named from 'vinyl-named';
import webpack from 'webpack-stream';

import config from '../config';

const scriptsTasks = (watch) =>
  gulp
    .src(config.paths.scripts.src)
    .pipe(named())
    .pipe(webpack({ ...config.plugins.webpack, watch }))
    .on('error', function handleScriptsError(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe(gulp.dest(config.paths.scripts.dest));

export const scripts = () => scriptsTasks(false);

export const watchScripts = () =>
  scriptsTasks(true).pipe(browserSync.reload({ stream: true }));

export const cleanScripts = () => del(config.paths.scripts.clean);
