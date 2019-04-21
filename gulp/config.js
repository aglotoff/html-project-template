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
const TOP = '.';
const SRC = `${TOP}/src`
const DIST = `${TOP}/dist`;

module.exports = {
    env,

    /*
     * Path information
     */
    paths: {
        top:  TOP,
        src:  SRC,
        dest: DIST,

        css: {
            src: [`${SRC}/sass/*.scss`, `!${SRC}/sass/_*.scss`],
            dest: `${DIST}/css`,
            lint: `${SRC}/**/*.scss`,
            watch: `${SRC}/**/*.scss`,
            clean: `${DIST}/css/**/*.css`,
        },
        deploy: {
            src: [`${DIST}/**`, `!${DIST}/**/*.map`],
            dest: `/htdocs/test`,
        },
        fonts: {
            src: `${SRC}/fonts/*.{ttf,woff,woff2}`,
            dest: `${DIST}/fonts`,
            watch: `${SRC}/fonts/*.{ttf,woff,woff2}`,
            clean: `${DIST}/fonts/*.{ttf,woff,woff2}`,
        },
        html: {
            src: `${SRC}/pug/pages/*.pug`,
            globalData: `${SRC}/pug/data/globals.json`,
            pageData: `${SRC}/pug/data/pages/**/*.json`,
            pageDataDir: `${SRC}/pug/data/pages`,
            pagesDir: `${SRC}/pug/pages/`,
            dest: `${DIST}`,
            watch: `${SRC}/**/*.pug`,
            clean: `${DIST}/**/*.html`,
        },
        icons: {
            src: `${SRC}/icons/*.svg`,
            dest: `${SRC}`,
            watch: `${SRC}/icons/*.svg`,
            clean: [`${SRC}/img/icons.svg`, `${SRC}/blocks/icon/icon.scss`],
        },
        img: {
            src: `${SRC}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            dest: `${DIST}/img`,
            watch: `${SRC}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
            clean: `${DIST}/img/*.{gif,jpg,jpeg,ico,png,svg}`,
        },
        js: {
            src: [`${SRC}/js/vendor.js`, `${SRC}/js/main.js`],
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
    },

    /*
     * Plugin options
     */
    plugins: {
        browserSync: {
            server: DIST
        },
        ftp: {
            host: 'host',
            user: 'user',
            password: 'password',
            parallel: 10,
        },
        imagemin: {
            svgo: {
                plugins: [
                    {removeXMLProcInst: false},
                    {cleanupIDs:false},
                    {removeAttrs: {attrs: '(fill|stroke|style)'}}
                ]
            },
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
							dest: '../blocks/common/icon/icon.scss',
							template: `${SRC}/templates/icon.mustache`,
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
        },
    },
};
