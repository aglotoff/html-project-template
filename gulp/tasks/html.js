const fs = require('fs');
const path = require('path');

const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const data = require('gulp-data');
const filter = require('gulp-filter');
const htmlBeautify = require('gulp-html-beautify');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const pugInheritance = require('gulp-pug-inheritance');
const tap = require('gulp-tap');
const lazypipe = require('lazypipe');

const config = require('../config');

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

gulp.task('build:html', (cb) => {
    gulp.src(config.paths.html.src)
        .pipe(plumber())
        .pipe(htmlTasks())
        .on('end', cb);
});

// ----------------------------------------
//   Task: Watch: HTML
// ----------------------------------------

gulp.task('watch:html', () => {
    return gulp.watch(config.paths.html.watch)
        .on('all', (e, filePath) => {
            if ((e !== 'add' && (e !== 'change'))) {
                return;
            }

            if (path.extname(filePath) === '.pug') {
                // some pug files have changed, rebuild only dependent pages
                gulp.src(filePath)
                    .pipe(plumber())
                    .pipe(pugInheritance(config.plugins.pugInheritance))
                    .pipe(tap((file) => {
                        // make all paths relative to src/pug/pages
                        file.base = config.paths.html.pages;
                    }))
                    .pipe(filter((file) => {
                        // exclude all files outside src/pug/pages,
                        // e.g. layout files
                        return !file.relative.startsWith('..');
                    }))
                    .pipe(htmlTasks());
            } else { // if (extname === '.json')
                const normPath = path.relative(config.paths.top, filePath);
                if (normPath === path.normalize(config.paths.html.globalData)) {
                    // global data has changed, rebuild all pages
                    
                    gulp.src(config.paths.html.src)
                        .pipe(plumber())
                        .pipe(htmlTasks())
                } else {
                    // page data has changed, build only the corresponding page
                    const pageFile = path.join(
                        config.paths.html.pages,
                        path
                            .relative(config.paths.html.pageData, filePath)
                            .replace(/.json$/, '.pug')
                    );

                    gulp.src(pageFile, {
                        allowEmpty: true,
                        base: config.paths.html.pages,
                    })
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
