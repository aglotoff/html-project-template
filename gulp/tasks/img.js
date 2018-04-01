import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import rename from 'gulp-rename';

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Build: Images
// ----------------------------------------

gulp.task('build:img', () => {
    return gulp.src(config.paths.img.src)
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin())
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(config.paths.img.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: Images
// ----------------------------------------

gulp.task('watch:img', ['build:img'], () => {
    return plugins.watch(config.paths.img.watch, () => {
        gulp.start('build:img');
    });
});

// ----------------------------------------
//   Task: Clean: Images
// ----------------------------------------

gulp.task('clean:img', () => {
    return del(config.paths.img.clean);
});