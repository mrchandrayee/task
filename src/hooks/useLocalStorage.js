import { useState, useEffect } from "react";

// Keeps a piece of state in sync with localStorage.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage might be full or blocked, ignore
    }
  }, [key, value]);

  return [value, setValue];
}
