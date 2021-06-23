HTML Boilerplate
================

This is a boilerplate for HTML projects. Its primary usage is to create HTML
pages that could be hosted statically or, for example, later converted into a
CMS theme.

This project is based on [Gulp](https://gulpjs.com/) and uses
[Pug](https://pugjs.org/) as the template engine.

Contents:

- [Features](#features)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Adding Pages](#adding-pages)
- [Adding Components](#adding-components)
- [SVG Sprite Icon System](#svg-sprite-icon-system)
- [Running Specific Gulp Tasks](#running-specific-gulp-tasks)
- [Using Version Control](#using-version-control)

Features
--------

* CSS transforming with Sass & PostCSS
* JavaScript bundling with Webpack & Babel
* Code linting with Stylelint & ESLint
* Source code minification and optimization
* Image compression and optimization
* Icon system with SVG sprites
* Live-reloading development server

Getting Started
---------------

Clone the repository:
```
git clone https://github.com/polarfawx/frontend-template.git
```

Install the dependencies:
```
npm install
```

To start the development server, run:
```
npm start
```

The server reloads automatically when any source files are modified.

To build for production, run:
```
npm run build
```

The ready for deployment code will be placed into the `dist` folder.

File Structure
--------------

The project's structure looks as follows:

```
/
|-- /config                     # configuration files
|-- /docs                       # project documentation
|-- /gulp
    |-- tasks/                  # task implementations
    |-- config.js               # Gulp configuration variables
|-- /src
    |-- /assets
        |-- /icons              # SVGs used to generate the icon sprite
        |-- /img                # images
        |-- /js                 # JavaScript sources
        |-- /sass               # Sass sources
        |-- /static             # assets to copy without touching, e.g. fonts
    |-- /components             # components implementation
        |-- /common
        |-- /templates          # templates for generating components
        |-- ...
    |-- /data                   # data for page generation
    |-- /layouts                # layout templates
    |-- /pages                  # page templates
|-- /scripts                    # utility scripts
|-- gulpfile.js                 # the Gulpfile
```

Adding Pages
------------

All Pug files that will directly create HTML pages should be placed into the
`src/pages` directory.

The data is passed to Pug from external JSON files. The global data for all
pages (e.g. website name) is defined in the `src/data/globals.yml` file. You
can also provide data for a particular page by creating a YAML file with a
name matching the corresponding page, e.g.:

```
data/
|-- pages/
|   |-- index.yml   # data for the home page
|   |-- about.yml   # data for the about page
|   `-- ...
`-- globals.yml     # global data
pages/
|-- index.pug       # template for the home page
|-- about.pug       # template for the about page
`-- ...
```

The data from both YAML files will be merged into a single object accessible
inside the templates through the global `data` variable.

**NOTE:** for the watch task to work properly, do not omit the `.pug` file
extensions in your `include` or `extends` statements.


Adding Components
-----------------

The user interface is divided into independent, reusable components which makes
development and maintenance faster and easier.

Each component corresponds to a single directory inside the `src/components/`
folder containing separate files for each implementation technology:

* `component-name.pug` - contains the component's markup
* `component-name.scss` - contains the component's styles
* `component-name.js` - contains the component's behavior
* `index.js` - entry point to simplify import of `component-name.js` 

If one of your components doesn't use a particular technology, simply don't provide
the corresponding file(s).

To create a component, use the following command-line utility:
```
npm run make-component COMPONENT... -- [OPTION]...
```

This command will create a directory for `COMPONENT` as well as stub files for
its implementation. You can pass the following `OPTIONS`(s):
* `-p, --pug` - generate a `.pug` file for the component's markup
* `-s, --scss` - generate a `.scss` file for the component's styles
* `-j, --js` - generate a `.js` file for the component's behavior
* `-a, --all` - all above (default)
* `-c, --class` - if the `--js` option is provided, generate a class definition
  for the component

For example, the following invocation:
```
npm run make-component header -- -hc
```
will produce the `.pug` and `.scss` files for the `header` component.

**NOTE:** A double-dash (`--`) before the option list is required.

You can also create multiple components at once and optionally place them into
subdirectories as follows:
```
npm run make-component common/header common/footer blog/archive blog/post
```

### Component templates

The following template files are used to generate components:

* `src/components/templates/component.pug.mustache` - Template for component
  markup
* `src/components/templates/component.scss.mustache` - Template for component
  styles
* `src/components/templates/component.js.mustcahe` - Template for component
  JavaScript code (if the `--class` option is not specified)
* `src/components/templates/component.class.js.mustcahe` - Template for
  component JavaScript code (if the `--class` option is specified)
* `src/components/templates/index.js.mustcahe` - JavaScript entry point for the
  component

You can edit them if you want.


SVG Sprite Icon System
----------------------

Every individual SVG icon is placed into the `src/assets/icons/` directory. The
name of the file becomes the name of the icon, e.g.:
```
src/assets/icons/
|-- card.svg        # class="icon icon_card"
`-- search.svg      # class="icon icon_search"
```

During the build process, the following files will be automatically generated:

* `src/components/common/icon/icon.scss` - styles for icon classes
* `src/assets/img/icons.svg` - the resulting sprite

To use the sprite in your markup, include the `icon` mixin from the
`src/components/common/icon/icon.pug` file and pass the icon's name to it as a
parameter:
```
+icon('card')
+icon('search')
```

The second optional parameter is an SVG title used for web accessibility
purposes:
```
+icon('card', 'View the shopping card')
+icon('search', 'Open the search dialog')
```

If you want to customize the generated CSS icon classes, edit the template file
`src/components/common/icon/icon.mustache`.


Running Specific Gulp Tasks
---------------------------

To execute a specific gulp task, run:
```
npm run gulp [task]
```
You can pass the following option to specify that you want to run the task in 
production mode:
```
npm run gulp [task] -- --env=production
```
Running in production mode means that all CSS and JS files will be minimized and
optimized, and linters will complain about the use of some featues such as
`console.log` or `alert` statements.

Using Version Control
---------------------

If you're planning to use a version control system for your project, you may
want first to delete the `.git` directory after cloning the template:
```
rm -rf .git
```
and then initialize your own repo.

License
-------
[MIT License](LICENSE)
