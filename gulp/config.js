const {readFileSync} = require('fs');

const minimist = require('minimist');

/**
 * Read in an environment flag
 */
const {env} = minimist(process.argv.slice(2), {
    string: 'env',
    default: { 
        env: process.env.NODE_ENV || 'development'
    }
});

const LIB_PREFIX = './node_modules';
const SRC_PREFIX  = './src';
const DEST_PREFIX = './dist';

const config = {
    /*
     * Path information
     */
    paths: {
        src:  SRC_PREFIX,
        dest: DEST_PREFIX,
        css: {
            src: [
                `${SRC_PREFIX}/sass/*.scss`,
                `!${SRC_PREFIX}/sass/_*.scss`,
            ],
            dest:   `${DEST_PREFIX}/css`,
            lint:   `${SRC_PREFIX}/**/*.scss`,
            watch:  `${SRC_PREFIX}/**/*.scss`,
            clean:  `${DEST_PREFIX}/css/**/*.css`
        },
        fonts: {
            src:   `${SRC_PREFIX}/fonts/*.{ttf,woff,woff2}`,
            dest:  `${DEST_PREFIX}/fonts`,
            watch: `${SRC_PREFIX}/fonts/*.{ttf,woff,woff2}`,
            clean: `${DEST_PREFIX}/fonts/*.{ttf,woff,woff2}`
        },
        html: {
            src: `${SRC_PREFIX}/pug/pages/*.pug`,
            globalData: `${SRC_PREFIX}/pug/data/globals.json`,
            pageData: `${SRC_PREFIX}/pug/data/pages`,
            dest: `${DEST_PREFIX}`,
            watch: [
                `${SRC_PREFIX}/**/*.pug`,
                `${SRC_PREFIX}/pug/data/**/*.json`,
            ],
            clean: `${DEST_PREFIX}/**/*.html`
        },
        icons: {
            src:   `${SRC_PREFIX}/icons/*.svg`,
            dest:  `${SRC_PREFIX}`,
            watch: `${SRC_PREFIX}/icons/*.svg`,
            clean: `${SRC_PREFIX}/{img/icons.svg,blocks/icon/icon.scss}`
        },
        img: {
            src:   `${SRC_PREFIX}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            dest:  `${DEST_PREFIX}/img`,
            watch: `${SRC_PREFIX}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            clean: `${DEST_PREFIX}/img/*.{gif,jpg,jpeg,ico,png,svg}`
        },
        js: {
            vendor: [
                `${LIB_PREFIX}/svg4everybody/dist/svg4everybody.min.js`,
                `${LIB_PREFIX}/jquery/dist/jquery.min.js`,
            ],
            src: [
                `${SRC_PREFIX}/blocks/**/*.js`,
                `${SRC_PREFIX}/js/main.js`,
            ],
            dest: `${DEST_PREFIX}/js`,
            lint: `${SRC_PREFIX}/**/*.js`,
            watch: `${SRC_PREFIX}/**/*.js`,
            clean: `${DEST_PREFIX}/js/**/*.js{,.map}`,
        },
    },

    /*
     * Toggle plugins on or off depending on environment build
     */
    run: {
        cssnano: env === 'production',
        uglify: env === 'production',
    },

    /*
     * Plugin options
     */
    plugins: {
        babel: {
            compact: false,
            presets: ['@babel/preset-env'],
        },
        browserSync: {
            server: DEST_PREFIX
        },
        eslint: (env === 'production') ?
            JSON.parse(readFileSync('./.eslintrc.json')) :
            JSON.parse(readFileSync('./.eslintrc.dev.json')),
        htmlBeautify: {
            unformatted: [
                'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'del',
                'dfn', 'em', 'i', 'ins', 'kbd', 'mark', 'q', 's', 'samp',
                'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var',
                'wbr',
            ],
        },
        imagemin: {
            svgo: {
                plugins: [
                    {removeXMLProcInst: false},
                    {cleanupIDs:false},
                    {removeAttrs:{attrs:'(fill|stroke|style)'}}
                ]
            },
        },
        sass: {
            outputStyle: 'expanded',
        },
        svgSprite: {
			mode: {
				symbol: {
					sprite: '../img/icons.svg',
					render: {
						scss: {
							dest:'../blocks/icon/icon.scss',
							template: `${SRC_PREFIX}/templates/icon.mustache`
						}
					}
				}
			}
		},
        stylelint: {
            failAfterError: false,
            fix: true,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        },
    }
};

module.exports = config;
