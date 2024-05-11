# Monkey Wrench

Adds support for userscripts including:

- Syntax highlighting
- Completion
- Hover
- Snippets
- Signature help
- Definitions / Type definitions

By default, any working with any file with the `.user.js` extension will activate the extension, though this behavior can be customized in the settings.

## Features

### Syntax Highlighting

Metadata key and value highlighting, similar to JS Doc highlighting.

![Metadata syntax highlighting](./src/images/metadata.png "Metadata syntax highlighting")
<span class="caption">*Metadata*</span>

![GM_addstyle CSS syntax highlighting](./src/images/GM_addstyle.png "GM_addstyle CSS syntax highlighting")
<span class="caption">*CSS in `GM_addstyle`*</span>

### Completion

Every metadata key accounted for, as well as every GM_* / GM.* function.

![Metadata completion](./src/images/completion-meta.gif "Metadata completion")
<span class="caption">*Metadata*</span>

![Code completion](./src/images/completion-code.gif "Code completion")
<span class="caption">*Code*</span>

### Hover

Full hover documentation and support for both metadata and functions.

![Code hover](./src/images/hover.png "Code hover")

### Snippets

Typing `userscript` will suggest a snippet to generate a userscript template. You can adjust the default values settings. Any metadata key that has an enumerated value associated with it will suggest those when typing.

![Snippets](./src/images/snippets.gif)

## Signature Help

Every GM_* / GM.* function fully supported.

## Definitions / Type Definitions

Full typescript definitions included when right clicking a function or metadata key.

## Release Notes

Please refer to the [CHANGELOG](./CHANGELOG.md).

## To Do
- Add images to documentation.
- Add more examples to documentation.
- Update signature help provider to better determine which overload is in use for those functions that have overloads.
- Add additional metadata defaults to user settings for the template snippet.

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
