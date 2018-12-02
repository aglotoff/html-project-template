Page Generation
===============

All Pug files that will directly create HTML pages should be placed into the
`src/pug/pages` directory.

The data is passed to Pug from external JSON files. The global data for all
pages (e.g. website name) is defined in the `src/pug/data/globals.json` file.
You can also provide data for a particular page by creating a JSON file with a
name matching the corresponding page, e.g.:

```
pug/
|-- data/
|   |-- pages/
|   |   |-- index.json  # data for the home page
|   |   |-- about.json  # data for the about page
|   |   `-- ...
|   `-- globals.json    # global data
`-- pages/
    |-- index.pug       # template for the home page
    |-- about.pug       # template for the about page
    `-- ...
```

The data from both JSON files will be merged into a single object accessible
inside the templates through the global `data` variable.

**NOTE:** for the watch task to work properly, do not omit the `.pug` file
extensions in your `include` or `extends` statements.
