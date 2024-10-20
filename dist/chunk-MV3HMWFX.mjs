'use client';

import {
  require_jsx_runtime,
  require_react
} from "./chunk-2V3SZO2T.mjs";
import {
  __spreadValues,
  __toESM
} from "./chunk-QGJJX2GH.mjs";

// src/components/button.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function Button(props) {
  const [someState, setSomeState] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", __spreadValues({}, props));
}

export {
  Button
};
