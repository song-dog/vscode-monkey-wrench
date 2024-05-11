declare const unsafeWindow: Window;

type ElementAttributes = {
  [key: string]: string | boolean | number;
};

declare function GM_addElement(parentNode: HTMLElement, tagName: string, attributes: ElementAttributes): HTMLElement;

declare function GM_addElement(tagName: string, attributes: ElementAttributes): HTMLElement;

declare function GM_addStyle(css: string): HTMLStyleElement;

type DownloadError = {
  error: string;
  details: string;
};

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
};

type DownloadResponse = {
  abort: () => void;
};

declare function GM_download(details: DownloadDetails): DownloadResponse;

declare function GM_download(url: string, name: string): DownloadResponse;

declare function GM_getResourceText(name: string): string;

declare function GM_getResourceURL(name: string): string;

enum SandboxMode {
  JS = "js",
  Raw = "raw",
  DOM = "dom"
}

type WebRequestRule = {
  selector: WebRequestRule.Selector | string;
  action: WebRequestRule.Action | string;
};

namespace WebRequestRule {
  type Selector = {
    include?: string | string[];
    match?: string | string[];
    exclude?: string | string[];
  };

  type Redirect = {
    url: string;
    from?: string;
    to?: string;
  };

  type Action = {
    cancel?: boolean;
    redirect?: Redirect | string;
  };
}

type Script = {
  antifeatures: { [antifeature: string]: { [locale: string]: string } };
  author: string | null;
  blockers: string[];
  connects: string[];
  copyright: string | null;
  deleted?: number;
  description_i18n: { [locale: string]: string };
  description: string;
  downloadURL: string | null;
  excludes: string[];
  fileURL: string | null;
  grant: string[];
  header: string | null;
  homepage: string | null;
  icon: string | null;
  icon64: string | null;
  includes: string[];
  lastModified: number;
  matches: string[];
  name_i18n: { [locale: string]: string };
  name: string;
  namespace: string | null;
  options: Script.Options;
  position: number;
  resources: Script.Resource[];
  'run-at': string | null;
  supportURL: string | null;
  system?: boolean;
  unwrap: boolean | null;
  updateURL: string | null;
  version: string;
  webRequest: WebRequestRule[] | null;
};

declare namespace Script {
  type Resource = {
    name: string;
    url: string;
    error?: string;
    content?: string;
    meta?: string;
  };

  type Override = {
    use_includes: string[];
    orig_includes: string[];
    merge_includes: boolean;
    use_matches: string[];
    orig_matches: string[];
    merge_matches: boolean;
    use_excludes: string[];
    orig_excludes: string[];
    merge_excludes: boolean;
    use_connects: string[];
    orig_connects: string[];
    merge_connects: boolean;
    use_blockers: string[];
    orig_run_at: string | null;
    orig_noframes: boolean | null;
  };
  
  type Options = {
    check_for_updates: boolean;
    user_modified: number;
    comment: string | null;
    compatopts_for_requires: boolean;
    compat_wrappedjsobject: boolean;
    compat_metadata: boolean;
    compat_foreach: boolean;
    compat_powerful_this: boolean | null;
    sandbox: string | null;
    noframes: boolean | null;
    unwrap: boolean | null;
    run_at: string | null;
    tab_types: string | null;
    override: Override;
  };
}

type UserAgentData = {
  brands: UserAgentData.Brand[];
  mobile: boolean;
  platform: string;
  bitness: string;
  architecture: string;
};

declare namespace UserAgentData {
  type Brand = {
    brand: string;
    version: string;
  };
}

type GM_info = {
  downloadMode: string;
  isIncognito: boolean;
  relaxedCsp: string;
  sandboxMode: SandboxMode;
  script: Script;
  scriptHandler: string;
  scriptMetaStr: string | null;
  scriptUpdateURL: string | null;
  scriptWillUpdate: boolean;
  userAgentData: UserAgentData;
  version?: string;
};

declare function GM_log(message: any): void;

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
};

declare function GM_notification(details: NotificationDetails): void;

declare function GM_notification(text: string, title?: string, image?: string, onclick?: () => void): void;

type OpenInTabOptions = {
  active: boolean;
  insert: boolean;
  setParent: boolean;
  incognito: boolean;
  loadInBackground: boolean;
};

type OpenInTabResponse = {
  close: () => void;
  closed: boolean;
  name: string | void;
  onclose: () => void;
};

declare function GM_openInTab(url: string, options?: OpenInTabOptions): OpenInTabResponse;

declare function GM_openInTab(url: string, loadInBackground: boolean): OpenInTabResponse;

type RegisterMenuCommandOptions = {
  id?: string | number;
  accessKey?: string;
  autoClose?: boolean;
  title?: string;
};

declare function GM_registerMenuCommand(name: string, callback: () => void, options?: RegisterMenuCommandOptions): string | number;

declare function GM_registerMenuCommand(name: string, callback: () => void, accessKey?: string): string | number;

declare function GM_unregisterMenuCommand(id: string | number): void;

type ClipboardInfo = {
  type: string;
  mimetype: string;
};

declare function GM_setClipboard(data: string, info?: string | ClipboardInfo, callback?: () => void): void;

type Tab = {
  [key: string]: any;
};

type Tabs = {
  [tab: string]: Tab;
}

declare function GM_getTab(callback: (tab: Tab) => void): void;

declare function GM_saveTab(tab: Tab, callback?: () => void): void;

declare function GM_getTabs(callback: (tabs: Tabs) => void): void;

declare function GM_setValue(key: string, value: any): void;

declare function GM_getValue(key: string, defaultValue?: any): any;

declare function GM_deleteValue(key: string): void;

declare function GM_listValues(): string[];

declare function GM_addValueChangeListener(key: string, callback: (key: string, oldValue: any, newValue: any, remote: boolean) => void): string;

declare function GM_removeValueChangeListener(id: number): void;

type XMLHttpRequestDetails = {
  method: XMLHttpRequestDetails.Method;
  url: string;
  headers: object;
  data?: any;
  redirect: XMLHttpRequestDetails.Redirect;
  cookie: any;
  binary: boolean;
  nocache: boolean;
  revalidate: boolean;
  timeout: number;
  context: string;
  responseType: XMLHttpRequestDetails.ResponseType;
  overrideMimeType: string;
  anonymous: boolean;
  fetch: boolean;
  user: string;
  password: string;
  onabort: (response: XMLHttpRequestDetails.XMLHttpResponse) => void;
  onerror: (response: XMLHttpRequestDetails.XMLHttpResponse) => void;
  onloadstart: (response: XMLHttpRequestDetails.XMLHttpResponse) => void;
  onprogress: (response: XMLHttpRequestDetails.XMLHttpResponse) => void;
  onreadystatechange: (response: XMLHttpRequestDetails.XMLHttpResponse) => void;
  ontimeout: (response: XMLHttpRequestDetails.XMLHttpResponse) => void;
  onload: (response: XMLHttpRequestDetails.XMLHttpResponse) => void;
};

declare namespace XMLHttpRequestDetails {
  enum Method {
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST'
  }

  enum Redirect {
    Follow = 'follow',
    Error = 'error',
    Manual = 'manual'
  }

  enum ResponseType {
    ArrayBuffer = 'arraybuffer',
    Blob = 'blob',
    JSON = 'json',
    Stream = 'stream',
  }

  type XMLHttpResponse = {
    finalUrl: string;
    readyState: number;
    status: number;
    statusText: string;
    responseHeaders: string;
    response: any;
    responseXML: Document;
    responseText: string;
  };
}

declare function GM_xmlhttpRequest(details: XMLHttpRequestDetails): { abort: () => void };

enum WebRequestInfo {
  Cancel = 'cancel',
  Redirect = 'redirect'
}

enum WebRequestMessage {
  OK = 'ok',
  Error = 'error'
}

type WebRequestDetails = {
  rule: WebRequestRule;
  url: string;
  redirect_url: string;
  description: string;
};

declare function GM_webRequest(rules: WebRequestRule[], listener: (info: WebRequestInfo, message: WebRequestMessage, details: WebRequestDetails) => void): void;

type Cookie = {
  domain: string;
  firstPartyDomain?: string;
  hostOnly: boolean;
  httpOnly: boolean;
  name: string;
  path: string;
  sameSite: string;
  secure: boolean;
  session: boolean;
  value: string;
};

declare namespace GM_cookie {
  type ListDetails = {
    url?: string;
    domain?: string;
    name?: string;
    path?: string;
  };

  type SetDetails = {
    url?: string;
    name: string;
    value: string;
    domain?: string;
    firstPartyDomain?: string;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    expirationDate?: number;
  };

  type DeleteDetails = {
    url?: string;
    name?: string;
    firstPartyDomain?: string;
  };
}

type GM_cookie = {
  list(details: GM_cookie.ListDetails, callback: (cookies: Cookie[], error?: string) => void): void;

  set(details: GM_cookie.SetDetails, callback: (error?: string) => void): void;

  delete(details: GM_cookie.DeleteDetails, callback: (error?: string) => void): void;
};

declare global {
  interface Window {
    onurlchange: (this: Window, ev: CustomEvent) => any;
  }

  interface EventTarget {
    addEventListener(type: 'urlchange', listener: (this: Window, ev: CustomEvent) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: 'urlchange', listener: (this: Window, ev: CustomEvent) => any, options?: boolean | EventListenerOptions): void;
  }
}
