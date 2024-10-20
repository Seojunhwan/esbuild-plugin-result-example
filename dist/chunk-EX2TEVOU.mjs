// src/utils/common.ts
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

export {
  isNullOrUndefined,
  isEmptyString,
  capitalizeFirstLetter,
  getRandomInt,
  isEmptyObject,
  removeDuplicates,
  formatDate,
  isValidNumber,
  truncateString,
  toKebabCase
};
