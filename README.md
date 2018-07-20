frontend-template
=================
This is a starter template that I use for static web pages creation, PSD to
HTML/CSS conversion, etc.

Features
--------
* Pug template engine
* Sass preprocesor
* Image optimization
* JavaScript bundling with Browserify
* ES6 transpiling with Babel
* SVG sprite icon system
* CSS & JS liniting
* CSS & JS minification
* BEM code organization
* Watching for changes
* Live reloading with Browsersync

Installation
------------
1. Install Gulp CLI
   ```
   npm install --global gulp-cli
   ```
2. Install project dependencies:
   ```
   npm install
   ```

Usage
-----
To build the project and start the development server, run:
```
gulp
```

To execute a specific task, run:
```
gulp [task]
```

See the following section for the list of available Gulp tasks.

For production builds, you should pass the following option:
```
gulp --env=production
```

Available Tasks
---------------
| Task                   | Description                                     |
| ---------------------- | ----------------------------------------------- |
| ```gulp```             | Run server and watch for changes (default task) |
| ```gulp serve```       | Run development server                          |
| ```gulp build```       | Compile the entire project                      |
| ```gulp build:css```   | Compile only CSS                                |
| ```gulp build:fonts``` | Copy fonts into the destination directory       |
| ```gulp build:html```  | Compile only HTML                               |
| ```gulp build:icons``` | Build only SVG sprite of cons                   |
| ```gulp build:img```   | Optimize images                                 |
| ```gulp build:js```    | Compile only JavaScript                         |
| ```gulp lint```        | Check source files                              |
| ```gulp lint:css```    | Check only CSS                                  |
| ```gulp lint:js```     | Check only JavaScript                           |
| ```gulp watch```       | Watch the entire project for changes            |
| ```gulp watch:css```   | Watch only for CSS changes                      |
| ```gulp watch:fonts``` | Watch only for font changes                     |
| ```gulp watch:html```  | Watch only for HTML changes                     |
| ```gulp watch:icons``` | Watch only for icon changes                     |
| ```gulp watch:img```   | Watch only for image changes                    |
| ```gulp watch:js```    | Watch only for JavaScript changes               |
| ```gulp clean```       | Clean the entire destination folder             |
| ```gulp clean:css```   | Clean only CSS                                  |
| ```gulp clean:fonts``` | Clean only fonts                                |
| ```gulp clean:html```  | Clean only HTML                                 |
| ```gulp clean:icons``` | Clean only SVG sprite of icons                  |
| ```gulp clean:img```   | Clean only images                               |
| ```gulp clean:js```    | Clean only JavaScript                           |

File Structure
--------------
```
dist/                   # destination directory
gulp/
  tasks/                # tasks implementations
  config.js             # Gulp config
  options.js            # command-line options parser
src/
  blocks/               # BEM blocks
    button/             # directory for a single BEM block
      button.js         # behavior for this block
      button.scss       # style for this block
    ...
    icon/
      icon.scss         # auto-generated icon styles
    ...
  fonts/                # custom fonts
  img/                  # images
  js/
    main.js             # JS entry point (only imports)
  pug/
    pages/              # directory for pages
      index.pug         # single page template
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
gulpfile.babel.js       # Gulpfile
```
