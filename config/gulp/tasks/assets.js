const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const changed = require('gulp-changed');

const config = require('../config');

// ----------------------------------------
//   Task: Build: Assets
// ----------------------------------------

gulp.task('build:assets', () => {
    return gulp.src(config.paths.assets.src)
        .pipe(changed(config.paths.assets.dest))
        .pipe(gulp.dest(config.paths.assets.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: Assets
// ----------------------------------------

gulp.task('watch:assets', () => {
    return gulp.watch(config.paths.assets.watch, gulp.series('build:assets'));
});

// ----------------------------------------
//   Task: Clean: Assets
// ----------------------------------------

gulp.task('clean:assets', () => {
    return del(config.paths.assets.clean);
});
