import browserSync from 'browser-sync';
import gulp from 'gulp';

import config from './gulp/config';

import { cleanStyles, styles, watchStyles } from './gulp/tasks/styles';
import { cleanHtml, html, watchHtml } from './gulp/tasks/html';
import { cleanIcons, icons, watchIcons } from './gulp/tasks/icons';
import { cleanImages, images, watchImages } from './gulp/tasks/images';
import { cleanScripts, scripts, watchScripts } from './gulp/tasks/scripts';
import { cleanStatic, staticAssets, watchStatic } from './gulp/tasks/static';

export const clean = gulp.parallel(
  cleanScripts,
  cleanStatic,
  cleanStyles,
  cleanHtml,
  cleanImages,
  cleanIcons
);

export const build = gulp.series(
  clean,
  gulp.parallel(gulp.series(icons, styles, images), staticAssets, html, scripts)
);

export const watch = () => {
  watchStyles();
  watchScripts();
  watchHtml();
  watchIcons();
  watchImages();
  watchStatic();
};

export const serve = () => browserSync.init(config.plugins.browserSync);

export default gulp.series(build, gulp.parallel(serve, watch));
