const fs             = require('fs');
const path           = require('path');

const browserSync    = require('browser-sync');
const del            = require('del');
const gulp           = require('gulp');
const data           = require('gulp-data');
const filter         = require('gulp-filter');
const htmlBeautify   = require('gulp-html-beautify');
const plumber        = require('gulp-plumber');
const pug            = require('gulp-pug');
const pugInheritance = require('gulp-pug-inheritance');
const tap            = require('gulp-tap');
const watch          = require('gulp-watch');
const lazypipe       = require('lazypipe');

const config         = require('../config');

const htmlTasks = lazypipe()
    .pipe(data, (file) => {
        // pass JSON data to pug
        const globalData = JSON.parse(
            fs.readFileSync(config.paths.html.globalData)
        );
        const dataFile = path.join(
            config.paths.html.pageData,
            file.relative.replace(/.pug$/, '.json')
        );
        return {
            data: fs.existsSync(dataFile)
                ? {...globalData, ...JSON.parse(fs.readFileSync(dataFile))}
                : globalData
        };
    })
    .pipe(pug, config.plugins.pug)
    .pipe(htmlBeautify)
    .pipe(gulp.dest, config.paths.html.dest)
    .pipe(browserSync.reload, {stream: true});

// ----------------------------------------
//   Task: Build: HTML
// ----------------------------------------

gulp.task('build:html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(plumber())
        .pipe(htmlTasks());
});

// ----------------------------------------
//   Task: Watch: HTML
// ----------------------------------------

gulp.task('watch:html', () => {
    return watch(config.paths.html.watch, (file) => {
        if (file.extname === '.pug') {
            // some pug files have changed, rebuild only dependent pages
            gulp.src(file.path)
                .pipe(plumber())
                .pipe(pugInheritance(config.plugins.pugInheritance))
                .pipe(tap((file) => {
                    // make all paths relative to the src/pug/pages subdirectory
                    file.base = config.paths.html.pages;
                }))
                .pipe(filter((file) => {
                    // exclude all files outside the src/pug/pages subdirectory,
                    // e.g. layout files
                    return !file.relative.startsWith('..');
                }))
                .pipe(htmlTasks());
        } else { // if (file.extname === '.json')
            const filePath = path.relative(config.paths.top, file.path);
            if (filePath === path.normalize(config.paths.html.globalData)) {
                // global data has changed, rebuild all pages
                gulp.start('build:html');
            } else {
                // page data has changed, rebuild only the corresponding page
                const pageFile = path.join(
                    config.paths.html.pages,
                    path
                        .relative(config.paths.html.pageData, file.path)
                        .replace(/.json$/, '.pug')
                );

                gulp.src(pageFile)
                    .pipe(plumber())
                    .pipe(htmlTasks());
            }
        }
    });
});

// ----------------------------------------
//   Task: Clean: HTML
// ----------------------------------------

gulp.task('clean:html', () => {
    return del(config.paths.html.clean);
});
