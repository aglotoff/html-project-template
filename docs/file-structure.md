File Structure
==============

The project's file system tree looks as follows:

```
config/                       # configuration files
|-- gulp/
|   |-- tasks/                # task implementations
|   `-- config.js             # Gulp configuration variables
|-- .eslintrc.dev.json        # ESLint config (development mode)
|-- .eslintrc.json            # ESLint config (production mode)
|-- .jsbeautifyrc.json        # js-beautify config (used to reformat Pug output)
|-- .stylelintrc.json         # Stylelint config
|-- babel.config.json         # Babel config
|-- gulpfile.js               # the Gulpfile
`-- webpack.config.js         # Webpack config
dist/                         # destination directory (created automatically)
docs/                         # documentation
src/
|-- assets/
|   |-- icons/                # SVG images used to generate the icon sprite
|   |-- img/                  # images
|   |-- js/
|   |   |-- util/             # miscellaneous helper functions
|   |   `-- main.js           # main JavaScript entry point
|   |-- sass/
|   |   |-- _base.scss        # CSS reset & base styles
|   |   |-- _fonts.scss       # @font-face declarations
|   |   |-- _mixins.scss      # project mixins
|   |   |-- _variables.scss   # project variables
|   |   `-- style.scss        # main stylesheet (only imports)
|   `-- static/               # fonts and other assets to copy without touching
|-- blocks/                   # blocks
|   |-- templates/            # templates for generating blocks
|   |-- common/
|   |   |-- my-block/
|   |   |   |-- my-block.js   # block's behavior
|   |   |   |-- my-block.pug  # block's markup template
|   |   |   `-- my-block.scss # block's styles
|   |   `-- ...
|   `-- ...
|-- data/                     # data for markup generation
|   |-- globals.yml           # global data
|   `-- pages/                # page-specific data
|       |-- index.yml
|       `-- ...
|-- layouts/                  # layout templates
`-- pages/                    # page templates
    |-- index.pug
    `-- ...
scripts/                      # utility scripts
```
