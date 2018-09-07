const babelify = require('babelify');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const buffer= require('vinyl-buffer');
const concat = require('gulp-concat');
const del = require('del');
const gulp = require('gulp');
const merge = require('merge-stream');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const source = require('vinyl-source-stream');

const config = require('../config');
const options = require('../options');

// ----------------------------------------
//   Task: Lint: JavaScript
// ----------------------------------------

gulp.task('lint:js', () => {
    return gulp.src(config.paths.js.lint)
        .pipe(eslint(config.plugins.eslint))
        .pipe(eslint.format());
});

// ----------------------------------------
//   Task: Build: JavaScript
// ----------------------------------------

gulp.task('build:js', ['lint:js'], () => {
    const b = browserify(config.plugins.browserify)
        .transform(babelify, config.plugins.babelify);

    const vendorStream = gulp.src(config.paths.js.vendor)
        .pipe(concat(config.paths.js.vendorBundle))

    const srcStream = b.bundle()
        .on('error', function(error) {
            console.error(error.toString());
            this.emit('end');
        })
        .pipe(plumber())
        .pipe(source(config.paths.js.bundle))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpIf(options.env === 'production', uglify()))
        .pipe(sourcemaps.write('.'))

    return merge(vendorStream, srcStream)
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(browserSync.reload({stream: true}));
});

// ----------------------------------------
//   Task: Watch: JavaScript
// ----------------------------------------

gulp.task('watch:js', () => {
    return watch(config.paths.js.watch, () => {
        gulp.start('build:js');
    });
});

// ----------------------------------------
//   Task: Clean: JavaScript
// ----------------------------------------

gulp.task('clean:js', () => {
    return del(config.paths.js.clean);
});
