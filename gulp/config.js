const {readFileSync} = require('fs');

const webpack = require('webpack');

const options = require('./options');

const SRC_PREFIX  = './src';
const DEST_PREFIX = './dist';

const config = {
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
            src:   `${SRC_PREFIX}/pug/pages/**/*.pug`,
            dest:  `${DEST_PREFIX}`,
            watch: `${SRC_PREFIX}/pug/**/*.pug`,
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
            src: `${SRC_PREFIX}/js/main.js`,
            dest: `${DEST_PREFIX}/js`,
            lint: `${SRC_PREFIX}/{blocks,js}/**/*.js`,
            watch: `${SRC_PREFIX}/**/*.js`,
            clean: `${DEST_PREFIX}/js/**/*.js{,.map}`,
        },
    },
    plugins: {
        browserSync: {
            server: DEST_PREFIX
        },
        eslint: (options.env === 'production') ?
            JSON.parse(readFileSync('./.eslintrc.json')) :
            JSON.parse(readFileSync('./.eslintrc.dev.json')),
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
        webpack: {
            output: {
                filename: '[name].js',
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }],
            },
            mode: (options.env === 'production')
                ? 'production'
                : 'development',
            devtool: 'source-map',
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendor',
                            chunks: 'initial',
                        },
                    },
                },
            },
        },
    }
};

module.exports = config;
