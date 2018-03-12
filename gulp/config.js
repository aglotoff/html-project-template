'use strict';

const SRC_PREFIX  = './src';
const DEST_PREFIX = './build';

import options from './options';

const config = {
    paths: {
        src:  SRC_PREFIX,
        dest: DEST_PREFIX,
        css: {
            src:   `${SRC_PREFIX}/sass/style.scss`,
            dest:  `${DEST_PREFIX}/css`,
            watch: `${SRC_PREFIX}/**/*.scss`,
            clean: `${DEST_PREFIX}/css/**/*.css`
        },
        html: {
            src:   `${SRC_PREFIX}/pug/pages/**/*.pug`,
            dest:  `${DEST_PREFIX}`,
            watch: `${SRC_PREFIX}/pug/**/*.pug`,
            clean: `${DEST_PREFIX}/**/*.html`
        },
        img: {
            src:   `${SRC_PREFIX}/**/img/*.{gif,jpg,png}`,
            dest:  `${DEST_PREFIX}/img`,
            watch: `${SRC_PREFIX}/**/img/*.{gif,jpg,png}`,
            clean: `${DEST_PREFIX}/img/*.{gif,jpg,png}`
        },
        js: {
            src:    `${SRC_PREFIX}/js/main.js`,
            bundle: 'main.js',
            dest:   `${DEST_PREFIX}/js`,
            watch:  `${SRC_PREFIX}/**/*.js`,
            clean:  `${DEST_PREFIX}/js/**/*.js`
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

export default config;