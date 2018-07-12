frontend-template
=================
My Frontend Project Template

Features
--------
* Pug template engine
* Sass preprocesor
* Image optimization
* JavaScript bundling with Browserify
* ES6 transpiling
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
| Task                  | Description                                     |
| --------------------- | ----------------------------------------------- |
| ```gulp```            | Run server and watch for changes (default task) |
| ```gulp serve```      | Run development server                          |
| ```gulp build```      | Compile the entire project                      |
| ```gulp build:css```  | Compile only CSS                                |
| ```gulp build:html``` | Compile only HTML                               |
| ```gulp build:img```  | Optimize images                                 |
| ```gulp build:js```   | Compile only JavaScript                         |
| ```gulp lint```       | Check source files                              |
| ```gulp lint:css```   | Check only CSS                                  |
| ```gulp lint:js```    | Check only JavaScript                           |
| ```gulp watch```      | Watch the entire project for changes            |
| ```gulp watch:css```  | Watch only for CSS changes                      |
| ```gulp watch:html``` | Watch only for HTML changes                     |
| ```gulp watch:img```  | Watch only for image changes                    |
| ```gulp watch:js```   | Watch only for JavaScript changes               |
| ```gulp clean```      | Clean the entire destination folder             |
| ```gulp clean:css```  | Clean only CSS                                  |
| ```gulp clean:html``` | Clean only HTML                                 |
| ```gulp clean:img```  | Clean only images                               |
| ```gulp clean:js```   | Clean only JavaScript                           |

File Structure
--------------
```
dest/                   # destination directory
  css/
  js/
  index.html
  ...
gulp/
  tasks/                # tasks implementations
  config.js             # Gulp config
  options.js            # command-line options parser
src/
  blocks/               # BEM blocks
    button/             # directory for a single BEM block
      img/              # images for this block
      button.js         # behavior for this block
      button.scss       # style for this block
    ...
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
.babelrc                # Babel config
.eslintrc.dev.json      # ESLint config (development)
.eslintrc.json          # ESLint config (production)
.stylelintrc            # Stylelint config
gulpfile.babel.js       # Gulpfile
```
