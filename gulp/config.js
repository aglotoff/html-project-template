'use strict';

const SRC_PREFIX  = './src';
const DEST_PREFIX = './build';

const options = require('./options');

module.exports = {
    paths: {
        src:  SRC_PREFIX,
        dest: DEST_PREFIX,
        css: {
            all:  SRC_PREFIX + '/**/*.scss',
            src:  SRC_PREFIX + '/sass/style.scss',
            dest: DEST_PREFIX + '/css'
        },
        html: {
            all:  SRC_PREFIX + '/pug/**/*.pug',
            src:  SRC_PREFIX + '/pug/*.pug',
            dest: DEST_PREFIX
        },
        img: {
            all:    SRC_PREFIX + '/**/img/*.{gif,jpg,png}',
            src:    SRC_PREFIX + '/**/img/*.{gif,jpg,png}',
            rename: DEST_PREFIX + '/img',
            dest:   './'
        },
        js: {
            all:    [
                SRC_PREFIX + '/**/*.js',
                '!' + SRC_PREFIX + '/js/libs/*.js'
            ],
            src:    SRC_PREFIX + '/js/main.js',
            bundle: 'main.js',
            dest:   DEST_PREFIX + '/js'
        },
        jsLibs: {
            all:    SRC_PREFIX + '/js/libs/*.js',
            src:    SRC_PREFIX + '/js/libs/*.js',
            dest:   DEST_PREFIX + '/js'
        }
    },
    plugins: {
        babel: {
            presets: ['env'],
            minified: (options.env === 'production')
        },
        browserSync: {
            server: DEST_PREFIX
        },
        browserify: {
            debug: (options.env !== 'production')
        },
        pug: {
            pretty: (options.env !== 'production')
        },
        sass: {
            outputStyle: (options.env === 'production') ? 'compressed'
                                                        : 'expanded'
        }
    }
};