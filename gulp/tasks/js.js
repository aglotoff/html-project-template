const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack-stream');

const config = require('../config');
const webpackConfig = require('../../webpack.config')({mode: config.env});

// ----------------------------------------
//   Task: Build: JavaScript
// ----------------------------------------

gulp.task('build:js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(gulp.dest(config.paths.js.dest));
});

// ----------------------------------------
//   Task: Watch: JavaScript
// ----------------------------------------

gulp.task('watch:js', () => {
    return gulp.src(config.paths.js.src)
        .pipe(named())
        .pipe(webpack({...webpackConfig, watch: true}))
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
