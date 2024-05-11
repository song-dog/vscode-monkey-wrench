var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.mjs
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode4 = __toESM(require("vscode"), 1);

// src/lib/items.mjs
var vscode2 = __toESM(require("vscode"), 1);

// src/lib/snippets.mjs
var vscode = __toESM(require("vscode"), 1);
var config = vscode.workspace.getConfiguration("monkey-wrench");
var metadataConfig = config.get("metadata");
var metadata = new vscode.SnippetString().appendText("// ==UserScript==").appendText("\n// @name         ").appendPlaceholder("Script name").appendText("\n// @namespace    ").appendPlaceholder(metadataConfig.namespace).appendText("\n// @version      ").appendPlaceholder("0.1").appendText("\n// @description  ").appendPlaceholder("A brief summary to describe the script").appendText("\n// @author       ").appendPlaceholder(metadataConfig.author).appendText("\n// @match        ").appendPlaceholder("*://*/*").appendText("\n// @icon         ").appendPlaceholder(metadataConfig.icon).appendText("\n// @grant        ").appendPlaceholder("none").appendText("\n// ==/UserScript==").appendText("\n").appendText("\n(function () {").appendText("\n	'use strict';").appendText("\n	").appendTabstop(0).appendText("\n})();");
var grantChoices = [
  "none",
  "unsafeWindow",
  "window.onurlchange",
  "window.close",
  "window.focus",
  "GM_addElement",
  "GM.addElement",
  "GM_addStyle",
  "GM.addStyle",
  "GM_download",
  "GM.download",
  "GM_getResourceText",
  "GM.getResourceText",
  "GM_getResourceURL",
  "GM.getResourceURL",
  "GM_info",
  "GM.info",
  "GM_log",
  "GM.log",
  "GM_notification",
  "GM.notification",
  "GM_openInTab",
  "GM.openInTab",
  "GM_registerMenuCommand",
  "GM.registerMenuCommand",
  "GM_unregisterMenuCommand",
  "GM.unregisterMenuCommand",
  "GM_setClipboard",
  "GM.setClipboard",
  "GM_getTab",
  "GM.getTab",
  "GM_saveTab",
  "GM.saveTab",
  "GM_getTabs",
  "GM.getTabs",
  "GM_setValue",
  "GM.setValue",
  "GM_getValue",
  "GM.getValue",
  "GM_deleteValue",
  "GM.deleteValue",
  "GM_listValues",
  "GM.listValues",
  "GM_addValueChangeListener",
  "GM.addValueChangeListener",
  "GM_removeValueChangeListener",
  "GM.removeValueChangeListener",
  "GM_xmlhttpRequest",
  "GM.xmlHttpRequest",
  "GM_webRequest",
  "GM.webRequest",
  "GM_cookie",
  "GM.cookie"
];
var grant = new vscode.SnippetString().appendText("@grant ").appendChoice(grantChoices);
var antifeatureChoices = [
  "ads",
  "tracking",
  "miner"
];
var antifeature = new vscode.SnippetString().appendText("@antifeature ").appendChoice(antifeatureChoices);
var runAtChoices = [
  "document-start",
  "document-body",
  "document-end",
  "document-idle",
  "context-menu"
];
var runAt = new vscode.SnippetString().appendText("@run-at ").appendChoice(runAtChoices);
var sandboxChoices = [
  "raw",
  "JavaScript",
  "DOM"
];
var sandbox = new vscode.SnippetString().appendText("@sandbox ").appendChoice(sandboxChoices);
var webRequest = new vscode.SnippetString().appendText('@webRequest { "selector": ').appendPlaceholder("selector").appendText(', "action": ').appendPlaceholder("action").appendText(" }");
var addElement1 = new vscode.SnippetString().appendText("GM_addElement(").appendPlaceholder("parentNode").appendText(", ").appendPlaceholder("tagName").appendText(", {\n	").appendTabstop().appendText("\n});");
var addElement2 = new vscode.SnippetString().appendText("GM_addElement(").appendPlaceholder("tagName").appendText(", {\n	").appendTabstop().appendText("\n});");

// src/lib/stripIndent.mjs
function createStripIndent(options) {
  const stripIndent2 = (strings, ...values) => {
    const { escapeSpecialCharacters = false } = options;
    const lines = [...strings].reduce((prev, current, i) => prev + current + (values[i] || ""), "").split("\n").filter((line) => line.trim() !== "");
    const minIndent = Math.min(...lines.map((line) => line.match(/^\s*/)[0].length));
    return lines.map((line) => {
      line = line.substring(minIndent);
      if (!escapeSpecialCharacters)
        return line;
      return line.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{");
    }).join("\n");
  };
  stripIndent2.withOptions = (newOptions) => createStripIndent({ ...options, ...newOptions });
  return stripIndent2;
}
var stripIndent = createStripIndent({});
var stripIndent_default = stripIndent;

// src/lib/items.mjs
var metadataItems = [
  {
    label: "userscript metadata",
    completions: [
      {
        label: "userscript metadata",
        kind: vscode2.CompletionItemKind.Snippet,
        detail: "userscript.metadata: <string>",
        insertText: metadata
      }
    ]
  },
  {
    label: "@name",
    completions: [
      {
        label: "@name",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.name: <string>",
        documentation: new vscode2.MarkdownString("The name of the script, shown in script list and menus. It must be unique within a `@namespace`. Internationalization is done by adding an appendix naming the locale.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.name: <string>", "typescript").appendMarkdown("The name of the script, shown in script list and menus. It must be unique within a `@namespace`. Internationalization is done by adding an appendix naming the locale.").appendCodeblock(stripIndent_default`
          // @name     A test
          // @name:de  Ein Test
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "@name <string>",
        parameters: [
          {
            label: "string",
            documentation: "The name of the script."
          }
        ]
      }
    ]
  },
  {
    label: "@namespace",
    completions: [
      {
        label: "@namespace",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.namespace: <string>",
        documentation: new vscode2.MarkdownString("The combination of `@namespace` and `@name` is the unique identifier for a userscript.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.namespace: <string>", "typescript").appendMarkdown("The combination of `@namespace` and `@name` is the unique identifier for a userscript. `@namespace` can be any string, for example the homepage of a group of userscripts by the same author.")
      ]
    },
    signatures: [
      {
        label: "@namespace <string>",
        parameters: [
          {
            label: "string",
            documentation: "The name of the script."
          }
        ]
      }
    ]
  },
  {
    label: "@copyright",
    completions: [
      {
        label: "@copyright",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.copyright: <string>",
        documentation: new vscode2.MarkdownString("A copyright statement shown at the header of the script\u2019s editor right below the script name.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.copyright: <string>", "typescript").appendMarkdown("A copyright statement shown at the header of the script\u2019s editor right below the script name.")
      ]
    },
    signatures: [
      {
        label: "@copyright <string>",
        parameters: [
          {
            label: "string",
            documentation: "The copyright statement."
          }
        ]
      }
    ]
  },
  {
    label: "@version",
    completions: [
      {
        label: "@version",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.version: <string>",
        documentation: new vscode2.MarkdownString("The script version. This is used for the update check and needs to be increased at every update.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.version: <string>", "typescript").appendMarkdown("The script version. This is used for the update check and needs to be increased at every update.\n\nIn this list, the next entry is considered to be a higher version number, eg: `Alpha-v1` < `Alpha-v2` and `16.4` == `16.04`.\n\n- `Alpha-v1`\n- `Alpha-v2`\n- `Alpha-v10`\n- `Beta`\n- `0.5pre3`\n- `0.5prelimiary`\n- `0.6pre4`\n- `0.6pre5`\n- `0.7pre4`\n- `0.7pre10`\n- `1.-1`\n- `1 == 1. == 1.0 == 1.0.0`\n- `1.1a`\n- `1.1aa`\n- `1.1ab`\n- `1.1b`\n- `1.1c`\n- `1.1.-1`\n- `1.1 == 1.1.0 == 1.1.00`\n- `1.1.1.1.1`\n- `1.1.1.1.2`\n- `1.1.1.1`\n- `1.10.0-alpha`\n- `1.10 == 1.10.0`\n- `1.11.0-0.3.7`\n- `1.11.0-alpha`\n- `1.11.0-alpha.1`\n- `1.11.0-alpha+1`\n- `1.12+1 == 1.12+1.0`\n- `1.12+1.1 == 1.12+1.1.0`\n- `1.12+2`\n- `1.12+2.1`\n- `1.12+3`\n- `1.12+4`\n- `1.12`\n- `2.0`\n- `16.4 == 16.04`\n- `2023-08-17.alpha`\n- `2023-08-17`\n- `2023-08-17_14-04 == 2023-08-17_14-04.0`\n- `2023-08-17+alpha`\n- 2023-09-11_14-0")
      ]
    },
    signatures: [
      {
        label: "@version <string>",
        parameters: [
          {
            label: "string",
            documentation: "The script version."
          }
        ]
      }
    ]
  },
  {
    label: "@description",
    completions: [
      {
        label: "@description",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.description: <string>",
        documentation: new vscode2.MarkdownString("A brief summary to describe the script.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.description: <string>", "typescript").appendMarkdown("A brief summary to describe the script. Internationalization is done by adding an appendix naming the locale.").appendCodeblock(stripIndent_default`
          // @description    This userscript does wonderful things
          // @description:de Dieses Userscript tut wundervolle Dinge
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "@description <string>",
        parameters: [
          {
            label: "string",
            documentation: "A brief summary to describe the script."
          }
        ]
      }
    ]
  },
  {
    label: "@icon",
    completions: [
      {
        label: "@icon",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.icon: <string>",
        documentation: new vscode2.MarkdownString("The script icon in low resolution.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.icon: <string>", "typescript").appendMarkdown("The script icon in low resolution.")
      ]
    },
    signatures: [
      {
        label: "@icon <string>",
        parameters: [
          {
            label: "string",
            documentation: "The url to the script icon."
          }
        ]
      }
    ]
  },
  {
    label: "@iconURL",
    completions: [
      {
        label: "@iconURL",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.iconURL: <string>",
        documentation: new vscode2.MarkdownString("The script icon in low resolution.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.iconURL: <string>", "typescript").appendMarkdown("The script icon in low resolution.")
      ]
    },
    signatures: [
      {
        label: "@iconURL <string>",
        parameters: [
          {
            label: "string",
            documentation: "The url to the script icon."
          }
        ]
      }
    ]
  },
  {
    label: "@defaulticon",
    completions: [
      {
        label: "@defaulticon",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.defaulticon: <string>",
        documentation: new vscode2.MarkdownString("The script icon in low resolution.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.defaulticon: <string>", "typescript").appendMarkdown("The script icon in low resolution.")
      ]
    },
    signatures: [
      {
        label: "@defaulticon <string>",
        parameters: [
          {
            label: "string",
            documentation: "The url to the script icon."
          }
        ]
      }
    ]
  },
  {
    label: "@icon64",
    completions: [
      {
        label: "@icon64",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.icon64: <string>",
        documentation: new vscode2.MarkdownString("This script\u2019s icon in 64x64 pixels.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.icon64: <string>", "typescript").appendMarkdown("This script\u2019s icon in 64x64 pixels. If `@icon` is also given, the `@icon` image will be scaled and used instead at some places at the options page.")
      ]
    },
    signatures: [
      {
        label: "@icon64 <string>",
        parameters: [
          {
            label: "string",
            documentation: "The url to the script icon."
          }
        ]
      }
    ]
  },
  {
    label: "@icon64URL",
    completions: [
      {
        label: "@icon64URL",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.icon64URL: <string>",
        documentation: new vscode2.MarkdownString("This script\u2019s icon in 64x64 pixels.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.icon64URL: <string>", "typescript").appendMarkdown("This script\u2019s icon in 64x64 pixels. If `@icon` is also given, the `@icon` image will be scaled and used instead at some places at the options page.")
      ]
    },
    signatures: [
      {
        label: "@icon64URL <string>",
        parameters: [
          {
            label: "string",
            documentation: "The url to the script icon."
          }
        ]
      }
    ]
  },
  {
    label: "@grant",
    completions: [
      {
        label: "@grant",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.grant: <enum>",
        documentation: new vscode2.MarkdownString("`@grant` is used to whitelist `GM_*` and `GM.*` functions, the `unsafeWindow` object and some powerful `window` functions. Multiple tag instances are allowed."),
        insertText: grant,
        filterText: "@grant"
      },
      {
        label: "GM_addElement",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_addElement"
      },
      {
        label: "GM_addStyle",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_addStyle"
      },
      {
        label: "GM_download",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_download"
      },
      {
        label: "GM_getResourceText",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_getResourceText"
      },
      {
        label: "GM_getResourceURL",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_getResourceURL"
      },
      {
        label: "GM_info",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_info"
      },
      {
        label: "GM_log",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_log"
      },
      {
        label: "GM_notification",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_notification"
      },
      {
        label: "GM_openInTab",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_openInTab"
      },
      {
        label: "GM_registerMenuCommand",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_registerMenuCommand"
      },
      {
        label: "GM_unregisterMenuCommand",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_unregisterMenuCommand"
      },
      {
        label: "GM_setClipboard",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_setClipboard"
      },
      {
        label: "GM_getTab",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_getTab"
      },
      {
        label: "GM_saveTab",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_saveTab"
      },
      {
        label: "GM_getTabs",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_getTabs"
      },
      {
        label: "GM_setValue",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_setValue"
      },
      {
        label: "GM_getValue",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_getValue"
      },
      {
        label: "GM_deleteValue",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_deleteValue"
      },
      {
        label: "GM_listValues",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_listValues"
      },
      {
        label: "GM_addValueChangeListener",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_addValueChangeListener"
      },
      {
        label: "GM_removeValueChangeListener",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_removeValueChangeListener"
      },
      {
        label: "GM.xmlHttpRequest",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM.xmlHttpRequest"
      },
      {
        label: "GM_webRequest",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_webRequest"
      },
      {
        label: "GM_cookie",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "GM_cookie"
      },
      {
        label: "window.onurlchange",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "window.onurlchange"
      },
      {
        label: "window.close",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "window.close"
      },
      {
        label: "window.focus",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "window.focus"
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.grant: <enum>", "typescript").appendMarkdown("`@grant` is used to whitelist `GM_*` and `GM.*` functions, the `unsafeWindow` object and some powerful `window` functions. Multiple tag instances are allowed.").appendCodeblock(stripIndent_default`
          // @grant none
          // @grant GM_setValue
          // @grant GM_getValue
          // @grant GM.setValue
          // @grant GM.getValue
          // @grant GM_setClipboard
          // @grant unsafeWindow
          // @grant window.close
          // @grant window.focus
          // @grant window.onurlchange
        `, "javascript").appendMarkdown("If `@grant` is `none`, the `sandbox` is disabled. In this mode, `GM_info` will be available, but none of the `GM_*` functions will be. If no `@grant` tag is given, an empty list is assumed, however, this is different from using `none`.")
      ]
    },
    signatures: [
      {
        label: "@grant <enum>",
        parameters: [
          {
            label: "enum",
            documentation: "The name of the entity to whitelist in the script."
          }
        ]
      }
    ]
  },
  {
    label: "@author",
    completions: [
      {
        label: "@author",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.author: <string>",
        documentation: new vscode2.MarkdownString("The script\u2019s author.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.author: <string>", "typescript").appendMarkdown("The script\u2019s author.")
      ]
    },
    signatures: [
      {
        label: "@author <string>",
        parameters: [
          {
            label: "string",
            documentation: "The script\u2019s author."
          }
        ]
      }
    ]
  },
  {
    label: "@homepage",
    completions: [
      {
        label: "@homepage",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.homepage: <string>",
        documentation: new vscode2.MarkdownString("The author\u2019s homepage that is used at the options page to link from the script\u2019s name to the given page. If the `@namespace` tag starts with `http://` or `https://`, its content will be used for this too.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.homepage: <string>", "typescript").appendMarkdown("The author\u2019s homepage that is used at the options page to link from the script\u2019s name to the given page. If the `@namespace` tag starts with `http://` or `https://`, its content will be used for this too.")
      ]
    },
    signatures: [
      {
        label: "@homepage <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to the author\u2019s homepage."
          }
        ]
      }
    ]
  },
  {
    label: "@homepageURL",
    completions: [
      {
        label: "@homepageURL",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.homepageURL: <string>",
        documentation: new vscode2.MarkdownString("If supplied, the home icon in the userscripts list will link to this.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.homepageURL: <string>", "typescript").appendMarkdown("If supplied, the home icon in the userscripts list will link to this.")
      ]
    },
    signatures: [
      {
        label: "@homepageURL <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to the author\u2019s homepage."
          }
        ]
      }
    ]
  },
  {
    label: "@website",
    completions: [
      {
        label: "@website",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.website: <string>",
        documentation: new vscode2.MarkdownString("The author\u2019s website that is used at the options page to link from the script\u2019s name to the given page. If the `@namespace` tag starts with `http://` or `https://`, its content will be used for this too.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.website: <string>", "typescript").appendMarkdown("The author\u2019s website that is used at the options page to link from the script\u2019s name to the given page. If the `@namespace` tag starts with `http://` or `https://`, its content will be used for this too.")
      ]
    },
    signatures: [
      {
        label: "@website <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to the author\u2019s website."
          }
        ]
      }
    ]
  },
  {
    label: "@source",
    completions: [
      {
        label: "@source",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.source: <string>",
        documentation: new vscode2.MarkdownString("The source of the script that is used at the options page to link from the script\u2019s name to the given page.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.source: <string>", "typescript").appendMarkdown("The source of the script that is used at the options page to link from the script\u2019s name to the given page.")
      ]
    },
    signatures: [
      {
        label: "@source <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to the script\u2019s source."
          }
        ]
      }
    ]
  },
  {
    label: "@antifeature",
    completions: [
      {
        label: "@antifeature",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.antifeature: <enum> <string>",
        documentation: new vscode2.MarkdownString("Allows script developers to disclose whether they monetize their scripts (required by [GreasyFork](https://greasyfork.org/)). Internationalization is done by adding an appendix naming the locale."),
        insertText: antifeature,
        filterText: "@antifeature"
      },
      {
        label: "ads",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "ads "
      },
      {
        label: "tracking",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "tracking "
      },
      {
        label: "miner",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "miner "
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.antifeature: <enum> <string>", "typescript").appendMarkdown("Allows script developers to disclose whether they monetize their scripts (required by [GreasyFork](https://greasyfork.org/)). Internationalization is done by adding an appendix naming the locale.").appendCodeblock(stripIndent_default`
          // @antifeature     ads       We show you ads
          // @antifeature:fr  ads       Nous vous montrons des publicités
          // @antifeature     tracking  We have some sort of analytics included
          // @antifeature     miner     We use your computer\u2019s resources to mine a crypto currency
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "@antifeature <enum> <string>",
        parameters: [
          {
            label: "enum",
            documentation: "The antifeature name."
          },
          {
            label: "string",
            documentation: "The antifeature description."
          }
        ]
      }
    ]
  },
  {
    label: "@require",
    completions: [
      {
        label: "@require",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.require: <string>",
        documentation: new vscode2.MarkdownString("The URL to a JavaScript file that is loaded and executed before the userscript itself starts running.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.require: <string>", "typescript").appendMarkdown('The URL to a JavaScript file that is loaded and executed before the userscript itself starts running. URL may be relative to the URL the script is being installed from. Scripts loaded via `@require` and their *"use strict"* statements might affect the userscript\u2019s strict mode. See [sub-resource integrity](https://www.tampermonkey.net/documentation.php?locale=en#api:Subresource_Integrity) for information on how to ensure integrity. Multiple tag instances are allowed.').appendCodeblock(stripIndent_default`
          // @require https://code.jquery.com/jquery-2.1.4.min.js
          // @require https://code.jquery.com/jquery-2.1.3.min.js#sha256=23456...
          // @require https://code.jquery.com/jquery-2.1.2.min.js#md5=34567...,sha256=6789...
          // @require tampermonkey://vendor/jquery.js
          // @require tampermonkey://vendor/jszip/jszip.js
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "@require <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to the JavaScript file."
          }
        ]
      }
    ]
  },
  {
    label: "@resource",
    completions: [
      {
        label: "@resource",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.resource: <string> <string>",
        documentation: new vscode2.MarkdownString("Preloads resources that can by accessed via `GM_getResourceURL` and `GM_getResourceText` in the script.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.resource: <string> <string>", "typescript").appendMarkdown("Preloads resources that can by accessed via `GM_getResourceURL` and `GM_getResourceText` in the script. See [sub-resource integrity](https://www.tampermonkey.net/documentation.php?locale=en#api:Subresource_Integrity) for information on how to ensure integrity. Multiple tag instances are allowed.").appendCodeblock(stripIndent_default`
          // @resource icon1        http://www.tampermonkey.net/favicon.ico
          // @resource icon2        /images/icon.png
          // @resource html         http://www.tampermonkey.net/index.html
          // @resource xml          http://www.tampermonkey.net/crx/tampermonkey.xml
          // @resource SRIsecured1  http://www.tampermonkey.net/favicon.ico#md5=123434...
          // @resource SRIsecured2  http://www.tampermonkey.net/favicon.ico#md5=123434...;sha256=234234...
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "@resource <string> <string>",
        parameters: [
          {
            label: [11, 17],
            documentation: "The unique name of the resource."
          },
          {
            label: [20, 26],
            documentation: "The URL of the resource."
          }
        ]
      }
    ]
  },
  {
    label: "@include",
    completions: [
      {
        label: "@include",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.include: <string>",
        documentation: new vscode2.MarkdownString("The pages on which script should run. Multiple tag instances are allowed.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.include: <string>", "typescript").appendMarkdown("The pages on which script should run. Multiple tag instances are allowed. `@include` doesn't support the URL hash parameter. You have to match the path without the hash parameter and make use of [window.onurlchange](https://www.tampermonkey.net/documentation.php?locale=en#api:window.onurlchange).").appendCodeblock(stripIndent_default`
          // @include http://www.tampermonkey.net/*
          // @include http://*
          // @include https://*
          // @include /^https:\/\/www\.tampermonkey\.net\/.*$/
          // @include *
        `).appendMarkdown("When writing something like `*://tmnk.net/*`, many script developers expect the script to run at `tmnk.net` only, but this is not the case. It also runs at `https://example.com/?http://tmnk.net/` as well.\n\nTherefore, Tampermonkey interprets `@includes` that contain a `://` a little bit like `@match`. Every `*` before `://` only matches everything except `:` characters to make sure only the URL scheme is matched. Also, if such an `@include` contains a `/` after `://`, then everything between those strings is treated as host, matching everything except `/` characters. The same applies to `*` directly following `://`.")
      ]
    },
    signatures: [
      {
        label: "@include <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL pattern to include."
          }
        ]
      }
    ]
  },
  {
    label: "@match",
    completions: [
      {
        label: "@match",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.match: <string>",
        documentation: new vscode2.MarkdownString("The `@match` directive is a URL pattern that matches the web pages that your script should run on. Wildcards and multiple tag instances are allowed.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.match: <string>", "typescript").appendMarkdown("The `@match` directive is a URL pattern that matches the web pages that your script should run on. Wildcards and multiple tag instances are allowed.\n\nSee [match patterns](https://developer.chrome.com/docs/extensions/mv2/match_patterns/) for more information. **Note:** The `<all_urls>` statement is not yet supported.").appendCodeblock(stripIndent_default`
          // @match \u002A://\u002A/\u002A
          // @match https://\u002A/\u002A
          // @match http://\u002A/foo\u002A
          // @match https://\u002A.tampermonkey.net/foo\u002Abar
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "@match <string>",
        parameters: [
          {
            label: "string",
            documentation: "A pattern to match URLs against."
          }
        ]
      }
    ]
  },
  {
    label: "@exclude",
    completions: [
      {
        label: "@exclude",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.exclude: <string>",
        documentation: new vscode2.MarkdownString("Exclude URLs even if they are included by `@include` or `@match`. Multiple tag instances are allowed.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.exclude: <string>", "typescript").appendMarkdown("Exclude URLs even if they are included by `@include` or `@match`. Multiple tag instances are allowed.")
      ]
    },
    signatures: [
      {
        label: "@exclude <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to exclude."
          }
        ]
      }
    ]
  },
  {
    label: "@run-at",
    completions: [
      {
        label: "@run-at",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.run-at: <enum>",
        documentation: new vscode2.MarkdownString("Defines the moment the script is injected. In opposition to other script handlers, `@run-at` defines the first possible moment a script wants to run."),
        insertText: runAt,
        filterText: "@run-at"
      },
      {
        label: "document-start",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "document-start"
      },
      {
        label: "document-body",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "document-body"
      },
      {
        label: "document-end",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "document-end"
      },
      {
        label: "document-idle",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "document-idle"
      },
      {
        label: "context-menu",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "context-menu"
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.run-at: <enum>", "typescript").appendMarkdown("Defines the moment the script is injected. In opposition to other script handlers, `@run-at` defines the first possible moment a script wants to run. This means it may happen, that a script that uses the `@require` tag may be executed after the document is already loaded, because fetching the required script took that long. Regardless, all `DOMNodeInserted` and `DOMContentLoaded` events that happened after the given injection moment are cached and delivered to the script when it is injected.").appendCodeblock("// @run-at document-start").appendMarkdown("The script will be injected as fast as possible.").appendCodeblock("// @run-at document-body").appendMarkdown("The script will be injected if the body element exists.").appendCodeblock("// @run-at document-end").appendMarkdown("The script will be injected when or after the DOMContentLoaded event was dispatched.").appendCodeblock("// @run-at document-idle").appendMarkdown("The script will be injected after the DOMContentLoaded event was dispatched. This is the default value if no @run-at tag is given.").appendCodeblock("// @run-at context-menu").appendMarkdown("The script will be injected if it is clicked at the browser context menu. All `@include` and `@exclude` statements will be ignored if this value is used, but this may change in the future.")
      ]
    },
    signatures: [
      {
        label: "@run-at <enum>",
        parameters: [
          {
            label: "enum",
            documentation: "The load event during which to execute the script."
          }
        ]
      }
    ]
  },
  {
    label: "@sandbox",
    completions: [
      {
        label: "@sandbox",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.sandbox: <enum>",
        documentation: new vscode2.MarkdownString("`@sandbox` allows userscript authors to specify execution context by denoting one of the three possible environments."),
        insertText: sandbox
      },
      {
        label: "raw",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "raw"
      },
      {
        label: "JavaScript",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "tracking "
      },
      {
        label: "DOM",
        kind: vscode2.CompletionItemKind.Value,
        insertText: "miner "
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.sandbox: <enum>", "typescript").appendMarkdown("Userscript execution happens in one of three possible environments:\n\n- `MAIN_WORLD` - the page.\n- `ISOLATED_WORLD` - the extension\u2019s content script.\n- `USERSCRIPT_WORLD` - a special context created for userscripts.\n\n `@sandbox` allows userscript authors to specify execution context by denoting one of the following arguments:\n\n- `raw` - For compatibility reasons, the userscript always needs to run in page context, the `MAIN_WORLD` (default if `@sandbox` is omitted). If injection into the `MAIN_WORLD` is not possible (e.g. because of a CSP), the userscript will be injected into other (enabled) sandboxes according to the order of this list.\n- `JavaScript` - The script needs access to `unsafeWindow`. In Firefox, a special context, the `USERSCRIPT_WORLD`, is created which also bypasses existing CSP\u2019s. This however, may be an issue because [`cloneInto` and `exportFunction`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) are then necessary to share objects with the page. `raw` mode is used as a fallback in other browsers.\n- `DOM` - Use this mode if the script only needs DOM access and no direct `unsafeWindow` access. If [enabled](https://www.tampermonkey.net/faq#Q404), these scripts are executed inside the extension context, the `ISOLATED_WORLD`, or at any other enabled context otherwise, because they all grant DOM access.").appendCodeblock("// @sandbox JavaScript")
      ]
    },
    signatures: [
      {
        label: "@sandbox <enum>",
        parameters: [
          {
            label: "enum",
            documentation: "The execution context of the script."
          }
        ]
      }
    ]
  },
  {
    label: "@connect",
    completions: [
      {
        label: "@connect",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.connect: <string>",
        documentation: new vscode2.MarkdownString("The domains / subdomains which are allowed to be retrieved by `GM_xmlhttpRequest`. Top-level domains are not allowed. Multiple tag instances are allowed.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.connect: <string>", "typescript").appendMarkdown('The domains / subdomains which are allowed to be retrieved by `GM_xmlhttpRequest`. Top-level domains are not allowed. Multiple tag instances are allowed.\n\nCan be:\n- a domain name like `example.com` (this will also allow all subdomains).\n- a subdomain name like subdomain.example.com.\n- `self` - the current domain.\n- localhost to access the localhost.\n- an IP address like `127.0.0.1`.\n- `*` - all domains.\nIf it\u2019s not possible to declare all domains a userscript might connect to then it\u2019s good practice to do the following:\n\n1. Declare _all known_ or at least _all common_ domains that might be connected by the script to avoid the confirmation dialog for most users.\n2. Specify `@connect *` to allow Tampermonkey to offer an "Always allow all domains" button.\n\nUsers can also whitelist all requests by adding `*` to the user domain whitelist at the script settings tab.\n\nBoth the initial and the final URL will be checked. For backwards compatibility to Scriptish, `@domain` tags are interpreted as well.').appendCodeblock(stripIndent_default`
          // @connect tmnk.net
          // @connect www.tampermonkey.net
          // @connect self
          // @connect localhost
          // @connect 8.8.8.8
          // @connect *
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "@connect <string>",
        parameters: [
          {
            label: "string",
            documentation: "The domain / subdomain to be retrieved."
          }
        ]
      }
    ]
  },
  {
    label: "@noframes",
    completions: [
      {
        label: "@noframes",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.noframes: <boolean>",
        documentation: new vscode2.MarkdownString("When present, the script will execute only in the top level document, and not in nested frames.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.noframes: <boolean>", "typescript").appendMarkdown("When present, the script will execute only in the top level document, and not in nested frames.")
      ]
    }
  },
  {
    label: "@updateURL",
    completions: [
      {
        label: "@updateURL",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.updateURL: <string>",
        documentation: new vscode2.MarkdownString("An update URL for the userscript. A `@version` tag is required to make update checks work.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.updateURL: <string>", "typescript").appendMarkdown("An update URL for the userscript. A `@version` tag is required to make update checks work.")
      ]
    },
    signatures: [
      {
        label: "@updateURL <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to the update script."
          }
        ]
      }
    ]
  },
  {
    label: "@downloadURL",
    completions: [
      {
        label: "@downloadURL",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.downloadURL: <string>",
        documentation: new vscode2.MarkdownString("Defines the URL where the script will be downloaded from when an update was detected. If the value `none` is used, then no update check will be done.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.downloadURL: <string>", "typescript").appendMarkdown("Defines the URL where the script will be downloaded from when an update was detected. If the value `none` is used, then no update check will be done.")
      ]
    },
    signatures: [
      {
        label: "@downloadURL <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL to download the script from."
          }
        ]
      }
    ]
  },
  {
    label: "@supportURL",
    completions: [
      {
        label: "@supportURL",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.supportURL: <string>",
        documentation: new vscode2.MarkdownString("The URL to be used for bug reporting, feature requests, etc.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.supportURL: <string>", "typescript").appendMarkdown("The URL to be used for bug reporting, feature requests, etc.")
      ]
    },
    signatures: [
      {
        label: "@supportURL <string>",
        parameters: [
          {
            label: "string",
            documentation: "The URL for user support."
          }
        ]
      }
    ]
  },
  {
    label: "@webRequest",
    completions: [
      {
        label: "@webRequest",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.webRequest: <object>",
        documentation: new vscode2.MarkdownString("`@webRequest` takes a JSON object that matches the `rule` parameter of a `GM_webRequest`. It allows the rules to apply even before the userscript is loaded."),
        insertText: webRequest
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.webRequest: <object>", "typescript").appendMarkdown("`@webRequest` takes a JSON object that matches the `rule` parameter of a `GM_webRequest`. It allows the rules to apply even before the userscript is loaded.")
      ]
    },
    signatures: [
      {
        label: "@webRequest <object>",
        parameters: [
          {
            label: "object",
            documentation: "A JSON object matching the `rule` parameter of a `GM_webRequest`."
          }
        ]
      }
    ]
  },
  {
    label: "@unwrap",
    completions: [
      {
        label: "@unwrap",
        kind: vscode2.CompletionItemKind.Field,
        detail: "(property) userscript.metadata.unwrap: <boolean>",
        documentation: new vscode2.MarkdownString("Injects the userscript into the page without any wrapper or sandbox.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("(property) userscript.metadata.unwrap: <boolean>", "typescript").appendMarkdown("Injects the userscript into the page without any wrapper or sandbox.")
      ]
    }
  }
];
var apiItems = [
  {
    label: "unsafeWindow",
    completions: [
      {
        label: "unsafeWindow",
        kind: vscode2.CompletionItemKind.Variable,
        detail: "var unsafeWindow: Window & typeof globalThis",
        documentation: new vscode2.MarkdownString("The `unsafeWindow` object provides access to the `window` object of the page that Greasemonkey is running on, rather than the `window` object of the Greasemonkey extension."),
        commitCharacters: ["."]
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("var unsafeWindow: Window & typeof globalThis", "typescript").appendMarkdown("The `unsafeWindow` object provides access to the `window` object of the page that Greasemonkey is running on, rather than the `window` object of the Greasemonkey extension. This can be useful in certain cases such as when a userscript needs to access a JavaScript library or variable that is defined on the page.")
      ]
    }
  },
  {
    label: "GM_addElement",
    completions: [
      {
        label: "GM_addElement",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_addElement(parentNode: HTMLElement, tagName: string, attributes: { [key: string]: string | boolean | number }): HTMLElement (+1 overload)",
        documentation: new vscode2.MarkdownString("Creates an HTML element specified by `tagName`, applies all given `attributes`, and returns the injected HTML element."),
        insertText: addElement1
      },
      {
        label: "GM_addElement",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_addElement(tagName: string, attributes: { [key: string]: string | boolean | number }): HTMLElement (+1 overload)",
        documentation: new vscode2.MarkdownString("Creates an HTML element specified by `tagName`, applies all given `attributes`, and returns the injected HTML element."),
        insertText: addElement2
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("function GM_addElement(parentNode: HTMLElement, tagName: string, attributes: { [key: string]: string | boolean | number }): HTMLElement (+1 overload)", "typescript").appendMarkdown("Creates an HTML element specified by `tagName`, applies all given `attributes`, and returns the injected HTML element. The injected element will be appended to the document\u2019s head or body unless a `parentNode` is given, in which case the new element is appended to it instead. Any attribute that is valid on for the element type specified by the `tagName` is allowed in `attributes`.").appendCodeblock(stripIndent_default`
          GM_addElement('script', {
            textContent: 'window.foo = "bar";'
          });

          GM_addElement('script', {
            src: 'https://example.com/script.js',
            type: 'text/javascript'
          });

          GM_addElement(document.getElementsByTagName('div')[0], 'img', {
            src: 'https://example.com/image.png'
          });

          GM_addElement(shadowDOM, 'style', {
            textContent: 'div { color: black; };'
          });
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "GM_addElement(parentNode: HTMLElement, tagName: string, attributes: ElementAttributes): HTMLElement",
        parameters: [
          {
            label: "parentNode: HTMLElement",
            documentation: "The parent node to append the new element to."
          },
          {
            label: "tagName: string",
            documentation: "The type of element to create."
          },
          {
            label: "attributes: ElementAttributes",
            documentation: "An object containing the attributes to apply to the new element."
          }
        ]
      },
      {
        label: "GM_addElement(tagName: string, attributes: ElementAttributes): HTMLElement",
        parameters: [
          {
            label: "tagName: string",
            documentation: "The type of element to create."
          },
          {
            label: "attributes: ElementAttributes",
            documentation: "An object containing the attributes to apply to the new element."
          }
        ]
      }
    ]
  },
  {
    label: "GM_addStyle",
    completions: [
      {
        label: "GM_addStyle",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_addStyle(css: string): HTMLStyleElement",
        documentation: new vscode2.MarkdownString("Adds the given style to the document and returns the injected style element.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("function GM_addStyle(css: string): HTMLStyleElement").appendMarkdown("Adds the given style to the document and returns the injected style element.")
      ]
    },
    signatures: [
      {
        label: "GM_addStyle(css: string): HTMLStyleElement",
        parameters: [
          {
            label: "css: string",
            documentation: "A string containing the CSS to add to the document."
          }
        ]
      }
    ]
  },
  {
    label: "GM_download",
    completions: [
      {
        label: "GM_download",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_download(details: DownloadDetails): DownloadResponse (+1 overload)",
        documentation: new vscode2.MarkdownString("Downloads a URL to a local file.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("function GM_download(details: DownloadDetails): DownloadResponse (+1 overload)", "typescript").appendMarkdown("Downloads a URL to a local file.").appendCodeblock(stripIndent_default`
          GM_download('http://example.com/file.txt', 'file.txt');

          const download = GM_download({
            url: 'http://example.com/file.txt',
            name: 'file.txt',
            saveAs: true
          });

          // cancel download after 5 seconds
          window.setTimeout(() => download.abort(), 5000);
        `)
      ]
    },
    signatures: [
      {
        label: "function GM_download(details: DownloadDetails): DownloadResponse (+1 overload)",
        parameters: [
          {
            label: "details: DownloadDetails",
            documentation: new vscode2.MarkdownString().appendCodeblock(stripIndent_default`
              type DownloadDetails = {
                url: string;
                name: string;
                headers?: { [key: string]: string };
                saveAs: boolean;
                conflictAction: string;
                onload?: () => void;
                onerror?: (error: DownloadError) => void;
                onprogress?: () => void;
                ontimeout?: () => void;
              }
            `, "typescript").appendMarkdown("The details of the download request.")
          }
        ]
      },
      {
        label: "function GM_download(url: string, name: string): DownloadResponse (+1 overload)",
        parameters: [
          {
            label: "url: string",
            documentation: "The URL to download."
          },
          {
            label: "name: string",
            documentation: "The name of the file to save as."
          }
        ]
      }
    ]
  },
  {
    label: "GM_getResourceText",
    completions: [
      {
        label: "GM_getResourceText",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_getResourceText(name: string): string",
        documentation: new vscode2.MarkdownString("Access the text of a resource (such as a JavaScript or CSS file) that has been included in a userscript via `@resource`.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("function GM_getResourceText(name: string): string", "typescript").appendMarkdown("Access the text of a resource (such as a JavaScript or CSS file) that has been included in a userscript via `@resource`.").appendCodeblock(stripIndent_default`
          const scriptText = GM_getResourceText('myscript.js');
          const scriptText2 = await GM.getResourceText('myscript.js');
          const script = document.createElement('script');
          script.textContent = scriptText;
          document.body.appendChild(script);
        `, "javascript")
      ]
    },
    signatures: [
      {
        label: "function GM_getResourceText(name: string): string",
        parameters: [
          {
            label: "name: string",
            documentation: "The name of the resource to retrieve."
          }
        ]
      }
    ]
  },
  {
    label: "GM_getResourceURL",
    completions: [
      {
        label: "GM_getResourceURL",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_getResourceURL(name: string): string",
        documentation: new vscode2.MarkdownString("Access the URL of a resource (such as a CSS file or image file) that has been included in a userscript via `@resource`.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("function GM_getResourceURL(name: string): string", "typescript").appendMarkdown("Access the URL of a resource (such as a CSS file or image file) that has been included in a userscript via `@resource`.")
      ]
    },
    signatures: [
      {
        label: "function GM_getResourceURL(name: string): string",
        parameters: [
          {
            label: "name: string",
            documentation: "The name of the resource to retrieve."
          }
        ]
      }
    ]
  },
  {
    label: "GM_info",
    completions: [
      {
        label: "GM_info",
        kind: vscode2.CompletionItemKind.Interface,
        detail: "type GM_info = { downloadMode: string; isIncognito: boolean; relaxedCsp: string; sandboxMode: SandboxMode; script: Script; scriptHandler: string; scriptMetaStr: string | null; scriptUpdateURL: string | null; scriptWillUpdate: boolean; userAgentData: UserAgentData; version?: string; }",
        documentation: new vscode2.MarkdownString("An object that exposes information about the current userscript.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("type GM_info = { downloadMode: string; isIncognito: boolean; relaxedCsp: string; sandboxMode: SandboxMode; script: Script; scriptHandler: string; scriptMetaStr: string | null; scriptUpdateURL: string | null; scriptWillUpdate: boolean; userAgentData: UserAgentData; version?: string; }", "typescript").appendMarkdown("An object that exposes information about the current userscript.")
      ]
    }
  },
  {
    label: "GM_log",
    completions: [
      {
        label: "GM_log",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_log(message: any): void",
        documentation: new vscode2.MarkdownString("Log a message to the console.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("function GM_log(message: any): void", "typescript").appendMarkdown("Log a message to the console.")
      ]
    },
    signatures: [
      {
        label: "function GM_log(message: any): void",
        parameters: [
          {
            label: "message: any",
            documentation: "The message to log."
          }
        ]
      }
    ]
  },
  {
    label: "GM_notification",
    completions: [
      {
        label: "GM_notification",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_notification(details: NotificationDetails): void (+1 overload)",
        documentation: new vscode2.MarkdownString("Shows an HTML5 Desktop notification and / or highlights the current tab.")
      }
    ],
    hover: {
      contents: [
        new vscode2.MarkdownString().appendCodeblock("function GM_notification(details: NotificationDetails): void (+1 overload)", "typescript").appendMarkdown("Shows an HTML5 Desktop notification and / or highlights the current tab.")
      ]
    },
    signatures: [
      {
        label: "function GM_notification(details: NotificationDetails): void (+1 overload)",
        parameters: [
          {
            label: "details: NotificationDetails",
            documentation: new vscode2.MarkdownString().appendCodeblock(stripIndent_default`
              type NotificationDetails = {
                text: string;
                title?: string;
                tag?: string;
                image?: string;
                highlight?: boolean;
                silent?: boolean;
                timeout?: number;
                url?: string;
                onclick?: () => void;
                ondone?: () => void;
              }
            `, "typescript").appendMarkdown("The details of the notification.")
          }
        ]
      },
      {
        label: "function GM_notification(text: string, title?: string, image?: string, onclick?: () => void): void",
        parameters: [
          {
            label: "text: string",
            documentation: "The text of the notification."
          },
          {
            label: "title?: string",
            documentation: "The title of the notification."
          },
          {
            label: "image?: string",
            documentation: "The URL of the image to display in the notification."
          },
          {
            label: "onclick?: () => void",
            documentation: "A function to run when the notification is clicked."
          }
        ]
      }
    ]
  },
  {
    label: "GM_openInTab",
    completions: [
      {
        label: "GM_openInTab",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_openInTab(url: string, options?: OpenInTabOptions): OpenInTabResponse (+1 overload)",
        documentation: new vscode2.MarkdownString("Opens URL in a new tab.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_registerMenuCommand",
    completions: [
      {
        label: "GM_registerMenuCommand",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_registerMenuCommand(name: string, callback: () => void, options?: RegisterMenuCommandOptions): string | number (+1 overload)",
        documentation: new vscode2.MarkdownString(`Add a new entry to the userscript\u2019s menu in the browser, and specify a function to be called when the menu item is selected.

The function return a menu entry ID that can be used to unregister the command.`)
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_unregisterMenuCommand",
    completions: [
      {
        label: "GM_unregisterMenuCommand",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_unregisterMenuCommand(id: string | number): void",
        documentation: new vscode2.MarkdownString("Unregister a menu command that was previously registered by `GM_registerMenuCommand` with the given menu command ID.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_setClipboard",
    completions: [
      {
        label: "GM_setClipboard",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_setClipboard(data: string, info?: string | ClipboardInfo, callback?: () => void): void",
        documentation: new vscode2.MarkdownString("Sets the text of the clipboard to a specified value.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_getTab",
    completions: [
      {
        label: "GM_getTab",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_getTab(callback: (tab: Tab) => void): void",
        documentation: new vscode2.MarkdownString("Get a object that is persistent as long as this tab is open.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_saveTab",
    completions: [
      {
        label: "GM_saveTab",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_saveTab(tab: Tab, callback?: () => void): void",
        documentation: new vscode2.MarkdownString("Save the tab object to reopen it after a page unload.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_getTabs",
    completions: [
      {
        label: "GM_getTabs",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_getTabs(callback: (tabs: Tabs) => void): void",
        documentation: new vscode2.MarkdownString("Get all tab objects as a hash to communicate with other script instances.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_setValue",
    completions: [
      {
        label: "GM_setValue",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_setValue(key: string, value: any): void",
        documentation: new vscode2.MarkdownString("Sets a key / value pair for current script to storage.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_getValue",
    completions: [
      {
        label: "GM_getValue",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_getValue(key: string, defaultValue?: any): any",
        documentation: new vscode2.MarkdownString("Retrieves a value for current script from storage.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_deleteValue",
    completions: [
      {
        label: "GM_deleteValue",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_deleteValue(key: string): void",
        documentation: new vscode2.MarkdownString("Deletes an existing key / value pair for current script from storage.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_listValues",
    completions: [
      {
        label: "GM_listValues",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_listValues(): string[]",
        documentation: new vscode2.MarkdownString("Returns an array of keys of all available values within this script.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_addValueChangeListener",
    completions: [
      {
        label: "GM_addValueChangeListener",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_addValueChangeListener(key: string, callback: (key: string, oldValue: any, newValue: any, remote: boolean) => void): string",
        documentation: new vscode2.MarkdownString("Adds a change listener to the storage and returns the listener ID.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_removeValueChangeListener",
    completions: [
      {
        label: "GM_removeValueChangeListener",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_removeValueChangeListener(id: number): void",
        documentation: new vscode2.MarkdownString("Removes a change listener by its ID.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_xmlHttpRequest",
    completions: [
      {
        label: "GM_xmlHttpRequest",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_xmlhttpRequest(details: XMLHttpRequestDetails): { abort: () => void }",
        documentation: new vscode2.MarkdownString("Makes a request like XMLHttpRequest, with some special capabilities, not restricted by same-origin policy.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_webRequest",
    completions: [
      {
        label: "GM_webRequest",
        kind: vscode2.CompletionItemKind.Function,
        detail: "function GM_webRequest(rules: WebRequestRule[], listener: (info: WebRequestInfo, message: WebRequestMessage, details: WebRequestDetails) => void): void",
        documentation: new vscode2.MarkdownString("`GM_webRequest` (re-)registers rules for web request manipulations and the listener of triggered rules. If you need to just register rules it's better to use `@webRequest` header. Note, webRequest proceeds only requests with types `sub_frame`, `script`, `xhr` and `websocket`.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_cookie",
    completions: [
      {
        label: "GM_cookie",
        kind: vscode2.CompletionItemKind.Interface,
        detail: "type GM_cookie = { list(details: GM_cookie.ListDetails, callback: (cookies: Cookie[], error?: string) => void): void; set(details: GM_cookie.SetDetails, callback: (error?: string) => void): void; delete(details: GM_cookie.DeleteDetails, callback: (error?: string) => void): void; }",
        documentation: new vscode2.MarkdownString("Note: the GM_cookie API is experimental and might return a `not supported` error at some Tampermonkey versions.\n\nTampermonkey checks if the script has `@include` or `@match` access to given `details.url` arguments!")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_cookie.list",
    completions: [
      {
        label: "GM_cookie.list",
        kind: vscode2.CompletionItemKind.Method,
        detail: "(method) list(details: GM_cookie.ListDetails, callback: (cookies: Cookie[], error?: string) => void): void",
        documentation: new vscode2.MarkdownString("Retrieve cookies.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_cookie.set",
    completions: [
      {
        label: "GM_cookie.set",
        kind: vscode2.CompletionItemKind.Method,
        detail: "(method) set(details: GM_cookie.SetDetails, callback: (error?: string) => void): void",
        documentation: new vscode2.MarkdownString("Sets a cookie with the given details. Supported properties are defined [here](https://developer.chrome.com/extensions/cookies#method-set).")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "GM_cookie.delete",
    completions: [
      {
        label: "GM_cookie.delete",
        kind: vscode2.CompletionItemKind.Method,
        detail: "(method) delete(details: GM_cookie.DeleteDetails, callback: (error?: string) => void): void",
        documentation: new vscode2.MarkdownString("Deletes a cookie.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "window.onurlchange",
    completions: [
      {
        label: "window.onurlchange",
        kind: vscode2.CompletionItemKind.Property,
        detail: "(property) onurlchange: (this: Window, ev: CustomEvent) => any",
        documentation: new vscode2.MarkdownString("Fired when the URL of the tab changes.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "window.close",
    completions: [
      {
        label: "window.close",
        kind: vscode2.CompletionItemKind.Method,
        detail: "(method) close(): void",
        documentation: new vscode2.MarkdownString("Fired when the tab is closed.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  },
  {
    label: "window.focus",
    completions: [
      {
        label: "window.focus",
        kind: vscode2.CompletionItemKind.Method,
        detail: "(method) focus(): void",
        documentation: new vscode2.MarkdownString("Fired when the tab is focused.")
      }
    ],
    hover: {
      contents: []
    },
    signatures: []
  }
];

// src/lib/updateConfig.mjs
var import_fs = require("fs");
var import_path = require("path");
var vscode3 = __toESM(require("vscode"), 1);
function updateConfig(configName) {
  const workspaceFolders = vscode3.workspace.workspaceFolders;
  if (workspaceFolders && workspaceFolders.length > 0) {
    const workspaceRoot = workspaceFolders[0].uri.fsPath;
    const configPath = (0, import_path.join)(workspaceRoot, `${configName}.json`);
    if ((0, import_fs.existsSync)(configPath)) {
      try {
        const config3 = JSON.parse((0, import_fs.readFileSync)(configPath, "utf8"));
        if (configName === "jsconfig" || configName === "tsconfig") {
          if (!config3.compilerOptions) {
            config3.compilerOptions = {};
          }
          if (!config3.compilerOptions.typeRoots) {
            config3.compilerOptions.typeRoots = [];
          }
          config3.compilerOptions.typeRoots.push("./node_modules/@types");
          config3.compilerOptions.typeRoots.push("./src/@types");
        } else if (configName === ".eslintrc") {
          if (!config3.env) {
            config3.env = {};
          }
          config3.env.greasemonkey = true;
        }
        (0, import_fs.writeFileSync)(configPath, JSON.stringify(config3, null, 2));
        console.log(`\`${configName}.json\` updated successfully.`);
      } catch (err) {
        vscode3.window.showErrorMessage(`Error updating \`${configName}.json\`: ${err}`, "OK", "Retry").then((selection) => {
          if (selection === "Retry")
            updateConfig(configName);
        });
      }
    } else {
      vscode3.window.showErrorMessage(`No \`${configName}.json\` found.`, "OK", "Create").then((selection) => {
        if (selection === "Create") {
          let configObject;
          if (configName === "jsconfig" || configName === "tsconfig") {
            configObject = {
              compilerOptions: {
                typeRoots: [
                  "./node_modules/@types",
                  "./src/@types"
                ]
              }
            };
          } else if (configName === ".eslintrc") {
            configObject = {
              env: {
                greasemonkey: true
              }
            };
          }
          (0, import_fs.writeFileSync)(configPath, JSON.stringify(configObject, null, 2));
          vscode3.window.showInformationMessage(`\`${configName}.json\` created successfully.`);
          updateConfig(configName);
        }
      });
    }
  } else {
    vscode3.window.showErrorMessage("No workspace folder found.", "OK", "Create").then((selection) => {
      if (selection === "Create") {
        vscode3.commands.executeCommand("workbench.action.saveWorkspaceAs").then(() => updateConfig(configName));
      }
    });
  }
}

// src/extension.mjs
var import_path2 = __toESM(require("path"), 1);
function activate(context) {
  vscode4.window.showInformationMessage('Congratulations, your extension "Monkey Wrench" is now active!');
  vscode4.languages.setLanguageConfiguration("javascript", {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    onEnterRules: [
      {
        beforeText: /^\/\/ (?:@|==UserScript==).*$/,
        action: {
          indentAction: vscode4.IndentAction.None,
          appendText: "// "
        }
      }
    ]
  });
  commandDisposables.push(
    vscode4.commands.registerCommand("monkey-wrench.helloWorld", () => {
      vscode4.window.showInformationMessage("Hello World from Monkey Wrench!");
    }),
    vscode4.commands.registerCommand("monkey-wrench.updateConfigs", async () => {
      if (config2.get("enableTsConfigUpdate")) {
        updateConfig("tsconfig");
      }
      if (config2.get("enableJsConfigUpdate")) {
        updateConfig("jsconfig");
      }
      if (config2.get("enableEslintConfigUpdate")) {
        updateConfig(".eslintrc");
      }
    })
  );
  configDisposables.push(vscode4.workspace.onDidChangeConfiguration((e) => {
    if (e.affectsConfiguration("monkey-wrench.enableTsConfigUpdate")) {
      updateConfig("tsconfig");
    }
    if (e.affectsConfiguration("monkey-wrench.enableJsConfigUpdate")) {
      updateConfig("jsconfig");
    }
    if (e.affectsConfiguration("monkey-wrench.enableEslintConfigUpdate")) {
      updateConfig(".eslintrc");
    }
  }));
  hoverProviders.push(
    vscode4.languages.registerHoverProvider("javascript", {
      provideHover(document, position, token) {
        if (!allSystemsGo(document))
          return;
        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange)
          return;
        const word = document.getText(wordRange);
        const item = metadataItems.find((item2) => item2.label === word && item2.hover);
        if (!item)
          return;
        item.hover.range = wordRange;
        return item.hover;
      }
    }),
    vscode4.languages.registerHoverProvider("javascript", {
      provideHover(document, position, token) {
        if (!allSystemsGo(document))
          return;
        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange)
          return;
        const word = document.getText(wordRange);
        const item = apiItems.find((item2) => item2.label === word && item2.hover);
        if (!item)
          return;
        item.hover.range = wordRange;
        return item.hover;
      }
    })
  );
  completionItemProviders.push(
    vscode4.languages.registerCompletionItemProvider("javascript", ApiCompletionItemProvider),
    vscode4.languages.registerCompletionItemProvider("javascript", MetadataCompletionItemProvider),
    vscode4.languages.registerCompletionItemProvider("javascript", MetadataParametersCompletionItemProvider, " ")
  );
  signatureHelpProviders.push(vscode4.languages.registerSignatureHelpProvider("javascript", {
    provideSignatureHelp(document, position, token, context2) {
      const line = document.lineAt(position.line).text;
      const functionCallStart = line.lastIndexOf("GM", position.character);
      const functionCall = line.substring(functionCallStart, position.character);
      const [functionName, parameterString] = functionCall.split("(");
      const parameters = parameterString.split(",");
      const parameterIndex = parameters.length - 1;
      const signatureHelp = new vscode4.SignatureHelp();
      signatureHelp.signatures = apiItems.find((item) => item.label === functionName).signatures;
      if (!signatureHelp.signatures.length)
        return;
      signatureHelp.activeSignature = 0;
      signatureHelp.activeParameter = parameterIndex;
      return signatureHelp;
    }
  }, { triggerCharacters: ["(", ","], retriggerCharacters: [","] }));
  signatureHelpProviders.push(vscode4.languages.registerSignatureHelpProvider("javascript", {
    provideSignatureHelp(document, position, token, context2) {
      if (!allSystemsGo(document))
        return;
      const line = document.lineAt(position.line).text;
      const match = line.match(/@\w+/);
      const label = match[0];
      const labelIndex = match.index;
      const signatureHelp = new vscode4.SignatureHelp();
      signatureHelp.signatures = metadataItems.find((item) => item.label === label).signatures;
      if (!signatureHelp.signatures.length)
        return;
      signatureHelp.activeSignature = 0;
      let parameterIndex = line.substring(label.length + labelIndex).replaceAll(/\s+/g, "|").split("|").length - 2;
      if (parameterIndex > signatureHelp.signatures[0].parameters.length - 1)
        return;
      signatureHelp.activeParameter = parameterIndex;
      return signatureHelp;
    }
  }, { triggerCharacters: [" "], retriggerCharacters: [" "] }));
  definitionProviders.push(vscode4.languages.registerDefinitionProvider("javascript", {
    provideDefinition(document, position, token) {
      const wordRange = document.getWordRangeAtPosition(position);
      const name = document.getText(wordRange);
      for (let line = 0; line < document.lineCount; line++) {
        const lineText = document.lineAt(line).text;
        if (lineText.includes(`function ${name}`)) {
          return new vscode4.Location(document.uri, new vscode4.Position(line, 0));
        }
      }
      return null;
    }
  }));
  typeDefinitionProviders.push(vscode4.languages.registerTypeDefinitionProvider("javascript", {
    async provideTypeDefinition(document, position, token) {
      const wordRange = document.getWordRangeAtPosition(position);
      const name = document.getText(wordRange);
      const predefinedFilePath = import_path2.default.join(__dirname, "@types", "tampermonkey.d.ts");
      const doc = await vscode4.workspace.openTextDocument(vscode4.Uri.file(predefinedFilePath));
      for (let line = 0; line < doc.lineCount; line++) {
        const lineText = doc.lineAt(line).text;
        if (lineText.includes(`function ${name}`)) {
          return new vscode4.Location(vscode4.Uri.file(predefinedFilePath), new vscode4.Position(line, 0));
        }
      }
      return null;
    }
  }));
  context.subscriptions.push(
    ...commandDisposables,
    ...configDisposables,
    ...hoverProviders,
    ...completionItemProviders,
    ...signatureHelpProviders,
    ...definitionProviders,
    ...typeDefinitionProviders
  );
}
function deactivate() {
  vscode4.window.showInformationMessage('Your extension "Monkey Wrench" is now deactivated!');
}
var commandDisposables = [];
var configDisposables = [];
var hoverProviders = [];
var completionItemProviders = [];
var signatureHelpProviders = [];
var definitionProviders = [];
var typeDefinitionProviders = [];
var config2 = vscode4.workspace.getConfiguration("monkey-wrench");
var allSystemsGo = (document) => {
  const activationCondition = config2.get("activationCondition");
  const fileExtensionCheckPassed = (() => {
    const activeFileExtensions = activationCondition.fileExtensions;
    if (!activeFileExtensions.length)
      return true;
    const fileExt = document.fileName.split(".").filter(Boolean).toSpliced(0, 1, "").join(".");
    return activeFileExtensions.includes(fileExt);
  })();
  const userscriptHeaderCheckPassed = (() => {
    if (!activationCondition.userscriptHeader)
      return true;
    return /\/\/\s==UserScript==/.test(document.lineAt(0).text.trim());
  })();
  return fileExtensionCheckPassed && userscriptHeaderCheckPassed;
};
var ApiCompletionItemProvider = {
  provideCompletionItems(document, position, token, context) {
    if (!allSystemsGo(document))
      return;
    let wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange)
      return;
    const word = document.getText(wordRange);
    return apiItems.filter((item) => item.label.startsWith(word) && item.completions.length).map((item) => item.completions).flat().filter((x) => x.kind === vscode4.CompletionItemKind.Function || vscode4.CompletionItemKind.Variable);
  }
};
var MetadataCompletionItemProvider = {
  provideCompletionItems(document, position, token, context) {
    if (!allSystemsGo(document))
      return;
    let wordRange = document.getWordRangeAtPosition(position);
    if (!wordRange)
      return;
    const word = document.getText(wordRange);
    return metadataItems.filter((item) => item.label.startsWith(word) && item.completions.length).map((item) => item.completions).flat().filter((x) => x.kind === vscode4.CompletionItemKind.Field || x.kind === vscode4.CompletionItemKind.Snippet);
  }
};
var MetadataParametersCompletionItemProvider = {
  provideCompletionItems(document, position, token, context) {
    if (!allSystemsGo(document))
      return;
    const line = document.lineAt(position.line).text;
    if (line.startsWith("// @")) {
      const match = line.match(/@\w+/);
      let parameterIndex = line.substring(match[0].length + match.index).replaceAll(/\s+/g, "|").split("|").length - 2;
      if (parameterIndex > 0)
        return;
      return metadataItems.filter((item) => item.label.startsWith(match[0]) && item.completions.length).map((item) => item.completions).flat().filter((x) => x.kind === vscode4.CompletionItemKind.Value);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
