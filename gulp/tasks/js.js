const browserSync = require('browser-sync');
const del         = require('del');
const gulp        = require('gulp');
const named       = require('vinyl-named');
const webpack     = require('webpack-stream');

const config      = require('../config');

// ----------------------------------------
//   Task: Build: JavaScript
// ----------------------------------------

gulp.task('build:js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(named())
        .pipe(webpack(config.plugins.webpack))
        .on('error', function() {
            this.emit('end');
        })
        .pipe(gulp.dest(config.paths.js.dest));
});

// ----------------------------------------
//   Task: Watch: JavaScript
// ----------------------------------------

gulp.task('watch:js', () => {
    watching = true;
    return gulp.src(config.paths.js.src)
        .pipe(named())
        .pipe(webpack({
            ...config.plugins.webpack,
            watch: true,
        }))
        .on('error', function() {
            this.emit('end');
        })
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(browserSync.reload({stream: true}));
});

// ----------------------------------------
//   Task: Clean: JavaScript
// ----------------------------------------

gulp.task('clean:js', () => {
    return del(config.paths.js.clean);
});
