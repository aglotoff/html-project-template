/* eslint-env node */

import fs from 'fs';
import minimist from 'minimist';

/**
 * Read in the environment flag
 */
const { env } = minimist(process.argv.slice(2), {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development',
  },
});

/**
 * Path prefixes
 */
const TOP = '.';
const SRC = `${TOP}/src`;
const DIST = `${TOP}/dist`;

export default {
  env,

  /*
   * Path information
   */
  paths: {
    top: TOP,
    src: SRC,
    dest: DIST,

    static: {
      src: `${SRC}/static/**/*`,
      dest: `${DIST}`,
      watch: `${SRC}/static/**/*`,
      clean: [
        `${DIST}/**/*`,
        `!${DIST}/**/*.html`,
        `!${DIST}/{css,img,js}/**/*`,
      ],
    },

    styles: {
      src: [`${SRC}/sass/*.scss`, `!${SRC}/sass/_*.scss`],
      dest: `${DIST}/css`,
      lint: `${SRC}/**/*.scss`,
      watch: `${SRC}/**/*.scss`,
      clean: `${DIST}/css/**/*.css{,.map}`,
    },

    html: {
      src: `${SRC}/pages/**/*.pug`,
      globalData: `${SRC}/data/globals.yml`,
      pageData: `${SRC}/data/pages/**/*.yml`,
      pageDataDir: `${SRC}/data/pages`,
      pagesDir: `${SRC}/pages/`,
      dest: `${DIST}`,
      watch: `${SRC}/**/*.pug`,
      clean: `${DIST}/**/*.html`,
    },

    icons: {
      src: `${SRC}/icons/*.svg`,
      dest: `${SRC}/`,
      watch: `${SRC}/icons/*.svg`,
      clean: [
        `${SRC}/img/icons.svg`,
        `${SRC}/components/common/icon/icon.scss`,
      ],
    },

    images: {
      src: `${SRC}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
      dest: `${DIST}/img`,
      watch: `${SRC}/img/**/*.{gif,jpg,jpeg,ico,png,svg}`,
      clean: `${DIST}/img/*.{gif,jpg,jpeg,ico,png,svg,webp}`,
      webp: '**/*.{jpg,jpeg,png}',
    },

    scripts: {
      src: `${SRC}/js/*.js`,
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
    cssnano: env === 'production',
  },

  /*
   * Plugin options
   */
  plugins: {
    browserSync: {
      server: DIST,
    },

    beautify: JSON.parse(fs.readFileSync(`${TOP}/.jsbeautifyrc.json`)),

    imagemin: {
      svgo: {
        plugins: [
          { removeXMLProcInst: false },
          { cleanupIDs: false },
          { removeAttrs: { attrs: '' } },
        ],
      },
    },

    pug: {
      basedir: `${SRC}`,
      pretty: true,
    },

    pugInheritance: {
      basedir: `${SRC}`,
      skip: 'node_modules',
    },

    sass: {
      includePaths: [`${SRC}`, `${TOP}/node_modules`],
      outputStyle: 'expanded',
    },

    svgSprite: {
      mode: {
        symbol: {
          sprite: '../img/icons.svg',
          render: {
            scss: {
              dest: '../components/common/icon/icon.scss',
              template: `${SRC}/components/common/icon/icon.mustache`,
            },
          },
        },
      },
    },

    stylelint: {
      failAfterError: false,
      fix: true,
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
      configFile: `${TOP}/.stylelintrc.json`,
    },

    // eslint-disable-next-line global-require
    webpack: require('../webpack.config')({ mode: env }),
  },
};
