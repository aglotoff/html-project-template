const fs = require('fs');

const minimist = require('minimist');

/**
 * Read in an environment flag
 */
const { env } = minimist(process.argv.slice(2), {
    string: 'env',
    default: { 
        env: process.env.NODE_ENV || 'development'
    },
});

/**
 * Path prefixes
 */
const TOP = '.';
const SRC = `${TOP}/src`
const DIST = `${TOP}/dist`;
const CONFIG = `${TOP}/config`;

module.exports = {
    env,

    /*
     * Path information
     */
    paths: {
        top:  TOP,
        src:  SRC,
        dest: DIST,

        static: {
            src: `${SRC}/assets/static/**/*`,
            dest: `${DIST}/assets`,
            watch: `${SRC}/assets/static/**/*`,
            clean: [
                `${DIST}/assets/**/*`,
                `!${DIST}/assets/{css,img,js}/**/*`,
            ],
        },
        css: {
            src: [ `${SRC}/assets/sass/*.scss`, `!${SRC}/assets/sass/_*.scss` ],
            dest: `${DIST}/assets/css`,
            lint: `${SRC}/**/*.scss`,
            watch: `${SRC}/**/*.scss`,
            clean: `${DIST}/assets/css/**/*.css{,.map}`,
        },
        html: {
            src: `${SRC}/pages/*.pug`,
            globalData: `${SRC}/data/globals.yml`,
            pageData: `${SRC}/data/pages/**/*.yml`,
            pageDataDir: `${SRC}/data/pages`,
            pagesDir: `${SRC}/pages/`,
            dest: `${DIST}`,
            watch: `${SRC}/**/*.pug`,
            clean: `${DIST}/**/*.html`,
        },
        icons: {
            src: `${SRC}/assets/icons/*.svg`,
            dest: `${SRC}/assets/`,
            watch: `${SRC}/assets/icons/*.svg`,
            clean: [
                `${SRC}/assets/img/icons.svg`,
                `${SRC}/blocks/common/icon/icon.scss`
            ],
        },
        img: {
            src: `${SRC}/assets/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            dest: `${DIST}/assets/img`,
            watch: `${SRC}/assets/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            clean: `${DIST}/assets/img/*.{gif,jpg,jpeg,ico,png,svg,webp}`,
        },
        js: {
            src: `${SRC}/assets/js/*.js`,
            dest: `${DIST}/assets/js`,
            lint: `${SRC}/**/*.js`,
            watch: `${SRC}/**/*.js`,
            clean: `${DIST}/assets/js/**/*.js{,.map}`,
        },
    },

    /*
     * Toggle plugins on or off
     */
    run: {
        css: {
            cssnano: env === 'production',
        },
    },

    /*
     * Plugin options
     */
    plugins: {
        browserSync: {
            server: DIST
        },
        beautify: JSON.parse(fs.readFileSync(`${CONFIG}/.jsbeautifyrc.json`)),
        imagemin: {
            svgo: {
                plugins: [
                    { removeXMLProcInst: false },
                    { cleanupIDs: false },
                    { removeAttrs: { attrs: '' } }
                ]
            },
        },
        pug: {
            pretty: true,
        },
        pugInheritance: {
            basedir: `${SRC}/pug`,
            skip: 'node_modules',
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
							dest: '../../blocks/common/icon/icon.scss',
							template: `${SRC}/blocks/common/icon/icon.mustache`,
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
            }],
            configFile: `${CONFIG}/.stylelintrc.json`,
        },
    },
};
