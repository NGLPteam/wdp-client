import { useState } from "react";
import type { SetStateAction } from "react";

/**
 * Get and set local storage values
 */
type LocalStorageSetter<T> = (value: SetStateAction<T>) => void;

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, LocalStorageSetter<T>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: LocalStorageSetter<T> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
