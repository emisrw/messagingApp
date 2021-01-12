import { useEffect, useState } from "react";

const PREFIX = "message-app-clone-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  //undefined
  console.log(initialValue);

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      // zawsze kurła undefined
      return initialValue();
    } else {
      //undefined a jednak ma poprawny value
      console.log(initialValue);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
