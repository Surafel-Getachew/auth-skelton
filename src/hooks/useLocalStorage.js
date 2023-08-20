import { useState, useEffect } from 'react';

const getLocalValue = (key, initialValue) => {
  //  handle SSR for Next JS applications b/c it
  // doesn't have window object
  if (typeof window === undefined) return initialValue;

  // if a value is already in store
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) return localValue;

  // initialValue is a function
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => getLocalValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
