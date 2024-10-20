'use client';

"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/client-utils.ts
var client_utils_exports = {};
__export(client_utils_exports, {
  getCurrentURL: () => getCurrentURL,
  getLocalStorage: () => getLocalStorage,
  getViewportSize: () => getViewportSize,
  setLocalStorage: () => setLocalStorage
});
module.exports = __toCommonJS(client_utils_exports);
var getViewportSize = () => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};
var setLocalStorage = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error occurred while storing data in local storage:", error);
  }
};
var getLocalStorage = (key) => {
  if (typeof window === "undefined") return null;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error occurred while retrieving data from local storage:", error);
    return null;
  }
};
var getCurrentURL = () => {
  if (typeof window === "undefined") return "";
  return window.location.href;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentURL,
  getLocalStorage,
  getViewportSize,
  setLocalStorage
});
