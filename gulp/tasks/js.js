const browserSync = require('browser-sync');
const browserify = require('browserify');
const buffer= require('vinyl-buffer');
const del = require('del');
const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const source = require('vinyl-source-stream');

const config = require('../config');

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Lint: JavaScript
// ----------------------------------------

gulp.task('lint:js', () => {
    return gulp.src(config.paths.js.lint)
        .pipe(plugins.eslint(config.plugins.eslint))
        .pipe(plugins.eslint.format());
});

// ----------------------------------------
//   Task: Build: JavaScript
// ----------------------------------------

gulp.task('build:js', ['lint:js'], () => {
    return browserify(config.plugins.browserify)
        .bundle()
        .on('error', function(error) {
            console.error(error.toString());
            this.emit('end');
        })
        .pipe(plugins.plumber())
        .pipe(source(config.paths.js.bundle))
        .pipe(buffer())
        .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(plugins.babel(config.plugins.babel))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(browserSync.reload({stream: true}));
});

// ----------------------------------------
//   Task: Watch: JavaScript
// ----------------------------------------

gulp.task('watch:js', () => {
    return plugins.watch(config.paths.js.watch, () => {
        gulp.start('build:js');
    });
});

// ----------------------------------------
//   Task: Clean: JavaScript
// ----------------------------------------

gulp.task('clean:js', () => {
    return del(config.paths.js.clean);
});