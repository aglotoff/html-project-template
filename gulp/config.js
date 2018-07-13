import {readFileSync} from 'fs';

import options from './options';

const SRC_PREFIX  = './src';
const DEST_PREFIX = './dest';

const config = {
    paths: {
        src:  SRC_PREFIX,
        dest: DEST_PREFIX,
        css: {
            src:   `${SRC_PREFIX}/sass/style.scss`,
            dest:  `${DEST_PREFIX}/css`,
            lint:  `${SRC_PREFIX}/**/*.scss`,
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
            src:   `${SRC_PREFIX}/img/**/*.{gif,jpg,png}`,
            dest:  `${DEST_PREFIX}/img`,
            watch: `${SRC_PREFIX}/img/**/*.{gif,jpg,png}`,
            clean: `${DEST_PREFIX}/img/*.{gif,jpg,png}`
        },
        js: {
            src:    `${SRC_PREFIX}/js/main.js`,
            bundle: 'main.js',
            dest:   `${DEST_PREFIX}/js`,
            lint:   `${SRC_PREFIX}/**/*.js`,
            watch:  `${SRC_PREFIX}/**/*.js`,
            clean:  `${DEST_PREFIX}/js/**/*.js`
        }
    },
    plugins: {
        babel: {
            presets: ['env', 'stage-0'],
            minified: (options.env === 'production')
        },
        browserSync: {
            server: DEST_PREFIX
        },
        browserify: {
            entries: [`${SRC_PREFIX}/js/main.js`],
            cache: {},
            packageCache: {},
            debug: (options.env !== 'production')
        },
        eslint: (options.env === 'production') ?
            JSON.parse(readFileSync('./.eslintrc.json')) :
            JSON.parse(readFileSync('./.eslintrc.dev.json')),
        pug: {
            pretty: true
        },
        sass: {
            outputStyle: (options.env === 'production') ?
                'compressed' :
                'expanded'
        },
        stylelint: {
            failAfterError: false,
            fix: true,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }
    }
};

export default config;