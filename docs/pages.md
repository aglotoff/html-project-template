Page Generation
===============

All Pug files that will directly create HTML pages should be placed into the
`src/pug/pages` directory.

The data is passed to Pug from external JSON files. The global data for all
pages (e.g. website name) is defined in the `src/pug/data/globals.json` file.
You can provide data for a particular page by creating a file with a name
matching the page name, e.g. `src/pug/data/pages/blog.pug`. The data from both
files will be merged into a single object accessible through the global `data`
variable.

**NOTE:** for the watch task to work properly, do not omit the `.pug` file
extensions in your `include` or `extends` statements.
