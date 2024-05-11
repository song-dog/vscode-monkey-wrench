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

![Metadata syntax highlighting](./images/highlight-metadata.png "Metadata syntax highlighting")
<span class="caption">*Metadata*</span>

![GM_addstyle CSS syntax highlighting](./images/highlight-css.png "GM_addstyle CSS syntax highlighting")
<span class="caption">*CSS in `GM_addstyle`*</span>

***

### Completion

Every metadata key accounted for, as well as every GM_* / GM.* function.

![Metadata completion](./images/completion-metadata.gif "Metadata completion")
<span class="caption">*Metadata*</span>

![GM functions completion](./images/completion-functions.png "GM functions completion")
<span class="caption">*GM functions*</span>

![GM functions completion](./images/completion-functions.gif "GM functions completion")
<span class="caption">*GM functions*</span>

***

### Hover

Full hover documentation and support for both metadata and functions.

![Metadata hover](./images/hover-metadata.png "Metadata hover")
<span class="caption">*Metadata*</span>

![Metadata hover](./images/hover-metadata-2.png "Metadata hover")
<span class="caption">*Metadata*</span>

![GM functions hover](./images/hover-functions.png "GM functions hover")
<span class="caption">*GM functions*</span>

![GM functions hover](./images/hover-functions-2.png "GM functions hover")
<span class="caption">*GM functions*</span>

***

### Snippets

Typing `userscript` will suggest a snippet to generate a userscript template. You can adjust the default values settings. Any metadata key that has an enumerated value associated with it will suggest those when typing.

![Userscript snippet](./images/snippet-userscript.gif "Userscript snippet")
<span class="caption">*Userscript snippet*</span>

***

### Signature Help

Every GM_* / GM.* function fully supported. Every metadata key also supported.

![GM functions signature help](./images/signature-help-functions.gif "GM functions signature help")
<span class="caption">*GM functions*</span>

![Metadata signature help](./images/signature-help-metadata.gif "Metadata signature help")
<span class="caption">*Metadata*</span>

***

### Definitions / Type Definitions

Full typescript definitions included when right clicking a function and selecting `Go to Type Definition`.

<video src="./videos/type-definitions.mp4" autoplay loop muted playsinline poster="./images/type-definitions.png"></video>

## Release Notes

Please refer to the [CHANGELOG](./CHANGELOG.md).

## To Do
- Add images to documentation.
- Add more examples to documentation.
- Update signature help provider to better determine which overload is in use for those functions that have overloads.
- Add additional metadata defaults to user settings for the template snippet.

## License

![GNU GPLv3](https://img.shields.io/github/license/song-dog/vscode-monkey-wrench?style=for-the-badge)

<style>
  img {
    border-radius: 6px;
    max-height: 400px;

    &[src$="gif"] {
      width: 100%;
    }
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
