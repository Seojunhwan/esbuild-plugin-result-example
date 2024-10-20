/**
 * Common utility functions for both client and server use
 */

/**
 * Checks if a value is null or undefined.
 * @param {any} value The value to check
 * @returns {boolean} True if the value is null or undefined, false otherwise
 */
export const isNullOrUndefined = (value: any): boolean => value === null || value === undefined;

/**
 * Checks if a string is empty or consists only of whitespace.
 * @param {string} str The string to check
 * @returns {boolean} True if the string is empty or only whitespace, false otherwise
 */
export const isEmptyString = (str: string): boolean => str.trim().length === 0;

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string
 * @returns {string} The string with its first letter capitalized
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (isEmptyString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns {number} A random integer between min and max
 */
export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Checks if an object is empty (has no own properties).
 * @param {object} obj The object to check
 * @returns {boolean} True if the object is empty, false otherwise
 */
export const isEmptyObject = (obj: object): boolean => Object.keys(obj).length === 0;

/**
 * Removes duplicate values from an array.
 * @param {any[]} arr The input array
 * @returns {any[]} A new array with duplicate values removed
 */
export const removeDuplicates = <T>(arr: T[]): T[] => [...new Set(arr)];

/**
 * Formats a date object to a string (YYYY-MM-DD).
 * @param {Date} date The date to format
 * @returns {string} The formatted date string
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Checks if a value is a valid number.
 * @param {any} value The value to check
 * @returns {boolean} True if the value is a valid number, false otherwise
 */
export const isValidNumber = (value: any): boolean => {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
};

/**
 * Truncates a string to a specified length and adds an ellipsis if truncated.
 * @param {string} str The input string
 * @param {number} maxLength The maximum length of the string
 * @returns {string} The truncated string
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

/**
 * Converts a string to kebab-case.
 * @param {string} str The input string
 * @returns {string} The kebab-cased string
 */
export const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};
