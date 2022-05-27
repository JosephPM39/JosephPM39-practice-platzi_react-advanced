import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const res = window.localStorage.getItem(key);
      return res !== null ? JSON.parse(res) : initialValue;
    } catch (e) {
      console.log(e);
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.log(e);
    }
  };

  return [value, setLocalStorage];
};
