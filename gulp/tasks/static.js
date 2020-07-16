const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const changed = require('gulp-changed');

const config = require('../config');

// ----------------------------------------
//   Task: Build: Static Assets
// ----------------------------------------

gulp.task('build:static', () => gulp.src(config.paths.static.src)
    .pipe(changed(config.paths.static.dest))
    .pipe(gulp.dest(config.paths.static.dest))
    .pipe(browserSync.reload({
        stream: true,
    })));

// ----------------------------------------
//   Task: Watch: Static Assets
// ----------------------------------------

gulp.task('watch:static', () => gulp.watch(
    config.paths.static.watch,
    gulp.series('build:static'),
));

// ----------------------------------------
//   Task: Clean: Static Assets
// ----------------------------------------

gulp.task('clean:static', () => del(config.paths.static.clean));
