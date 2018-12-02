Blocks Implementation
=====================

This template project follows the 
[BEM web development methodology](https://en.bem.info/methodology/) invented at
Yandex. The user interface is divided into independent, reusable blocks which
makes development and maintenance faster and easier.

Implementation Technologies
---------------------------

Each block corresponds to a single directory inside the `src/blocks` folder
containing separate files for each implementation technology:

* a `.pug` file for the block's markup
* a `.scss` file for the block's styles
* a `.js` file for the block's behavior

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
* `-h, --html` - generate a `.pug` file for the block's markup
* `-c, --css` - generate a `.scss` file for the block's styles
* `-j, --js` - generate a `.js` file for the block's behavior
* `-a, --all` - all above (default)

For example, the following invocation:
```
npm run make-block header -- -hc
```
will produce the `.pug` and `.scss` files for the `header` block.

**NOTE:** if you want to pass any options, the double-dash (`--`) before them is
required.

You can also create multiple blocks at once and optionally place them into
subdirectories as follows:
```
npm run make-block common/header common/footer blog/archive blog/post
```
