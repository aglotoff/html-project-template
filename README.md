# HTML Project Template

This is a starter template for HTML projects. Its primary usage is to create
HTML pages that could be hosted statically or converted into CMS theme / web
application.

This project is based on [Gulp](https://gulpjs.com/) and uses
[Pug](https://pugjs.org/) as the template engine.

Features:

* Component-based development
* CSS transforming with Sass & PostCSS
* JavaScript bundling with Webpack & Babel
* Code linting with Stylelint & ESLint
* Source code minification and optimization
* Image compression and optimization
* Icon system with SVG sprites
* Live-reloading development server

Contents:

* [Getting Started](#getting-started)
* [Building for Production](#building-for-production)
* [Running Specific Gulp Tasks](#running-specific-gulp-tasks)
* [Using Version Control](#using-version-control)
* [File Structure](#file-structure)
* [Pages and Layouts](#pages-and-layouts)
* [Passing Data to Pages](#passing-data-to-pages)
* [Creating Components](#creating-components)
* [Customizing Component Templates](#customizing-component-templates)
* [SVG Sprite Icon System](#svg-sprite-icon-system)
* [License](#license)


## Getting Started

Clone the repository:

```
git clone https://github.com/aglotoff/html-project-template.git
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


## Building for Production

Before building the project, it's recommended to bump the version using the
special command-line utility. In particular, this helps to eliminate problems
with cached assets such as CSS or JS files.

```
npm run bump-version patch    # Increments the patch number
npm run bump-version minor    # Increments the minor version number
npm run bump-version major    # Increments the major version number
```

The following command will build the project. The ready for deployment code
will be placed into the `dist` folder.

```
npm run build
```


## Running Specific Gulp Tasks

To manually execute a specific gulp task, run:

```
npm run gulp [task]
```

You can pass the following option to specify that you want to run the task in 
production mode:

```
npm run gulp [task] -- --env=production
```

Running in production mode means that all CSS and JS files will be minimized and
optimized, and linters will complain about the use of some features such as
`console.log` or `alert` statements.


## Using Version Control

If you're planning to use a version control system for your project, you may
want first to delete the `.git` directory after cloning this template and then
initialize your own repo:

```
rm -rf .git
git init
```


## File Structure

The project's structure looks like this:

```
/
|-- /gulp
    |-- tasks/                  # Gulp tasks
    |-- config.js               # Gulp configs
|-- /scripts                    # utility scripts    
|-- /src
    |-- /components             # project components
        |-- /common
        |-- /templates          # templates for generating components
        |-- ...
    |-- /data                   # data for page generation
    |-- /icons                  # SVG icons for the sprite
    |-- /img                    # images
    |-- /js                     # JavaScript sources
    |-- /layouts                # layout templates
    |-- /pages                  # page templates
    |-- /sass                   # Sass sources
    |-- /static                 # assets to copy without touching, e.g. fonts
|-- gulpfile.babel.js           # the Gulpfile
|-- package.json
|-- ... misc config files           
```


## Pages and Layouts

All `.pug` files placed into the `src/pages` directory will generate HTML
pages.

You can create shared page layouts and place them inside the `src/layouts`
directory.

**NOTE:** for the watch task to work properly, do not omit the `.pug` file
extensions in your `include` or `extends` statements.


## Passing Data to Pages

The data is passed to Pug from external YAML files inside the `src/data`
directory.

```
/data
|-- globals.yml     # global data for all pages
|-- /pages
    |-- index.yml   # data only for the index page
    |-- about.yml   # data only for the about page
    |-- ...
```

The `globals.yml` file contains data for all pages (e.g. website name or menu
items). You can also provide data for specific pages by creating the 
corresponding YAML files in the `data/pages` subdirectory. In this case, the
data from both files will be merged into a single object, and page-specific
fields will override the ones from the `globals.yml` file.

You can access the data inside your `.pug` templates through the global `data`
variable:

```pug
h1= data.pageTitle
p= data.pageDescription
```

## Creating Components

The user interface is divided into independent, reusable components which makes
development and maintenance faster and easier.

Each component corresponds to a single directory inside the `src/components/`
folder containing separate files for each implementation technology:

```
/components
|-- /common
    |-- /my-component
        |-- my-component.pug    # markup template
        |-- my-component.scss   # styles
        |-- my-component.js     # scripts
        |-- index.js            # entry point to simplify JS imports
```

If components don't use a particular implementation technology, simply omit
the corresponding file(s).

To create a component, use the following command-line utility:

```
npm run make-component common/my-component
```

This command will create a directory for `my-component` inside the `common`
subfolder and generate stub files for the component's implementation.

You can also pass the following option(s):
* `-p, --pug` - generate a `.pug` file
* `-s, --scss` - generate a `.scss` file
* `-j, --js` - generate `.js` files
* `-a, --all` - all above (default)
* `-c, --class` - when used together with the `--js` option, generates a class
  definition for the component 

For example, the following invocation:

```
npm run make-component layout/header -- -ps
```

will produce the `.pug` and `.scss` files for the `header` component.

**NOTE:** A double-dash (`--`) is required before the option list.

You can also create multiple components at once:

```
npm run make-component layout/header layout/footer blog/archive blog/post
```

## Customizing Component Templates

The following template files are used to generate components:

```
/components
|-- /templates
    |-- component.pug.mustache
    |-- component.scss.mustache
    |-- component.js.mustcahe
    |-- component.class.js.mustcahe
    |-- index.js.mustcahe
```

You can edit them if you want.


## SVG Sprite Icon System

Place each SVG icon into the `src/assets/icons/` directory. The name of the
file becomes the name of the icon, e.g.:

```
/icons
|-- card.svg        # produces class="icon icon_card"
|-- search.svg      # produces class="icon icon_search"
```

During the build process, the following files will be generated:

* `src/components/common/icon/icon.scss` - styles for the icons
* `src/img/icons.svg` - SVG sprite containing all the icons

To use the sprite in your markup, include the `icon` component and pass the
name of the icon as a parameter. The second parameter is an optional title
used for accessibility purposes.

```pug
include /components/common/icon/icon.pug

+icon('card')
+icon('search', 'Open the search dialog')
```

If you want to customize generated CSS classes, edit the template file
`src/components/common/icon/icon.mustache`.


## License

[MIT License](LICENSE)
