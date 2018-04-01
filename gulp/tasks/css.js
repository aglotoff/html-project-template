import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Build: CSS
// ----------------------------------------

gulp.task('build:css', () => {
    return gulp.src(config.paths.css.src)
        .pipe(plugins.plumber())
        .pipe(plugins.wait(500))
        .pipe(plugins.sass.sync(config.plugins.sass))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(config.paths.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: CSS
// ----------------------------------------

gulp.task('watch:css', ['build:css'], () => {
    return plugins.watch(config.paths.css.watch, () => {
        gulp.start('build:css');
    });
});

// ----------------------------------------
//   Task: Clean: CSS
// ----------------------------------------

gulp.task('clean:css', () => {
    return del(config.paths.css.clean);
});