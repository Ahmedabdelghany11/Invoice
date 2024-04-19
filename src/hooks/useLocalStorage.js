import { useEffect, useState } from "react"

// a custom hook to reuse the localstorage with just the key and handle the changed value with a function just as useState hook
function useLocalStorage(initialState, key) {
  // check the localstorage with the passed key if there is a value get it, if not assign the passed intialState
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  
  // used the useEffect hook to track every change in the value corresponding to the key and change it at the localstorage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value))
    },
    [value, key]
  );

  // return them in [] as useState to make it possible to name them as what I want where I use
  return [value, setValue];
}

export default useLocalStorage;