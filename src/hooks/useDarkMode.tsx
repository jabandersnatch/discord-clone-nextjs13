import { useEffect, useState } from "react";

interface useLocalStorageProps {
  key: string;
  initialValue: any;
}

const useLocalStorage = ({ key, initialValue }: useLocalStorageProps) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnable] = useLocalStorage({
    key: "darkMode",
    initialValue: false,
  });
  const isEnabled = typeof window !== "undefined" && enabled;

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnable];
};

export default useDarkMode;
