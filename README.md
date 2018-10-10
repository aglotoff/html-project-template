frontend-template
=================
This is a starter template that I use for static web pages creation, PSD to
HTML/CSS conversion, etc.

Features
--------
* HTML
  * Markup generation with the Pug template engine
* CSS:
  * Linting with Stylelint
  * Sass preprocessor
  * Automatic vendor prefixes using autoprefixer
  * Minification and optimization using cssnano
* JavaScript:
  * Linting with ESLint
  * Transpiling to ES5 with Babel
* Image optimization
* SVG sprite icon system
* BEM code organization
* Development server with live reloading

Installation
------------
Install project dependencies:
```
npm install
```

Usage
-----
To start the development server, run:
```
npm start
```
The server reloads automatically when any source files are modified.

To build the site for production, run:
```
npm run build
```
The ready for deployment code will be placed into the `dist` folder.

To execute a specific gulp task, run:
```
npm run gulp -- [task]
```
See the following section for the list of available Gulp tasks.

To specify that you want production builds, pass the following option:
```
npm run gulp -- [task] --env=production
```

Available Gulp Tasks
--------------------
| Task                  | Description                                       |
| ----------------------| ------------------------------------------------- |
| ```default```         | Run development server and watch code for changes |
| ```serve```           | Run development server                            |
| ```build```           | Compile the entire project                        |
| ```build:css```       | Compile only CSS                                  |
| ```build:fonts```     | Copy fonts into the destination directory         |
| ```build:html```      | Compile only HTML                                 |
| ```build:icons```     | Build only icons                                  |
| ```build:img```       | Optimize images                                   |
| ```build:js```        | Compile only JavaScript                           |
| ```build:vendor-js``` | Compile only JavaScript libraries                 |
| ```lint```            | Check source files                                |
| ```lint:css```        | Check only CSS                                    |
| ```lint:js```         | Check only JavaScript                             |
| ```watch```           | Watch all source files for changes                |
| ```watch:css```       | Watch only for CSS changes                        |
| ```watch:fonts```     | Watch only for font changes                       |
| ```watch:html```      | Watch only for HTML changes                       |
| ```watch:icons```     | Watch only for icon changes                       |
| ```watch:img```       | Watch only for image changes                      |
| ```watch:js```        | Watch only for JavaScript changes                 |
| ```clean```           | Clean the entire destination folder               |
| ```clean:css```       | Clean only CSS                                    |
| ```clean:fonts```     | Clean only fonts                                  |
| ```clean:html```      | Clean only HTML                                   |
| ```clean:icons```     | Clean only icons                                  |
| ```clean:img```       | Clean only images                                 |
| ```clean:js```        | Clean only JavaScript                             |

File Organization
-----------------
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
|   |-- util/                 # helper functions
|   `-- main.js               # main script file
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
