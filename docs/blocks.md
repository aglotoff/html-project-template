Blocks Implementation
=====================

This template project follows the 
[BEM web development methodology](https://en.bem.info/methodology/) invented at
Yandex. The user interface is divided into independent, reusable blocks which
makes development and maintenance faster and easier.

Implementation Technologies
---------------------------

Each block corresponds to a single directory inside the `src/blocks/` folder
containing separate files for each implementation technology:

* `block-name.pug` - contains the block's markup
* `block-name.scss` - contains the block's styles
* `block-name.js` - contains the block's behavior
* `index.js` - entry point to simplify import of `block-name.js` 

If one of your blocks doesn't use a particular technology, simply don't provide
the corresponding file(s).

Blocks Generation
-----------------

Instead of creating implementation files manually, you can use a special
command-line utility:
```
npm run make-block BLOCK... -- [OPTION]...
```

This command will create a directory for `BLOCK` as well as stub files for its
implementation. You can pass the following `OPTIONS`(s):
* `-p, --pug` - generate a `.pug` file for the block's markup
* `-s, --scss` - generate a `.scss` file for the block's styles
* `-j, --js` - generate a `.js` file for the block's behavior
* `-a, --all` - all above (default)
* `-c, --class` - if the `--js` option is provided, generate a class definition
  for the block

For example, the following invocation:
```
npm run make-block header -- -hc
```
will produce the `.pug` and `.scss` files for the `header` block.

**NOTE:** A double-dash (`--`) before the option list is required.

You can also create multiple blocks at once and optionally place them into
subdirectories as follows:
```
npm run make-block common/header common/footer blog/archive blog/post
```

Template Files
--------------

The following template files are used to generate blocks:

* `src/templates/block.pug.mustache` - Template for block's markup
* `src/templates/block.scss.mustache` - Template for block's styles
* `src/templates/block.js.mustcahe` - Template for block's JavaScript (if
  the `--class` option is not specified)
* `src/templates/block.class.js.mustcahe` - Template for block's JavaScript
  (if the `--class` option is specified)
* `src/templates/index.js.mustcahe` - JavaScript entry point for the block

You can edit them if you want.
