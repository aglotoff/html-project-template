import browserSync from 'browser-sync';
import config from '../config';
import del from 'del';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

const plugins = loadPlugins();

// ----------------------------------------
//   Task: Build: Icons
// ----------------------------------------

gulp.task('build:icons', () => {
    return gulp.src(config.paths.icons.src)
        .pipe(plugins.plumber())
        .pipe(plugins.svgSprite(config.plugins.svgSprite))
        .pipe(gulp.dest(config.paths.icons.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: Icons
// ----------------------------------------

gulp.task('watch:icons', () => {
    return plugins.watch(config.paths.icons.watch, () => {
        gulp.start('build:icons');
    });
});

// ----------------------------------------
//   Task: Clean: Icons
// ----------------------------------------

gulp.task('clean:icons', () => {
    return del(config.paths.icons.clean);
});
