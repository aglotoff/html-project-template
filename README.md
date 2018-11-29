frontend-template
=================
This is a starter template that I use for static web pages creation, PSD to
HTML/CSS conversion, etc. It is under active development, so there is still
more to come in the future (:

Features
--------
* BEM code organizaton
* HTML Markup generation with Pug
* Sass & automatic vendor prefixes
* JavaScript bundling with Webpack & Babel
* Code linting with Stylelint & ESLint
* CSS & JS minification and optimization
* Image optimization
* SVG sprite icon system
* Development server with live reloading
* Automatic deployment over FTP

Documentation
-------------
Check out the [documentation (in progress)](/docs/README.md)!

Known Issues
------------
* Watching for changes currently doesn't work on Windows machines if your 
  project path contains non-ASCII characters. See
  [this issue](https://github.com/floatdrop/gulp-watch/issues/306) in the
  `gulp-watch` package.