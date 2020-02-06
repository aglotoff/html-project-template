File Structure
==============

The project's file system tree looks as follows:

```
config/                       # project configuration
|-- gulp/
|   |-- tasks                 # task implementations
|   `-- config.js             # Gulp configuration variables
|-- .eslintrc.dev.json        # ESLint config (development mode)
|-- .eslintrc.json            # ESLint config (production mode)
|-- .jsbeautifyrc.json        # js-beautify config (use to reformat Pug output)
|-- .stylelintrc.json         # Stylelint config
|-- babel.config.json         # Babel config
|-- gulpfile.js               # the Gulpfile
`-- webpack.config.js         # Webpack config
dist/                         # destination directory (created automatically)
docs/                         # documentation directory
src/
|-- assets/                   # fonts and other assets to copy without touching
|-- blocks/                   # blocks
|   |-- templates/            # templates for generating blocks
|   |-- common/
|   |   |-- my-block/
|   |   |   |-- my-block.js   # block's behavior
|   |   |   |-- my-block.pug  # block's markup template
|   |   |   `-- my-block.scss # block's styles
|   |   `-- ...
|   `-- ...
|-- icons/                    # SVG icons for sprite generation
|-- img/                      # directory for images
|-- js/
|   |-- util/                 # helper scripts
|   `-- main.js               # main JavaScript file
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
`-- sass/
    |-- _base.scss            # CSS reset & base styles
    |-- _fonts.scss           # @font-face declarations
    |-- _mixins.scss          # project mixins
    |-- _variables.scss       # project variables
    `-- style.scss            # main stylesheet (only imports)
scripts/                      # utility scripts
```
