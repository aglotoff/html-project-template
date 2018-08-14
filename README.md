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
  * Bundling with Browserify
  * Transpiling to ES5 with Babel
  * Code minification with UglifyJS
* Image minification
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
---------------
| Task                   | Description                                         |
| ---------------------- | --------------------------------------------------- |
| ```gulp```             | Run dev server and watch for changes (default task) |
| ```gulp serve```       | Run development server                              |
| ```gulp build```       | Compile the entire project                          |
| ```gulp build:css```   | Compile only CSS                                    |
| ```gulp build:fonts``` | Copy fonts into the destination directory           |
| ```gulp build:html```  | Compile only HTML                                   |
| ```gulp build:icons``` | Build only SVG sprite of cons                       |
| ```gulp build:img```   | Optimize images                                     |
| ```gulp build:js```    | Compile only JavaScript                             |
| ```gulp lint```        | Check source files                                  |
| ```gulp lint:css```    | Check only CSS                                      |
| ```gulp lint:js```     | Check only JavaScript                               |
| ```gulp watch```       | Watch the entire project for changes                |
| ```gulp watch:css```   | Watch only for CSS changes                          |
| ```gulp watch:fonts``` | Watch only for font changes                         |
| ```gulp watch:html```  | Watch only for HTML changes                         |
| ```gulp watch:icons``` | Watch only for icon changes                         |
| ```gulp watch:img```   | Watch only for image changes                        |
| ```gulp watch:js```    | Watch only for JavaScript changes                   |
| ```gulp clean```       | Clean the entire destination folder                 |
| ```gulp clean:css```   | Clean only CSS                                      |
| ```gulp clean:fonts``` | Clean only fonts                                    |
| ```gulp clean:html```  | Clean only HTML                                     |
| ```gulp clean:icons``` | Clean only SVG sprite of icons                      |
| ```gulp clean:img```   | Clean only images                                   |
| ```gulp clean:js```    | Clean only JavaScript                               |

File Organization
-----------------
```
dist/                   # destination directory
gulp/
  tasks/                # tasks implementations
    css.js
    ...
  config.js             # Gulp config
  options.js            # command-line options parser
src/
  blocks/               # blocks
    button/             # directory for a single block
      button.js         # block's behavior
      button.pug        # block's markup
      button.scss       # block's styles
    ...
  fonts/                # custom fonts
  img/                  # images
  js/
    main.js             # main script file (only imports)
  pug/
    pages/              # page templates
      index.pug
      ...
  sass/
    _mixins.scss        # project mixins
    _placeholders.scss  # project placeholders
    _reset.scss         # CSS reset
    _variables.scss     # project variables
    style.scss          # main stylesheet (only imports)
  icons/                # SVG icons for sprite generation
  templates/
    icon.mustache       # template for generating SVG icon classes
.babelrc                # Babel config
.eslintrc.dev.json      # ESLint config (development)
.eslintrc.json          # ESLint config (production)
.stylelintrc            # Stylelint config
gulpfile.js             # Gulpfile
```
