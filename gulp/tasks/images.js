import browserSync from 'browser-sync';
import del from 'del';
import es from 'event-stream';
import gulp from 'gulp';
import clone from 'gulp-clone';
import filter from 'gulp-filter';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import webp from 'gulp-webp';
import mozjpeg from 'imagemin-mozjpeg';

import config from '../config';

export const images = () => {
  const allImages = gulp
    .src(config.paths.images.src, { since: gulp.lastRun(images) })
    .pipe(plumber())
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.optipng({ optimizationLevel: 7 }),
        imagemin.svgo(config.plugins.imagemin.svgo),
        mozjpeg({ progressive: true }),
      ])
    );

  const webpImages = allImages
    .pipe(clone())
    .pipe(filter(config.paths.images.webp))
    .pipe(webp());

  return es
    .merge(allImages, webpImages)
    .pipe(gulp.dest(config.paths.images.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
};

export const watchImages = () => gulp.watch(config.paths.images.watch, images);

export const cleanImages = () => del(config.paths.images.clean);
