SVG Sprite Icon System
======================

Every individual SVG icon is placed into the `src/icons/` directory. The name of
the file becomes the name of the icon, e.g.:
```
src/icons/
|-- card.svg        # class="icon icon_card"
`-- search.svg      # class="icon icon_search"
```

During the build process, the following files will be automatically generated:

* `src/blocks/common/icon/icon.scss` - styles for icon classes
* `src/img/icons.svg` - the resulting sprite

To use the sprite in your markup, include the `icon` mixin from the
`src/blocks/common/icon/icon.pug` file and pass the icon's name to it as a
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
`src/templates/icon.mustache`.
