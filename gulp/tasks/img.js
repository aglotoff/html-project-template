import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

const imgPipe = (src) => {
    return src
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin())
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

gulp.task('watch:img', ['build:img'], () => {
    return imgPipe(plugins.watch(config.paths.img.watch));
});

// ----------------------------------------
//   Task: Clean: Images
// ----------------------------------------

gulp.task('clean:img', () => {
    return del(config.paths.img.clean);
});