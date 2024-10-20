'use client';

/**
 * Simple utility functions for client-side use
 */

/**
 * Returns the current viewport size of the browser.
 * @returns {Object} The width and height of the viewport
 */
export const getViewportSize = (): { width: number; height: number } => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

/**
 * Stores data in local storage.
 * @param {string} key The key for the data to be stored
 * @param {any} value The value of the data to be stored
 */
export const setLocalStorage = (key: string, value: any): void => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error occurred while storing data in local storage:', error);
  }
};

/**
 * Retrieves data from local storage.
 * @param {string} key The key of the data to be retrieved
 * @returns {any | null} The stored data or null
 */
export const getLocalStorage = (key: string): any | null => {
  if (typeof window === 'undefined') return null;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error occurred while retrieving data from local storage:', error);
    return null;
  }
};

/**
 * Gets the current page URL.
 * @returns {string} The current page URL
 */
export const getCurrentURL = (): string => {
  if (typeof window === 'undefined') return '';
  return window.location.href;
};

