var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/zeyah.tsx
var zeyah_exports = {};
__export(zeyah_exports, {
  NullishFilter: () => NullishFilter,
  Platform: () => Platform,
  ZeyahElement: () => ZeyahElement2,
  ZeyahFiber: () => ZeyahFiber,
  ZeyahFragment: () => ZeyahFragment,
  createZeyahTree: () => createZeyahTree,
  ensureArrayChildren: () => ensureArrayChildren2,
  renderZeyahTree: () => renderZeyahTree
});

// src/components.tsx
import { applyFonts, UNIRedux } from "@nea-liane/styler";

// src/jsx-runtime.ts
function jsx(type, props, _key) {
  return jsxs(type, props, _key);
}
function jsxs(type, props, _key) {
  return createElement(type, props, _key);
}
var Fragment = ZeyahFragment;

// src/components.tsx
var Break = ({}) => {
  return "\n";
};
Break.displayName = "Break";
var Bold = ({ childrenString }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: applyFonts(childrenString, "bold") }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: `**${escapeDiscordMarkdown(childrenString)}**` })
  ] });
};
Bold.displayName = "Bold";
var Italic = ({ childrenString }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: applyFonts(childrenString, "fancy_italic") }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: `*${escapeDiscordMarkdown(childrenString)}*` })
  ] });
};
Italic.displayName = "Italic";
var UniFont = ({
  type,
  childrenString
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: applyFonts(childrenString, type) }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: escapeDiscordMarkdown(childrenString) }),
    " "
  ] });
};
var Code = ({ childrenString }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: applyFonts(childrenString, "widespace") }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: `\`${escapeDiscordMarkdown(childrenString)}\`` })
  ] });
};
Code.displayName = "Code";
var CodeBlock = ({
  lang = "",
  childrenString
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Platform, { type: "facebook", children: [
      "Language: ",
      lang,
      /* @__PURE__ */ jsx(Break, {}),
      applyFonts(childrenString, "widespace")
    ] }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: `\`\`\`${lang}
${escapeDiscordMarkdown(childrenString)}
\`\`\`` })
  ] });
};
CodeBlock.displayName = "CodeBlock";
var Quote = ({ childrenString }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: applyFonts(childrenString, "fancy_italic") }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: escapeDiscordMarkdown(childrenString).split("\n").map((line) => `> ${line}`).join("\n") })
  ] });
};
Quote.displayName = "Quote";
var Spoiler = ({ childrenString }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: childrenString }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: `||${escapeDiscordMarkdown(childrenString)}||` })
  ] });
};
Spoiler.displayName = "Spoiler";
var Text = ({
  childrenString,
  noEscape = false
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: applyFonts(childrenString, "fancy") }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: !noEscape ? escapeDiscordMarkdown(childrenString) : childrenString })
  ] });
};
function escapeDiscordMarkdown(str) {
  return str.replace(/([*_~`|>])/g, "\\$1");
}
var Repeated = ({
  times,
  childrenString
}) => {
  return childrenString.repeat(times);
};
var Heading = ({
  level = 1,
  childrenString
}) => {
  const fbFont = "bold";
  const discordPrefix = "#".repeat(level) + " ";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: applyFonts(childrenString, fbFont) }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: discordPrefix + escapeDiscordMarkdown(childrenString) })
  ] });
};
var Link = ({ url, childrenString }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: childrenString }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: `[${escapeDiscordMarkdown(childrenString)}](${url})` })
  ] });
};
var Line = ({}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Platform, { type: "facebook", children: UNIRedux.standardLine }),
  /* @__PURE__ */ jsx(Platform, { type: "discord", children: UNIRedux.standardLine })
] });
var Mention = ({
  discordID: id,
  fbName: name
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsxs(Platform, { type: "facebook", children: [
    "@",
    name ?? id
  ] }),
  /* @__PURE__ */ jsx(Platform, { type: "discord", children: `<@${id}>` })
] });
var List = ({
  ordered = false,
  prefix = "\u2022",
  start = 1,
  childrenData,
  platform,
  boldPrefix = false,
  indent = 0
}) => {
  let counter = start;
  const lines = childrenData.map((child) => {
    const isItem = child.fiber !== "string" && child.fiber.type.displayName === ListItem.displayName;
    const rendered = child.getRendered();
    if (isItem) {
      const ind = indent <= 0 ? "" : " ".repeat(Math.floor(indent));
      const line = ordered ? `${ind}${boldPrefix ? platform === "facebook" ? applyFonts(counter.toString(), "bold") : `**${counter}**` : counter}. ${rendered}` : `${ind}${platform === "discord" ? "-" : prefix} ${rendered}`;
      counter++;
      return line;
    } else {
      return rendered;
    }
  });
  const finalStr = lines.join("\n");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Platform, { type: "facebook", children: finalStr }),
    /* @__PURE__ */ jsx(Platform, { type: "discord", children: finalStr })
  ] });
};
var ListItem = ({ childrenString }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Platform, { type: "facebook", children: childrenString }),
  /* @__PURE__ */ jsx(Platform, { type: "discord", children: childrenString })
] });
ListItem.displayName = "ListItem";
var Indent = ({
  childrenString,
  level
}) => {
  return childrenString.split("\n").map((i) => `${" ".repeat(level)}${i}`).join("\n");
};
Indent.displayName = "Indent";
var CassFormat = ({
  childrenString,
  title,
  fbTitleFont: titleFont,
  fbContentFont: contentFont
}) => {
  titleFont ??= "bold";
  contentFont ??= "fancy";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Platform, { type: "facebook", children: [
      /* @__PURE__ */ jsx(UniFont, { type: titleFont, children: title }),
      /* @__PURE__ */ jsx(Break, {}),
      /* @__PURE__ */ jsx(Line, {}),
      /* @__PURE__ */ jsx(Break, {}),
      /* @__PURE__ */ jsx(UniFont, { type: contentFont, children: childrenString })
    ] }),
    /* @__PURE__ */ jsxs(Platform, { type: "discord", children: [
      /* @__PURE__ */ jsx(Bold, { children: title }),
      /* @__PURE__ */ jsx(Break, {}),
      /* @__PURE__ */ jsx(Line, {}),
      /* @__PURE__ */ jsx(Break, {}),
      /* @__PURE__ */ jsx(Text, { noEscape: true, children: childrenString })
    ] })
  ] });
};

// src/zeyah-jsx.tsx
var ZeyahIntrinsics;
((ZeyahIntrinsics2) => {
  ZeyahIntrinsics2.br = Break;
  ZeyahIntrinsics2.fragment = ZeyahFragment;
  ZeyahIntrinsics2.line = Line;
  ZeyahIntrinsics2.bold = Bold;
})(ZeyahIntrinsics || (ZeyahIntrinsics = {}));
var ZeyahJSX;
((ZeyahJSX2) => {
  ZeyahJSX2.a = "JSX";
  let b;
})(ZeyahJSX || (ZeyahJSX = {}));
function createElement(type, props, _key) {
  if (type === "" || type === void 0) {
    type = ZeyahFragment;
  }
  if (typeof type === "string") {
    const intrin = type in ZeyahIntrinsics ? ZeyahIntrinsics[type] : ZeyahIntrinsics.fragment;
    type = intrin;
  }
  props ??= {};
  if (props?.children) {
    if (Array.isArray(props.children) && props.children.some((c) => Array.isArray(c))) {
      props.children = props.children.flat();
    } else if (!Array.isArray(props.children)) {
      props.children = [props.children];
    }
  }
  const finalProps = {
    ...props,
    platform: props.platform ?? "unspecified",
    children: props.children
  };
  return new ZeyahElement2(type, finalProps, finalProps.children ?? []);
}

// src/zeyah.tsx
var ZeyahElement2 = class _ZeyahElement {
  props;
  type;
  children;
  refKey;
  constructor(type, props = {}, children) {
    this.type = type;
    this.props = props;
    this.children = children;
    delete this.props.children;
    this.refKey = _ZeyahElement.refKey;
  }
  static refKey = "ZeyahElement_7";
  static [Symbol.hasInstance](obj) {
    return obj && typeof obj === "object" && "type" in obj && "props" in obj && "children" in obj && obj.refKey === _ZeyahElement.refKey;
  }
  renderDiscord() {
    return this.toString("discord");
  }
  renderFacebook() {
    return this.toString("facebook");
  }
  toString(platform = "facebook") {
    return renderZeyahTree(this, platform);
  }
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return NaN;
    }
    return this.toString();
  }
};
var ZeyahFiber = class _ZeyahFiber {
  children = [];
  output = [];
  jsxElem;
  states;
  root;
  constructor(element, root) {
    this.jsxElem = element;
    this.states = /* @__PURE__ */ new Map();
    this.detectedParent = null;
    this.root = root === "self-root" ? this : root ?? null;
    if (!this.root) {
      throw new Error("missing root!!");
    }
    this.collectChildren();
  }
  get type() {
    return this.jsxElem.type ?? ZeyahFragment;
  }
  get props() {
    return this.jsxElem.props;
  }
  static collectChildren(initChildren, root) {
    if (initChildren == null) return [];
    const source = Array.isArray(initChildren) ? initChildren : [initChildren];
    const result = [];
    for (const child of source) {
      if (child == null) continue;
      if (child instanceof ZeyahElement2) {
        result.push(new _ZeyahFiber(child, root));
        continue;
      }
      if (typeof child === "string") {
        result.push(child);
        continue;
      }
      if (typeof child === "number" || typeof child === "bigint") {
        result.push(String(child));
        continue;
      }
      if (typeof child === "boolean") {
        if (child) result.push("true");
        else result.push("false");
        continue;
      }
      if (typeof child === "object" && Symbol.iterator in child) {
        result.push(
          ..._ZeyahFiber.collectChildren(
            [...child],
            root
          )
        );
      }
    }
    return result;
  }
  static typeName(elem) {
    return elem.type?.displayName ?? elem.type?.name ?? "??";
  }
  collectChildren() {
    const res = _ZeyahFiber.collectChildren(this.jsxElem.children, this.root);
    this.children = res;
  }
  detectedParent;
  get rootState() {
    return this.root.states;
  }
  render(platform) {
    this.children.filter(NullishFilter).forEach((i) => {
      if (i instanceof _ZeyahFiber) {
        i.detectedParent = this;
      }
    });
    const childrenData = this.children.filter(NullishFilter).flatMap((c) => {
      const isString = typeof c === "string";
      let cache = null;
      const getRendered = () => {
        if (cache !== null) {
          return cache;
        }
        const res = isString ? c : c.render(platform).join("");
        cache = res;
        return res;
      };
      return {
        get rendered() {
          return getRendered();
        },
        getRendered,
        fiber: isString ? "string" : c
      };
    });
    let childrenString = null;
    const getChildrenString = () => {
      if (childrenString !== null) {
        return childrenString;
      }
      const res = childrenData.map((i) => i.getRendered()).join("");
      childrenString = res;
      return res;
    };
    const selfData = /* @__PURE__ */ (() => {
      const c = this;
      return {
        getRendered() {
          return "??";
        },
        rendered: "??",
        fiber: c
      };
    })();
    const propsWithChildren = {
      ...this.props,
      get childrenString() {
        return getChildrenString();
      },
      getChildrenString,
      platform,
      childrenData,
      selfData,
      rootFiber: this.root
    };
    const result = typeof this.type === "function" ? this.type(propsWithChildren) : null;
    const normalized = _ZeyahFiber.collectChildren(result, this.root);
    const finalOutput = normalized.flatMap(
      (item) => typeof item === "string" ? item : item.render(platform)
    );
    this.output = finalOutput;
    return finalOutput;
  }
  buildString() {
    return `<${this.type.displayName || this.type.name || "Unknown"}>${this.output.join("")}</${this.type.displayName || this.type.name || "Unknown"}>`;
  }
};
var ZeyahFragment = ({ childrenString }) => {
  return childrenString;
};
ZeyahFragment.displayName = "Fragment";
var Platform = ({
  type,
  platform,
  childrenString
}) => {
  if (type !== platform) return "";
  return childrenString;
};
Platform.displayName = "Platform";
function ensureArrayChildren2(children) {
  return Array.isArray(children) ? children : [children];
}
function createZeyahTree(node) {
  const frag = typeof node === "object" && "type" in node && node.type === ZeyahFragment ? node : createElement(
    ZeyahFragment,
    { children: node },
    null
  );
  const fiber = new ZeyahFiber(frag, "self-root");
  return fiber;
}
function renderZeyahTree(nodeOrFiber, platform) {
  const fiber = nodeOrFiber instanceof ZeyahFiber ? nodeOrFiber : createZeyahTree(nodeOrFiber);
  return fiber.render(platform).join("");
}
function NullishFilter(i) {
  return i !== null && i !== void 0;
}

// src/index.ts
var index_default = zeyah_exports;
export {
  Bold,
  Break,
  CassFormat,
  Code,
  CodeBlock,
  Heading,
  Indent,
  Italic,
  Line,
  Link,
  List,
  ListItem,
  Mention,
  NullishFilter,
  Platform,
  Quote,
  Repeated,
  Spoiler,
  Text,
  UniFont,
  zeyah_exports as Zeyah,
  ZeyahElement2 as ZeyahElement,
  ZeyahFiber,
  ZeyahFragment,
  ZeyahJSX,
  createElement,
  createZeyahTree,
  index_default as default,
  ensureArrayChildren2 as ensureArrayChildren,
  escapeDiscordMarkdown,
  renderZeyahTree
};
//# sourceMappingURL=index.js.map