Project Organization
====================

This template project follows the BEM methodology invented at Yandex. You can
read about it [here](https://en.bem.info/methodology/).

The file structure looks as follows:

```
dist/                         # destination directory
gulp/
|-- tasks/                    # task implementations
|   |-- css.js
|   `-- ...
`-- config.js                 # Gulp config
src/
|-- blocks/                   # blocks
|   |-- button/
|   |   |-- button.js         # block's behavior
|   |   |-- button.pug        # block's markup
|   |   `-- button.scss       # block's styles
|   `-- ...
|-- fonts/                    # web fonts
|   |-- foo.woff
|   `-- ...
|-- img/                      # images
|   |-- bar.jpg
|   `-- ...
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
|   |-- _mixins.scss          # project mixins
|   |-- _placeholders.scss    # project placeholders
|   |-- _reset.scss           # CSS reset
|   |-- _variables.scss       # project variables
|   `-- style.scss            # main stylesheet (only imports)
|--  icons/                   # SVG icons for sprite generation
|    |-- baz.svg
|    `-- ...
|--  templates/
|    `-- icon.mustache        # template for generating SVG icon classes
|-- .eslintrc.dev.json        # ESLint config (development)
|-- .eslintrc.json            # ESLint config (production)
|-- .stylelintrc              # Stylelint config
`-- gulpfile.js               # Gulpfile
```

Each block corresponds to a single directory inside `src/blocks` with the name
of the block that contains the files for implementing the block.

The main files (`src/js/main.js`, `src/sass/style.scss`) contain only import
statements for each block.