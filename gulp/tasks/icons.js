const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprite');

const config = require('../config');

// ----------------------------------------
//   Task: Build: Icons
// ----------------------------------------

gulp.task('build:icons', () =>
  gulp
    .src(config.paths.icons.src)
    .pipe(plumber())
    .pipe(svgSprite(config.plugins.svgSprite))
    .pipe(gulp.dest(config.paths.icons.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
);

// ----------------------------------------
//   Task: Watch: Icons
// ----------------------------------------

gulp.task('watch:icons', () =>
  gulp.watch(config.paths.icons.watch, gulp.series('build:icons'))
);

// ----------------------------------------
//   Task: Clean: Icons
// ----------------------------------------

gulp.task('clean:icons', () => del(config.paths.icons.clean));
