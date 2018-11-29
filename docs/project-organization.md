Project Organization
====================

This template project follows the 
[BEM methodology](https://en.bem.info/methodology/) for web development
invented at Yandex. The user interface is divided into independent, reusable
**blocks** which makes development and maintenance faster and easier.

File Structure
--------------
The file structure looks as follows:

```
dist/                         # destination directory
gulp/
|-- tasks/                    # task implementations
`-- config.js                 # Gulp config
src/
|-- blocks/                   # blocks
|   |-- button/
|   |   |-- button.js         # block's behavior
|   |   |-- button.pug        # block's markup
|   |   `-- button.scss       # block's styles
|   `-- ...
|-- fonts/                    # web fonts
|-- icons/                    # SVG icons for sprite generation
|-- img/                      # images
|-- js/
|   |-- main.js               # main script file (only imports)
|   `-- vendor.js             # third-party libs (imports and initialization)
|-- pug/
|   |-- data/
|   |   |-- globals.json      # global data
|   |   `-- pages/            # page data
|   |       |-- index.json
|   |       `-- ...
|   `-- pages/                # page templates
|       |-- index.pug
|       `-- ...
|-- sass/
|   |-- _base.scss            # base styles
|   |-- _fonts.scss           # font-face declarations
|   |-- _mixins.scss          # project mixins
|   |-- _variables.scss       # project variables
|   `-- style.scss            # main stylesheet (only imports)
|-- templates/
|   |-- block.js.mustache     # template for auto-generated block behavior
|   |-- block.pug.mustache    # template for auto-generated block markup
|   |-- block.scss.mustcahe   # template for auto-generated block styles
|   `-- icon.mustache         # template for generating SVG icon classes
|-- utils/                    # command-line utilities
|-- .eslintrc.dev.json        # ESLint config (development)
|-- .eslintrc.json            # ESLint config (production)
|-- .stylelintrc              # Stylelint config
`-- gulpfile.js               # Gulpfile
```

Block Implementation
--------------------

Each block corresponds to a single directory inside the `src/blocks` folder
containing separate files for each implementation technology:

* a `.pug` file for the block's markup
* a `.scss` file for the block's styles
* a `.js` file for the block's behavior.

If one of your blocks doesn't use a particular technology, simply don't provide
the corresponding file(s).

You can use a command-line utility to speed up generating these files, see
[Block Generation](block-generation.md).

Fonts & Images
--------------

To use web fonts and images in your project, simply put them into corresponding
folders inside the `src` directory.

The font files in TTF, WOFF, and WOFF2 formats are copied from `src/fonts` to
`dest/fonts` during the build process. The corresponding `@font-face`
declarations should go into the `src/sass/_fonts.scss` file.

All images in GIF, JPEG, PNG, ICO, and SVG formats should be placed inside
`src/img`, possibly split into multiple subdirectories. During the build
process, they are optimized and then saved into `dest/img` preserving the
subdirectory structure.

Automatic generation of SVG icon sprite is supported.
