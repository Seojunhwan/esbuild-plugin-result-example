"use strict";
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

// src/utils/common.ts
var common_exports = {};
__export(common_exports, {
  capitalizeFirstLetter: () => capitalizeFirstLetter,
  formatDate: () => formatDate,
  getRandomInt: () => getRandomInt,
  isEmptyObject: () => isEmptyObject,
  isEmptyString: () => isEmptyString,
  isNullOrUndefined: () => isNullOrUndefined,
  isValidNumber: () => isValidNumber,
  removeDuplicates: () => removeDuplicates,
  toKebabCase: () => toKebabCase,
  truncateString: () => truncateString
});
module.exports = __toCommonJS(common_exports);
var isNullOrUndefined = (value) => value === null || value === void 0;
var isEmptyString = (str) => str.trim().length === 0;
var capitalizeFirstLetter = (str) => {
  if (isEmptyString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var isEmptyObject = (obj) => Object.keys(obj).length === 0;
var removeDuplicates = (arr) => [...new Set(arr)];
var formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
var isValidNumber = (value) => {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
};
var truncateString = (str, maxLength) => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
};
var toKebabCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  capitalizeFirstLetter,
  formatDate,
  getRandomInt,
  isEmptyObject,
  isEmptyString,
  isNullOrUndefined,
  isValidNumber,
  removeDuplicates,
  toKebabCase,
  truncateString
});
