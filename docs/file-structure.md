File Structure
==============

The project's file system looks as follows:

```
dist/                         # destination directory
gulp/
|-- tasks/                    # task implementations
`-- config.js                 # Gulp configuration
src/
|-- blocks/                   # blocks
|   |-- my-block/
|   |   |-- my-block.js       # block's behavior
|   |   |-- my-block.pug      # block's markup template
|   |   `-- my-block.scss     # block's styles
|   `-- ...
|-- fonts/                    # directory for web fonts
|-- icons/                    # SVG icons for sprite generation
|-- img/                      # directory for images
|-- js/
|   |-- main.js               # main JavaScript file (only imports)
|   `-- vendor.js             # third-party JavaScript imports
|-- pug/
|   |-- data/                 # data for markup generation
|   |   |-- globals.json      # global data
|   |   `-- pages/            # page-specific data
|   |       |-- index.json
|   |       `-- ...
|   |-- layouts/              # layout templates
|   `-- pages/                # page templates
|       |-- index.pug
|       `-- ...
|-- sass/
|   |-- _base.scss            # CSS reset & base styles
|   |-- _fonts.scss           # @font-face declarations
|   |-- _mixins.scss          # project mixins
|   |-- _variables.scss       # project variables
|   `-- style.scss            # main stylesheet (only imports)
`-- templates/                # templates for auto-generated blocks
utils/                        # command-line utilities
.babelrc                      # Babel config
.eslintrc.dev.json            # ESLint config (for development mode)
.eslintrc.json                # ESLint config (for production mode)
.jsbeautifyrc                 # js-beautify config (use to reformat Pug output)
.stylelintrc.json             # Stylelint config
gulpfile.js                   # the Gulpfile
webpack.config.js             # Webpack config
```
