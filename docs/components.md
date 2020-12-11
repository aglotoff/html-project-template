Components Implementation
=========================

The user interface is divided into independent, reusable components which makes
development and maintenance faster and easier.

Implementation Technologies
---------------------------

Each component corresponds to a single directory inside the `src/components/`
folder containing separate files for each implementation technology:

* `component-name.pug` - contains the component's markup
* `component-name.scss` - contains the component's styles
* `component-name.js` - contains the component's behavior
* `index.js` - entry point to simplify import of `component-name.js` 

If one of your components doesn't use a particular technology, simply don't provide
the corresponding file(s).

Components Generation
---------------------

Instead of creating implementation files manually, you can use a special
command-line utility:
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

Template Files
--------------

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
