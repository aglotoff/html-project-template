Project's Structure
===================

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
    |-- /components             # component implementations
        |-- /common
        |-- /templates          # templates for generating components
        |-- ...
    |-- /data                   # data for page generation
    |-- /layouts                # layout templates
    |-- /pages                  # page templates
|-- /scripts                    # utility scripts
|-- gulpfile.js                 # the Gulpfile
```
