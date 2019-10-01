const browserSync = require('browser-sync');
const del = require('del');
const es = require('event-stream');
const gulp = require('gulp');
const changed = require('gulp-changed');
const clone = require('gulp-clone');
const filter = require('gulp-filter');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');
const mozjpeg = require('imagemin-mozjpeg');

const config = require('../config');

// ----------------------------------------
//   Task: Build: Images
// ----------------------------------------

gulp.task('build:img', () => {
    const images = gulp.src(config.paths.img.src)
        .pipe(changed(config.paths.img.dest))
        .pipe(plumber())
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 7}),
            imagemin.svgo(config.plugins.imagemin.svgo),
            mozjpeg({progressive: true}),
        ]));

    const webpImages = images.pipe(clone())
        .pipe(filter('**/*.{jpg,jpeg,png}'))
        .pipe(webp());

    return es.merge(images, webpImages)
        .pipe(gulp.dest(config.paths.img.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: Images
// ----------------------------------------

gulp.task('watch:img', () => {
    return gulp.watch(config.paths.img.watch, gulp.series('build:img'));
});

// ----------------------------------------
//   Task: Clean: Images
// ----------------------------------------

gulp.task('clean:img', () => {
    return del(config.paths.img.clean);
});
