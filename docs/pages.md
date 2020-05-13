Page Generation
===============

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
