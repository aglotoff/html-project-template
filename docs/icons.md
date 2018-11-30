SVG Sprite Icon System
======================

Every individual SVG icon is placed into the `src/icons` directory. The name of
the file becomes the name of the icon, e.g.:
```
icon/
|-- card.svg        # class="icon icon_card"
`-- search.svg      # class="icon icon_search"
```

During the build process, the following files are automatically generated:

* `src/blocks/icon/icon.scss` - styles for icon classes
* `src/img/icons.svg` - the resulting sprite

To use the sprite in your markup, include the `icon` mixin from the
`src/blocks/icon/icon.pug` file and pass the icon's name to it as a parameter:
```
+icon('card')
+icon('search')
```
