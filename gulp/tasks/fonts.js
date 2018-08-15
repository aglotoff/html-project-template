const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const watch = require('gulp-watch');

const config = require('../config');

// ----------------------------------------
//   Task: Build: Fonts
// ----------------------------------------

gulp.task('build:fonts', () => {
    return gulp.src(config.paths.fonts.src)
        .pipe(gulp.dest(config.paths.fonts.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: Fonts
// ----------------------------------------

gulp.task('watch:fonts', () => {
    return watch(config.paths.fonts.watch)
        .pipe(gulp.dest(config.paths.fonts.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Clean: Fonts
// ----------------------------------------

gulp.task('clean:fonts', () => {
    return del(config.paths.fonts.clean);
});
