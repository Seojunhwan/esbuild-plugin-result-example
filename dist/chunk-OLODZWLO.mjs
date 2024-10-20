'use client';

// src/utils/client-utils.ts
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

export {
  getViewportSize,
  setLocalStorage,
  getLocalStorage,
  getCurrentURL
};
