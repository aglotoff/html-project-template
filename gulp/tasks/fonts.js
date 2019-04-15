const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const changed = require('gulp-changed');

const config = require('../config');

// ----------------------------------------
//   Task: Build: Fonts
// ----------------------------------------

gulp.task('build:fonts', () => {
    return gulp.src(config.paths.fonts.src)
        .pipe(changed(config.paths.fonts.dest))
        .pipe(gulp.dest(config.paths.fonts.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: Fonts
// ----------------------------------------

gulp.task('watch:fonts', () => {
    return gulp.watch(config.paths.fonts.watch, gulp.series('watch:fonts'));
});

// ----------------------------------------
//   Task: Clean: Fonts
// ----------------------------------------

gulp.task('clean:fonts', () => {
    return del(config.paths.fonts.clean);
});
