const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');

const config = require('../config');

const plugins = loadPlugins();

const imgPipe = (src) => {
    return src
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin([
            plugins.imagemin.svgo(config.plugins.imagemin.svgo)
        ]))
        .pipe(gulp.dest(config.paths.img.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
};

// ----------------------------------------
//   Task: Build: Images
// ----------------------------------------

gulp.task('build:img', () => {
    return imgPipe(gulp.src(config.paths.img.src));
});

// ----------------------------------------
//   Task: Watch: Images
// ----------------------------------------

gulp.task('watch:img', () => {
    return imgPipe(plugins.watch(config.paths.img.watch));
});

// ----------------------------------------
//   Task: Clean: Images
// ----------------------------------------

gulp.task('clean:img', () => {
    return del(config.paths.img.clean);
});