import fs from 'fs';
import path from 'path';

import browserSync from 'browser-sync';
import del from 'del';
import gulp from 'gulp';
import data from 'gulp-data';
import filter from 'gulp-filter';
import beautify from 'gulp-beautify';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import pugInheritance from 'gulp-pug-inheritance';
import tap from 'gulp-tap';
import lazypipe from 'lazypipe';
import YAML from 'yaml';

import config from '../config';

const htmlTasks = lazypipe()
  .pipe(data, (file) => {
    // pass YAML data to pug
    const globalData = YAML.parse(
      fs.readFileSync(config.paths.html.globalData).toString()
    );
    const dataFile = path.join(
      config.paths.html.pageDataDir,
      file.relative.replace(/.pug$/, '.yml')
    );
    return {
      data: fs.existsSync(dataFile)
        ? {
            ...globalData,
            ...YAML.parse(fs.readFileSync(dataFile).toString()),
          }
        : globalData,
    };
  })
  .pipe(pug, config.plugins.pug)
  .pipe(beautify.html, config.plugins.beautify)
  .pipe(gulp.dest, config.paths.html.dest)
  .pipe(browserSync.reload, { stream: true });

export const html = (cb) =>
  gulp
    .src(config.paths.html.src)
    .pipe(plumber())
    .pipe(htmlTasks())
    .on('end', cb);

export const watchPages = () =>
  gulp.watch(config.paths.html.watch).on('all', (e, filePath) => {
    if (e !== 'add' && e !== 'change') {
      return;
    }

    // Rebuild only changed .pug files and their dependents
    gulp
      .src(filePath)
      .pipe(plumber())
      .pipe(pugInheritance(config.plugins.pugInheritance))
      .pipe(
        tap((file) => {
          // make all paths relative to the src/pug/pages folder
          // eslint-disable-next-line no-param-reassign
          file.base = config.paths.html.pagesDir;
        })
      )
      // exclude all files outside the src/pug/pages folder,
      // e.g. layout files
      .pipe(filter((file) => !file.relative.startsWith('..')))
      .pipe(htmlTasks());
  });

export const watchGlobalData = () =>
  gulp.watch(config.paths.html.globalData, html);

export const watchPageData = () =>
  gulp.watch(config.paths.html.pageData).on('all', (e, filePath) => {
    if (e !== 'add' && e !== 'change') {
      return;
    }

    // Rebuild only the page whose data has changed
    const pageFile = path.join(
      config.paths.html.pagesDir,
      path
        .relative(config.paths.html.pageDataDir, filePath)
        .replace(/.yml$/, '.pug')
    );

    gulp
      .src(pageFile, {
        allowEmpty: true,
        base: config.paths.html.pagesDir,
      })
      .pipe(plumber())
      .pipe(htmlTasks());
  });

export const watchHtml = () => {
  watchGlobalData();
  watchPageData();
  watchPages();
};

export const cleanHtml = () => del(config.paths.html.clean);
