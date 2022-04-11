import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue, storageKey) => {
  const getValue = () => {
    // getting value by key from storage
    const storage = localStorage.getItem(storageKey); // string || null

    // if value is present, parse it and get array(object)
    if (storage) {
      return JSON.parse(storage); // '[]'
    }

    // if value from storage is null, use value from params
    return initialValue;
  };

  const [value, setValue] = useState(getValue); // value either from localstorage or params

  // if value(1st param) will be changed from another component, set new value to local storage(this use eff. tracks changes)
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
