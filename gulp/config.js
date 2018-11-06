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

/**
 * Path prefixes
 */
const LIB = './node_modules';
const SRC  = './src';
const DIST = './dist';

const config = {
    /*
     * Path information
     */
    paths: {
        src:  SRC,
        dest: DIST,
        css: {
            src: [
                `${SRC}/sass/*.scss`,
                `!${SRC}/sass/_*.scss`,
            ],
            dest:   `${DIST}/css`,
            lint:   `${SRC}/**/*.scss`,
            watch:  `${SRC}/**/*.scss`,
            clean:  `${DIST}/css/**/*.css`
        },
        fonts: {
            src:   `${SRC}/fonts/*.{ttf,woff,woff2}`,
            dest:  `${DIST}/fonts`,
            watch: `${SRC}/fonts/*.{ttf,woff,woff2}`,
            clean: `${DIST}/fonts/*.{ttf,woff,woff2}`
        },
        html: {
            src: `${SRC}/pug/pages/*.pug`,
            globalData: `${SRC}/pug/data/globals.json`,
            pageData: `${SRC}/pug/data/pages`,
            dest: `${DIST}`,
            watch: [
                `${SRC}/**/*.pug`,
                `${SRC}/pug/data/**/*.json`,
            ],
            clean: `${DIST}/**/*.html`
        },
        icons: {
            src:   `${SRC}/icons/*.svg`,
            dest:  `${SRC}`,
            watch: `${SRC}/icons/*.svg`,
            clean: [
                `${SRC}/img/icons.svg`,
                `${SRC}/blocks/icon/icon.scss`,
            ]
        },
        img: {
            src:   `${SRC}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            dest:  `${DIST}/img`,
            watch: `${SRC}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            clean: `${DIST}/img/*.{gif,jpg,jpeg,ico,png,svg}`
        },
        js: {
            vendor: [
                `${LIB}/svg4everybody/dist/svg4everybody.min.js`,
                `${LIB}/jquery/dist/jquery.min.js`,
            ],
            src: [
                `${SRC}/blocks/**/*.js`,
                `${SRC}/js/main.js`,
            ],
            dest: `${DIST}/js`,
            lint: `${SRC}/**/*.js`,
            watch: `${SRC}/**/*.js`,
            clean: `${DIST}/js/**/*.js{,.map}`,
        },
    },

    /*
     * Toggle plugins on or off
     */
    run: {
        css: {
            cssnano: env === 'production',
        },
        js: {
            babel: true,
            uglify: env === 'production',
        },
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
            server: DIST
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
							template: `${SRC}/templates/icon.mustache`
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
