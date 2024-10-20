/**
 * Simple utility functions for client-side use
 */
/**
 * Returns the current viewport size of the browser.
 * @returns {Object} The width and height of the viewport
 */
declare const getViewportSize: () => {
    width: number;
    height: number;
};
/**
 * Stores data in local storage.
 * @param {string} key The key for the data to be stored
 * @param {any} value The value of the data to be stored
 */
declare const setLocalStorage: (key: string, value: any) => void;
/**
 * Retrieves data from local storage.
 * @param {string} key The key of the data to be retrieved
 * @returns {any | null} The stored data or null
 */
declare const getLocalStorage: (key: string) => any | null;
/**
 * Gets the current page URL.
 * @returns {string} The current page URL
 */
declare const getCurrentURL: () => string;

export { getCurrentURL, getLocalStorage, getViewportSize, setLocalStorage };
