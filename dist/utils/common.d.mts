/**
 * Common utility functions for both client and server use
 */
/**
 * Checks if a value is null or undefined.
 * @param {any} value The value to check
 * @returns {boolean} True if the value is null or undefined, false otherwise
 */
declare const isNullOrUndefined: (value: any) => boolean;
/**
 * Checks if a string is empty or consists only of whitespace.
 * @param {string} str The string to check
 * @returns {boolean} True if the string is empty or only whitespace, false otherwise
 */
declare const isEmptyString: (str: string) => boolean;
/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string
 * @returns {string} The string with its first letter capitalized
 */
declare const capitalizeFirstLetter: (str: string) => string;
/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns {number} A random integer between min and max
 */
declare const getRandomInt: (min: number, max: number) => number;
/**
 * Checks if an object is empty (has no own properties).
 * @param {object} obj The object to check
 * @returns {boolean} True if the object is empty, false otherwise
 */
declare const isEmptyObject: (obj: object) => boolean;
/**
 * Removes duplicate values from an array.
 * @param {any[]} arr The input array
 * @returns {any[]} A new array with duplicate values removed
 */
declare const removeDuplicates: <T>(arr: T[]) => T[];
/**
 * Formats a date object to a string (YYYY-MM-DD).
 * @param {Date} date The date to format
 * @returns {string} The formatted date string
 */
declare const formatDate: (date: Date) => string;
/**
 * Checks if a value is a valid number.
 * @param {any} value The value to check
 * @returns {boolean} True if the value is a valid number, false otherwise
 */
declare const isValidNumber: (value: any) => boolean;
/**
 * Truncates a string to a specified length and adds an ellipsis if truncated.
 * @param {string} str The input string
 * @param {number} maxLength The maximum length of the string
 * @returns {string} The truncated string
 */
declare const truncateString: (str: string, maxLength: number) => string;
/**
 * Converts a string to kebab-case.
 * @param {string} str The input string
 * @returns {string} The kebab-cased string
 */
declare const toKebabCase: (str: string) => string;

export { capitalizeFirstLetter, formatDate, getRandomInt, isEmptyObject, isEmptyString, isNullOrUndefined, isValidNumber, removeDuplicates, toKebabCase, truncateString };
