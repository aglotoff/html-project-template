import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

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

gulp.task('watch:fonts', ['build:fonts'], () => {
    return plugins.watch(config.paths.fonts.watch)
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
