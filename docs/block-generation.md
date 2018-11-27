Block Generation
================

Instead of manually generating blocks, you can use a command-line utility:
```
npm run make-block BLOCK... -- [OPTION]...
```

This will create a directory for `BLOCK` as well as stub files for its
implementation. You can pass the following `OPTIONS`(s):
* `-h, --html` - generate a `.pug` file for the block's markup
* `-c, --css` - generate a `.scss` file for the block's styles
* `-j, --js` - generate a `.js` file for the block's behavior
* `-a, --all` - all above (default)

For example, the following command:
```
npm run make-block header -- -hc
```
will generate the following files inside the `src/blocks` directory:
```
blocks/
`-- header/
    |-- header.pug
    `-- header.scss
```

You can create multiple blocks at once and optionally organize them into
subdirectories, e.g:
```
npm run make-block common/header common/footer blog/archive blog/post
```
