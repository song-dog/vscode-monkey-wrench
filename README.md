# Monkey Wrench

Adds support for userscripts providing syntax highlighting, completion, hover, and code snippets.

By default, most features of Monkey Wrench activate only when the filename ends with `.user.js` to prevent polluting non userscript files. You can modify the extension settings to make Monkey Wrench work in other javascript files.

## Features

### Syntax Highlighting

![Metadata syntax highlighting](./src/images/metadata.png "Metadata syntax highlighting")
<span class="caption">*Metadata*</span>

![GM_addstyle CSS syntax highlighting](./src/images/GM_addstyle.png "GM_addstyle CSS syntax highlighting")
<span class="caption">*CSS in `GM_addstyle`*</span>

### Completion

![Metadata completion](./src/images/completion-meta.gif "Metadata completion")
<span class="caption">*Metadata*</span>

![Code completion](./src/images/completion-code.gif "Code completion")
<span class="caption">*Code*</span>

### Hover

![Code hover](./src/images/hover.png "Code hover")

### Code Snippets

Type `userscript` or `metadata` to generate a userscript template. You can modify the default values of some meta data keys in the extension settings.

![Code Snippets](./src/images/snippets.gif)

## Release Notes

Please refer to the [CHANGELOG](./CHANGELOG.md).

## License

![GNU GPLv3](https://img.shields.io/github/license/song-dog/monkey-wrench?style=for-the-badge)

<style>
  img {
    border-radius: 6px;
  }
  .caption {
    display: block;
    background: linear-gradient(180deg, transparent, #222);
    text-align: right;
    border-radius: 0 0 6px 6px;
    position: absolute;
    padding-inline: 1rem;
    min-height: 1.8rem;
    inset: auto 0 0 0;
  }
</style>
